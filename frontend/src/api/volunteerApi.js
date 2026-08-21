import api from "./api";


// Get Volunteers
export const getVolunteers = (page = 1, search = "") => {

    return api.get("/volunteers", {

        params: {

            page,

            search,

        },

    });

};


// Get Single Volunteer
export const getVolunteerById = (id) => {

    return api.get(`/volunteers/${id}`);

};


// Create Volunteer
export const createVolunteer = (data) => {

    return api.post("/volunteers", data);

};


// Update Volunteer
export const updateVolunteer = (id, data) => {

    return api.put(`/volunteers/${id}`, data);

};


// Delete Volunteer
export const deleteVolunteer = (id) => {

    return api.delete(`/volunteers/${id}`);

};