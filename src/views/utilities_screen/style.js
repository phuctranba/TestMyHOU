import {StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {Blues, height_statusbar, sizes} from '../../utils/values';

export const deviceWidth = Dimensions.get('window').width;

let height = verticalScale(45) + height_statusbar;

const style = Blues => {
  return ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    scroll_view: {
      paddingTop: verticalScale(45) + height_statusbar,
    },
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
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      marginBottom: '5@vs',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
    },
  });
};
export default style;
