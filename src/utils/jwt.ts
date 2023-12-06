import {Jwt} from "types/global";

export const decodeJwt = (jwt: string): Jwt => {
    const base64Url = jwt.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}