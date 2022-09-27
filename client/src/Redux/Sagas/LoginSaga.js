import { call, put, takeEvery } from 'redux-saga/effects'
import { FATCH_LOGIN_AUTH_REQUEST } from '../Constants/ActionConst';
import { fatchLoginAuthFailure, fatchLoginAuthSuccess, } from '../Actions/Actions';
import { Login } from '../Api/LoginAPI';
function* fatchLoginSaga(action) {
    try {
        const userAuth = yield call(Login, action.payload);
        if (userAuth.errCode === 0) {
            localStorage.setItem('accessToken', userAuth.token);
            localStorage.setItem('user', JSON.stringify(userAuth.user));
            yield put(fatchLoginAuthSuccess(userAuth.user));
        }
        else {
            yield put(fatchLoginAuthFailure(userAuth.message));
        }
    } catch {
        alert(`network Error!!! check your , API or internet connection`);
    }
}

function* loginSaga() {
    yield takeEvery(FATCH_LOGIN_AUTH_REQUEST, fatchLoginSaga);
}
export default loginSaga;
