import { ActionTypes } from '../action-types';

export interface AuthUser {
    email: string | null;
    password: string | null;
    isAuthenticated: boolean;
    token?: string | null;
    userDetails?: object | null;
}

export interface AuthUserAction {
    type: ActionTypes.authUser,
    payload: AuthUser
}

export const authUser = (data: AuthUser) => {
    return {
        type: ActionTypes.authUser,
        payload: data
    }
}
