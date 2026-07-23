<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (!Schema::hasColumn('projects', 'scope')) {
                $table->text('scope')->nullable()->after('description');
            }
            if (!Schema::hasColumn('projects', 'timeline')) {
                $table->string('timeline')->nullable()->after('location');
            }
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (Schema::hasColumn('projects', 'scope')) {
                $table->dropColumn('scope');
            }
            if (Schema::hasColumn('projects', 'timeline')) {
                $table->dropColumn('timeline');
            }
        });
    }
};