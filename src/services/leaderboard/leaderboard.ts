import {getApiRoutePathByName} from "utils/routes";
import axios from "axios";

export const GetLeaderboard : any = async () => {
    const req = getApiRoutePathByName("leaderboard.get")
    return axios.get(req + "?Max=10")
}

export const GetMyLeaderboard : any = async () => {
    const req = getApiRoutePathByName("leaderboard.me.get")
    return axios.get(req)
}