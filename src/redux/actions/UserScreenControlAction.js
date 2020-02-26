import {USER_SCREEN_CONTROL} from '../constant';
import {space} from '../../views/user_screen/style';

export function update_y_scroll(y_scroll) {
  if (y_scroll <= space * 2) {
    return {
      type: USER_SCREEN_CONTROL.VALUE_Y_SCROLL,
      y_scroll,
    };
  }
}

export function change_tab(tab_index) {
  return {
    type: USER_SCREEN_CONTROL.TAB_INDEX,
    tab_index,
  };
}
