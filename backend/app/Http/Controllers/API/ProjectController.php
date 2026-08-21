<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{ 
    public function index()
    {
        $projects = Project::latest()->paginate(10);

        return response()->json([
            "success" => true,
            "data" => $projects
        ]);
    }

    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {

            $data['image'] = $request
                ->file('image')
                ->store('projects', 'public');
        }

        $project = Project::create($data);

        return response()->json([
            "success" => true,
            "message" => "Project created successfully.",
            "data" => $project
        ], 201);
    }

    public function show(Project $project)
    {
        return response()->json([
            "success" => true,
            "data" => $project
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {

            if (
                $project->image &&
                Storage::disk('public')->exists($project->image)
            ) {
                Storage::disk('public')->delete($project->image);
            }

            $data['image'] = $request
                ->file('image')
                ->store('projects', 'public');
        }

        $project->update($data);

        return response()->json([
            "success" => true,
            "message" => "Project updated successfully.",
            "data" => $project
        ]);
    }

    public function destroy(Project $project)
    {
        if (
            $project->image &&
            Storage::disk('public')->exists($project->image)
        ) {
            Storage::disk('public')->delete($project->image);
        }

        $project->delete();

        return response()->json([
            "success" => true,
            "message" => "Project deleted successfully."
        ]);
    }
    public function toggleStatus($id)
    {
        $project = Project::findOrFail($id);

        $project->status = !$project->status;

        $project->save();

        return response()->json([

            'success' => true,

            'message' => 'Status updated.',

            'status' => $project->status

        ]);
    }
}