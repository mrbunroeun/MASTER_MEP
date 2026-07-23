<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('feature_project_cards', function (Blueprint $table) {
            if (!Schema::hasColumn('feature_project_cards', 'location')) {
                $table->string('location')->nullable()->after('description');
            }
            if (!Schema::hasColumn('feature_project_cards', 'timeline')) {
                $table->string('timeline')->nullable()->after('location');
            }
        });
    }

    public function down(): void
    {
        Schema::table('feature_project_cards', function (Blueprint $table) {
            if (Schema::hasColumn('feature_project_cards', 'location')) {
                $table->dropColumn('location');
            }
            if (Schema::hasColumn('feature_project_cards', 'timeline')) {
                $table->dropColumn('timeline');
            }
        });
    }
};
