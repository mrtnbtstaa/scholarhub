import axios from "axios";

// Nextjs -> django
export const serverApi = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
})

serverApi.interceptors.request.use((config) => {
    const baseURL = process.env.API_URL;
    if (!baseURL) throw new Error("API_URL is not defined");
    config.baseURL = baseURL;
    return config;
})

