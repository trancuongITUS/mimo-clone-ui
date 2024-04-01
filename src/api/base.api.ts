import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export const APIService = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

APIService.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        /* Add logic to handle error */

        return Promise.reject(error);
    }
);

export default APIService;