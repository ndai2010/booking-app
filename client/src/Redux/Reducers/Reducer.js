import {
    FATCH_LOGIN_AUTH_REQUEST,
    FATCH_LOGIN_AUTH_SUCCESS,
    FATCH_LOGIN_AUTH_FAILURE,
    FATCH_LOGOUT_AUTH,
} from '../Constants/ActionConst';

const LoginAuthState = {
    Response: {},
    isAdmin: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).isAdmin : false
};

const reducer = (state = LoginAuthState, action) => {
    switch (action.type) {
        case FATCH_LOGIN_AUTH_REQUEST: {

            console.log('heloo');
            return {
                ...state,
                Loading: true,
            };
        }
        case FATCH_LOGIN_AUTH_SUCCESS: {
            return {
                ...state,
                Response: action.payload,
                isAdmin: action.payload.isAdmin,
            };
        }
        case FATCH_LOGIN_AUTH_FAILURE: {
            return {
                ...state,
                Error: action.payload,
                Response: {},
            };
        }
        case FATCH_LOGOUT_AUTH: {
            return {
                ...state,
                Response: {}
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
