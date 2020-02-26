import {HOST, USER_URL, STUDENT_PROFILE_URL} from '../configURL';

function* fetchStudentProfile(action) {
  var res = {
    status: 0,
    code: '',
    dob: '',
    name: '',
    email: '',
    father_job: '',
    father_fullname: '',
    father_yob: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    gender: 0,
    mother_job: '',
    mother_fullname: '',
    mother_yob: '',
    phone_number: '',
    pob: '',
    error: '',
    admission_code: '',
    identity_card_number: '',
    ethnical: '',
    graduation_place: '',
    religious: '',
    enrollment_date: '',
    contact_address: '',
    permanent_residence: '',
    learning_region_code: '',
  };
  yield fetch(STUDENT_PROFILE_URL.STUDENT_PROFILE, {
    method: 'GET',
    headers: {
      Host: HOST,
      Authorization: 'Bearer ' + action.access_token,
    },
  })
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([status, data]) => {
      res.status = status;
      data = data['0'];
      if (res.status === 200) {
        res.code = data.code;
        res.dob = data.dob;
        res.name = data.name;
        res.email = data.email;
        res.father_job = data.father_job;
        res.father_fullname = data.father_fullname;
        res.father_yob = data.father_yob;
        res.first_name = data.first_name;
        res.last_name = data.last_name;
        res.middle_name = data.middle_name;
        res.gender = data.gender;
        res.mother_job = data.mother_job;
        res.mother_fullname = data.mother_fullname;
        res.mother_yob = data.mother_yob;
        res.phone_number = data.phone_number;
        res.pob = data.pob;
        res.admission_code = data.admission_code;
        res.identity_card_number = data.identity_card_number;
        res.ethnical = data.ethnical;
        res.graduation_place = data.graduation_place;
        res.religious = data.religious;
        res.enrollment_date = data.enrollment_date;
        res.contact_address = data.contact_address;
        res.permanent_residence = data.permanent_residence;
        res.learning_region_code = data.learning_region_code;
      } else {
        console.log('ERROR_STUDENT_PROFILE_API: ' + data.error_description);
        // res.error = data['error_description'];
        res.error = 'Không thể lấy dữ liệu từ máy chủ!';
      }
    })
    .catch(error => {
      console.log('ERROR_STUDENT_PROFILE_API: ' + error.toString());
      res.status = 0;
      // res.error = error.toString();
      res.error = 'Mất kết nối với máy chủ';
    });

  return res;
}

export const studentProfileApi = {
  fetchStudentProfile,
};
