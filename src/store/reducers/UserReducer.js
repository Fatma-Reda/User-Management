import * as actionTypes from '../actions/UserActions';
import { Role } from '../../db/role';

const data = [
  {
    id: 1,
    name: 'ahmed',
    email: 'a@test.com',
    phone: 4353453543,
    Status: 'active',
    role: 'user'
  },
  {
    id: 2,
    name: 'omar',
    email: 'a@test.com',
    phone: 372636722,
    Status: 'active',
    role: 'admin'
  },
  {
    id: 3,
    name: 'ali',
    email: 'c@test.com',
    phone: 82736,
    Status: 'soft_deleted',
    role: 'user'
  },
  {
    id: 4,
    name: 'fatma',
    email: 'c@test.com',
    phone: 82736,
    Status: 'soft_deleted',
    role: 'user'
  }
];

const logUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    role: Role.Admin
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    role: Role.User
  }
];
const initialState = {
  userList: data,
  filteredList: data,
  sortstatus: 0,
  filterstatus: 0,
  logUsers: logUsers,
  selectedUser: {},
  user: {
    id: 1,
    username: 'admin',
    password: 'admin',
    role: Role.Admin
  }
  // {
  //   id: 2,
  //   username: 'user',
  //   password: 'user',
  //   role: Role.User
  // }
};

export default function userReducer(state = initialState, action) {
  let newuserList = [...state.userList];
  let nsortstatus = state.sortstatus;
  let nfilterstatus = state.filterstatus;
  let currentUser = { ...state.user };
  let nselectedUser = { ...state.selectedUser };
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      newuserList = [...state.userList];
      break;
    case actionTypes.ADD_USER:
      {
        let newuser = { ...action.payload };
        newuserList.push(newuser);
      }
      break;
    case actionTypes.UPDATE_USER:
      {
        let updatedItem = { ...action.payload };
        let index = newuserList.findIndex(el => el.id === updatedItem.id);
        if (index !== -1) newuserList[index] = updatedItem;
      }
      break;
    case actionTypes.DELETE_USER:
      {
        let id = action.payload;
        let index = newuserList.findIndex(el => el.id === id);
        if (index !== -1) {
          newuserList = [].concat(
            newuserList.slice(0, index),
            newuserList.slice(index + 1, newuserList.length)
          );
        }
      }
      break;
    case actionTypes.UPDATE_USER:
      {
        const updatedItem = { ...action.payload };
        const index = newuserList.findIndex(el => el.id === updatedItem.id);
        if (index !== -1) newuserList[index] = updatedItem;
      }

      break;
    case actionTypes.GET_USER_BY_ID:
      {
        const id = action.payload;
        const index = newuserList.findIndex(el => el.id === id);
        if (index !== -1) nselectedUser = { ...newuserList[index] };
      }
      break;
    case actionTypes.SET_SORT_STATUS:
      {
        let value = action.payload;
        nsortstatus = value;
      }
      break;
    case actionTypes.SET_FILTER_STATUS:
      {
        let value = action.payload;
        nfilterstatus = value;
      }
      break;
    default:
      // console.error(action.payload);
      break;
  }
  return {
    ...state,
    userList: newuserList,
    sortstatus: nsortstatus,
    filterstatus: nfilterstatus,
    user: currentUser,
    selectedUser: nselectedUser
  };
}
