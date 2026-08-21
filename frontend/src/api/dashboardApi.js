import api from "./api";

export const getDashboard = () => {

    return api.get("/dashboard");

};
export const getAnalytics = () =>
    api.get("/dashboard/analytics");