import * as types from '../actions/actionTypes';

const initState = [
  {
    users: [],
    user: '',
  }
]

export const users = (state = initState, action) => {
  const newState = {...state}
  switch (action.type) {
    case types.SET_USERS:
      newState.users = action.payload;
      return newState;
    case types.SET_USER:
      newState.user = action.payload;
      return newState;
    case types.SET_COUNT:
      const user = newState.users.find( f => f.name.last === action.payload);
      user.count += 1;
      return newState;
    default:
      return state;
  }
};
