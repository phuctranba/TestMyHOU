import createReducer from '../../utils/functions/create-reducer';
import {SAGA} from '../constant';

const initialState = {
  nextAddressPageYoutube: '',
  dataYoutube: [],
  isYoutubeLoad: 'nope',
  totalYoutube: 0, /*Sẽ cài đặt cái total này bằng -1 nếu như dữ liệu về bị lỗi*/
  dataFanpage: [],
  isFanpageLoad: 'nope',
  nextAddressPageWebHOU: '',
  dataWebHOU: [],
  totalWebHOU: 0,
  isWebHOULoad: 'done',
  dataCNTT: [],
  isCNTTLoad: 'nope',
  dataCNSH: [],
  isCNSHLoad: 'nope',
  dataLuat: [],
  isLuatLoad: 'nope',
  dataTDCN: [],
  isTDCNLoad: 'nope',
  dataDTTX: [],
  isDTTXLoad: 'nope',
  dataCNDT_TT: [],
  isCNDT_TTLoad: 'nope',
  dataKienTruc: [],
  isKienTrucLoad: 'nope',
  dataTiengAnh: [],
  isTiengAnhLoad: 'nope',
  dataKinhTe: [],
  isKinhTeLoad: 'nope',
  dataTiengTQ: [],
  isTiengTQLoad: 'nope',
  dataDuLich: [],
  isDuLichLoad: 'nope',
  dataTCNH: [],
  isTCNHLoad: 'nope',
  dataSauDH: [],
  isSauDHLoad: 'nope',
  dataE_learning: [],
  isE_learningLoad: 'nope',
  dataTTHOUDaNang: [],
  isTTHOUDaNangLoad: 'nope',
  dataTT_NN_BDNH: [],
  isTT_NN_BDNHLoad: 'nope',
};

const actionHander = {
  // Kênh youtube
  [SAGA.LISTNEWHOMESCREEN.LOAD_YOUTUBE]: (state = initialState, action) => {
    return {
      ...state,
      isYoutubeLoad: action.typeLoad,
    };
  },
  [SAGA.LISTNEWHOMESCREEN.RESULT_YOUTUBE]: (state = initialState, action) => {
    // Ở đây giữ lại địa chỉ trang tiếp theo nếu load lỗi
    // Kiểm tra xem có phải lỗi 2 lần liên tiếp trở lên không
    let nextAddress = action.total === -1 ? state.nextAddressPageYoutube : action.nextAddressPage;
    let isLoad= state.totalYoutube===-1&&action.total === -1?'fail_2':action.typeLoad;
    return {
      ...state,
      dataYoutube: state.dataYoutube.concat(action.data),
      isYoutubeLoad: isLoad,
      nextAddressPageYoutube: nextAddress,
      totalYoutube: action.total,
    };
  },

  // Trang web HOU
  [SAGA.LISTNEWHOMESCREEN.LOAD_WEBHOU]: (state = initialState, action) => {
    return {
      ...state,
      isWebHOULoad: action.typeLoad,
    };
  },
  [SAGA.LISTNEWHOMESCREEN.RESULT_WEBHOU]: (state = initialState, action) => {
    // Ở đây giữ lại địa chỉ trang tiếp theo nếu load lỗi
    // Kiểm tra xem có phải lỗi 2 lần liên tiếp trở lên không
    let nextAddress = action.total === -1 ? state.nextAddressPageWebHOU : action.nextAddressPage;
    let isLoad= state.totalWebHOU===-1&&action.total === -1?'fail_2':action.typeLoad;
    return {
      ...state,
      dataWebHOU: state.dataWebHOU.concat(action.data),
      isWebHOULoad: isLoad,
      nextAddressPageWebHOU: nextAddress,
      totalWebHOU: action.total,
    };
  },
};

export default createReducer(initialState, actionHander);
