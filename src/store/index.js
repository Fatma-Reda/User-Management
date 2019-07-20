import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';
import locale from './reducers/locale';
export default combineReducers({
  users: UserReducer,
  locale
});
