import createReducer from '../../utils/functions/create-reducer';
import {STUDENT, SAGA, USER} from '../constant';

const initialState = {
  isLoadding:false,
  name: undefined,
  dob: undefined,
  gender: undefined,
  year_study: undefined,
  academic_period: undefined,
  major: undefined,
  code: undefined,
  clazz: undefined,
  isError: false,
  error: undefined,
};

const actionHander = {
  [STUDENT.FECTH_STUDENT_INFOR]: (state = initialState, action) => {
    return {
      ...state,
      isLoadding:true
    };
  },
  [USER.RELOAD_CURRENT_USER_DATA]: (state = initialState, action) => {
    return {
      ...state,
      isLoadding: true,
    };
  },
  [SAGA.FECTH_STUDENT_INFOR_SUCCESS]: (state = initialState, action) => {
    return {
      ...state,
      isLoadding:false,
      name: action.name,
      dob: action.dob,
      gender: action.gender,
      year_study: action.year_study,
      academic_period: action.academic_period,
      major: action.major,
      code: action.code,
      clazz: action.clazz,
      isError: false,
    };
  },
  [SAGA.FECTH_STUDENT_INFOR_FAILED]: (state = initialState, action) => {
    return {
      ...state,
      isLoadding:false,
      error: action.error,
      isError: true
    };
  },

  [STUDENT.UPLOAD_AVATAR]: (state = initialState, action) => {
    return {...state};
  },
  [SAGA.UPLOAD_AVATAR_SUCCESS]: (state = initialState, action) => {
    return {...state};
  },
  [SAGA.UPLOAD_AVATAR_FAILED]: (state = initialState, action) => {
    return {...state, isError: true};
  },

  [STUDENT.UPDATE_AVATAR]: (state = initialState, action) => {
    return {...state};
  },
  [SAGA.UPDATE_AVATAR_SUCCESS]: (state = initialState, action) => {
    return {...state};
  },
  [SAGA.UPDATE_AVATAR_FAILED]: (state = initialState, action) => {
    return {...state, isError: true};
  },

  [STUDENT.REMOVE_ERROR]: (state = initialState, action) => {
    return {...state, isError: false};
  },
};

export default createReducer(initialState, actionHander);
