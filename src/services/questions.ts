import {getApiRoutePathByName} from "utils/routes";
import axios from "axios";

export const GetQuestions = async () => {
    const req = getApiRoutePathByName("question.get", {number: 3})
    return axios.get(req)
}