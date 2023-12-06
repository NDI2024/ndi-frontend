import {UserAction} from "store/reducers/userReducer";
import {User} from "types/global";

export const setUser = (user: User): UserAction => ({
    type: 'SET_USER',
    payload: user,
});

export const clearUser = (): UserAction => ({
    type: 'CLEAR_USER',
    payload: null
});

export const setRole = (role: string): UserAction => ({
    type: 'SET_ROLE',
    payload: role,
});

export const clearRole = (): UserAction => ({
    type: 'CLEAR_ROLE',
    payload: null
});

export const setJwt = (jwt: string): UserAction => ({
    type: 'SET_JWT',
    payload: jwt,
});

export const clearJwt = (): UserAction => ({
    type: 'CLEAR_JWT',
    payload: null
});
