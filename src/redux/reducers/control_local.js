import {CONTROL_LOCAL} from '../constant';
import createReducer from '../../utils/functions/create-reducer';

const initialState = {
  move: false,
};

const actionHander = {
  [CONTROL_LOCAL.MOVE_ACTIONBUTTON]: (state = initialState, action) => {
    return {
      ...state,
      move: action.move,
    };
  },
};

export default createReducer(initialState, actionHander);
