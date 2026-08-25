import { cookies } from "next/headers";
import { serverApi } from "../axios/axios.server";

export async function getCurrentUser(){

    const cookieStore = await cookies();
    
    const accessToken = cookieStore.get("access_token")?.value;

    if(!accessToken) return null;

    try{

        const response = await serverApi.get("v1/auth/me/", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })


        return response.data.data;

    }catch(error){
        console.error("GET CURRENT USER ERROR:", error);
        return null;
    }

}