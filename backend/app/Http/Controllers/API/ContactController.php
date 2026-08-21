<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::latest();

        if ($request->filled('search')) {

            $search = $request->search;

            $query->where(function ($q) use ($search) {

                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('subject', 'like', "%{$search}%");

            });
        }

        $contacts = $query->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $contacts,
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([

            'name' => 'required|string|max:255',

            'email' => 'required|email|max:255',

            'phone' => 'nullable|string|max:20',

            'subject' => 'nullable|string|max:255',

            'message' => 'required|string',

            'status' => 'nullable|boolean',

        ]);

        $contact = Contact::create($validated);

        return response()->json([

            'success' => true,

            'message' => 'Contact created successfully.',

            'data' => $contact,

        ], 201);
    }


    public function show(Contact $contact)
    {
        return response()->json([

            'success' => true,

            'data' => $contact,

        ]);
    }


    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([

            'name' => 'required|string|max:255',

            'email' => 'required|email|max:255',

            'phone' => 'nullable|string|max:20',

            'subject' => 'nullable|string|max:255',

            'message' => 'required|string',

            'status' => 'required|boolean',

        ]);

        $contact->update($validated);

        return response()->json([

            'success' => true,

            'message' => 'Contact updated successfully.',

            'data' => $contact,

        ]);
    }


    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json([

            'success' => true,

            'message' => 'Contact deleted successfully.',

        ]);
    }
}