/** MESSAGE reducer functions */
import { ADD_MESSAGE } from '../actions';

const messageReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return { ...state, [action.payload._id]: action.payload }
        default:
            return state;
    }
};

export default messageReducer;