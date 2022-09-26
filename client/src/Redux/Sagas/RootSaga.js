import { all } from "@redux-saga/core/effects";
import loginSaga from "./LoginSaga";

export default function* RootSaga() {
  yield all([
    loginSaga(),
  ])
}

