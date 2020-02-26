import {USER_SCREEN_CONTROL} from '../constant';
import createReducer from '../../utils/functions/create-reducer';

const initialState = {
  y_scroll: 0,
  y_drag: 0,
  tab_index: 2,
};

const actionHander = {
  [USER_SCREEN_CONTROL.VALUE_Y_SCROLL]: (state = initialState, action) => {
    return {
      ...state,
      y_scroll: action.y_scroll,
    };
  },
  [USER_SCREEN_CONTROL.TAB_INDEX]: (state = initialState, action) => {
    return {
      ...state,
      tab_index: action.tab_index,
    };
  },
};

export default createReducer(initialState, actionHander);
