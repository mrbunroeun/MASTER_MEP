<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('solar_service_items', function (Blueprint $table) {
            $table->string('card_color', 7)->nullable()->after('image');
        });
    }

    public function down(): void
    {
        Schema::table('solar_service_items', function (Blueprint $table) {
            $table->dropColumn('card_color');
        });
    }
};
