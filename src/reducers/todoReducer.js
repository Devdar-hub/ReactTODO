// src/reducers/todoReducer.js

import {TODO_CREATE_FAILURE, TODO_CREATE_REQUEST, TODO_CREATE_SUCCESS} from '../actions/todoActions';

const initialState = {
    todo: null,
    loading: false,
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TODO_CREATE_SUCCESS:
            return {
                ...state,
                todo: action.payload,
                loading: false,
                error: null,
            };
        case TODO_CREATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default todoReducer;