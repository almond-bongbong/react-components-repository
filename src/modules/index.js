import { combineReducers } from 'redux';
import alert from './alert';
import confirm from './confirm';
import popup from './popup';

export default combineReducers({
  alert,
  confirm,
  popup,
});
