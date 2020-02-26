import {HOST, USER_URL} from '../configURL';

function* loginUserApi(action) {
  let details = {
    grant_type: 'password',
    username: action.username,
    password: action.password,
  };

  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  var res = {
    status: 0,
    data: null,
    error: '',
  };

  yield fetch(USER_URL.LOGIN, {
    method: 'POST',
    headers: {
      Host: HOST,
      Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([status, data]) => {
      res.status = status;
      if (res.status === 200) {
        res.data = data;
      } else {
        if (res.status === 400) {
          res.error = 'Tên tài khoản hoặc mật khẩu không chính xác!';
        } else {
          console.log('ERROR_USER_API: ' + data.error_description);
          // res.error = data['error_description'];
          res.error = 'Lỗi máy chủ, vui lòng thử lại sau!';
        }
      }
    })
    .catch(error => {
      console.log('ERROR_USER_API: ' + error.toString());
      res.status = 1;
      // res.error = error.toString();
      res.error = 'Lỗi máy chủ, vui lòng thử lại sau';
    });

  return res;
}

function* getUserDetail(action) {
  var res = {
    status: 0,
    name: '',
    gender: 0,
    avatarId: '',
    type: 0,
    code: '',
    major: '',
    error: '',
    topic: '',
  };

  yield fetch(USER_URL.USER_INFOR, {
    method: 'GET',
    headers: {
      Host: HOST,
      Authorization: 'Bearer ' + action.access_token,
    },
  })
    .then(response => {
      const statusCode = response.status;
      console.log(response);
      const data = response.json();
      console.log(data);
      return Promise.all([statusCode, data]);
    })
    .then(([status, data]) => {
      res.status = status;
      if (res.status === 200) {
        res.name = data.name;
        res.gender = data.gender;
        res.type = data.type;
        res.avatarId = data.avatar;
        res.code = data.code;
        // res.major = data['major'];
        res.topic = data.topic;
      } else {
        console.log('ERROR_USER_API: ' + data.error_description);
        // res.error = data['error_description'];
        res.error = 'Không lấy được thông tin người dùng!';
      }
    })
    .catch(error => {
      console.log('ERROR_USER_API: ' + error.toString());
      res.status = 0;
      // res.error = error.toString();
      res.error = 'Lỗi máy chủ, vui lòng thử lại sau';
    });

  return res;
}

function* logoutUserApi(action) {
  let details = {
    token: action.access_token,
    token_type: 'bearer',
  };
  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  var res = {
    status: 0,
    value: null,
    error: '',
  };

  yield fetch(USER_URL.LOGOUT, {
    method: 'POST',
    headers: {
      Host: HOST,
      Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then(response => {
      const statusCode = response.status;
      return Promise.all([statusCode, null]);
    })
    .then(([status, data]) => {
      res.status = status;
      res.value = true;
    })
    .catch(error => {
      console.log('ERROR_USER_LOGOUT_API: ' + error.toString());
      res.status = 1;
      // res.error = error.toString();
      res.error = 'Lỗi máy chủ, vui lòng thử lại sau';
    });

  return res;
}

// Đổi mật khẩu
function* changePassworddApi(action) {
  let details = {
    oldpassword: action.oldPassword,
    newpassword: action.newPassword,
  };

  let res = {
    data: null,
    status: null,
  };

  let url = `${USER_URL.CHANGE_PASSWORD}?oldpassword=${
    details.oldpassword
  }&newpassword=${details.newpassword}`;

  yield fetch(url, {
    method: 'GET',
    headers: {
      Host: HOST,
      Authorization: `Bearer ${action.access_token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => {
      res.status = response.status;
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      res.data = data;
    })
    .catch(error => {
      // res.status = 404;
      console.log(error);
      // res.error = error.toString();
    });
  return res;
}

export const userApi = {
  loginUserApi,
  getUserDetail,
  logoutUserApi,
  changePassworddApi,
};
