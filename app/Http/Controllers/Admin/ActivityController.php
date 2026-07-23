<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ActivityController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Activity/Index', [
            'activities' => Activity::orderByDesc('activity_date')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Activity/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'            => 'required|string|max:255',
            'category'         => 'required|string|max:100',
            'activity_date'    => 'required|date',
            'excerpt'          => 'nullable|string',
            'content'          => 'nullable|string',
            'image'            => 'nullable|image|max:10240',
            'gallery_images.*' => 'nullable|image|max:10240',
            'is_active'        => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('activities', 'public');
        }

        $gallery = [];
        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $file) {
                $gallery[] = $file->store('activities/gallery', 'public');
            }
        }
        $validated['gallery_images'] = $gallery;

        Activity::create($validated);

        return redirect()->route('admin.activity.index')->with('success', 'Activity created.');
    }

    public function edit(Activity $activity)
    {
        return Inertia::render('Admin/Activity/Edit', [
            'activity' => $activity,
        ]);
    }

    public function update(Request $request, Activity $activity)
    {
        $validated = $request->validate([
            'title'            => 'required|string|max:255',
            'category'         => 'required|string|max:100',
            'activity_date'    => 'required|date',
            'excerpt'          => 'nullable|string',
            'content'          => 'nullable|string',
            'image'            => 'nullable|image|max:10240',
            'gallery_images.*' => 'nullable|image|max:10240',
            'is_active'        => 'boolean',
            'remove_gallery'   => 'nullable|array',
        ]);

        if ($request->hasFile('image')) {
            if ($activity->image && Storage::disk('public')->exists($activity->image)) {
                Storage::disk('public')->delete($activity->image);
            }
            $validated['image'] = $request->file('image')->store('activities', 'public');
        } else {
            unset($validated['image']);
        }

        $gallery = $activity->gallery_images ?? [];
        $existingGallery = $gallery;

        if ($request->filled('remove_gallery')) {
            foreach ($request->remove_gallery as $removePath) {
                // Only allow deletion of paths that actually belong to this activity.
                if (in_array($removePath, $existingGallery, true)) {
                    if (Storage::disk('public')->exists($removePath)) {
                        Storage::disk('public')->delete($removePath);
                    }
                    $gallery = array_values(array_diff($gallery, [$removePath]));
                }
            }
        }

        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $file) {
                $gallery[] = $file->store('activities/gallery', 'public');
            }
        }
        $validated['gallery_images'] = $gallery;

        $activity->update($validated);

        return redirect()->route('admin.activity.index')->with('success', 'Activity updated.');
    }

    public function destroy(Activity $activity)
    {
        if ($activity->image && Storage::disk('public')->exists($activity->image)) {
            Storage::disk('public')->delete($activity->image);
        }
        foreach ($activity->gallery_images ?? [] as $img) {
            if (Storage::disk('public')->exists($img)) {
                Storage::disk('public')->delete($img);
            }
        }
        $activity->delete();

        return redirect()->route('admin.activity.index')->with('success', 'Activity deleted.');
    }
}