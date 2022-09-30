import { call, put, takeEvery } from 'redux-saga/effects'
import { FATCH_GET_ALL_USER_REQUEST } from '../../Constants/ActionConst';
import { fatchGetAllSuccess, fatchGetAllFailure } from '../../Actions/UserAction';
import { GetAllUser } from '../../Api/UserAPI';
function* fatchUserSaga(action) {
    try {
        const user = yield call(GetAllUser);
        if (user.errCode === 0) {
            yield put(fatchGetAllSuccess(user.data));
        }
        else {
            yield put(fatchGetAllFailure(user.message));
        }
    } catch {
        alert(`network Error!!! check your , API or internet connection`);
    }
}

function* userSaga() {
    yield takeEvery(FATCH_GET_ALL_USER_REQUEST, fatchUserSaga);
}
export default userSaga;
