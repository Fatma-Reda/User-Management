import * as actionTypes from '../actions/UserActions';

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
  }
];

const initialState = {
  userList: data,
  filteredList: []
};

export default function userReducer(state = initialState, action) {
  let newuserList = [...state.userList];
  let newFilteredList = [...newuserList];

  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      break;
    // case actionTypes.GET_USERS_BY_NAME:
    //   {
    //     const name = action.payload.toLowerCase().replace(/[^a-z0-9]/gi, '');

    //     newFilteredList = newuserList.filter(
    //       c => c.name.toLowerCase().search(name) !== -1
    //     );
    //   }
    //   break;
    case actionTypes.DELETE_USER:
      {
        let id = action.payload;
        let index = newFilteredList.findIndex(el => el.id === id);
        if (index !== -1) {
          newuserList = [].concat(
            newuserList.slice(0, index),
            newuserList.slice(index + 1, newuserList.length)
          );
        }
      }
      break;
    default:
      // console.error(action.payload);
      break;
  }
  return {
    ...state,
    userList: newuserList,
    filteredList: newFilteredList
  };
}
