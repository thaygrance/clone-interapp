import api from './api';

export interface SignInData {
    email: string;
    password: string;
}

export interface SignUpData {
    firstName:string;
    lastName:string;
    email: string;
    password: string;
}


export interface UserDto {
    id: string;
    firstName: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    email: string;
}

export const signIn = async (data: SignInData) => {
    const user = await api.post('/user/sigin', data);
    return user;
}

export const me = async () => {
    const user = await api.get<UserDto>('/user/me')
    return user;
}

export const signUp = async (data: SignUpData) => {
    const user = await api.post('/user/sigup', data);
    return user;
}

