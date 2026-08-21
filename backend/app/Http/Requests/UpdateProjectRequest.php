<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'title' => 'required|string|max:255',

            'description' => 'required|string',

            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',

            'location' => 'nullable|string|max:255',

            'project_date' => 'nullable|date',

            'budget' => 'nullable|numeric|min:0',

            'status' => 'required|boolean',

        ];
    }

    public function messages(): array
    {
        return [

            'title.required' => 'Project title is required.',

            'description.required' => 'Description is required.',

            'image.image' => 'Please upload a valid image.',

            'image.mimes' => 'Only JPG, JPEG and PNG images are allowed.',

            'image.max' => 'Image size must not exceed 2 MB.',

            'budget.numeric' => 'Budget must be numeric.',

            'status.required' => 'Status is required.',

        ];
    }
}