import {useQuery} from "react-query";
import {publicClient} from "../api";

const API = '/api'
const getTasks = (client) => async () => {
    if  (client) {
        const response = await client.get(API,);
        return response.data;
    }
    return [];
}


export const useTasks = () =>{
    return useQuery(API, getTasks(publicClient));
    // return publicClient.get(API,).then(response => response.data);
}

