<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SolarServiceOverview extends Model
{
    protected $table = 'solar_service_overview';

    protected $fillable = [
        'title',
        'subtitle',
        'description',
    ];
}
