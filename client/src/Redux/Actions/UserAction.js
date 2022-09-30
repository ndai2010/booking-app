import {
    FATCH_GET_ALL_USER_REQUEST,
    FATCH_GET_ALL_USER_SUCCESS,
    FATCH_GET_ALL_USER_FAILURE
} from '../Constants/ActionConst';

//Get
export const fatchGetAllRequest = () => {
    return {
        type: FATCH_GET_ALL_USER_REQUEST,
    };
};
export const fatchGetAllSuccess = (response) => {
    return {
        type: FATCH_GET_ALL_USER_SUCCESS,
        payload: response,
    };
};
export const fatchGetAllFailure = (error) => {
    return {
        type: FATCH_GET_ALL_USER_FAILURE,
        payload: error,
    };
};

//Delete
export const fatchDeleteRequest = () => {
    return {
        type: FATCH_GET_ALL_USER_REQUEST,
    };
};
export const fatchDeleteSuccess = (response) => {
    return {
        type: FATCH_GET_ALL_USER_SUCCESS,
        payload: response,
    };
};
export const fatchDeleteFailure = (error) => {
    return {
        type: FATCH_GET_ALL_USER_FAILURE,
        payload: error,
    };
};


