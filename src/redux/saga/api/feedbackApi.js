import {FEEDBACK_URL, HOST} from '../configURL';

function* sendFeedback(action) {
  var res = {
    status: 0,
    error: '',
    value: '',
  };

  // console.log(JSON.stringify({subject: action.subjectFeedback, content: action.contentFeedback, type: action.typeFeedback}));

  yield fetch(FEEDBACK_URL.SEND_FEEDBACK, {
    method: 'POST',
    headers: {
      Host: HOST,
      Authorization: 'Bearer ' + action.access_token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subject: action.subjectFeedback,
      content: action.contentFeedback,
      type: action.typeFeedback,
    }),
  })
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([status, data]) => {
      res.status = status;
      console.log(status);
      console.log(data);
      if (res.status === 200) {
        res.value = 'success';
      } else {
        // console.log("error: " + data['error_description']);
        // res.error = data['error_description'];
      }
    })
    .catch(error => {
      console.log('err: ' + error.toString());
      res.status = 1;
      res.error = error.toString();
    });
  return res;
}

export const feedbackApi = {
  sendFeedback,
};
