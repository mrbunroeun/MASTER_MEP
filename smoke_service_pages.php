<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Http\Request;
use App\Http\Controllers\ServiceController;
use App\Models\FeatureProjectCard;
use App\Models\Project;
use Illuminate\Support\Facades\Schema;
use Inertia\Response;

echo "=== Smoke test for service pages ===\n\n";

// Create a fake request and dispatch
$request = Request::create('/services/electrical', 'GET');
$controller = new ServiceController();

echo "1. Checking FeatureProjectCard model:\n";
echo "   table=" . (new FeatureProjectCard())->getTable() . "\n";
echo "   fillable=" . json_encode((new FeatureProjectCard())->getFillable()) . "\n\n";

echo "2. Checking Project model (untouched):\n";
echo "   table=" . (new Project())->getTable() . "\n";
echo "   fillable=" . json_encode((new Project())->getFillable()) . "\n\n";

echo "3. Testing ServiceController::show('electrical'):\n";
$response = $controller->show($request, 'electrical');
echo "   class=" . get_class($response) . "\n";
$ref = new ReflectionClass($response);
$prop = $ref->getProperty('component');
$prop->setAccessible(true);
echo "   component=" . $prop->getValue($response) . "\n";

$props = (function() {
    $r = new ReflectionClass($this);
    $p = $r->getProperty('props');
    $p->setAccessible(true);
    return $p->getValue($this);
})->call($response);
echo "   props passed: " . implode(', ', array_keys($props)) . "\n";
echo "   featureProjectCards count: " . count($props['featureProjectCards'] ?? []) . "\n";
echo "   projects count: " . count($props['projects'] ?? []) . "\n";
echo "   service null? " . (is_null($props['service'] ?? null) ? 'yes (no active electrical service row — this is normal)' : 'no') . "\n";

echo "\n4. Testing all 5 service types:\n";
foreach (['mechanical', 'electrical', 'plumbing', 'maintenance', 'solasystem'] as $t) {
    $r = $controller->show(Request::create("/services/{$t}"), $t);
    $rc = new ReflectionClass($r);
    $cp = $rc->getProperty('component');
    $cp->setAccessible(true);
    $p = (function() {
        $rc = new ReflectionClass($this);
        $pp = $rc->getProperty('props');
        $pp->setAccessible(true);
        return $pp->getValue($this);
    })->call($r);
    $fpc = count($p['featureProjectCards'] ?? []);
    $proj = count($p['projects'] ?? []);
    echo sprintf("   %-12s component=%-30s featureProjectCards=%d  projects=%d\n",
        $t, $cp->getValue($r), $fpc, $proj);
}
