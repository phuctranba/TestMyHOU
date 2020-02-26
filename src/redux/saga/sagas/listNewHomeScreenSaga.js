import {USER, SAGA, STUDENT} from '../../constant';

import {put, takeLatest, call} from 'redux-saga/effects';
import {listNewHomeScreenApi} from '../api/listNewHomeScreenApi';

// Youtube
function* takeYoutube(action) {
  try {
    const youResponse = yield listNewHomeScreenApi.YoutubeApi(action);
    if (youResponse.status === 200) {
      let datalistYou = [];
      for (let i = 0; i < youResponse.data.length; i++) {
        let data = {};
        data.title = youResponse.data[i].snippet.title;
        data.img = youResponse.data[i].snippet.thumbnails.medium.url;
        data.id = youResponse.data[i].snippet.resourceId.videoId;
        data.time = youResponse.data[i].snippet.publishedAt;

        // gọi API lấy chi tiết từng video
        const detail = yield listNewHomeScreenApi.YoutubeApi_Detail(
          youResponse.data[i].snippet.resourceId.videoId,
        );
        data.view = detail.data[0].statistics.viewCount;
        data.cmt = detail.data[0].statistics.commentCount;
        data.like = detail.data[0].statistics.likeCount;
        data.dislike = detail.data[0].statistics.dislikeCount;

        // yield trước hàm thêm này để chống chưa thêm xong nó đã load cái tiếp, bất đồng bộ mà xD
        yield datalistYou.push(data);
      }
      yield put({
        type: SAGA.LISTNEWHOMESCREEN.RESULT_YOUTUBE,
        data: datalistYou,
        typeLoad: 'done',
        nextAddressPage: youResponse.nextPageToken,
        total: youResponse.total,
      });
    } else {
      yield put({
        type: SAGA.LISTNEWHOMESCREEN.RESULT_YOUTUBE,
        data: [],
        typeLoad: 'fail',
        nextAddressPage: '',
        total: -1, /*trong các trường hợp lỗi khi load dữ liệu, đưa total về -1 để xử lí logic*/
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: SAGA.LISTNEWHOMESCREEN.RESULT_YOUTUBE,
      data: [],
      typeLoad: 'fail',
      nextAddressPage: '',
      total: -1,
    });
  }
}

// Web HOU
function* takeWebHOU(action) {
  try {
    const webHOUResponse = yield listNewHomeScreenApi.WebHOUApi(action);
    if (webHOUResponse.status === 200) {
      let dataWebHOU = [];
      for (let i = 0; i < webHOUResponse.data.length; i++) {
        let data = {};
        if (
          !(
            webHOUResponse.data[i].TieuDe.indexOf('Dự phòng') !== -1 &&
            webHOUResponse.data[i].TieuDe.indexOf('/') !== -1
          ) &&
          webHOUResponse.data[i].TieuDe.indexOf('Back up bài') === -1
        ) {
          data.title = webHOUResponse.data[i].TieuDe;
          data.short_content = webHOUResponse.data[i].TomTat;
          data.img = webHOUResponse.data[i].anhbaiviet;
          data.uri = webHOUResponse.data[i].linkbaiviet;
          data.time = webHOUResponse.data[i].NgayVietBai;
          data.view = webHOUResponse.data[i].view;
          data.type = webHOUResponse.data[i].TenLoaiTin;
          data.id = webHOUResponse.data[i].PK_iMaTinTuc;
          yield dataWebHOU.push(data);
        }
      }
      yield put({
        type: SAGA.LISTNEWHOMESCREEN.RESULT_WEBHOU,
        data: dataWebHOU,
        typeLoad: 'done',
        nextAddressPage: webHOUResponse.page,
        total: webHOUResponse.total,
      });
    } else {
      yield put({
        data:[],
        type: SAGA.LISTNEWHOMESCREEN.RESULT_WEBHOU,
        typeLoad: 'fail',
        nextAddressPage: '',
        total: -1,
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      data:[],
      type: SAGA.LISTNEWHOMESCREEN.RESULT_WEBHOU,
      typeLoad: 'fail',
      nextAddressPage: '',
      total: -1,
    });
  }
}

export function* watchListNewHomeScreen() {
  yield takeLatest(SAGA.LISTNEWHOMESCREEN.LOAD_YOUTUBE, takeYoutube);
  yield takeLatest(SAGA.LISTNEWHOMESCREEN.LOAD_WEBHOU, takeWebHOU);
}
