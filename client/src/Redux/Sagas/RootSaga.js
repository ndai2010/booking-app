import { all } from "@redux-saga/core/effects";
import loginSaga from "./LoginSaga";
import userSaga from "./User/UserSaga";
export default function* RootSaga() {
  yield all([
    loginSaga(),
    userSaga()
  ])
}

