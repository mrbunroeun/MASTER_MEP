<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('insights', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('category')->nullable();
            $table->date('published_date')->nullable();
            $table->string('image')->nullable();
            $table->text('introduction')->nullable();
            $table->string('cta_text')->nullable();
            $table->string('layout')->default('default');
            $table->string('highlight_title')->nullable();
            $table->text('highlight_body')->nullable();
            $table->string('sections_title')->nullable();
            $table->json('sections')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('insights');
    }
};