<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Service/Index', [
            'services' => Service::orderBy('order')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Service/Create');
    }

    private function baseValidation(Request $request, ?Service $service = null): array
    {
        $uniqueRule = 'unique:services,type' . ($service ? ',' . $service->id : '');

        return $request->validate([
            'type'                => 'required|string|in:mechanical,electrical,plumbing,maintenance,solasystem|' . $uniqueRule,
            'tagline'             => 'nullable|string|max:255',
            'title'               => 'required|string|max:255',
            'description'         => 'nullable|string',
            'image'               => 'nullable|image|max:51200',
            'button_text'         => 'nullable|string|max:100',
            'order'               => 'nullable|integer',
            'is_active'           => 'sometimes|boolean',
            'items'               => 'nullable|array',
            'items.*.title'       => 'nullable|string|max:255',
            'items.*.subtitle'    => 'nullable|string|max:255',
            'items.*.description' => 'nullable|string',
            'items.*.points'      => 'nullable|string',
            'items.*.image'       => 'nullable|image|max:51200',
        ]);
    }

    /**
     * Process the incoming `items` array, storing any newly uploaded
     * item images and deleting the old file when an image is replaced.
     */
    private function processItems(Request $request, array $existingItems = []): array
    {
        $items = $request->input('items', []);

        foreach ($items as $i => $item) {
            $oldImage = $existingItems[$i]['image'] ?? null;

            if ($request->hasFile("items.$i.image")) {
                // A new image was uploaded for this item — store it, then
                // delete the previous file (if any) now that it's replaced.
                $items[$i]['image'] = $request->file("items.$i.image")->store('services/items', 'public');

                if ($oldImage) {
                    Storage::disk('public')->delete($oldImage);
                }
            } elseif ($oldImage) {
                // No new upload — keep the existing image reference.
                $items[$i]['image'] = $oldImage;
            }
        }

        // Any items that existed before but were removed from the form
        // (e.g. user deleted a row) should have their images cleaned up too.
        $newCount = count($items);
        foreach ($existingItems as $i => $old) {
            if ($i >= $newCount && ! empty($old['image'])) {
                Storage::disk('public')->delete($old['image']);
            }
        }

        return $items;
    }

    public function store(Request $request)
    {
        $data = $this->baseValidation($request);
        $data['is_active']   = $request->boolean('is_active');
        $data['order']       = $data['order'] ?? 0;
        $data['button_link'] = "/services/{$data['type']}";

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('services', 'public');
        }

        $data['items'] = $this->processItems($request);

        Service::create($data);

        return redirect()->route('admin.service.index')->with('success', 'Service created.');
    }

    public function edit(Service $service)
    {
        return Inertia::render('Admin/Service/Edit', ['item' => $service]);
    }

    public function update(Request $request, Service $service)
    {
        $data = $this->baseValidation($request, $service);
        $data['is_active']   = $request->boolean('is_active');
        $data['order']       = $data['order'] ?? 0;
        $data['button_link'] = "/services/{$data['type']}";

        if ($request->hasFile('image')) {
            if ($service->image && Storage::disk('public')->exists($service->image)) {
                Storage::disk('public')->delete($service->image);
            }
            $data['image'] = $request->file('image')->store('services', 'public');
        } else {
            unset($data['image']);
        }

        $existingItems = is_array($service->items) ? $service->items : [];
        $data['items'] = $this->processItems($request, $existingItems);

        $service->update($data);

        return redirect()->route('admin.service.index')->with('success', 'Service updated.');
    }

    public function destroy(Service $service)
    {
        if ($service->image && Storage::disk('public')->exists($service->image)) {
            Storage::disk('public')->delete($service->image);
        }

        // Clean up every item image too, not just the main hero image.
        if (is_array($service->items)) {
            foreach ($service->items as $item) {
                if (! empty($item['image']) && Storage::disk('public')->exists($item['image'])) {
                    Storage::disk('public')->delete($item['image']);
                }
            }
        }

        $service->delete();

        return redirect()->route('admin.service.index')->with('success', 'Service deleted.');
    }
}