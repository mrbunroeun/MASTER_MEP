<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\KeyHighlight;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KeyHighlightController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/KeyHighlight/Index', [
            'keyHighlights' => KeyHighlight::orderBy('order')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/KeyHighlight/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'number'    => 'required|string|max:10',
            'title'     => 'required|string|max:255',
            'type'      => 'required|string|in:general,mechanical,electrical,plumbing,hvac,maintenance',
            'order'     => 'integer',
            'is_active' => 'boolean',
        ]);
        KeyHighlight::create($validated);
        return redirect()->route('admin.key-highlight.index')->with('success', 'Key Highlight created.');
    }

    public function edit(KeyHighlight $keyHighlight)
    {
        return Inertia::render('Admin/KeyHighlight/Edit', [
            'keyHighlight' => $keyHighlight,
        ]);
    }

    public function update(Request $request, KeyHighlight $keyHighlight)
    {
        $validated = $request->validate([
            'number'    => 'required|string|max:10',
            'title'     => 'required|string|max:255',
            'type'      => 'required|string|in:general,mechanical,electrical,plumbing,hvac,maintenance',
            'order'     => 'integer',
            'is_active' => 'boolean',
        ]);
        $keyHighlight->update($validated);
        return redirect()->route('admin.key-highlight.index')->with('success', 'Key Highlight updated.');
    }

    public function destroy(KeyHighlight $keyHighlight)
    {
        $keyHighlight->delete();
        return redirect()->route('admin.key-highlight.index')->with('success', 'Key Highlight deleted.');
    }
}