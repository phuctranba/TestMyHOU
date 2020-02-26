import {SETTING} from '../constant';
import {save_setting_asyncstorage} from '../../utils/functions';

export function update_setting(setting, storage_setting) {
  // Lưu cài đặt vào storage
  save_setting_asyncstorage(storage_setting);

  return {
    type: SETTING.UPDATE_SETTING,
    setting,
  };
}
