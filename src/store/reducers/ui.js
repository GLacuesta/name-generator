import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    isError: false,
    error: null,
    warning: null
};

const initError = (state, action) => {
    return updateObject( state, { 
        isError: true,
        error: action.error,
        warning: null
     } );
};

const initSuccess = (state, action) => {
    return updateObject( state, { 
        isError: false,
        error: null,
        warning: null
     } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UI_ERROR: return initError(state, action);
        case actionTypes.UI_SUCCESS: return initSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;