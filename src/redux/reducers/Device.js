import {DEVICE} from '../constant';
import createReducer from '../../utils/functions/create-reducer';

const initialState = {
  connected_internet: false,
};

const actionHander = {
  [DEVICE.CONNECTED_INTERNET]: (state = initialState, action) => {
    console.log('da doi thanh ' + action.connected_internet);
    return {
      ...state,
      connected_internet: action.connected_internet,
    };
  },
};

export default createReducer(initialState, actionHander);
