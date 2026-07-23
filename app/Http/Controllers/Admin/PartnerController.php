<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PartnerController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Partner/Index', [
            'partners' => Partner::orderBy('order')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Partner/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'      => 'nullable|string|max:255',
            'logo'      => 'nullable|image|max:2048',
            'is_active' => 'boolean',
        ]);

        if (empty($validated['name'])) {
            $validated['name'] = 'Partner ' . (Partner::count() + 1);
        }

        if ($request->hasFile('logo')) {
            $validated['logo'] = $request->file('logo')->store('partners', 'public');
        }

        Partner::create($validated);
        return redirect()->route('admin.partner.index')->with('success', 'Partner created.');
    }

    public function edit(Partner $partner)
    {
        return Inertia::render('Admin/Partner/Edit', ['partner' => $partner]);
    }

    public function update(Request $request, Partner $partner)
    {
        $validated = $request->validate([
            'name'      => 'nullable|string|max:255',
            'logo'      => 'nullable|image|max:2048',
            'is_active' => 'boolean',
        ]);

        if (empty($validated['name'])) {
            $validated['name'] = $partner->name ?: 'Partner ' . $partner->id;
        }

        if ($request->hasFile('logo')) {
            if ($partner->logo && Storage::disk('public')->exists($partner->logo)) {
                Storage::disk('public')->delete($partner->logo);
            }
            $validated['logo'] = $request->file('logo')->store('partners', 'public');
        } else {
            unset($validated['logo']);
        }

        $partner->update($validated);
        return redirect()->route('admin.partner.index')->with('success', 'Partner updated.');
    }

    public function destroy(Partner $partner)
    {
        if ($partner->logo && Storage::disk('public')->exists($partner->logo)) {
            Storage::disk('public')->delete($partner->logo);
        }
        $partner->delete();
        return redirect()->route('admin.partner.index')->with('success', 'Partner deleted.');
    }
}