import {
    FATCH_LOGIN_AUTH_REQUEST,
    FATCH_LOGIN_AUTH_SUCCESS,
    FATCH_LOGIN_AUTH_FAILURE,
} from '../Constants/ActionConst';

const LoginAuthState = {
    isUserAuthenticate: false,
    Response: {},
    Error: '',
    Loading: true,
};

const reducer = (state = LoginAuthState, action) => {
    switch (action.type) {
        case FATCH_LOGIN_AUTH_REQUEST: {
            console.log(state);
            return {
                ...state,
                Loading: true,
                isUserAuthenticate: false,
            };
        }
        case FATCH_LOGIN_AUTH_SUCCESS: {
            console.log(state);
            return {
                ...state,
                Response: action.payload,
                Error: '',
                isUserAuthenticate: true,
            };
        }
        case FATCH_LOGIN_AUTH_FAILURE: {
            console.log(state);
            return {
                ...state,
                Error: action.payload,
                Response: {},
                isUserAuthenticate: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;