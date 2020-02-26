import {SAGA, STUDENT_PROFILE} from '../../constant';
import {put, takeLatest} from 'redux-saga/effects';
import {studentProfileApi} from '../api/studentProfileApi';

function* fetchStudentProfile(action) {
  try {
    let response = yield studentProfileApi.fetchStudentProfile(action);
    if (response.status === 200) {
      // console.log(response.name+ " " + response.dob);
      yield put({
        type: SAGA.FECTH_STUDENT_PROFILE_SUCCESS,
        code: response.code,
        dob: response.dob,
        name: response.name,
        email: response.email,
        father_job: response.father_job,
        father_fullname: response.father_fullname,
        father_yob: response.father_yob,
        first_name: response.first_name,
        last_name: response.last_name,
        middle_name: response.middle_name,
        gender: response.gender,
        mother_job: response.mother_job,
        mother_fullname: response.mother_fullname,
        mother_yob: response.mother_yob,
        phone_number: response.phone_number,
        pob: response.pob,
        admission_code: response.admission_code,
        identity_card_number: response.identity_card_number,
        ethnical: response.ethnical,
        graduation_place: response.graduation_place,
        religious: response.religious,
        enrollment_date: response.enrollment_date,
        contact_address: response.contact_address,
        permanent_residence: response.permanent_residence,
        learning_region_code: response.learning_region_code,
      });
    } else {
      yield put({
        type: SAGA.FECTH_STUDENT_PROFILE_FAILED,
        error: response.error,
      });
    }
  }catch (e) {
    yield put({type: SAGA.FECTH_STUDENT_PROFILE_FAILED, error: e});
    console.log(e);
  }
}

export function* watchFetchStudentProfile() {
  yield takeLatest(STUDENT_PROFILE.FECTH_STUDENT_PROFILE, fetchStudentProfile);
}
