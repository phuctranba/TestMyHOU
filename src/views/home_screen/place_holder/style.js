import {Dimensions, StyleSheet} from 'react-native';
import {Blues, sizes, Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const style_you = ScaledSheet.create({
  text_info: {
    width: '60%',
    marginHorizontal: '10%',
    height: '55%',
    backgroundColor: '#e4e4e4',
    borderRadius: '5@ms',
  },
  text_title: {
    marginHorizontal: '5%',
    height: '23%',
    width: '90%',
    alignSelf: 'center',
  },
  view_info_detail: {
    flexDirection: 'row',
    width: '50%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#00000000',
  },
  view_tou: {
    width: '226@ms',
    height:'270@ms',
    marginLeft: '14.4@s',
    marginTop:'10@ms',
    borderRadius:'10@ms'
  },
  view_info: {
    height: '90%',
    width: '85%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    marginLeft: '2@s',
    borderRadius: '10@ms',
    paddingBottom: '17%',
  },
  image_view: {
    borderRadius: '10@ms',
    marginHorizontal: '0.5%',
    marginTop: '1%',
    width: '99%',
    height: '55%',
    backgroundColor: '#d5d5d5',
  },
  line_title: {
    backgroundColor: '#e4e4e4',
    height: '27%',
    borderRadius: '5@ms',
  },
  view_time: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
    height: '8%',
    width: '100%',
  },
  text_time: {
    backgroundColor: '#e4e4e4',
    height: '85%',
    borderRadius: '5@ms',
    width: '50%',
  },
  view_chart: {
    backgroundColor: '#c0c0c0',
    position: 'absolute',
    width: '27%',
    height: '15%',
    bottom: 0,
    left: 0,
    zIndex: 2,
    borderTopRightRadius: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: '10@ms',
    borderBottomRightRadius: '10@ms',
  },
  view_detail: {
    width: '70%',
    height: '24%',
    alignItems: 'center',
    zIndex: 2,
    position: 'absolute',
    right: '2@s',
    bottom: '2@vs',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: '10@ms',
    backgroundColor: '#fff',
  },
  line_horizontal: {
    backgroundColor: '#bfbfbf',
    height: '1%',
    width: '87%',
  },
  container_info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '87%',
    height: '49.5%',
    backgroundColor: '#00000000',
  },
  icon_left: {
    width: '15%',
    marginLeft: '5%',
  },
  icon_right: {
    width: '15%',
    marginRight: '5%',
  },
});

export const style_uni = ScaledSheet.create({
  view_tou: {
    width: '194.4@ms0.3',
    height: '234@ms0.32',
    backgroundColor: '#fff',
    marginHorizontal: '7.2@s',
    paddingHorizontal: '5%',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginVertical: '3@vs',
    borderRadius: '10@ms0.3',
    justifyContent:'center'
  },
  image_new: {
    borderRadius: '10@ms',
    width: '100%',
    height: '48%',
    backgroundColor: '#d5d5d5',
  },
  text_time: {
    borderRadius: '3@ms',
    flexDirection: 'row',
    alignItems: 'center',
    height: '7%',
    marginVertical: '4%',
    backgroundColor: '#e4e4e4',
    width: '60%',
    // alignSelf:'flex-start'
  },
  text_title: {
    height: '28%',
    width: '100%',
    justifyContent: 'space-between',
  },
  line_title: {
    height: '22.75%',
    backgroundColor: '#e4e4e4',
    borderRadius: '3@ms',
  },
});

export const style_fa = ScaledSheet.create({
  view_tou: {
    width: '288@ms0.4',
    height: '108@ms0.32',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    borderRadius: '10@ms0.3',
    marginVertical: '3@vs',
  },
  image_new: {
    borderRadius: '10@ms',
    width: '43%',
    height: '80%',
    marginLeft: '3%',
    marginRight: '3%',
    backgroundColor: '#d5d5d5',
  },
  text_time: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '18%',
    backgroundColor: '#e4e4e4',
    marginVertical: '2%',
    width: '65%',
    borderRadius: '5@ms',
  },
  view_title: {
    width: '48%',
    justifyContent: 'space-between',
    marginRight: '3%',
    height: '76%',
  },
  text_title: {
    height: '65%',
    marginTop: '2%',
    justifyContent: 'space-between',
  },
  line_title: {
    height: '22%',
    width: '100%',
    backgroundColor: '#e4e4e4',
    borderRadius: '5@ms',
  },
  view_sup: {
    marginHorizontal: '7.2@s',
  },
});

export const style_fb = ScaledSheet.create({
  view_tou: {
    width: '270@ms0.45',
    height: '330@ms0.45',
    backgroundColor: '#fff',
    marginLeft: '10.8@ms',
    margin: '3@s',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: '10@ms',
  },
  tou: {
    flex: 1,
    width: '270@ms0.45',
    // height: "100%",
    backgroundColor: '#0000',
    justifyContent: 'space-between',
    borderRadius: '10@ms',
    paddingHorizontal: '4%',
    paddingTop: '3%',
    paddingBottom: '2%',
  },
  image: {
    borderRadius: '2@ms',
    width: '75%',
    height: '49%',
    marginTop: '1%',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#d5d5d5',
  },
  avatar: {
    width: '25.92@ms',
    height: '31.10@ms',
    backgroundColor: '#d5d5d5',
    borderRadius: '15@ms',
  },
  text_info: {
    height: '4.8%',
    borderRadius: '5@ms',
    backgroundColor: '#e4e4e4',
    marginVertical: '0.725%',
  },
  text_page: {
    backgroundColor: '#e4e4e4',
    borderRadius: '10@ms',
    height: '53%',
    width: '70%',
  },
  text_time: {
    backgroundColor: '#e4e4e4',
    borderRadius: '6@ms',
    height: '33%',
    width: '30%',
  },
  text_detail: {
    marginLeft: '8%',
    height: '48%',
    width: '35%',
    backgroundColor: '#e4e4e4',
    borderRadius: '5@ms',
  },
  view_info_detail: {
    flexDirection: 'row',
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_post: {
    width: '100%',
    height: '32.4@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_post_text: {
    flex: 1,
    height: '100%',
    paddingLeft: '2%',
    justifyContent: 'space-around',
  },
  content: {
    width: '100%',
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: '2%',
  },
  line: {
    width: '0.5%',
    height: '80%',
    backgroundColor: '#8b8b8b',
  },
  view_info: {
    width: '100%',
    height: '32.4@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const style_page_new = ScaledSheet.create({
  view_tou: {
    width: '355@ms0.7',
    height: '125@ms',
    backgroundColor: '#00000000',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text_title: {
    width: '100%',
    height: '72%',
    backgroundColor: '#00000000',
  },
  view_main: {
    height: '115.2@ms',
    width: '288@ms0.55',
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    alignItems: 'flex-end',
    marginRight: '10.08@s',
    borderRadius: '5@ms',
  },
  view_info: {
    height: '88@ms',
    width: '175@ms0.8',
    marginHorizontal: '3%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  view_time: {
    width: '55%',
    height: '14.76%',
    marginTop: '1%',
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
  },
  view_image: {
    borderRadius: '5@ms',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    position: 'absolute',
    left: '10.08@s',
    zIndex: 2,
    width: '138.6@ms',
    height: '89.1@ms',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d5d5',
  },
  line_title: {
    height: '20.5%',
    marginTop: '1.2%',
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
  },
});

export const style_page_you = ScaledSheet.create({
  view_tou: {
    width: '355@ms0.7',
    height: '162@ms0.4',
    backgroundColor: '#00000000',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text_title: {
    width: '100%',
    height: '72%',
    backgroundColor: '#00000000',
  },
  view_info_detail: {
    flexDirection: 'row',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_detail: {
    height: '45%',
    width: '33%',
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
    marginLeft: '8%',
  },
  view_main: {
    height: '149@ms0.4',
    width: '288@ms0.55',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    alignItems: 'flex-end',
    marginRight: '10.08@s',
    borderRadius: '5@ms',
  },
  view_info: {
    height: '88@ms',
    width: '175@ms0.8',
    marginHorizontal: '3%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: '15@vs',
  },
  view_time: {
    width: '55%',
    height: '14.76%',
    marginTop: '1%',
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
  },
  view_detail: {
    width: '100%',
    height: '33.49@ms0.7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '4.5@ms0.4',
  },
  line: {
    width: '0.2%',
    height: '70%',
    backgroundColor: '#8b8b8b',
  },
  view_image: {
    borderRadius: '5@ms',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    position: 'absolute',
    left: '10.08@s',
    zIndex: 2,
    width: '138.6@ms',
    height: '89.1@ms',
    alignItems: 'center',
    top: '23@ms0.4',
    justifyContent: 'center',
    backgroundColor: '#d5d5d5',
  },
  line_title: {
    height: '20.5%',
    marginTop: '1.2%',
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
  },
});