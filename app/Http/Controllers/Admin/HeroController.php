<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Hero;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
class HeroController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Hero/Index', [
            'heroes' => Hero::latest()->get(),
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Hero/Create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:51200',
            'has_link' => 'sometimes|boolean',
            'link_text' => 'nullable|required_if:has_link,1|string|max:100',
            'link_url' => ['nullable', 'required_if:has_link,1', 'max:500', 'regex:/^(https?:\/\/|\/)/i'],
        ]);
        $validated['has_link'] = $request->boolean('has_link');
        if (! $validated['has_link']) {
            $validated['link_text'] = null;
            $validated['link_url'] = null;
        }
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('hero', 'public');
        }
        Hero::create($validated);
        return redirect()->route('admin.hero.index')->with('success', 'Hero created successfully.');
    }
    public function edit(Hero $hero)
    {
        return Inertia::render('Admin/Hero/Edit', [
            'hero' => $hero,
        ]);
    }
    public function update(Request $request, Hero $hero)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:51200',
            'has_link' => 'sometimes|boolean',
            'link_text' => 'nullable|required_if:has_link,1|string|max:100',
            'link_url' => ['nullable', 'required_if:has_link,1', 'max:500', 'regex:/^(https?:\/\/|\/)/i'],
        ]);
        $validated['has_link'] = $request->boolean('has_link');
        if (! $validated['has_link']) {
            $validated['link_text'] = null;
            $validated['link_url'] = null;
        }
        if ($request->hasFile('image')) {
            if ($hero->image && Storage::disk('public')->exists($hero->image)) {
                Storage::disk('public')->delete($hero->image);
            }
            $validated['image'] = $request->file('image')->store('hero', 'public');
        } else {
            unset($validated['image']);
        }
        $hero->update($validated);
        return redirect()->route('admin.hero.index')->with('success', 'Hero updated successfully.');
    }
    public function destroy(Hero $hero)
    {
        if ($hero->image && Storage::disk('public')->exists($hero->image)) {
            Storage::disk('public')->delete($hero->image);
        }
        $hero->delete();
        return redirect()->route('admin.hero.index')->with('success', 'Hero deleted successfully.');
    }
}