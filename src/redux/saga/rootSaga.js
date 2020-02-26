import {call, all, fork} from 'redux-saga/effects';
import * as UserSagas from './sagas/userSagas';
import * as StudentSagas from './sagas/studentSaga';
import * as StudentProfileSagas from './sagas/studentProfileSaga';
import * as FeedbackSagas from './sagas/feedbackSaga';
import * as ListNewHomeScreen from './sagas/listNewHomeScreenSaga';

export default function* rootSaga() {
  yield all([
    fork(UserSagas.watchGetCurrentUserInDB),
    fork(UserSagas.watchUserLogin),
    fork(UserSagas.watchUserLogout),
    fork(UserSagas.watchCheckAccessTokenIsActive),
    fork(UserSagas.watchDeleteCurrentUserInDB),
    fork(UserSagas.watchSaveCurrentUserToDB),
    fork(UserSagas.watchUpdateAvatarUser),
    fork(UserSagas.watchChangePassword),
    fork(StudentSagas.watchFetchStudentInfor),
    fork(StudentSagas.watchUploadAvatar),
    fork(StudentSagas.watchUpdateAvatar),
    fork(StudentProfileSagas.watchFetchStudentProfile),
    fork(ListNewHomeScreen.watchListNewHomeScreen),
    fork(FeedbackSagas.watchSendFeedback),
  ]);
}
