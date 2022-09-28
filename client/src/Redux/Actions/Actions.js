import {
    FATCH_LOGIN_AUTH_REQUEST,
    FATCH_LOGIN_AUTH_SUCCESS,
    FATCH_LOGIN_AUTH_FAILURE,
    FATCH_LOGOUT_AUTH
} from '../Constants/ActionConst';

export const fatchLoginAuthRequest = (email, password) => {
    return {
        type: FATCH_LOGIN_AUTH_REQUEST,
        payload: {
            email: email,
            password: password,
        },
    };
};
export const fatchLoginAuthSuccess = (response) => {
    return {
        type: FATCH_LOGIN_AUTH_SUCCESS,
        payload: response,
    };
};
export const fatchLoginAuthFailure = (error) => {
    return {
        type: FATCH_LOGIN_AUTH_FAILURE,
        payload: error,
    };
};
export const fatchLogoutAuth = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
    return {
        type: FATCH_LOGOUT_AUTH,
    };
};

