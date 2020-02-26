import {HOST, LISTNEWHOMESCREEN_URL} from '../configURL';

// Lấy dữ liệu kênh youtube
function* YoutubeApi({typeLoad = 'nope', nextAddressPage = null}) {
  let details = {
    part: 'snippet',
    maxResults: '6',
    playlistId: 'UUzObwWgsS7pUgLQPR-i7UMw',
    key: 'AIzaSyCyVT7uzb4bYlXZZkkIBHXMTHkNPacjf3g',
    fields:
      'items(snippet(title,publishedAt,thumbnails(medium(url)),resourceId(videoId))),nextPageToken,pageInfo(totalResults)',

    // Cái này cần nếu load thêm item
    nextPageToken: nextAddressPage,
  };

  let res = {
    status: 0,
    data: [],
    nextPageToken: '',
    total: 0,
  };

  // Kiểm tra là load lần đầu hay load thêm vào danh sách
  let url =
    typeLoad === 'nope'
      ? `${LISTNEWHOMESCREEN_URL.YOUTUBE_LISTUPLOAD}?part=${
          details.part
        }&maxResults=${details.maxResults}&playlistId=${
          details.playlistId
        }&key=${details.key}&fields=${details.fields}`
      : `${LISTNEWHOMESCREEN_URL.YOUTUBE_LISTUPLOAD}?part=${
          details.part
        }&maxResults=${details.maxResults}&playlistId=${
          details.playlistId
        }&key=${details.key}&fields=${details.fields}&pageToken=${
          details.nextPageToken
        }`;

  yield fetch(url, {
    method: 'GET',
  })
    .then(response => {
      res.status = response.status;
      return response.json();
    })
    .then(data => {
      if (res.status === 200) {
        res.data = data.items;
        res.nextPageToken = data.nextPageToken;
        res.total = data.pageInfo.totalResults;
      }
    })
    .catch(error => {
      res.status = 404;
      // res.error = error.toString();
    });

  return res;
}

function* YoutubeApi_Detail(id) {
  let details = {
    part: 'statistics',
    fields: 'items(statistics)',
    id: id,
    key: 'AIzaSyAJoWNfBzvpSlQyMn4DCPjp2Anh_LoMMYQ',
  };

  var res = {
    status: 0,
    data: [],
  };

  let url = `${LISTNEWHOMESCREEN_URL.YOUTUBE_VIDEOS}?part=${
    details.part
  }&fields=${details.fields}&id=${details.id}&key=${details.key}`;

  yield fetch(url, {
    method: 'GET',
  })
    .then(response => {
      res.status = response.status;
      let data = response.json();
      return data;
    })
    .then(data => {
      if (res.status === 200) {
        res.data = data.items;
      } else {
        res.data = [];
      }
    })
    .catch(error => {
      res.status = 404;
      // res.error = error.toString();
    });

  return res;
}

// Lấy dữ liệu web HOU
function* WebHOUApi({nextAddressPage = 0}) {
  let details = {
    token:'2wfg9z8zkcrj5v9jepx64fgxc8gumi7awge0w5que5rh',
    // Cái này cần nếu load thêm item
    page: nextAddressPage + 1,
    perPage: '8',
  };

  let res = {
    status: 0,
    data: [],
    page: '',
    total: 0,
  };

  let url = `${LISTNEWHOMESCREEN_URL.WEB_HOU}?token=${details.token}&page=${
    details.page
  }&perPage=${details.perPage}`;

  yield fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      // res.status = response.status;
      res.status = response.status;
      console.log(res);
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (res.status === 200) {
        res.data = data.items;
        res.total = data.totalNews;
        res.page = nextAddressPage + 1;
      }
    })
    .catch(error => {
      console.log(error);
      res.status = 404;
    });

  return res;
}

export const listNewHomeScreenApi = {
  YoutubeApi,
  YoutubeApi_Detail,
  WebHOUApi,
};
