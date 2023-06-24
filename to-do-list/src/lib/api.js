import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;



export function createAPIInstance() {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const publicClient = createAPIInstance();
