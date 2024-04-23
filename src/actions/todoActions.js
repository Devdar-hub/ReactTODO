// src/actions/todoActions.js

export const TODO_CREATE_REQUEST = 'TODO_CREATE_REQUEST';
export const TODO_CREATE_SUCCESS = 'TODO_CREATE_SUCCESS';
export const TODO_CREATE_FAILURE = 'TODO_CREATE_FAILURE';

export const todoCreateRequest = (payload) => ({
    type: TODO_CREATE_REQUEST,
    payload,
});

export const todoCreateSuccess = (data) => ({
    type: TODO_CREATE_SUCCESS,
    payload: data,
});

export const todoCreateFailure = (error) => ({
    type: TODO_CREATE_FAILURE,
    payload: error,
});


export const TODO_FETCH_REQUEST = 'TODO_FETCH_REQUEST';
export const TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS';
export const TODO_FETCH_FAILURE = 'TODO_FETCH_FAILURE';

export const todoFetchRequest = () => ({
    type: TODO_FETCH_REQUEST,
});

export const todoFetchSuccess = (data) => ({
    type: TODO_FETCH_SUCCESS,
    payload: data,
});

export const todoFetchFailure = (error) => ({
    type: TODO_FETCH_FAILURE,
    payload: error,
});


export const TODO_EDIT_REQUEST = 'TODO_EDIT_REQUEST';
export const TODO_EDIT_SUCCESS = 'TODO_EDIT_SUCCESS';
export const TODO_EDIT_FAILURE = 'TODO_EDIT_FAILURE';

export const todoEditRequest = (payload) => ({
    type: TODO_EDIT_REQUEST,
    payload
});

export const todoEditSuccess = (data) => ({
    type: TODO_EDIT_SUCCESS,
    payload: data,
});

export const todoEditFailure = (error) => ({
    type: TODO_EDIT_FAILURE,
    payload: error,
});


export const TODO_DELETE_REQUEST = 'TODO_DELETE_REQUEST';
export const TODO_DELETE_SUCCESS = 'TODO_DELETE_SUCCESS';
export const TODO_DELETE_FAILURE = 'TODO_DELETE_FAILURE';

export const todoDeleteRequest = (id) => ({
    type: TODO_DELETE_REQUEST,
    payload: id,
});

export const todoDeleteSuccess = () => ({
    type: TODO_DELETE_SUCCESS,
});

export const todoDeleteFailure = (error) => ({
    type: TODO_DELETE_FAILURE,
    payload: error,
});