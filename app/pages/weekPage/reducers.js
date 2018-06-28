import { TODO_LIST_GET } from './actions';

let initialState = { data: [], loading: true };

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_LIST_GET:
            state = { ...state, data: action.data, loading: false };
            return state;
        default:
            return state;
    }
};

export default todoReducer;