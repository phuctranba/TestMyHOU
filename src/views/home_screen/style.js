import {StyleSheet, Dimensions} from 'react-native';
import {Blues, height_statusbar} from '../../utils/values';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';

const window = Dimensions.get('window');

export const deviceWidth = Dimensions.get('window').width;
let height = verticalScale(45) + height_statusbar;

const style = Blues => {
  return ScaledSheet.create({
    text_header: {
      fontSize: '20@ms0.3',
      fontWeight: 'bold',
      color: Blues.blue_main,
    },
    button_bell: {
      position: 'absolute',
      right: '15@s',
    },
    header: {
      width: '100%',
      height: height,
      paddingTop: height_statusbar,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      marginBottom: '5@vs',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
    },
    container: {
      width: '100%',
      height: '100%',
    },
    text_title_list: {
      // color:Blues.blue_7,
      marginHorizontal: '14.4@s',
      marginBottom: '3.6@vs',
      marginTop: '21.6@vs',
      fontSize: '18@ms0.3',
      fontWeight: 'bold',
    },
    scroll_view: {
      paddingTop: verticalScale(45) + height_statusbar,
    },
    text_more: {
      // color:Blues.blue_8,
      fontSize: '12@ms0.3',
      fontWeight: 'bold',
    },
    tou_more: {
      marginBottom: '3.6@vs',
      marginTop: '21.6@vs',
      marginHorizontal: '14.4@s',
      paddingHorizontal: '10@s',
      paddingVertical: '5@vs',
      borderRadius: '15@ms',
      backgroundColor: '#fff',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      borderTopWidth: 0,
    },
    container_header: {
      backgroundColor: '#00000000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
};
export default style;
