import axios from "axios";
import {getApiRoutePathByName} from "utils/routes";

export const LoginUser = async (username: string, password: string) => {
    const routePath = getApiRoutePathByName('auth.login');

    return await axios.get(routePath, {data: {username, password}});
}

export const RegisterUser = async (username: string, password: string, email: string) => {
    const routePath = getApiRoutePathByName('auth.register');

    return await axios.post(routePath, {username, password, email});
}