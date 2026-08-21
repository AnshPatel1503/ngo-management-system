<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::latest()->paginate(10);

        return response()->json([
            "success" => true,
            "data" => $events
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            "title" => "required|string|max:255",
            "description" => "required",
            "location" => "required|string|max:255",
            "event_date" => "required|date",
            "event_time" => "nullable",
            "image" => "required|image|mimes:jpg,jpeg,png|max:2048",
            "status" => "required|boolean",
        ]);

        $image = $request->file("image")->store("events", "public");

        $event = Event::create([
            "title" => $request->title,
            "description" => $request->description,
            "location" => $request->location,
            "event_date" => $request->event_date,
            "event_time" => $request->event_time,
            "image" => $image,
            "status" => $request->status,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Event created successfully.",
            "data" => $event
        ], 201);
    }

    public function show(Event $event)
    {
        return response()->json([
            "success" => true,
            "data" => $event
        ]);
    }

    public function update(Request $request, Event $event)
    {
        $request->validate([
            "title" => "required|string|max:255",
            "description" => "required",
            "location" => "required|string|max:255",
            "event_date" => "required|date",
            "event_time" => "nullable",
            "image" => "nullable|image|mimes:jpg,jpeg,png|max:2048",
            "status" => "required|boolean",
        ]);

        if ($request->hasFile("image")) {

            if ($event->image && Storage::disk("public")->exists($event->image)) {

                Storage::disk("public")->delete($event->image);

            }

            $event->image = $request->file("image")->store("events", "public");
        }

        $event->title = $request->title;
        $event->description = $request->description;
        $event->location = $request->location;
        $event->event_date = $request->event_date;
        $event->event_time = $request->event_time;
        $event->status = $request->status;

        $event->save();

        return response()->json([
            "success" => true,
            "message" => "Event updated successfully.",
            "data" => $event
        ]);
    }

    public function destroy(Event $event)
    {
        if ($event->image && Storage::disk("public")->exists($event->image)) {

            Storage::disk("public")->delete($event->image);

        }

        $event->delete();

        return response()->json([
            "success" => true,
            "message" => "Event deleted successfully."
        ]);
    }
}