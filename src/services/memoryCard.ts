import {getApiRoutePathByName} from "utils/routes";
import axios from "axios";

export const GetMemoryCards = async () => {
    const req = getApiRoutePathByName("memorycards.get", {number: 3})
    return axios.get(req)
}