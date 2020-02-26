import {FEEDBACK} from '../constant';

export function sendFeedbackAction(
  access_token,
  subjectFeedback,
  contentFeedback,
  typeFeedback,
) {
  return {
    type: FEEDBACK.SEND_FEEDBACK,
    access_token,
    subjectFeedback,
    contentFeedback,
    typeFeedback,
  };
}

export function statusFeedbackAction(status) {
  return {
    type: FEEDBACK.STATUS_FEEDBACK,
    status,
    error: '',
  };
}
