import api from "./api";


// Get Contacts
export const getContacts = (page = 1, search = "") => {

    return api.get("/contacts", {

        params: {
            page,
            search,
        },

    });

};


// Get Single Contact
export const getContactById = (id) => {

    return api.get(`/contacts/${id}`);

};


// Create Contact
export const createContact = (data) => {

    return api.post("/contacts", data);

};


// Update Contact
export const updateContact = (id, data) => {

    return api.put(`/contacts/${id}`, data);

};


// Delete Contact
export const deleteContact = (id) => {

    return api.delete(`/contacts/${id}`);

};