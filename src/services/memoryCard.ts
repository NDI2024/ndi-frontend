import {getApiRoutePathByName} from "utils/routes";
import axios from "axios";

export const GetMemoryCards = async () => {
    const req = getApiRoutePathByName("memorycards.get", {number: 5})
    return axios.get(req)
}