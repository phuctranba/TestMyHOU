import {combineReducers} from 'redux';

import userReducer from './User';
import studentReducer from './Student';
import studentProfileReducer from './StudentProfile';
import feedbackReducer from './Feedback';
import control_local from './control_local';
import listNewHomeScreen from './listNewHomeScreen';
import user_screen_control from './user_screen_control';
import device from './Device';
import setting_control from './Setting_control';

export default combineReducers({
  userReducer,
  studentReducer,
  studentProfileReducer,
  feedbackReducer,
  control_local,
  listNewHomeScreen,
  user_screen_control,
  device,
  setting_control,
});
