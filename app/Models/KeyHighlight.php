<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class KeyHighlight extends Model
{
    protected $fillable = ['number', 'title', 'type', 'order', 'is_active'];
}