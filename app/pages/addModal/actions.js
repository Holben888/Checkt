import * as detailPhraseData from '../../res/detail-phrases';
import * as actionPhraseData from '../../res/action-phrases';
import * as detailLabelData from '../../res/detail-labels';
export const DETAIL_PHRASES_GET_SUCCESS = 'GET_DETAIL_PHRASES_SUCCESS';
export const DETAIL_PRHASES_GET_FAIL = 'GET_DETAIL_PHRASES_FAIL';
export const STATE_RESET = 'RESET_STATE';

export function getDetailPhraseData() {
    return (dispatch) => {
        if (detailPhraseData && actionPhraseData && detailLabelData) {
            delete detailPhraseData["default"];
            delete actionPhraseData["default"];
            delete detailLabelData["default"];

            const detailPhraseArray = Object.keys(detailPhraseData).map(key => detailPhraseData[key]);
            const actionPhraseArray = Object.keys(actionPhraseData).map(key => actionPhraseData[key]);
            const detailLabelArray = Object.keys(detailLabelData).map(key => detailLabelData[key]);

            dispatch({
                type: DETAIL_PHRASES_GET_SUCCESS,
                data: {
                    detailPhraseData: detailPhraseArray,
                    actionPhraseData: actionPhraseArray,
                    detailLabelData: detailLabelArray,
                }
            })
        }
        else {
            dispatch({ type: DETAIL_PRHASES_GET_FAIL });
        }
    }
}

export function resetState() {
    return (dispatch) => {
        dispatch({ type: RESET_STATE });
    }
}