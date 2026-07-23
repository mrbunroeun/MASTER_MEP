<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('solar_service_benefits', function (Blueprint $table) {
            $table->foreignId('item_id')
                ->nullable()
                ->after('id')
                ->constrained('solar_service_items')
                ->cascadeOnDelete();
            $table->index('item_id');
        });
    }

    public function down(): void
    {
        Schema::table('solar_service_benefits', function (Blueprint $table) {
            $table->dropConstrainedForeignId('item_id');
        });
    }
};
