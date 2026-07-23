<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Project;
use App\Models\KeyHighlight;
use App\Models\SolarServiceOverview;
use App\Models\SolarServiceItem;
use App\Models\FeatureProjectCard;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ServiceController extends Controller
{
    /**
     * Map each service "type" (stored on the Service model) to the
     * Inertia page component that renders it.
     *
     * Adjust these component paths to match wherever your files actually
     * live under resources/js/Pages (e.g. "Electrical" if the file is
     * resources/js/Pages/Electrical.jsx, or "Services/Electrical" if it's
     * nested in a Services folder).
     */
    private const TYPE_COMPONENT_MAP = [
        'mechanical'  => 'Services/Mechanical',
        'electrical'  => 'Services/Electrical',
        'plumbing'    => 'Services/Plumbing',
        'maintenance' => 'Services/Maintenance',
        'solasystem'  => 'Services/SolaSystem',
    ];

    public function show(Request $request, string $type)
    {
        if (! array_key_exists($type, self::TYPE_COMPONENT_MAP)) {
            throw new NotFoundHttpException();
        }

        $service = Service::where('type', $type)
            ->where('is_active', true)
            ->first();

        // items are stored as a JSON array on the service itself
        // (see admin ServiceController::processItems) — each row already
        // has title / points / image, which is exactly what the page expects.
        $serviceItems = collect($service->items ?? [])
            ->map(function ($item, $index) {
                return array_merge($item, ['id' => $item['id'] ?? $index]);
            })
            ->values()
            ->all();

        $projects = Project::where('is_active', true)
            // If you add a column linking projects to a service type
            // (e.g. `service_type`), filter here instead of showing all:
            // ->where('service_type', $type)
            ->latest()
            ->get();

        $featureProjectCards = FeatureProjectCard::where('is_active', true)
            ->where('link', "/services/{$type}")
            ->orderBy('sort_order')
            ->orderByDesc('created_at')
            ->get();

        $keyHighlights = KeyHighlight::where('is_active', true)
            // Same idea — filter by type once/if you add that column:
            // ->where('type', $type)
            ->orderBy('order')
            ->get();

        $heroImage = heroImageFor("/services/{$type}");

        $solarOverview = null;
        $solarItems    = [];

        if ($type === 'solasystem') {
            $solarOverview = SolarServiceOverview::first();

            $solarItems = SolarServiceItem::where('is_active', true)
                ->orderBy('order')
                ->with(['benefits' => fn ($q) => $q->where('is_active', true)->orderBy('order')])
                ->get()
                ->map(fn ($i) => [
                    'id'           => $i->id,
                    'title'        => $i->title,
                    'best_for'     => $i->best_for,
                    'how_it_works' => $i->how_it_works,
                    'image'        => $i->image_url,
                    'card_color'   => $i->card_color,
                    'image_side'   => $i->image_side,
                    'benefits'     => $i->benefits->pluck('title')->all(),
                ])
                ->all();
        }

        return Inertia::render(self::TYPE_COMPONENT_MAP[$type], [
            'service'       => $service,
            'serviceItems'  => $serviceItems,
            'projects'      => $projects,
            'featureProjectCards' => $featureProjectCards,
            'keyHighlights' => $keyHighlights,
            'heroImage'     => $heroImage,
            'solarOverview' => $solarOverview,
            'solarItems'    => $solarItems,
        ]);
    }
}