<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title', 'category', 'description', 'scope',
        'location', 'timeline',
        'image', 'gallery', 'is_active', 'order',
        'service_id',
    ];

    protected $casts = [
        'gallery'   => 'array',
        'is_active' => 'boolean',
        'order'     => 'integer',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}