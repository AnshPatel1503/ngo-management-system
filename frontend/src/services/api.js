import axios from "axios";

const api = axios.create({
    baseURL: "https://ngo-management-system-lmqt.onrender.com",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default api;