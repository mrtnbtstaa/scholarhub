import axios from "axios";

// Nextjs -> django
export const serverApi = axios.create({
    baseURL: process.env.DJANGO_API_URL,
    withCredentials: true
})