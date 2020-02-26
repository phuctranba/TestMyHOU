import {CONTROL_LOCAL} from '../constant';

export function move_actionbutton(move) {
  return {
    type: CONTROL_LOCAL.MOVE_ACTIONBUTTON,
    move,
  };
}
