<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::first();

        if (!$settings) {

            $settings = Setting::create([
                'site_name' => 'NGO Management System',
            ]);

        }

        return response()->json([
            'success' => true,
            'data' => $settings,
        ]);
    }


    public function update(Request $request)
    {
        $settings = Setting::first();

        if (!$settings) {

            $settings = new Setting();

        }


        $validated = $request->validate([

            'site_name' => 'nullable|string|max:255',

            'email' => 'nullable|email|max:255',

            'phone' => 'nullable|string|max:30',

            'address' => 'nullable|string|max:500',

            'facebook' => 'nullable|string|max:500',

            'instagram' => 'nullable|string|max:500',

            'twitter' => 'nullable|string|max:500',

            'youtube' => 'nullable|string|max:500',

            'about' => 'nullable|string',

            'logo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

        ]);


        if ($request->hasFile('logo')) {

            if (
                $settings->logo &&
                Storage::disk('public')->exists($settings->logo)
            ) {

                Storage::disk('public')->delete(
                    $settings->logo
                );

            }


            $validated['logo'] = $request
                ->file('logo')
                ->store('settings', 'public');

        }


        $settings->fill($validated);

        $settings->save();


        return response()->json([

            'success' => true,

            'message' => 'Settings updated successfully.',

            'data' => $settings,

        ]);
    }
}