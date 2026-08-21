<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/import-local-data', function () {
    set_time_limit(0);
    ini_set('memory_limit', '512M');

    $path = base_path('ngo.sql');
    
    if (!File::exists($path)) {
        return "Error: ngo.sql file backend folder me nahi mili!";
    }

    try {
        $sql = File::get($path);
        
        // बिना किसी फिल्टर के पूरी ओरिजिनल फाइल को सीधे अपलोड करना
        DB::unprepared($sql);
        return "🎉 Mubarak ho! NGO System ka pura local data live database me upload ho gaya hai!";
    } catch (\Exception $e) {
        return "Error: " . $e->getMessage();
    }
});