import {feedbackApi} from '../api/feedbackApi';
import {takeLatest, put} from 'redux-saga/effects';
import {FEEDBACK} from '../../constant';

function* sendFeedback(action) {
  try {
    let response = yield feedbackApi.sendFeedback(action);
    if (response.status === 200) {
      yield put({type: FEEDBACK.STATUS_FEEDBACK, status: 'success', error: ''});
    } else {
      yield put({
        type: FEEDBACK.STATUS_FEEDBACK,
        status: 'fail',
        error: 'error send feedback',
      });
    }
  } catch (e) {
    console.log(e);
    yield put({type: FEEDBACK.STATUS_FEEDBACK, status: 'fail', error: e});
  }
}

export function* watchSendFeedback() {
  yield takeLatest(FEEDBACK.SEND_FEEDBACK, sendFeedback);
}
