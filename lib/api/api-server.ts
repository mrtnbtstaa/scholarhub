import axios from "axios";

// Nextjs -> django
export const serverApi = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
})

