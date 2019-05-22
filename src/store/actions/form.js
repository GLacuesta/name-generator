import * as actionTypes from './actionTypes';

export const initForm = () => {
    return {
        type: actionTypes.INIT_DATA
    };
};

export const setGender = (gender) => {

    return {
        type: actionTypes.SET_GENDER,
        gender: gender
    };
};

export const setCount = (count) => {

    return {
        type: actionTypes.SET_COUNT,
        count: count
    };
};


export const setRegion = (region) => {

    return {
        type: actionTypes.SET_REGION,
        region: region
    };
};

export const clearForm = () => {

    return {
        type: actionTypes.CLEAR_FORM,
    };
};