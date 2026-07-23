<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('solar_service_items')->whereRaw('LOWER(title) LIKE ?', ['%on-grid%'])->update(['card_color' => '#EAF3FC']);
        DB::table('solar_service_items')->whereRaw('LOWER(title) LIKE ?', ['%off-grid%'])->update(['card_color' => '#E8F5E9']);
        DB::table('solar_service_items')->whereRaw('LOWER(title) LIKE ?', ['%hybrid%'])->update(['card_color' => '#FFF3E0']);
    }

    public function down(): void
    {
        // No-op: we don't want to lose a color the admin may have customized since.
    }
};
