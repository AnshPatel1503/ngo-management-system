<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    /**
     * Display all gallery items.
     */
    public function index()
    {
        $gallery = Gallery::latest()->get();

        return response()->json([
            'success' => true,
            'message' => 'Gallery fetched successfully.',
            'data' => $gallery,
        ]);
    }

    /**
     * Store a new gallery item.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
            'description' => 'nullable|string',
            'status' => 'nullable|boolean',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('gallery', 'public');
        }

        $gallery = Gallery::create([
            'title' => $request->title,
            'image' => $imagePath,
            'description' => $request->description,
            'status' => $request->status ?? true,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Gallery item created successfully.',
            'data' => $gallery,
        ], 201);
    }

    /**
     * Display a single gallery item.
     */
    public function show($id)
    {
        $gallery = Gallery::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $gallery,
        ]);
    }

    /**
     * Update gallery item.
     */
    public function update(Request $request, $id)
    {
        $gallery = Gallery::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'description' => 'nullable|string',
            'status' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {

            if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
                Storage::disk('public')->delete($gallery->image);
            }

            $gallery->image = $request->file('image')->store('gallery', 'public');
        }

        $gallery->title = $request->title;
        $gallery->description = $request->description;
        $gallery->status = $request->status ?? true;

        $gallery->save();

        return response()->json([
            'success' => true,
            'message' => 'Gallery item updated successfully.',
            'data' => $gallery,
        ]);
    }

    /**
     * Delete gallery item.
     */
    public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id);

        if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
            Storage::disk('public')->delete($gallery->image);
        }

        $gallery->delete();

        return response()->json([
            'success' => true,
            'message' => 'Gallery item deleted successfully.',
        ]);
    }
}