// src/sagas/todoSaga.js

import {call, put, takeLatest} from 'redux-saga/effects';
import {TODO_CREATE_REQUEST, todoCreateFailure, todoCreateSuccess} from '../actions/todoActions';
import {apiTodoCreate} from "../apis";

function* createTodoSaga(action) {
    try {
        const response = yield call(apiTodoCreate, action.payload);
        if (response.status !== 200) {
            yield put(todoCreateFailure(response.data));
        }
        yield put(todoCreateSuccess(response.data));
    } catch (error) {
        yield put(todoCreateFailure(error.message));
    }
}

function* todoSaga() {
    yield takeLatest(TODO_CREATE_REQUEST, createTodoSaga);
}

export default todoSaga;