<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('heroes', function (Blueprint $table) {
            $table->boolean('has_link')->default(false)->after('image');
            $table->string('link_text')->nullable()->after('has_link');
            $table->string('link_url')->nullable()->after('link_text');
        });
    }

    public function down(): void
    {
        Schema::table('heroes', function (Blueprint $table) {
            $table->dropColumn(['has_link', 'link_text', 'link_url']);
        });
    }
};