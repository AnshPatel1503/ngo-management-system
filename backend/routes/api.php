<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\GalleryController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\DonationController;
use App\Http\Controllers\API\VolunteerController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\SettingController;


// ==================== PUBLIC ROUTES ====================

Route::get('/test', function () { return response()->json(['status' => true, 'message' => 'Laravel API Working']); });

Route::post('/login', [AuthController::class, 'login']);

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project}', [ProjectController::class, 'show']);

Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/gallery/{gallery}', [GalleryController::class, 'show']);

Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{event}', [EventController::class, 'show']);

Route::get('/settings', [SettingController::class, 'index']);
Route::post('/contacts', [ContactController::class, 'store']);


// ==================== PROTECTED ADMIN ROUTES ====================

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/me', [AuthController::class, 'me']);

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::get('/dashboard/analytics', [DashboardController::class, 'analytics']);

    Route::post('/projects', [ProjectController::class, 'store']);

    Route::put('/projects/{project}', [ProjectController::class, 'update']);

    Route::patch('/projects/{project}', [ProjectController::class, 'update']);

    Route::patch('/projects/{project}/status', [ProjectController::class, 'toggleStatus']);

    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

    Route::post('/gallery', [GalleryController::class, 'store']);

    Route::put('/gallery/{gallery}', [GalleryController::class, 'update']);

    Route::patch('/gallery/{gallery}', [GalleryController::class, 'update']);

    Route::delete('/gallery/{gallery}', [GalleryController::class, 'destroy']);

    Route::post('/events', [EventController::class, 'store']);

    Route::put('/events/{event}', [EventController::class, 'update']);

    Route::patch('/events/{event}', [EventController::class, 'update']);

    Route::delete('/events/{event}', [EventController::class, 'destroy']);

    Route::apiResource('/donations', DonationController::class);

    Route::apiResource('/volunteers', VolunteerController::class);

    //Route::apiResource('/contacts', ContactController::class);
    Route::get('/contacts', [ContactController::class, 'index']);

    Route::put('/contacts/{contacts}', [ContactController::class, 'update']);

    Route::patch('/contacts/{contacts}', [ContactController::class, 'update']);
   
    Route::delete('/contacts/{contacts}', [ContactController::class, 'destroy']);

    Route::post('/settings', [SettingController::class, 'update']);

});