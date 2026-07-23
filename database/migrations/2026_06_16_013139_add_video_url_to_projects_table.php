<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->text('scope')->nullable()->after('description');
            $table->string('timeline')->nullable()->after('location');
            $table->string('video_url')->nullable()->after('timeline');
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['scope', 'timeline', 'video_url']);
        });
    }
};