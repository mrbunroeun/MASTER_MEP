<?php
$projects = App\Models\Project::select('id','title','category','is_active')->get();

foreach ($projects as $p) {
    echo $p->id . ' | ' . $p->title . ' | category: ' . $p->category . ' | active: ' . $p->is_active . PHP_EOL;
}
