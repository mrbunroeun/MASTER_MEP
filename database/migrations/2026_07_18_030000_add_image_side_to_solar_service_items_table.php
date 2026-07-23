<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('solar_service_items', function (Blueprint $table) {
            $table->string('image_side', 8)->nullable()->after('card_color');
        });

        // Backfill: keep the original index%2 alternation for existing rows
        // so the public page doesn't visually shift on deploy.
        $ids = DB::table('solar_service_items')->orderBy('order')->orderBy('id')->pluck('id')->all();
        foreach ($ids as $i => $id) {
            DB::table('solar_service_items')->where('id', $id)->update([
                'image_side' => $i % 2 === 0 ? 'left' : 'right',
            ]);
        }
    }

    public function down(): void
    {
        Schema::table('solar_service_items', function (Blueprint $table) {
            $table->dropColumn('image_side');
        });
    }
};
