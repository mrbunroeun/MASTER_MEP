<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Insight;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'navInsights' => Insight::where('is_active', true)
                ->latest('published_date')
                ->take(6)
                ->get(['title', 'slug'])
                ->map(fn ($i) => ['label' => $i->title, 'href' => "/insights/{$i->slug}"]),
        ];
    }
}