export const HOST = 'core.hou.edu.vn';
const DEFAULT_BASE_API = 'https://core.hou.edu.vn/mdm/rest/v2';
const CUSTOM_BASE_API = 'https://core.hou.edu.vn/mdm/rest/api';

export const USER_URL = {
  LOGIN: DEFAULT_BASE_API + '/oauth/token',
  LOGOUT: DEFAULT_BASE_API + '/oauth/revoke',
  USER_INFOR: CUSTOM_BASE_API + '/user/userInfo/student',
  CHANGE_PASSWORD: CUSTOM_BASE_API + '/user/changePassword',
};

export const STUDENT_URL = {
  STUDENT_INFOR: CUSTOM_BASE_API + '/student',
  STUDENT_UPLOAD_AVATAR: DEFAULT_BASE_API + '/files',
  STUDENT_UPDATE_AVATAR: CUSTOM_BASE_API + '/student/update-avatar',
};

export const STUDENT_PROFILE_URL = {
  STUDENT_PROFILE: CUSTOM_BASE_API + '/student_profile',
};

export const FEEDBACK_URL = {
  SEND_FEEDBACK: CUSTOM_BASE_API + '/feedback',
};

export const LISTNEWHOMESCREEN_URL = {
  YOUTUBE_VIDEOS: 'https://www.googleapis.com/youtube/v3/videos',
  YOUTUBE_LISTUPLOAD: 'https://www.googleapis.com/youtube/v3/playlistItems',
  WEB_HOU: 'https://hou.edu.vn/apiHOU',
};
