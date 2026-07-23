<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\WhyChooseUs;

class WhyChooseUsSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
                    [
                'title'       => 'Dedicated After-Sales Support',
                'description' => 'We provide comprehensive maintenance packages and 24/7 emergency support to keep your systems running at peak performance.',
                'icon'        => 'Headphones',
                'sort_order'  => 6,
            ],
            [
                'title'       => 'End-to-End Solutions',
                'description' => 'From design and engineering to installation and commissioning, we manage every phase of your MEP project under one roof.',
                'icon'        => 'Layers',
                'sort_order'  => 2,
            ],
            [
                'title'       => 'On-Time Delivery',
                'description' => 'We follow strict project timelines and milestones, ensuring your building systems are ready when you need them — no delays, no surprises.',
                'icon'        => 'Clock',
                'sort_order'  => 3,
            ],
            [
                'title'       => 'Quality Assurance',
                'description' => 'Every installation is tested and verified against international standards (ASHRAE, IEC, BS) before handover.',
                'icon'        => 'ShieldCheck',
                'sort_order'  => 4,
            ],
            [
                'title'       => 'Local Expertise, Global Standards',
                'description' => 'Deep knowledge of Cambodia\'s construction landscape combined with globally benchmarked engineering practices.',
                'icon'        => 'Globe',
                'sort_order'  => 5,
            ],
            [
                'title'       => 'Dedicated After-Sales Support',
                'description' => 'We provide comprehensive maintenance packages and 24/7 emergency support to keep your systems running at peak performance.',
                'icon'        => 'Headphones',
                'sort_order'  => 6,
            ],
        ];

        foreach ($items as $item) {
            WhyChooseUs::create($item);
        }
    }
}