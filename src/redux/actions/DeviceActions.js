import {DEVICE} from '../constant';

export function check_connected(connected_internet) {
  return {
    type: DEVICE.CONNECTED_INTERNET,
    connected_internet,
  };
}
