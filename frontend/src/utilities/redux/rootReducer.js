import { combineReducers } from 'redux';
import { users } from './reducers/usersReducers';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
