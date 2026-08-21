<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function index()
    {
        $donations = Donation::latest()->paginate(10);

        return response()->json([
            "success" => true,
            "data" => $donations
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            "donor_name" => "required|string|max:255",
            "email" => "nullable|email",
            "phone" => "nullable|string|max:20",
            "amount" => "required|numeric|min:1",
            "payment_method" => "required|string|max:100",
            "message" => "nullable|string",
            "status" => "required|boolean",
        ]);

        $donation = Donation::create($request->all());

        return response()->json([
            "success" => true,
            "message" => "Donation created successfully.",
            "data" => $donation
        ], 201);
    }

    public function show(Donation $donation)
    {
        return response()->json([
            "success" => true,
            "data" => $donation
        ]);
    }

    public function update(Request $request, Donation $donation)
    {
        $request->validate([
            "donor_name" => "required|string|max:255",
            "email" => "nullable|email",
            "phone" => "nullable|string|max:20",
            "amount" => "required|numeric|min:1",
            "payment_method" => "required|string|max:100",
            "message" => "nullable|string",
            "status" => "required|boolean",
        ]);

        $donation->update($request->all());

        return response()->json([
            "success" => true,
            "message" => "Donation updated successfully.",
            "data" => $donation
        ]);
    }

    public function destroy(Donation $donation)
    {
        $donation->delete();

        return response()->json([
            "success" => true,
            "message" => "Donation deleted successfully."
        ]);
    }
}