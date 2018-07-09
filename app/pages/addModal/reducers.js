import { STATE_RESET, DETAIL_PRHASES_GET_FAIL, DETAIL_PHRASES_GET_SUCCESS } from './actions';

let initialState = { detailPhraseData: [], actionPhraseData: [], loading: true, failed: false };

const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATE_RESET:
            return initialState;
        case DETAIL_PHRASES_GET_SUCCESS:
            state = { ...state, ...action.data, loading: false, failed: false, };
            return state;
        case DETAIL_PRHASES_GET_FAIL:
            state = { ...state, loading: false, failed: true, };
            return state;
        default:
            return state;
    }
}

export default addReducer;