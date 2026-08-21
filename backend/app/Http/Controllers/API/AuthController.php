<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Login
     */
    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required",
        ]);

        if (!Auth::attempt([
            "email" => $request->email,
            "password" => $request->password,
        ])) {

            return response()->json([
                "success" => false,
                "message" => "Invalid email or password.",
            ], 401);
        }

        $user = Auth::user();

        $token = $user->createToken("ngo-token")->plainTextToken;

        return response()->json([
            "success" => true,
            "message" => "Login successful.",
            "token" => $token,
            "user" => $user,
        ]);
    }

    /**
     * Current User
     */
    public function me(Request $request)
    {
        return response()->json([
            "success" => true,
            "user" => $request->user(),
        ]);
    }

    /**
     * Logout
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "success" => true,
            "message" => "Logout successful.",
        ]);
    }
}