import api from "./api"; 

export const getGallery = () => api.get("/gallery");

export const getGalleryById = (id) =>
    api.get(`/gallery/${id}`);

export const createGallery = (data) =>
    api.post("/gallery", data);

export const updateGallery = (id, data) =>
    api.post(`/gallery/${id}?_method=PUT`, data);

export const deleteGallery = (id) =>
    api.delete(`/gallery/${id}`);