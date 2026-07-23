<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SolarServiceBenefit extends Model
{
    protected $table = 'solar_service_benefits';

    protected $fillable = [
        'item_id',
        'title',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function item()
    {
        return $this->belongsTo(SolarServiceItem::class, 'item_id');
    }
}
