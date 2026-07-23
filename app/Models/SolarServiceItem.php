<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class SolarServiceItem extends Model
{
    protected $table = 'solar_service_items';

    protected $fillable = [
        'title',
        'best_for',
        'how_it_works',
        'image',
        'card_color',
        'image_side',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function getImageUrlAttribute(): ?string
    {
        return $this->image ? Storage::url($this->image) : null;
    }

    public function benefits()
    {
        return $this->hasMany(SolarServiceBenefit::class, 'item_id')->orderBy('order');
    }
}
