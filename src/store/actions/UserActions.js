export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USERS_BY_NAME = 'GET_USERS_BY_NAME';
export const DELETE_USER = 'DELETE_USER';

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
