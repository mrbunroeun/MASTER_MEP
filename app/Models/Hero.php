<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
   protected $fillable = ['title', 'description', 'image', 'has_link', 'link_text', 'link_url'];

    protected $casts = [
        'has_link' => 'boolean',
    ];
}