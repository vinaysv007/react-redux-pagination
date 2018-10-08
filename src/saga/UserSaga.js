import { call, takeLatest, put } from 'redux-saga/effects';
import * as types from '../action/Types';
import api from '../api/Api';
import { usersResponse, usersError } from '../action/Users';

export function* userSagaWatcher() {
    yield takeLatest(types.USERS_REQ, goReqUser);
}

function* goReqUser() {
    try {
        let res = yield call(api.user.users);
        yield put(usersResponse(res.data));
    } catch (e) {
        yield put(usersError(e.response));
    }
}
