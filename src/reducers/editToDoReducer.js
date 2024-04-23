import {TODO_EDIT_FAILURE, TODO_EDIT_REQUEST, TODO_EDIT_SUCCESS,} from "../actions/todoActions";

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const editToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_EDIT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TODO_EDIT_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
                error: null,
            };
        case TODO_EDIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default editToDoReducer;
