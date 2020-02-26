import {FEEDBACK} from '../constant';
import createReducer from '../../utils/functions/create-reducer';

const initialState = {
  subjectFeedback: undefined,
  contentFeedback: undefined,
  typeFeedback: undefined,
  status: 'wait',
  error: undefined,
  isSending: false,
};

const actionHander = {
  [FEEDBACK.SEND_FEEDBACK]: (state = initialState, action) => {
    return {
      ...state,
      error: '',
      subjectFeedback: action.subjectFeedback,
      contentFeedback: action.contentFeedback,
      status: 'loading',
      typeFeedback: action.typeFeedback,
      isSending: true,
    };
  },
  [FEEDBACK.STATUS_FEEDBACK]: (state = initialState, action) => {
    return {
      ...state,
      error: action.err,
      status: action.status,
      isSending: false,
    };
  },
};

export default createReducer(initialState, actionHander);
