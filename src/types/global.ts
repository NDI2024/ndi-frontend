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

export interface CardData {
    id: string;
    title: string;
    imagePath: string;
    shortDescription: string;
    description: string;
    link: string;
    index: number;
}

export interface QuestionData {
    id: string;
    questionLabel: string;
    reponses:[{
        id: string;
        reponseLabel: string;
        isCorrect: boolean;
    }];
}