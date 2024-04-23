import {call, put, takeLatest} from "redux-saga/effects";

import {apiTodoEdit} from "../apis";
import {TODO_EDIT_REQUEST, todoEditFailure, todoEditSuccess, todoFetchRequest} from "../actions/todoActions";

function* editTodoSaga(payload) {
    try {
        const response = yield call(apiTodoEdit(payload?.payload));
        if (response.status !== 200) {
            yield put(todoEditFailure(response.data.data));
        }
        yield put(todoEditSuccess(response.data));
        yield put(todoFetchRequest());
    } catch (error) {
        yield put(todoEditFailure(error.message));
    }
}

function* todoEditSaga() {
    yield takeLatest(TODO_EDIT_REQUEST, editTodoSaga);
}

export default todoEditSaga;
