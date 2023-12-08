import {getApiRoutePathByName} from "utils/routes";
import axios from "axios";

export const GetMemoryCards = async () => {
    const req = getApiRoutePathByName("memorycards.get", {number: 2})
    return axios.get(req)
}

export const SetMemoryCardsScore = async (errors: number, time: number) => {
    const path = getApiRoutePathByName("scores.post")
    return axios.post(path, {time, nbError: errors})
}