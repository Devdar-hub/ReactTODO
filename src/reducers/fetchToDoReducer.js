import {TODO_FETCH_FAILURE, TODO_FETCH_REQUEST, TODO_FETCH_SUCCESS} from '../actions/todoActions';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const fetchToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TODO_FETCH_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
                error: null,
            };
        case TODO_FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default fetchToDoReducer;