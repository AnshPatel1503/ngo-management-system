import api from "./api";

// Get All Projects
export const getProjects = (page = 1) =>
    api.get("/projects");

// Get Single Project
export const getProjectById = (id) =>
    api.get(`/projects/${id}`);

// Create Project
export const createProject = (data) =>
    api.post("/projects", data);

// Update Project
export const updateProject = (id, data) =>
    api.post(`/projects/${id}?_method=PUT`, data);

// Delete Project
export const deleteProject = (id) =>
    api.delete(`/projects/${id}`);
// update status Project
export const toggleProjectStatus = (id) =>
    api.patch(`/projects/${id}/status`);