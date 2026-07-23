<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FeatureProjectCard;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FeatureProjectCardController extends Controller
{
    public function index()
    {
        $cards = FeatureProjectCard::orderBy('sort_order')
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('Admin/FeatureProjectCard/Index', [
            'cards' => $cards,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/FeatureProjectCard/Create', [
            'services' => $this->servicesForSelect(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'location'    => 'nullable|string|max:255',
            'timeline'    => 'nullable|string|max:255',
            'link'        => 'nullable|string|max:2048',
            'sort_order'  => 'nullable|integer',
            'is_active'   => 'nullable|boolean',
            'image'       => 'required|image|max:5120',
        ]);

        unset($validated['image']);

        $card = new FeatureProjectCard($validated);

        if ($request->hasFile('image')) {
            $card->image = $request->file('image')->store('feature-project-cards', 'public');
        }

        $card->save();

        return redirect()->route('admin.feature-project-card.index')
            ->with('success', 'Feature project card created.');
    }

    public function edit(FeatureProjectCard $featureProjectCard)
    {
        return Inertia::render('Admin/FeatureProjectCard/Edit', [
            'card'     => $featureProjectCard,
            'services' => $this->servicesForSelect(),
        ]);
    }

    public function update(Request $request, FeatureProjectCard $featureProjectCard)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'location'    => 'nullable|string|max:255',
            'timeline'    => 'nullable|string|max:255',
            'link'        => 'nullable|string|max:2048',
            'sort_order'  => 'nullable|integer',
            'is_active'   => 'nullable|boolean',
            'image'       => 'nullable|image|max:5120',
        ]);

        unset($validated['image']);

        if ($request->hasFile('image')) {
            if ($featureProjectCard->image && Storage::disk('public')->exists($featureProjectCard->image)) {
                Storage::disk('public')->delete($featureProjectCard->image);
            }
            $featureProjectCard->image = $request->file('image')->store('feature-project-cards', 'public');
        }

        $featureProjectCard->fill($validated);
        $featureProjectCard->save();

        return redirect()->route('admin.feature-project-card.index')
            ->with('success', 'Feature project card updated.');
    }

    public function destroy(FeatureProjectCard $featureProjectCard)
    {
        if ($featureProjectCard->image && Storage::disk('public')->exists($featureProjectCard->image)) {
            Storage::disk('public')->delete($featureProjectCard->image);
        }

        $featureProjectCard->delete();

        return redirect()->route('admin.feature-project-card.index')
            ->with('success', 'Feature project card deleted.');
    }

    private function servicesForSelect(): array
    {
        return Service::query()
            ->where('is_active', true)
            ->orderBy('title')
            ->get(['id', 'title', 'type'])
            ->map(fn ($s) => [
                'id'    => $s->id,
                'title' => $s->title,
                'type'  => $s->type,
                'url'   => '/services/' . $s->type,
            ])
            ->all();
    }
}
