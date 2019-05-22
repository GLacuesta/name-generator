import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    persons: null,
    comment: null
};


const fetchPersons = (state, action) => {
    return updateObject( state, { 
        persons: action.persons,
        comment: action.comment
     } );
};

const clearPersons = (state, action) => {
    return updateObject( state, { 
        persons: null,
        comment: null
     } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PERSONS: return fetchPersons(state, action);
        case actionTypes.CLEAR_PERSONS: return clearPersons(state, action);
        default:
            return state;
    }
};

export default reducer;