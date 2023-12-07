import axios from "axios";

export const addBearerToken = (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}