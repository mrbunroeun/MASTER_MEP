<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Insight;

class InsightController extends Controller
{
    public function index()
    {
        $insights = Insight::where('is_active', true)
            ->latest()
            ->get()
            ->map(fn ($item) => [
                'slug'         => $item->slug,
                'title'        => $item->title,
                'category'     => $item->category,
                'image'        => $item->image ? "/storage/{$item->image}" : null,
                'introduction' => $item->introduction,
            ]);

        return Inertia::render('Insgihts/Insights', ['insights' => $insights]);
    }

    public function show(string $slug)
    {
        $item = Insight::where('slug', $slug)->where('is_active', true)->firstOrFail();

        $sections = collect($item->sections ?? [])->map(function ($s) {
            $s['image'] = $s['image'] ?? null;
            return $s;
        })->all();

        $insight = [
            'slug'           => $item->slug,
            'title'          => $item->title,
            'category'       => $item->category,
            'image'          => $item->image ? "/storage/{$item->image}" : null,
            'introduction'   => $item->introduction,
            'cta_text'       => $item->cta_text,
            'layout'         => $item->layout,
            'sections_title' => $item->sections_title,
            'sections'       => $sections,
        ];

        if ($item->layout === 'dark' && $item->highlight_title) {
            $insight['highlight'] = [
                'title' => $item->highlight_title,
                'body'  => $item->highlight_body,
            ];
        }

        return Inertia::render('Insgihts/InsightDetail', ['insight' => $insight]);
    }
}