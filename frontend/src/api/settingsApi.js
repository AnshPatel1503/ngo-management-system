import api from "./api";


export const getSettings = () => {

    return api.get("/settings");

};


export const updateSettings = (data) => {

    return api.post("/settings", data, {

        headers: {
            "Content-Type": "multipart/form-data",
        },

    });

};