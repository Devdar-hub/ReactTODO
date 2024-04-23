import {call, put, takeLatest} from 'redux-saga/effects';
import {TODO_DELETE_REQUEST, todoDeleteFailure, todoDeleteSuccess, todoFetchRequest} from '../actions/todoActions';
import {apiTodoDelete} from '../apis';

function* deleteTodoSaga(action) {
    try {
        const response = yield call(apiTodoDelete, action.payload);
        if (response.status !== 200) {
            yield put(todoDeleteFailure(response.data));
        }
        yield put(todoDeleteSuccess());
        yield put(todoFetchRequest()); // Fetch tasks again after deletion
    } catch (error) {
        yield put(todoDeleteFailure(error.message));
    }
}

function* todoDeleteSaga() {
    yield takeLatest(TODO_DELETE_REQUEST, deleteTodoSaga);
}

export default todoDeleteSaga;