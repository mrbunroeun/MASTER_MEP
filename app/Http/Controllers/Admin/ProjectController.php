<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * GET /admin/project
     * List all projects for the admin panel.
     */
    public function index()
    {
        $projects = Project::with('service:id,type,title')
            ->orderBy('order')->orderByDesc('created_at')->get();

        return Inertia::render('Admin/Project/Index', [
            'projects' => $projects,
            'services' => Service::orderBy('title')->get(['id', 'type', 'title']),
        ]);
    }

    /**
     * GET /admin/project/create
     * Show the form to add a new project.
     */
    public function create()
    {
        return Inertia::render('Admin/Project/Create', [
            'services' => Service::orderBy('title')->get(['id', 'type', 'title']),
        ]);
    }

    /**
     * POST /admin/project/gallery/upload
     * Upload a single gallery image and return its stored path.
     */
    public function uploadGallery(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:5120',
        ]);

        $path = $request->file('image')->store('projects/gallery', 'public');

        return response()->json(['path' => $path]);
    }

    /**
     * Build the final gallery array (paths only) from the request,
     * handling three possible slot values:
     *   - a new uploaded file  -> store it, use the new path
     *   - the string "REMOVE"  -> slot cleared, becomes null
     *   - an existing string   -> unchanged, keep as-is
     */
    private function resolveGallery(Request $request): array
    {
        $resolved = [];

        // Iterate fixed slots 0–4 directly, since file uploads never appear
        // in $request->input('gallery') — only in $request->file('gallery.*') —
        // so looping over input() alone would silently skip file-only slots.
        for ($i = 0; $i < 5; $i++) {
            if ($request->hasFile("gallery.$i")) {
                $resolved[$i] = $request->file("gallery.$i")->store('projects/gallery', 'public');
                continue;
            }

            $value = $request->input("gallery.$i");

            if ($value === 'REMOVE' || $value === null || $value === '') {
                continue; // cleared or empty slot, drop it
            }

            $resolved[$i] = $value; // existing saved path, unchanged
        }

        return array_values($resolved);
    }

    /**
     * POST /admin/project
     * Save a new project.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'category'    => 'required|string',
            'description' => 'nullable|string',
            'scope'       => 'nullable|string',
            'location'    => 'nullable|string',
            'timeline'    => 'nullable|string',
            'order'       => 'nullable|integer',
            'is_active'   => 'nullable|boolean',
            'service_id'  => 'nullable|integer|exists:services,id',
            'image'       => 'required|image|max:50120',
            'gallery'     => 'nullable|array|max:5',
            'gallery.*'   => 'nullable',
        ]);

        unset($validated['image']); // handled separately below; raw UploadedFile must never hit fill/mass-assignment

        $newGallery = $this->resolveGallery($request);

        $imageErrors = [];
        if (!$request->hasFile('image')) {
            $imageErrors['image'] = 'Please upload a main image.';
        }
        if (count($newGallery) < 1) {
            $imageErrors['gallery'] = 'Please upload at least 1 gallery image.';
        }
        if (!empty($imageErrors)) {
            return back()->withErrors($imageErrors)->withInput();
        }

        $project = new Project($validated);

        if ($request->hasFile('image')) {
            $project->image = $request->file('image')->store('projects', 'public');
        }

        $project->gallery = $newGallery;
        $project->save();

        return redirect()->route('admin.project.index')->with('success', 'Project created.');
    }

    /**
     * GET /admin/project/{project}/edit
     * Show the form to edit an existing project.
     */
    public function edit(Project $project)
    {
        $project->load('service:id,type,title');

        return Inertia::render('Admin/Project/Edit', [
            'project'  => $project,
            'services' => Service::orderBy('title')->get(['id', 'type', 'title']),
        ]);
    }

    /**
     * PUT /admin/project/{project}
     * Update an existing project.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'category'    => 'required|string',
            'description' => 'nullable|string',
            'scope'       => 'nullable|string',
            'location'    => 'nullable|string',
            'timeline'    => 'nullable|string',
            'order'       => 'nullable|integer',
            'is_active'   => 'nullable|boolean',
            'service_id'  => 'nullable|integer|exists:services,id',
            'image'       => 'nullable|image|max:50120',
            'gallery'     => 'nullable|array|max:5',
            'gallery.*'   => 'nullable',
        ]);

        unset($validated['image']); // handled separately below; raw UploadedFile must never hit fill/mass-assignment

        // Main image must exist either already on the project or as a fresh upload right now
        $newGallery = $this->resolveGallery($request);

        $imageErrors = [];
        if (!$project->image && !$request->hasFile('image')) {
            $imageErrors['image'] = 'Please upload a main image.';
        }
        if (count($newGallery) < 1) {
            $imageErrors['gallery'] = 'Please upload at least 1 gallery image.';
        }
        if (!empty($imageErrors)) {
            return back()->withErrors($imageErrors)->withInput();
        }

        $oldGallery = $project->gallery ?? [];

        if ($request->hasFile('image')) {
            if ($project->image && Storage::disk('public')->exists($project->image)) {
                Storage::disk('public')->delete($project->image);
            }
            $project->image = $request->file('image')->store('projects', 'public');
        }

        foreach ($oldGallery as $path) {
            if ($path && !in_array($path, $newGallery)) {
                if (Storage::disk('public')->exists($path)) {
                    Storage::disk('public')->delete($path);
                }
            }
        }

        $project->fill($validated);
        $project->gallery = $newGallery;
        $project->save();

        return redirect()->route('admin.project.index')->with('success', 'Project updated.');
    }

    /**
     * DELETE /admin/project/{project}
     * Remove a project and its files.
     */
    public function destroy(Project $project)
    {
        if ($project->image && Storage::disk('public')->exists($project->image)) {
            Storage::disk('public')->delete($project->image);
        }

        foreach (($project->gallery ?? []) as $path) {
            if ($path && Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        $project->delete();

        return redirect()->route('admin.project.index')->with('success', 'Project deleted.');
    }
}
