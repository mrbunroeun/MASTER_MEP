<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeatureProjectCard extends Model
{
    protected $fillable = [
        'title',
        'description',
        'location',
        'timeline',
        'image',
        'link',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active'  => 'boolean',
        'sort_order' => 'integer',
    ];
}
