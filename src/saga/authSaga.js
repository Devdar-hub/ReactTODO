// src/sagas/authSaga.js

import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST, loginFailure, loginSuccess} from '../actions/authActions';
import {apiLogin} from '../apis';

function* loginUser(action) {
    try {
        const response = yield call(apiLogin, action.payload);
        if (response.status !== 200) {
            yield put(loginFailure(response.data));
        }
        yield put(loginSuccess(response.data));
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, loginUser);
}

export default authSaga;
