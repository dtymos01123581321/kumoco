import http from '../../http';
import apiEndpoints from '../../apiEndpoints';
import * as types from './actionTypes';

export const setUsers = (users) => {
  return {
    type: types.SET_USERS,
    payload: users,
  };
};

export const setCountOfUser = (name) => {
  return {
    type: types.SET_COUNT,
    payload: name,
  };
};

export const fetchUsers = (Keyword='') => (dispatch) => {
  http.get(`${apiEndpoints.users}?results=${Keyword}`)
    .then((res) => {
      if (res && res.results) {
        const users = res.results.map(result => ({...result , count: 0})).sort((a,b) => a.name.last.localeCompare(b.name.last))
        dispatch(setUsers(users));
        const name = users[0].name.last;
        dispatch(setCurrentUser(name));
        dispatch(setCountOfUser(name));
      }
    }).catch(() => {
    console.log('Users not found');
  })
};

export const updateUser = (name='') => (dispatch) => {
  dispatch(setCurrentUser(name));
  dispatch(setCountOfUser(name));
};

export const setCurrentUser = (name) => {
  return {
    type: types.SET_USER,
    payload: name,
  };
};

export const setCountOfUser = (name) => {
  return {
    type: types.SET_COUNT,
    payload: name,
  };
};

export const fetchUsers = (Keyword='') => (dispatch) => {
  http.get(`${apiEndpoints.users}?results=${Keyword}`)
    .then((res) => {
      if (res && res.results) {
        const users = res.results.map(result => ({...result , count: 0})).sort((a,b) => a.name.last.localeCompare(b.name.last))
        dispatch(setUsers(users));
        const name = users[0].name.last;
        dispatch(setCurrentUser(name));
        dispatch(setCountOfUser(name));
      }
    }).catch(() => {
    console.log('Users not found');
  })
};

export const updateUser = (name='') => (dispatch) => {
  dispatch(setCurrentUser(name));
  dispatch(setCountOfUser(name));
};

export const searchUser = (value='', users) => (dispatch) => {
    const user = users
    .find( f => f.name.last.toLowerCase().indexOf(value.toLowerCase()) !== -1);

  dispatch(setCurrentUser(user.name.last));
  dispatch(setCountOfUser(user.name.last));
};
