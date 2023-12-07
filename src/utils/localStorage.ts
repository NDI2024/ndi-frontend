export const addToLocalStorage = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
}

export const getFromLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
}

export const removeFromLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
}

export const setJwtToLocalStorage = (jwt: string) => {
    addToLocalStorage('jwt', jwt);
}

export const getJwtFromLocalStorage = () => {
    return getFromLocalStorage('jwt');
}

export const removeJwtFromLocalStorage = () => {
    removeFromLocalStorage('jwt');
}