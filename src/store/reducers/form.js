import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import * as formData from '../../shared/data';

const initialState = {
    region: null,
    gender: null,
    count: 1,
    chosenGender: 'male',
    chosenRegion: 'North'
};

const initForm = (state, action) => {
    return updateObject( state, { 
        region: [ ...formData.region ],
        gender: [ ...formData.gender ]
     } );
};

const setGender = (state, action) => {
    return updateObject( state, { 
        chosenGender: action.gender
     } );
};

const setRegion = (state, action) => {
    return updateObject( state, { 
        chosenRegion: action.region
     } );
};

const setCount = (state, action) => {
    return updateObject( state, { 
        count: action.count
     } );
};

const clearForm = (state, action) => {
    return updateObject( state, { 
        count: 1,
        chosenGender: 'male',
        chosenRegion: 'North'
     } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_DATA: return initForm(state, action);
        case actionTypes.SET_COUNT: return setCount(state, action);
        case actionTypes.SET_GENDER: return setGender(state, action);
        case actionTypes.SET_REGION: return setRegion(state, action);
        case actionTypes.CLEAR_FORM: return clearForm(state, action);
        default:
            return state;
    }
};

export default reducer;