export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USERS_BY_NAME = 'GET_USERS_BY_NAME';
export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';


export const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
    payload: ''
  };
};
export const getUserByName = name => {
  return {
    type: GET_USERS_BY_NAME,
    payload: name
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