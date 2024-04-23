import {call, put, takeLatest} from 'redux-saga/effects';

import {apiTodoFetch} from "../apis";
import {TODO_FETCH_REQUEST, todoFetchFailure, todoFetchSuccess} from "../actions/todoActions";

function* fetchTodoSaga() {
    try {
        const response = yield call(apiTodoFetch);
        if (response.status !== 200) {
            yield put(todoFetchFailure(response.data.data));
        }
        yield put(todoFetchSuccess(response.data));
    } catch (error) {
        yield put(todoFetchFailure(error.message));
    }
}


function* todoFetchSaga() {
    yield takeLatest(TODO_FETCH_REQUEST, fetchTodoSaga);

}

export default todoFetchSaga;