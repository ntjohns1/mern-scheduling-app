import { combineReducers } from 'redux';

// bring in reducer files to combine
import userReducer from './reducers/userReducer';
import eventReducer from './reducers/eventReducer';
import messageReducer from './reducers/messageReducer';

// define reducers for redux to use
const reducers = combineReducers ({
    user: userReducer,
    events: eventReducer,
    message: messageReducer,
});

export default reducers;