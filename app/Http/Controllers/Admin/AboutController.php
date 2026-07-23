<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/About/Index', [
            'abouts' => About::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/About/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'video_url'   => [
                'nullable',
                'string',
                'max:500',
                'regex:/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}/',
            ],
            'is_active'   => 'boolean',
        ]);

        $validated['is_active'] = $request->boolean('is_active', true);
        $validated['video_url'] = $validated['video_url'] ?? null;

        About::create($validated);
        return redirect()->route('admin.about.index')->with('success', 'About created.');
    }

    public function edit(About $about)
    {
        return Inertia::render('Admin/About/Edit', ['about' => $about]);
    }

    public function update(Request $request, About $about)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'video_url'   => [
                'nullable',
                'string',
                'max:500',
                'regex:/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}/',
            ],
            'is_active'   => 'boolean',
        ]);

        $validated['is_active'] = $request->boolean('is_active', true);
        $validated['video_url'] = $validated['video_url'] ?? null;

        $about->update($validated);
        return redirect()->route('admin.about.index')->with('success', 'About updated.');
    }

    public function destroy(About $about)
    {
        $about->delete();
        return redirect()->route('admin.about.index')->with('success', 'About deleted.');
    }
}
