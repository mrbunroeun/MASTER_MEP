<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Insight extends Model
{
    protected $fillable = [
    'title', 'slug', 'category', 'published_date', 'image',
    'introduction', 'cta_text', 'layout',
    'highlight_title', 'highlight_body', 'sections_title',
    'sections', 'is_active',
  ];

    protected $casts = [
        'sections'  => 'array',
        'is_active' => 'boolean',
    ];
}
;