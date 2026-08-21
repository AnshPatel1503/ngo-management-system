import api from "./api";

// Get All Events
export const getEvents = (page = 1) =>
    api.get(`/events?page=${page}`);

// Get Single Event
export const getEventById = (id) =>
    api.get(`/events/${id}`);

// Create Event
export const createEvent = (data) =>
    api.post("/events", data);

// Update Event
export const updateEvent = (id, data) =>
    api.post(`/events/${id}?_method=PUT`, data);

// Delete Event
export const deleteEvent = (id) =>
    api.delete(`/events/${id}`);