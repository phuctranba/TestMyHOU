import {USER, SAGA, STUDENT, STUDENT_PROFILE} from '../../constant';

import {put, takeLatest, call, all} from 'redux-saga/effects';
import {userApi} from '../api/userApi';
import {localDB} from '../api/localDB';
import AsyncStorage from '@react-native-community/async-storage';
import {objects_setting} from '../../../utils/values';

// Đăng nhập
function* userLogin(action) {
  try {
    // console.log(action.username);
    const userResponse = yield userApi.loginUserApi(action);
    console.log(userResponse.error);
    if (userResponse.status === 200) {
      yield put({
        type: SAGA.USER_LOGIN_SUCCESS,
        username: action.username,
        access_token: userResponse.data.access_token,
      });
    } else {
      yield put({type: SAGA.USER_LOGIN_FAILED, error: userResponse.error});
    }
  } catch (e) {
    console.log(e);
    yield put({type: SAGA.USER_LOGIN_FAILED, error: e});
  }
}

export function* watchUserLogin() {
  yield takeLatest(USER.LOGIN, userLogin);
}

// Lấy thông tin User đã đăng nhập lần trước.
function* getCurrentUserInDB() {
  console.log('vao saga');
  try {
    // Kiểm tra xem có cho lưu tài khoản trong cài đặt không
    const check_save = yield AsyncStorage.getItem(
      objects_setting.Setting_Save_User,
    );
    console.log(check_save);

    if (JSON.parse(check_save)) {
      // Nếu có tiến hành lấy bình thường
      let currentUser = yield localDB.getUserInDB();

      yield console.log(
        'getCurrentUserInDB: ' +
          currentUser.len +
          ' ' +
          currentUser.username +
          ' ' +
          currentUser.access_token,
      );

      if (currentUser.len === 1) {
        yield put({
          type: SAGA.GET_CURRENT_USER_IN_DB_SUCCESS,
          username: currentUser.username,
          access_token: currentUser.access_token,
        });
      } else {
        yield put({type: SAGA.GET_CURRENT_USER_IN_DB_FAILED});
      }
    } else {
      // Nếu không trả về hỏng để ném ra màn hình đăng nhập luôn
      yield put({type: SAGA.GET_CURRENT_USER_IN_DB_FAILED});
    }
  } catch (e) {
    console.log(e);
    yield put({type: SAGA.GET_CURRENT_USER_IN_DB_FAILED});
  }
}

export function* watchGetCurrentUserInDB() {
  yield takeLatest(USER.GET_CURRENT_USER_IN_DB, getCurrentUserInDB);
}

// Lấy thông tin sau khi đăng nhập thành công
function* checkAccessTokenIsActive(action) {
  try {
    const userResponse = yield userApi.getUserDetail(action);
    if (userResponse.status === 200) {
      yield put({
        type: SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_SUCCESS,
        name: userResponse.name,
        gender: userResponse.gender,
        userType: userResponse.type,
        username: action.username,
        avatarId: userResponse.avatarId,
        // major: userResponse.major,
        code: userResponse.code,
        access_token: action.access_token,
        topic: userResponse.topic,
      });


      yield put({
        type: STUDENT_PROFILE.FECTH_STUDENT_PROFILE,
        access_token: action.access_token
      });

      yield put({
        type: STUDENT.FECTH_STUDENT_INFOR,
        access_token: action.access_token
      });
    } else {
      yield put({
        type: SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_FAILED,
        error: userResponse.error,
      });
    }
  } catch (e) {
    console.log(e);
    yield put({type: SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_FAILED, error: e});
  }
}

export function* watchCheckAccessTokenIsActive() {
  yield all([
    takeLatest(SAGA.GET_CURRENT_USER_IN_DB_SUCCESS, checkAccessTokenIsActive),
    takeLatest(USER.RELOAD_CURRENT_USER_DATA, checkAccessTokenIsActive),
    takeLatest(SAGA.USER_LOGIN_SUCCESS, checkAccessTokenIsActive),
  ]);
}

//Lưu thông tin sau khi đăng nhập thành công
function* saveCurrentUserToDB(action) {
  try {
    yield localDB.saveUserToDB(action);
  } catch (e) {
    console.log(e);
  }
}

export function* watchSaveCurrentUserToDB() {
  yield takeLatest(
    SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_SUCCESS,
    saveCurrentUserToDB,
  );
}

//Đăng xuất
function* userLogout(action) {
  try {
    console.log(action.access_token);
    const userResponse = yield userApi.logoutUserApi(action);
    // console.log(userResponse.access_token);
    if (userResponse.status === 200) {
      yield put({type: SAGA.USER_LOGOUT_SUCCESS});
    } else {
      yield put({type: SAGA.USER_LOGOUT_SUCCESS, error: userResponse.error});
    }
  } catch (e) {
    console.log(e);
    yield put({type: SAGA.USER_LOGOUT_SUCCESS, error: e});
  }
}

export function* watchUserLogout() {
  yield takeLatest(USER.LOGOUT, userLogout);
}

//Xoá dữ liệu người dùng
function* deleteCurrentUserInDB(action) {
  try {
    yield localDB.deleteUserInDB();
  } catch (e) {
    console.log(e);
  }
}

export function* watchDeleteCurrentUserInDB() {
  yield takeLatest(SAGA.USER_LOGOUT_SUCCESS, deleteCurrentUserInDB);
}

//Update avatar id
function* updateAvatarUser(action) {
  try {
    yield put({type: USER.UPDATE_AVATAR, avatarId: action.avatarId});
  } catch (e) {}
}

export function* watchUpdateAvatarUser() {
  yield takeLatest(SAGA.UPDATE_AVATAR_SUCCESS, updateAvatarUser);
}

// Đổi mật khẩu
// Lấy thông tin sau khi đăng nhập thành công
function* changePassword(action) {
  try {
    const response = yield userApi.changePassworddApi(action);
    if (response.status !== 200) {
      yield put({
        type: USER.RESULT_CHANGE_PASSWORD,
        result: 'fail',
        error: 'Lỗi máy chủ, vui lòng thử lại sau!',
      });
    } else {
      if (response.data.mes) {
        if (response.data.mes['0'] === 'Current password do not match!') {
          yield put({
            type: USER.RESULT_CHANGE_PASSWORD,
            result: 'fail',
            error: 'Mật khẩu hiện tại không chính xác!',
          });
        }
      } else {
        yield put({
          type: USER.RESULT_CHANGE_PASSWORD,
          result: 'success',
          error: '',
        });
      }
    }
  } catch (e) {
    console.log(e);
    // yield put({type: SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_FAILED, error: e});
  }
}

export function* watchChangePassword() {
  yield takeLatest(USER.CHANGE_PASSWORD, changePassword);
}
