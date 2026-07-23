<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Faq/Index', [
            'faqs' => Faq::orderBy('order')->get(),
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Faq/Create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'question'  => 'required|string',
            'answer'    => 'required|string',
            'order'     => 'integer',
            'is_active' => 'boolean',
        ]);
        Faq::create($validated);
        return redirect()->route('admin.faq.index')->with('success', 'FAQ created.');
    }
    public function edit(Faq $faq)
    {
        return Inertia::render('Admin/Faq/Edit', ['faq' => $faq]);
    }
    public function update(Request $request, Faq $faq)
    {
        $validated = $request->validate([
            'question'  => 'required|string',
            'answer'    => 'required|string',
            'order'     => 'integer',
            'is_active' => 'boolean',
        ]);
        $faq->update($validated);
        return redirect()->route('admin.faq.index')->with('success', 'FAQ updated.');
    }
    public function destroy(Faq $faq)
    {
        $faq->delete();
        return redirect()->route('admin.faq.index')->with('success', 'FAQ deleted.');
    }
}