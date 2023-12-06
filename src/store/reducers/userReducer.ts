import {User} from "types/global";

export interface UserState {
    user: User | null;
    role: string | null;
    jwt: string | null;
}

export interface UserAction {
    type: 'SET_USER' | 'SET_ROLE' | 'SET_JWT' | 'CLEAR_USER' | 'CLEAR_ROLE' | 'CLEAR_JWT';
    payload: User | string | null;
}

const initialState: UserState = {
    user: null,
    role: null,
    jwt: null,
};

export const userReducer: (state: UserState, action: any) => ({
    role: string | null;
    jwt: string | null;
    user: User | string | null
}) = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'CLEAR_USER':
            return {
                ...state,
                user: null,
            };
        case 'SET_ROLE':
            return {
                ...state,
                role: action.payload,
            };
        case 'CLEAR_ROLE':
            return {
                ...state,
                role: null,
            };
        case 'SET_JWT':
            return {
                ...state,
                jwt: action.payload,
            };
        default:
            return state;
    }
};
