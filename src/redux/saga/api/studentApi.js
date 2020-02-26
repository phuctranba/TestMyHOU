import {HOST, USER_URL, STUDENT_URL} from '../configURL';

function* fetchStudentInfor(action) {
  var res = {
    status: 0,
    name: '',
    dob: '',
    gender: 0,
    year_study: '',
    academic_period: '',
    major: '',
    code: '',
    clazz: '',
    error: '',
  };

  yield fetch(STUDENT_URL.STUDENT_INFOR, {
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
        res.name = data.name;
        res.dob = data.dob;
        res.gender = data.gender;

        let temp = data['academic_period']['code'].split('-');
        res.major = temp[0];
        res.year_study = temp[1];
        res.academic_period = temp[2];

        res.code = data.code;
        res.clazz = data['clazz']['name'];
      } else {
        console.log('ERROR_STUDENT_API: ' + data.error_description);
        // res.error = data['error_description'];
        res.error = 'Không thể lấy dữ liệu từ máy chủ!';
      }
    })
    .catch(error => {
      console.log('ERROR_STUDENT_API: ' + error.toString());
      res.status = 0;
      // res.error = error.toString();
      res.error = 'Mất kết nối với máy chủ';
    });

  return res;
}

function* uploadAvatar(action) {
  var res = {
    avatarId: '',
    error: '',
    status: 0,
  };
  const data = new FormData();
  data.append('file', {
    uri: action.image.uri,
    type: action.image.mime,
    name: action.image.name,
  });

  yield fetch(STUDENT_URL.STUDENT_UPLOAD_AVATAR, {
    method: 'post',
    headers: {
      Host: HOST,
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + action.access_token,
    },
    body: data,
  })
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([status, data]) => {
      res.status = status;
      if (res.status === 201) {
        res.avatarId = data.id;
      } else {
        console.log('ERROR_USER_UPLOAD_FILE_API: ' + data);
      }
    })
    .catch(error => {
      console.log('ERROR_USER_UPLOAD_FILE_API: ' + error.toString());
      res.status = 1;
      res.error = error.toString();
    });
  return res;
}

function* updateAvatar(action) {
  let res = {
    status: 0,
    error: '',
    value: '',
  };

  // console.log(JSON.stringify({subject: action.subjectFeedback, content: action.contentFeedback, type: action.typeFeedback}));

  yield fetch(STUDENT_URL.STUDENT_UPDATE_AVATAR, {
    method: 'POST',
    headers: {
      Host: HOST,
      Authorization: 'Bearer ' + action.access_token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatarid: action.avatarId,
    }),
  })
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([status, data]) => {
      res.status = status;
      // console.log(status);
      if (res.status === 200) {
        res.value = 'success';
      } else {
        console.log('ERROR_UPDATE_USER_AVATAR: ' + data);
      }
    })
    .catch(error => {
      console.log('ERROR_UPDATE_USER_AVATAR: ' + error.toString());
      res.status = 1;
      res.error = error.toString();
    });
  return res;
}

export const studentApi = {
  fetchStudentInfor,
  uploadAvatar,
  updateAvatar,
};
