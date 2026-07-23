<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'type', 'tagline', 'title', 'description', 'image',
        'button_text', 'button_link', 'benefits_title', 'benefits_points',
        'order', 'is_active', 'items',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'items'     => 'array',
    ];

    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}