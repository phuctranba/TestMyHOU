import {USER} from '../constant';

export function userLoginAction(username, password) {
  return {
    type: USER.LOGIN,
    username,
    password,
  };
}

export function getCurrentUserInDBAction() {
  return {
    type: USER.GET_CURRENT_USER_IN_DB,
  };
}

export function userLogoutAction(access_token) {
  return {
    type: USER.LOGOUT,
    access_token,
  };
}

export function changePassword(access_token, oldPassword, newPassword) {
  return {
    type: USER.CHANGE_PASSWORD,
    access_token,
    oldPassword,
    newPassword,
  };
}

export function resultChangePassword(result, error) {
  return {
    type: USER.RESULT_CHANGE_PASSWORD,
    result,
    error,
  };
}

export function reloadUser(access_token) {
  return {
    type: USER.RELOAD_CURRENT_USER_DATA,
    access_token: access_token,
  };
}
