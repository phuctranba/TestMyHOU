import {SETTING} from '../constant';
import createReducer from '../../utils/functions/create-reducer';
import {Light_blue, Dark_blue, Medium_blue} from '../../utils/values';
import {objects_setting} from '../../utils/values/string';

const color_set = {
  Light_blue: Light_blue,
  Dark_blue: Dark_blue,
  Medium_blue: Medium_blue,
};

const initialState = {
  loaded: 'nope',
};

const actionHander = {
  [SETTING.UPDATE_SETTING]: (state = initialState, action) => {
    const new_setting = action.setting;
    console.log(new_setting);
    if (new_setting['@Setting_Color'] !== undefined) {
      new_setting.color = color_set[new_setting['@Setting_Color']];
    }
    return {
      ...state,
      ...new_setting,
      loaded: 'done',
    };
  },
};

export default createReducer(initialState, actionHander);
