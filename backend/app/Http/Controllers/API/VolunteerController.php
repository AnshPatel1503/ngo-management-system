<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Volunteer;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    /**
     * Display a listing of volunteers.
     */
    public function index(Request $request)
    {
        $query = Volunteer::latest();

        // Search by name, email, phone or city
        if ($request->filled('search')) {

            $search = $request->search;

            $query->where(function ($q) use ($search) {

                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('city', 'like', "%{$search}%");

            });
        }

        $volunteers = $query->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $volunteers,
        ]);
    }


    /**
     * Store a newly created volunteer.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([

            'name' => 'required|string|max:255',

            'email' => 'nullable|email|max:255',

            'phone' => 'nullable|string|max:20',

            'city' => 'nullable|string|max:255',

            'occupation' => 'nullable|string|max:255',

            'message' => 'nullable|string',

            'status' => 'required|boolean',

        ]);

        $volunteer = Volunteer::create($validated);

        return response()->json([

            'success' => true,

            'message' => 'Volunteer created successfully.',

            'data' => $volunteer,

        ], 201);
    }


    /**
     * Display the specified volunteer.
     */
    public function show(Volunteer $volunteer)
    {
        return response()->json([

            'success' => true,

            'data' => $volunteer,

        ]);
    }


    /**
     * Update the specified volunteer.
     */
    public function update(Request $request, Volunteer $volunteer)
    {
        $validated = $request->validate([

            'name' => 'required|string|max:255',

            'email' => 'nullable|email|max:255',

            'phone' => 'nullable|string|max:20',

            'city' => 'nullable|string|max:255',

            'occupation' => 'nullable|string|max:255',

            'message' => 'nullable|string',

            'status' => 'required|boolean',

        ]);

        $volunteer->update($validated);

        return response()->json([

            'success' => true,

            'message' => 'Volunteer updated successfully.',

            'data' => $volunteer,

        ]);
    }


    /**
     * Remove the specified volunteer.
     */
    public function destroy(Volunteer $volunteer)
    {
        $volunteer->delete();

        return response()->json([

            'success' => true,

            'message' => 'Volunteer deleted successfully.',

        ]);
    }
}