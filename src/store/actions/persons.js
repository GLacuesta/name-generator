import * as actionTypes from './actionTypes';
import { persons } from '../../shared/data';


export const fetchPersons = (region, gender, count) => {
    const people = persons.filter(person => person.region === region && person.gender === gender);
    let comment = null

    if (count > people.length) {
        comment = `${people.length} records only`;
    } else {
        people.length = count;
    }

    return {
        type: actionTypes.FETCH_PERSONS,
        persons: [ ...people ],
        comment: comment
    };
};

export const clearPersons = () => {
    return {
        type: actionTypes.CLEAR_PERSONS
    };
};