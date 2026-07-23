<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SolarServiceItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SolarServiceItemController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/SolarService/Item/Index', [
            'items' => SolarServiceItem::orderBy('order')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/SolarService/Item/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'        => 'required|string|max:255',
            'best_for'     => 'nullable|string',
            'how_it_works' => 'nullable|string',
            'image'        => 'nullable|image|max:51200',
            'card_color'   => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            'image_side'   => 'nullable|in:left,right',
            'order'        => 'nullable|integer',
            'is_active'    => 'sometimes|boolean',
        ]);

        $data['is_active'] = $request->boolean('is_active');
        $data['order']     = $data['order'] ?? 0;
        if (($data['card_color'] ?? null) === '') {
            $data['card_color'] = null;
        }
        $data['image_side'] = $data['image_side'] ?? 'left';

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('services', 'public');
        }

        SolarServiceItem::create($data);

        return redirect()
            ->route('admin.solar-service.item.index')
            ->with('success', 'Solar Service item created.');
    }

    public function edit(SolarServiceItem $item)
    {
        return Inertia::render('Admin/SolarService/Item/Edit', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, SolarServiceItem $item)
    {
        $data = $request->validate([
            'title'        => 'required|string|max:255',
            'best_for'     => 'nullable|string',
            'how_it_works' => 'nullable|string',
            'image'        => 'nullable|image|max:51200',
            'card_color'   => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            'image_side'   => 'nullable|in:left,right',
            'order'        => 'nullable|integer',
            'is_active'    => 'sometimes|boolean',
        ]);

        $data['is_active'] = $request->boolean('is_active');
        $data['order']     = $data['order'] ?? 0;
        if (($data['card_color'] ?? null) === '') {
            $data['card_color'] = null;
        }
        $data['image_side'] = $data['image_side'] ?? 'left';

        if ($request->hasFile('image')) {
            if ($item->image && Storage::disk('public')->exists($item->image)) {
                Storage::disk('public')->delete($item->image);
            }
            $data['image'] = $request->file('image')->store('services', 'public');
        } else {
            unset($data['image']);
        }

        $item->update($data);

        return redirect()
            ->route('admin.solar-service.item.index')
            ->with('success', 'Solar Service item updated.');
    }

    public function destroy(SolarServiceItem $item)
    {
        if ($item->image && Storage::disk('public')->exists($item->image)) {
            Storage::disk('public')->delete($item->image);
        }

        $item->delete();

        return redirect()
            ->route('admin.solar-service.item.index')
            ->with('success', 'Solar Service item deleted.');
    }
}
