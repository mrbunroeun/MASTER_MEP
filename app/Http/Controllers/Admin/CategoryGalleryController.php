<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryGallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryGalleryController extends Controller
{
    private const CATEGORIES = [
        'Commercial Buildings',
        'Hospitals',
        'Banks',
        'Restaurants & Cafés',
        'Resort',
        'Condo/Villa',
        'Others',
    ];

    /**
     * Show all categories with their current 5 image slots, for the
     * admin "Category Galleries" page.
     */
    public function index()
    {
        $galleries = CategoryGallery::all()->keyBy('category');
        $data = collect(self::CATEGORIES)->map(function ($category) use ($galleries) {
            $gallery = $galleries->get($category);
            $slots = $gallery->images ?? [];
            $slots = array_pad(array_slice($slots, 0, 5), 5, null);
            return [
                'category' => $category,
                'images'   => array_map(
                    fn ($path) => $path ? '/storage/' . $path : null,
                    $slots
                ),
            ];
        });
        return Inertia::render('Admin/CategoryGallery/Index', [
            'galleries' => $data,
        ]);
    }

    public function update(Request $request, string $category)
    {
        $request->validate([
            'images.*' => 'nullable', // file OR the string "REMOVE"
        ]);

        // Load or create the gallery record for this category.
        // Adjust to however you actually store this (single row per
        // category with a JSON `images` column is assumed here).
        $gallery = CategoryGallery::firstOrCreate(['category' => $category]);
        $paths = $gallery->images ?? [null, null, null, null, null];

        foreach (range(0, 4) as $i) {
            $input = $request->file("images.$i");
            $removeFlag = $request->input("images.$i") === 'REMOVE';

            if ($removeFlag) {
                // delete the old file from disk, then clear the slot
                if (!empty($paths[$i]) && Storage::disk('public')->exists($paths[$i])) {
                    Storage::disk('public')->delete($paths[$i]);
                }
                $paths[$i] = null;
                continue;
            }

            if ($input) {
                // delete the old file first so we don't leave orphans
                if (!empty($paths[$i]) && Storage::disk('public')->exists($paths[$i])) {
                    Storage::disk('public')->delete($paths[$i]);
                }

                // IMPORTANT: let Laravel generate a unique filename.
                // Do NOT use storeAs() with a deterministic name like
                // "{$category}-{$i}.jpg" — that reuses the same URL on
                // every upload, which is what causes browsers to keep
                // showing the old cached image after a "new" upload.
                $paths[$i] = $input->store('category-galleries', 'public');
            }
        }

        $gallery->update(['images' => $paths]);

        return back()->with('success', 'Gallery updated.');
    }
}