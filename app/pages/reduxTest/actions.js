import * as reduxTestData from '../../res/redux-test.json';
export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export function getTestData() {
    return (dispatch) => {
        setTimeout(() => {
            const data = reduxTestData.instructions;
            dispatch({ type: DATA_AVAILABLE, data: data });
        }, 1000);
    }
}