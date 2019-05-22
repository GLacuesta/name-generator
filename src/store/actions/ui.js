import * as actionTypes from './actionTypes';

export const initError = (err) => {
    return {
        type: actionTypes.UI_ERROR,
        error: err
    };
};

export const initSuccess = () => {
    return {
        type: actionTypes.UI_SUCCESS
    };
};
