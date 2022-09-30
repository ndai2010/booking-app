import reducer from "./Reducer";
import DeleteUserReducer from "./User/DeleteUserReducer.js";
import GetUserReducer from './User/GetUserReducer'
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    loginReducer: reducer,
    UserReducer: GetUserReducer,
    DeleteUserReducer: DeleteUserReducer
});
export default RootReducer