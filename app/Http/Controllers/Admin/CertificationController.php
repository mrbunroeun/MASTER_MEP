<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CertificationController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Certification/Index', [
            'certifications' => Certification::orderBy('order')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Certification/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'     => 'nullable|string|max:255',
            'image'     => 'required|image|max:10240',
            'order'     => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $validated['image'] = $request->file('image')->store('certifications', 'public');

        Certification::create($validated);

        return redirect()->route('admin.certification.index')->with('success', 'Certification added.');
    }

    public function edit(Certification $certification)
    {
        return Inertia::render('Admin/Certification/Edit', [
            'certification' => $certification,
        ]);
    }

    public function update(Request $request, Certification $certification)
    {
        $validated = $request->validate([
            'title'     => 'nullable|string|max:255',
            'image'     => 'nullable|image|max:10240',
            'order'     => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            if ($certification->image && Storage::disk('public')->exists($certification->image)) {
                Storage::disk('public')->delete($certification->image);
            }
            $validated['image'] = $request->file('image')->store('certifications', 'public');
        } else {
            unset($validated['image']);
        }

        $certification->update($validated);

        return redirect()->route('admin.certification.index')->with('success', 'Certification updated.');
    }

    public function destroy(Certification $certification)
    {
        if ($certification->image && Storage::disk('public')->exists($certification->image)) {
            Storage::disk('public')->delete($certification->image);
        }
        $certification->delete();

        return redirect()->route('admin.certification.index')->with('success', 'Certification deleted.');
    }
}