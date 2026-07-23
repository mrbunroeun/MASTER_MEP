<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/TeamMember/Index', [
            'members' => TeamMember::orderBy('order')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/TeamMember/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'      => 'required|string|max:255',
            'position'  => 'nullable|string|max:255',
            'image'     => 'nullable|image|max:2048',
            'order'     => 'nullable|integer',
            'is_active' => 'sometimes|boolean',
        ]);

        $validated['is_active'] = $request->boolean('is_active');
        $validated['order']     = $validated['order'] ?? 0;

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('team', 'public');
        }

        TeamMember::create($validated);
        return redirect()->route('admin.team-member.index')->with('success', 'Member created.');
    }

    public function edit(TeamMember $teamMember)
    {
        return Inertia::render('Admin/TeamMember/Edit', ['member' => $teamMember]);
    }

    public function update(Request $request, TeamMember $teamMember)
    {
        $validated = $request->validate([
            'name'      => 'required|string|max:255',
            'position'  => 'nullable|string|max:255',
            'image'     => 'nullable|image|max:2048',
            'order'     => 'nullable|integer',
            'is_active' => 'sometimes|boolean',
        ]);

        $validated['is_active'] = $request->boolean('is_active');
        $validated['order']     = $validated['order'] ?? 0;

        if ($request->hasFile('image')) {
            if ($teamMember->image && Storage::disk('public')->exists($teamMember->image)) {
                Storage::disk('public')->delete($teamMember->image);
            }
            $validated['image'] = $request->file('image')->store('team', 'public');
        } else {
            unset($validated['image']);
        }

        $teamMember->update($validated);
        return redirect()->route('admin.team-member.index')->with('success', 'Member updated.');
    }

    public function destroy(TeamMember $teamMember)
    {
        if ($teamMember->image && Storage::disk('public')->exists($teamMember->image)) {
            Storage::disk('public')->delete($teamMember->image);
        }
        $teamMember->delete();
        return redirect()->route('admin.team-member.index')->with('success', 'Member deleted.');
    }
}