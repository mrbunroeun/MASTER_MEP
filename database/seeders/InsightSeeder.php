<?php

namespace Database\Seeders;

use App\Models\Insight;
use Illuminate\Database\Seeder;

class InsightSeeder extends Seeder
{
    public function run(): void
    {
        $insights = [
            [
                'slug'         => 'hvac-system-installation',
                'title'        => 'HVAC System Installation Guide for Commercial Buildings in Cambodia',
                'category'     => 'HVAC',
                'introduction' => 'HVAC systems are essential for maintaining indoor comfort, ventilation, and energy efficiency in commercial buildings. Proper HVAC installation helps businesses improve operational performance, reduce energy consumption, and create a healthier indoor environment for employees and visitors.',
                'cta_text'     => 'Need professional HVAC installation for your commercial project in Cambodia?',
                'layout'       => 'default',
                'sections'     => [
                    ['title' => 'Choosing the Right HVAC System', 'body' => 'Commercial buildings may require different HVAC solutions depending on building size and operational needs. Common systems include VRV/VRF systems, split-type air conditioners, ventilation systems, chilled water systems, and AHU/FCU systems.', 'image' => null],
                    ['title' => 'Importance of Professional Installation', 'body' => 'Professional HVAC installation ensures proper system sizing, efficient airflow, stable cooling performance, and long-term operational reliability. Proper engineering design can also help reduce maintenance costs and improve energy efficiency.', 'image' => null],
                    ['title' => 'Long-Term Maintenance Support', 'body' => 'Regular preventive maintenance helps HVAC systems operate efficiently while reducing unexpected breakdowns and extending equipment lifespan.', 'image' => null],
                ],
            ],
            [
                'slug'         => 'why-mep-design-matters',
                'title'        => 'Why Proper MEP Design Matters for Construction Projects',
                'category'     => 'MEP Design',
                'introduction' => 'Proper MEP design is one of the most important factors in successful construction projects. Mechanical, electrical, and plumbing systems must work together efficiently to support building safety, functionality, and long-term performance.',
                'cta_text'     => 'Looking for professional MEP design services in Cambodia?',
                'layout'       => 'default',
                'sections'     => [
                    ['title' => 'Improving Project Coordination', 'body' => 'Well-planned MEP systems help reduce construction conflicts, improve workflow coordination, and minimize costly modifications during the construction phase.', 'image' => null],
                    ['title' => 'Energy Efficiency & Safety', 'body' => 'Professional MEP design helps optimize energy usage, improve system performance, and ensure compliance with engineering and safety standards.', 'image' => null],
                    ['title' => 'Supporting Long-Term Building Performance', 'body' => 'A properly designed MEP system can improve operational efficiency, simplify maintenance, and extend the lifespan of building systems.', 'image' => null],
                ],
            ],
            [
                'slug'         => 'benefits-of-preventive-mep',
                'title'        => 'Benefits of Preventive MEP Maintenance Services',
                'category'     => 'Maintenance',
                'introduction' => 'Preventive maintenance is essential for maintaining reliable building operations and reducing unexpected equipment failures. Regular inspections and servicing help improve system efficiency and long-term performance.',
                'cta_text'     => 'Need reliable preventive maintenance support for your building systems?',
                'layout'       => 'default',
                'sections'     => [
                    ['title' => 'Why Preventive Maintenance Matters', 'body' => 'Scheduled maintenance can help reduce breakdown risks, improve energy efficiency, extend equipment lifespan, and lower long-term repair costs for commercial buildings and facilities.', 'image' => null],
                    ['title' => 'Supporting Building Safety & Operations', 'body' => 'HVAC systems, electrical systems, plumbing systems, and ELV systems all require regular maintenance to maintain operational stability and safety.', 'image' => null],
                    ['title' => 'Long-Term Cost Savings', 'body' => 'Preventive maintenance helps businesses avoid major repairs and minimize downtime that could affect daily operations.', 'image' => null],
                ],
            ],
            [
                'slug'         => 'energy-efficient-air-conditioning',
                'title'        => 'Energy-Efficient Air Conditioning Solutions for Commercial Projects',
                'category'     => 'HVAC',
                'introduction' => 'Energy-efficient air conditioning systems help commercial buildings reduce electricity consumption, improve indoor comfort, and lower operational costs over the long term.',
                'cta_text'     => 'Looking for energy-efficient HVAC solutions in Cambodia?',
                'layout'       => 'default',
                'sections'     => [
                    ['title' => 'Choosing Energy-Efficient HVAC Systems', 'body' => 'VRV/VRF systems, inverter air conditioners, and properly designed ventilation systems can significantly improve cooling efficiency for offices, retail stores, restaurants, and commercial buildings.', 'image' => null],
                    ['title' => 'Proper HVAC Design Matters', 'body' => 'Correct system sizing, ducting design, airflow planning, and maintenance scheduling all contribute to better HVAC performance and lower energy usage.', 'image' => null],
                    ['title' => 'Long-Term Operational Benefits', 'body' => 'Energy-efficient systems can help businesses reduce utility costs while improving equipment lifespan and overall building performance.', 'image' => null],
                ],
            ],
            [
                'slug'         => 'plumbing-design',
                'title'        => 'Plumbing Design Best Practices for Modern Buildings',
                'category'     => 'Plumbing',
                'introduction' => 'Professional plumbing design is essential for maintaining reliable water supply, proper drainage, hygiene, and operational safety in modern buildings.',
                'cta_text'     => 'Need professional plumbing design and installation services in Cambodia?',
                'layout'       => 'default',
                'sections'     => [
                    ['title' => 'Key Plumbing System Components', 'body' => 'Modern plumbing systems typically include water supply systems, drainage systems, sewage systems, stormwater systems, water tanks, and water pump systems.', 'image' => null],
                    ['title' => 'Reducing Long-Term Problems', 'body' => 'Well-designed plumbing systems help minimize water leakage risks, improve water pressure stability, and reduce long-term maintenance issues.', 'image' => null],
                    ['title' => 'Importance of Professional Engineering', 'body' => 'Proper pipe sizing, material selection, system layout, and pressure testing all contribute to long-term plumbing system performance and durability.', 'image' => null],
                ],
            ],
            [
                'slug'         => 'how-to-choose-mep',
                'title'        => 'How to Choose an MEP Contractor in Cambodia',
                'category'     => 'MEP Design',
                'introduction' => 'Choosing the right MEP contractor is important for ensuring project quality, safety, efficiency, and long-term building performance.',
                'cta_text'     => 'Looking for a trusted MEP contractor in Cambodia?',
                'layout'       => 'dark',
                'sections_title' => 'Important Factors to Consider',
                'highlight_title' => 'Why Professional MEP Contractors Matter',
                'highlight_body'  => 'Reliable MEP contractors help reduce construction risks, improve project coordination, and support efficient building operations.',
                'sections'     => [
                    ['title' => 'Technical Experience', 'body' => 'An experienced MEP contractor should have expertise in HVAC systems, electrical systems, plumbing systems, ELV systems, and maintenance support.', 'image' => null],
                    ['title' => 'Project Portfolio', 'body' => 'Reviewing completed projects can help evaluate technical capability and industry experience.', 'image' => null],
                    ['title' => 'Engineering Standards & Compliance', 'body' => 'Professional contractors should follow recognized engineering standards, quality control procedures, and safety requirements.', 'image' => null],
                    ['title' => 'Maintenance & After-Sales Support', 'body' => 'Long-term maintenance support is important for maintaining building system performance after project completion.', 'image' => null],
                ],
            ],
        ];

        foreach ($insights as $data) {
            $data['is_active'] = true;
            Insight::updateOrCreate(['slug' => $data['slug']], $data);
        }
    }
}