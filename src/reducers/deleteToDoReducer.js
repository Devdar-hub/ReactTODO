// src/reducers/todoReducer.js

import {TODO_DELETE_FAILURE, TODO_DELETE_REQUEST, TODO_DELETE_SUCCESS} from '../actions/todoActions';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const deleteTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TODO_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case TODO_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default deleteTodoReducer;