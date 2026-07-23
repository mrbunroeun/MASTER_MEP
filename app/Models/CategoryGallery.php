<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryGallery extends Model
{
    protected $fillable = ['category', 'images'];

    protected $casts = [
        'images' => 'array',
    ];
}