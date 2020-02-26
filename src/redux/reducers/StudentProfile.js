import createReducer from '../../utils/functions/create-reducer';
import {STUDENT_PROFILE, SAGA} from '../constant';

const initialState = {
  code: undefined,
  dob: undefined,
  name: undefined,
  email: undefined,
  father_job: undefined,
  father_fullname: undefined,
  father_yob: undefined,
  first_name: undefined,
  last_name: undefined,
  middle_name: undefined,
  gender: undefined,
  mother_job: undefined,
  mother_fullname: undefined,
  mother_yob: undefined,
  phone_number: undefined,
  pob: undefined,
  error: undefined,
  admission_code: undefined,
  identity_card_number: undefined,
  ethnical: undefined,
  graduation_place: undefined,
  religious: undefined,
  enrollment_date: undefined,
  contact_address: undefined,
  permanent_residence: undefined,
  learning_region_code: undefined,
  isError: false,
};

const actionHander = {
  [STUDENT_PROFILE.FECTH_STUDENT_PROFILE]: (state = initialState, action) => {
    return {...state};
  },
  [SAGA.FECTH_STUDENT_PROFILE_SUCCESS]: (state = initialState, action) => {
    return {
      ...state,
      code: action.code,
      dob: action.dob,
      name: action.name,
      email: action.email,
      father_job: action.father_job,
      father_fullname: action.father_fullname,
      father_yob: action.father_yob,
      first_name: action.first_name,
      last_name: action.last_name,
      middle_name: action.middle_name,
      gender: action.gender,
      mother_job: action.mother_job,
      mother_fullname: action.mother_fullname,
      mother_yob: action.mother_yob,
      phone_number: action.phone_number,
      pob: action.pob,
      admission_code: action.admission_code,
      identity_card_number: action.identity_card_number,
      ethnical: action.ethnical,
      graduation_place: action.graduation_place,
      religious: action.religious,
      enrollment_date: action.enrollment_date,
      contact_address: action.contact_address,
      permanent_residence: action.permanent_residence,
      learning_region_code: action.learning_region_code,
      isError: false,
    };
  },
  [SAGA.FECTH_STUDENT_PROFILE_FAILED]: (state = initialState, action) => {
    return {...state, error: action.error, isError: false};
  },
};

export default createReducer(initialState, actionHander);
