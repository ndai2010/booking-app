import {
    FATCH_DELETE_USER_REQUEST,
    FATCH_DELETE_USER_SUCCESS,
    FATCH_DELETE_USER_FAILURE
} from '../../Constants/ActionConst';

const initState = {
    data: {},
    Loading: false
};

const DeleteUserReducer = (state = initState, action) => {
    switch (action.type) {
        case FATCH_DELETE_USER_REQUEST: {
            return {
                ...state,
                Loading: true,
            };
        }
        case FATCH_DELETE_USER_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                Loading: false,
            };
        }
        case FATCH_DELETE_USER_FAILURE: {
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

export default DeleteUserReducer;
