<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'phone'   => 'required|string|max:20',
            'email'   => 'nullable|email|max:100',
            'subject' => 'required|string|max:100',
            'message' => 'required|string|max:2000',
        ]);

        $text = "📩 New Contact Form Submission\n\n"
            . "Name: {$validated['name']}\n"
            . "Phone: {$validated['phone']}\n"
            . "Email: " . ($validated['email'] ?? 'N/A') . "\n"
            . "Subject: {$validated['subject']}\n"
            . "Message: {$validated['message']}";

        Http::post("https://api.telegram.org/bot" . env('TELEGRAM_BOT_TOKEN') . "/sendMessage", [
            'chat_id' => env('TELEGRAM_CHAT_ID'),
            'text'    => $text,
        ]);

        return redirect()->back()->with('success', 'Your message has been sent! We will contact you shortly.');
    }
}