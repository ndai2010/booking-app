import {
    FATCH_GET_ALL_USER_REQUEST,
    FATCH_LOGIN_AUTH_SUCCESS,
    FATCH_GET_ALL_USER_FAILURE
} from '../../Constants/ActionConst';

const initState = {
    data: {},
    Loading: false
};

const GetUserReducer = (state = initState, action) => {
    switch (action.type) {
        case FATCH_GET_ALL_USER_REQUEST: {
            return {
                ...state,
                Loading: true,
            };
        }
        case FATCH_LOGIN_AUTH_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                Loading: false,
            };
        }
        case FATCH_GET_ALL_USER_FAILURE: {
            return {
                ...state,
                Error: action.payload,
                data: {},
            };
        }
        default: {
            return state;
        }
    }
};

export default GetUserReducer;
