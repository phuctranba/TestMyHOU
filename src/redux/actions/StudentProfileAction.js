import {STUDENT_PROFILE} from '../constant';

export function fetchStudentProfileAction(access_token) {
  return {
    type: STUDENT_PROFILE.FECTH_STUDENT_PROFILE,
    access_token,
  };
}
