import api from "./api";

// Get All Donations
export const getDonations = (page = 1) =>
    api.get(`/donations?page=${page}`);

// Get Single Donation
export const getDonationById = (id) =>
    api.get(`/donations/${id}`);

// Create Donation
export const createDonation = (data) =>
    api.post("/donations", data);

// Update Donation
export const updateDonation = (id, data) =>
    api.post(`/donations/${id}?_method=PUT`, data);

// Delete Donation
export const deleteDonation = (id) =>
    api.delete(`/donations/${id}`);