import { combineReducers } from 'redux';
import alert from './alert';
import confirm from './confirm';

export default combineReducers({
  alert,
  confirm,
});
