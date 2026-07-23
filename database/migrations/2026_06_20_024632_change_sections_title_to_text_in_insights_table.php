<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('insights', function (Blueprint $table) {
            $table->text('sections_title')->nullable()->change();
            $table->text('cta_text')->nullable()->change();
            $table->text('highlight_title')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('insights', function (Blueprint $table) {
            $table->string('sections_title')->nullable()->change();
            $table->string('cta_text')->nullable()->change();
            $table->string('highlight_title')->nullable()->change();
        });
    }
};