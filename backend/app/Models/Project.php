<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [

        'title',

        'description',

        'image',

        'location',

        'project_date',

        'budget',

        'status',

    ];

    protected $casts = [

        'project_date' => 'date',

        'budget' => 'decimal:2',

        'status' => 'boolean',

    ];
}