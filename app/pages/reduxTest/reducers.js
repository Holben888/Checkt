import { DATA_AVAILABLE } from './actions';

let initialState = { data: [], loading: true };

const testDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = { ...state, data: action.data, loading: false };
            return state;
        default:
            return state;
    }
};

export default testDataReducer;