export interface User {
    Username: string;
    UserID: string;
    Email: string;
    role: string;
}

export interface Jwt {
    Username: string;
    UserID: string;
    Email: string;
    role: string;
    exp: number;
    iat: number;
    nbf: number;
}