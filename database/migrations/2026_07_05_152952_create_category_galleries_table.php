<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('category_galleries', function (Blueprint $table) {
            $table->id();
            $table->string('category')->unique();
            $table->json('images')->nullable(); // up to 5 stored file paths
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('category_galleries');
    }
};