<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class CtaBanner extends Model
{
    protected $fillable = ['title', 'description', 'button_text', 'button_link', 'image', 'is_active'];
}