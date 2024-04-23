// src/reducers/index.js
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import todoReducer from "./todoReducer";
import fetchToDoReducer from "./fetchToDoReducer";
import editToDoReducer from "./editToDoReducer";
import deleteTodoReducer from "./deleteToDoReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
    fetchToDo: fetchToDoReducer,
    editToDo: editToDoReducer,
    deleteToDo: deleteTodoReducer,

});

export default rootReducer;
