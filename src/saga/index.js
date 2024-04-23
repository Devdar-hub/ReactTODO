// src/sagas/index.js
import {all} from 'redux-saga/effects';
import authSaga from './authSaga';
import createTodoSaga from './todoSaga';
import todoFetchSaga from "./fetchToDoSaga";
import todoEditSaga from "./editTodoSaga";
import todoDeleteSaga from "./deleteToDoSaga";

// Import other sagas as needed

function* rootSaga() {
    yield all([
        authSaga(),
        createTodoSaga(),
        todoFetchSaga(),
        todoEditSaga(),
        todoDeleteSaga(),
        // Add other sagas here
    ]);
}

export default rootSaga;
