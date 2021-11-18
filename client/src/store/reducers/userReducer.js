/** USER REDUCER functions **/
import { _ } from 'lodash'

import {
    LOG_IN,
    LOG_OUT,
    FETCH_ALL_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from "../actions";

const userReducer = (state = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, ...action.payload };
        case LOG_OUT:
            return null;
        case FETCH_ALL_USERS:
            return { ...state, ..._.mapKeys(action.payload, '_id') };
        case ADD_USER:
            return { ...state, [action.payload._id]: action.payload }
        case UPDATE_USER:
            let currentValues = state[action.payload._id];
            let updatedValues = { ...currentValues, ...action.payload };
            return { ...state, [action.payload._id]: updatedValues }
        case DELETE_USER:
            return _.omit(state, action.payload._id);
        default:
            return state;
    }
}

export default userReducer;