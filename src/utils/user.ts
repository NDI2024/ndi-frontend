import store from "store/store";
import {UserState} from "store/reducers/userReducer";

export const getUserState = (): UserState => {
    const state = store.getState();
    return state.user;
}

export const getUser = () => {
    const user = getUserState();
    return user.user;
}

export const getUserRole = () => {
    const user = getUserState();
    return user.role;
}

export const getUserJwt = () => {
    const user = getUserState();
    return user.jwt;
}