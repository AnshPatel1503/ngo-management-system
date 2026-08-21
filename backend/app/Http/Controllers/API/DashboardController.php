<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Gallery;
use App\Models\Project;
use App\Models\Event;
use App\Models\Donation;
use App\Models\volunteer;

class DashboardController extends Controller
{
    public function index()
    {
        return response()->json([

            "success" => true,

            "stats" => [

                "projects" => Project::count(),

                "gallery" => Gallery::count(),

                "events"=>Event::count(),

                "donations" => Donation::count(),
                "donation_amount" => Donation::sum("amount"),

                "volunteers" => volunteer::count(),

            ],

            "latest_gallery" => Gallery::latest()->take(5)->get(),

            "latest_projects" => Project::latest()->take(5)->get(),

            "latest_events"=>Event::latest()->take(5)->get(),
            "latest_donations" => Donation::latest()->take(5)->get(),
            "latest_volunteers" => volunteer::latest()->take(5)->get(),
            
            "activities" => [

		        [
	                'title' => 'Volunteer management active',
	                "time" => now()->subMinutes(10)->diffForHumans(),
	                'type' => 'volunteer',
	            ],

	            [
	                'title' => 'Donation management active',
	                "time" => now()->subMinutes(10)->diffForHumans(),
	                'type' => 'donation',
	            ],

		        [
		            "title" => "New gallery uploaded",
		            "time" => now()->subMinutes(10)->diffForHumans(),
		            "type" => "gallery",
		        ],

		        [
		            "title" => "Project created",
		            "time" => now()->subHour()->diffForHumans(),
		            "type" => "project",
		        ],

		        [
		            "title" => "Admin logged in",
		            "time" => now()->subHours(3)->diffForHumans(),
		            "type" => "login",
		        ],
	        ]

        ]);
    }

    public function analytics()
	{
	    $projects = [];
	    $gallery = [];
	    $events = [];
	    $donations = [];


	    for ($i = 1; $i <= 12; $i++) {

	        $projects[] = Project::whereMonth("created_at", $i)
	            ->whereYear("created_at", now()->year)
	            ->count();


	        $gallery[] = Gallery::whereMonth("created_at", $i)
	            ->whereYear("created_at", now()->year)
	            ->count();


	        $events[] = Event::whereMonth("created_at", $i)
	            ->whereYear("created_at", now()->year)
	            ->count();


	        $donations[] = Donation::whereMonth("created_at", $i)
	            ->whereYear("created_at", now()->year)
	            ->count();

	    }


	    return response()->json([

	        "labels" => [

	            "Jan","Feb","Mar","Apr","May","Jun",

	            "Jul","Aug","Sep","Oct","Nov","Dec"

	        ],


	        "projects" => $projects,

	        "gallery" => $gallery,

	        "events" => $events,

	        "donations" => $donations,

	    ]);
	}

}