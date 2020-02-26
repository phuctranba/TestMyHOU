import {USER, SAGA, STUDENT} from '../../constant';

import {put, takeLatest, call} from 'redux-saga/effects';
import {studentApi} from '../api/studentApi';
import {localDB} from '../api/localDB';

function* fetchStudentInfor(action) {
  try {
    var response = yield studentApi.fetchStudentInfor(action);
    if (response.status === 200) {
      yield put({
        type: SAGA.FECTH_STUDENT_INFOR_SUCCESS,
        name: response.name,
        dob: response.dob,
        gender: response.gender,
        year_study: response.year_study,
        academic_period: response.academic_period,
        major: response.major,
        code: response.code,
        clazz: response.clazz,
      });
    } else {
      yield put({type: SAGA.FECTH_STUDENT_INFOR_FAILED, error: response.error});
    }
  } catch (e) {
    yield put({type: SAGA.FECTH_STUDENT_INFOR_FAILED, error: e});
    console.log(e);
  }
}

export function* watchFetchStudentInfor() {
  yield takeLatest(STUDENT.FECTH_STUDENT_INFOR, fetchStudentInfor);
}

function* uploadAvatar(action) {
  try {
    var response = yield studentApi.uploadAvatar(action);
    if (response.status === 201) {
      yield put({
        type: SAGA.UPLOAD_AVATAR_SUCCESS,
        access_token: action.access_token,
        avatarId: response.avatarId,
      });
    } else {
      yield put({type: SAGA.UPLOAD_AVATAR_FAILED});
    }
  } catch (e) {
    console.log('ERROR_STUDENT_SAGA_UPLOAD_AVATAR: ' + e.toString());
    yield put({type: SAGA.UPLOAD_AVATAR_FAILED});
  }
}

export function* watchUploadAvatar() {
  yield takeLatest(STUDENT.UPLOAD_AVATAR, uploadAvatar);
}

function* updateAvatar(action) {
  try {
    var response = yield studentApi.updateAvatar(action);
    if (response.status === 200) {
      yield put({type: SAGA.UPDATE_AVATAR_SUCCESS, avatarId: action.avatarId});
    } else {
      yield put({type: SAGA.UPDATE_AVATAR_FAILED});
    }
  } catch (e) {
    console.log('ERROR_STUDENT_SAGA_UPDATE_AVATAR: ' + e.toString());
    yield put({type: SAGA.UPDATE_AVATAR_FAILED});
  }
}

export function* watchUpdateAvatar() {
  yield takeLatest(SAGA.UPLOAD_AVATAR_SUCCESS, updateAvatar);
}
