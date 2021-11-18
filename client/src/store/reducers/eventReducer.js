/** EVENT reducer functions */

import _ from 'lodash';

import {
   EVENTS_BY_DATE,
   FETCH_EVENT,
   ADD_EVENT,
   UPDATE_EVENT,
   DELETE_EVENT
} from '../actions';


const eventReducer = (state = {}, action) => {
    switch(action.type) {
        case EVENTS_BY_DATE: 
            return { ...state, ..._.mapKeys(action.payload, '_id') };
// Not Sure if this on is correct
            case FETCH_EVENT:
            return { ...state, [action.payload._id]: action.payload }
        case ADD_EVENT:
            return { ...state, [action.payload._id]: action.payload };
        case UPDATE_EVENT:
            let currentValues = state[action.payload._id];
            let updatedValues = { ...currentValues, ...action.payload };
            return { ...state, [action.payload._id]: updatedValues }
        case DELETE_USER:
        case DELETE_EVENT:
            return _.omit(state, action.payload._id);
        default: 
            return state;
    }
};

export default eventReducer;