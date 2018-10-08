import { userSagaWatcher } from './UserSaga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        fork(userSagaWatcher)
    ])
}