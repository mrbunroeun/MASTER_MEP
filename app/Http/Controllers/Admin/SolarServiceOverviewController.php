<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SolarServiceOverview;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SolarServiceOverviewController extends Controller
{
    private function current(): SolarServiceOverview
    {
        return SolarServiceOverview::firstOrCreate(
            ['id' => 1],
            [
                'title'       => 'Overview',
                'subtitle'    => 'Smart Solar Energy Solutions for Every Building',
                'description' => 'Master MEP Solution specializes in designing and installing customized solar photovoltaic (PV) systems that help reduce electricity costs while supporting sustainable energy goals. Whether you need an on-grid system for lower utility bills, an off-grid solution for remote locations, or a hybrid system with battery backup, our experienced engineers deliver reliable, efficient, and long-lasting solar installations.',
            ]
        );
    }

    public function index()
    {
        $overview = $this->current();
        return redirect()->route('admin.solar-service.overview.edit', ['overview' => $overview->id]);
    }

    public function create()
    {
        $overview = $this->current();
        return redirect()->route('admin.solar-service.overview.edit', ['overview' => $overview->id]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'subtitle'    => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $overview = $this->current();
        $overview->update($data);

        return redirect()
            ->route('admin.solar-service.overview.edit', ['overview' => $overview->id])
            ->with('success', 'Solar Service overview updated.');
    }

    public function edit(SolarServiceOverview $overview)
    {
        return Inertia::render('Admin/SolarService/Overview', [
            'overview' => $overview,
        ]);
    }

    public function update(Request $request, SolarServiceOverview $overview)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'subtitle'    => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $overview->update($data);

        return redirect()
            ->route('admin.solar-service.overview.edit', ['overview' => $overview->id])
            ->with('success', 'Solar Service overview updated.');
    }
}
