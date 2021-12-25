import { combineReducers } from 'redux';

// bring in reducer files to combine
import userReducer from './reducers/userReducer';
import eventReducer from './reducers/eventReducer';
import messageReducer from './reducers/messageReducer';
import studentReducer from './reducers/studentReducer';

// define reducers for redux to use
const reducers = combineReducers ({
    user: userReducer,
    events: eventReducer,
    message: messageReducer,
    student: studentReducer,
});

export default reducers;