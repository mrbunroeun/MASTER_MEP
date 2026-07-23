<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AmsRegistrationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'company_name'      => 'required|string',
            'contact_person'    => 'required|string',
            'position'          => 'required|string',
            'phone_number'      => 'required|string',
            'email_address'     => 'required|email',
            'office_address'    => 'required|string',
            'site_name'         => 'required|string',
            'site_address'      => 'required|string',
            'operating_hours'   => 'required|string',
            'service_package'   => 'required|string',
        ]);

        $body = $this->buildEmailBody($validated);

        Mail::html($body, function ($message) {
            $message->to('lensamoun68@gmail.com')
                ->subject('New AMS Registration Submitted');
        });

        return redirect()->back();
    }

    private function buildEmailBody(array $data): string
    {
        return '<h2>New AMS Registration</h2>' .
            '<h3>Contract</h3>' .
            '<h3>Customer Information</h3>' .
            '<p><strong>Company Name:</strong> ' . e($data['company_name']) . '</p>' .
            '<p><strong>Contact Person:</strong> ' . e($data['contact_person']) . '</p>' .
            '<p><strong>Position:</strong> ' . e($data['position']) . '</p>' .
            '<p><strong>Phone Number:</strong> ' . e($data['phone_number']) . '</p>' .
            '<p><strong>Email Address:</strong> ' . e($data['email_address']) . '</p>' .
            '<p><strong>Office Address:</strong> ' . e($data['office_address']) . '</p>' .
            '<h3>Service Location</h3>' .
            '<p><strong>Site Name:</strong> ' . e($data['site_name']) . '</p>' .
            '<p><strong>Site Address:</strong> ' . e($data['site_address']) . '</p>' .
            '<p><strong>Operating Hours:</strong> ' . e($data['operating_hours']) . '</p>' .
            '<h3>Service Package</h3>' .
            '<p><strong>Package:</strong> ' . e($data['service_package']) . '</p>';
    }
}
