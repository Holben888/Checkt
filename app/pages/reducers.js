import { TODO_LIST_GET } from './actions';

let initialState = { todoListData: [], loading: true, failed: false };

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_LIST_GET:
            state = { ...state, todoListData: action.data, loading: false };
            return state;
        default:
            return state;
    }
};

export default pageReducer;