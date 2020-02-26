import {ScaledSheet} from 'react-native-size-matters';
import {sizes} from '../../utils/values/sizes';
// import {Blues} from "../../utils/values";

const style = Blues => {
  return ScaledSheet.create({
    title: {
      fontSize: '13@ms0.3',
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: '5@vs',
      marginTop: '-6@vs',
      lineHeight: '22@ms',
      maxHeight: '66@ms',
      overflow: 'hidden',
      alignSelf: 'flex-start',
    },
    image: {
      height: '70@ms',
      width: '60@ms',
    },
    view_row: {
      flexDirection: 'row',
      elevation: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      alignItems: 'center',
    },
    view_img: {
      width: '30@ms',
      height: '30@ms',
      marginHorizontal: '15@s',
      position: 'absolute',
      top: '5@vs',
    },
    view_content: {
      flex: 1,
      paddingLeft: '3@s',
      height: '90@ms',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(114,114,114,0.3)',
    },
    txt_title: {
      fontSize: '16@ms0.3',
      fontWeight: '500',
      color: '#353535',
      lineHeight: '18@ms',
      marginBottom: '2@vs',
      alignSelf: 'flex-start',
    },
    txt_detail: {
      fontSize: '12@ms0.3',
      color: '#353535',
      lineHeight: '18@ms',
      alignSelf: 'flex-start',
    },
    icon_clock: {
      fontSize: '12@ms0.3',
      color: '#5b62ed',
      alignSelf: 'flex-start',
    },
    flatlist: {
      width: sizes.Width_Devices,
      paddingTop: '45@vs',
      flexGrow: 1,
    },
    tou_item: {
      height: '90@ms',
      backgroundColor: 'white',
    },
    header_item: {
      width: '60@ms',
      height: '90@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon_star_item: {
      alignSelf: 'flex-start',
      transform: [{rotateY: '180deg'}],
      marginTop: '10@vs',
    },
    view_hide: {
      width: '100%',
      // height:'90@ms',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 0,
      flexDirection: 'row',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
    },
    background_hide: {
      marginHorizontal: '25@s',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text_hide: {
      fontSize: '15@ms0.3',
      color: 'white',
      fontWeight: '500',
    },
    text_empty: {
      color: Blues.blue_4,
      fontWeight: 'bold',
      fontSize: 23,
    },
  });
};
export default style;
