export const GET_ALL_USERS = 'GET_ALL_USERS';
export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_SORT_STATUS='SET_SORT_STATUS';
export const SET_FILTER_STATUS='SET_FILTER_STATUS';

export const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
    payload: ''
  };
};
export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id
  };
};
export const addUser = user =>{
  return{
    type:ADD_USER,
    payload:user
  }
}
export const updateUser = user =>{
  return{
    type:UPDATE_USER,
    payload:user
  }
}
export const setSort = value =>{
  return{
    type:SET_SORT_STATUS,
    payload:value
  }
}
export const setFilter = value =>{
  return{
    type:SET_FILTER_STATUS,
    payload:value
  }
}