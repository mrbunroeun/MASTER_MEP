<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
        'title',
        'category',
        'activity_date',
        'excerpt',
        'content',
        'image',
        'gallery_images',
        'is_active',
    ];

    protected $casts = [
        'activity_date'  => 'date',
        'is_active'      => 'boolean',
        'gallery_images' => 'array',
    ];
}