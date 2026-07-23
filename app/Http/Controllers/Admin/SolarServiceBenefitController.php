<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SolarServiceBenefit;
use App\Models\SolarServiceItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SolarServiceBenefitController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/SolarService/Benefit/Index', [
            'benefits' => SolarServiceBenefit::with('item')
                ->orderBy('item_id')
                ->orderBy('order')
                ->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/SolarService/Benefit/Create', [
            'items' => SolarServiceItem::orderBy('order')->get(['id', 'title']),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'item_id'   => 'required|exists:solar_service_items,id',
            'title'     => 'required|string|max:255',
            'order'     => 'nullable|integer',
            'is_active' => 'sometimes|boolean',
        ]);

        $data['is_active'] = $request->boolean('is_active');
        $data['order']     = $data['order'] ?? 0;

        SolarServiceBenefit::create($data);

        return redirect()
            ->route('admin.solar-service.benefit.index')
            ->with('success', 'Benefit created.');
    }

    public function edit(SolarServiceBenefit $benefit)
    {
        return Inertia::render('Admin/SolarService/Benefit/Edit', [
            'benefit' => $benefit,
            'items'   => SolarServiceItem::orderBy('order')->get(['id', 'title']),
        ]);
    }

    public function update(Request $request, SolarServiceBenefit $benefit)
    {
        $data = $request->validate([
            'item_id'   => 'required|exists:solar_service_items,id',
            'title'     => 'required|string|max:255',
            'order'     => 'nullable|integer',
            'is_active' => 'sometimes|boolean',
        ]);

        $data['is_active'] = $request->boolean('is_active');
        $data['order']     = $data['order'] ?? 0;

        $benefit->update($data);

        return redirect()
            ->route('admin.solar-service.benefit.index')
            ->with('success', 'Benefit updated.');
    }

    public function destroy(SolarServiceBenefit $benefit)
    {
        $benefit->delete();

        return redirect()
            ->route('admin.solar-service.benefit.index')
            ->with('success', 'Benefit deleted.');
    }
}
