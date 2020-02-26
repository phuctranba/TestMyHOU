import {STUDENT} from '../constant';

export function fetchStudentInforAction(access_token) {
  return {
    type: STUDENT.FECTH_STUDENT_INFOR,
    access_token,
  };
}

export function fetchStudentChangePassword(access_token) {
  return {
    type: STUDENT.FECTH_STUDENT_INFOR,
    access_token,
  };
}

export function uploadAvatarAction(access_token, image) {
  return {
    type: STUDENT.UPLOAD_AVATAR,
    image,
    access_token,
  };
}

export function removeErrorAction() {
  return {
    type: STUDENT.REMOVE_ERROR,
  };
}
