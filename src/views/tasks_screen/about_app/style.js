import {Blues, height_statusbar, Task_Colors} from '../../../utils/values';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';

const style = Blues => {
  return ScaledSheet.create({
    main: {
      flex: 1,
      width: '100%',
      height: '100%',
      paddingTop: height_statusbar + verticalScale(45),
      alignItems: 'center',
    },
    text_1: {
      fontSize: '18@ms0.3',
      color: Blues.blue_6,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text_2: {
      fontSize: '15@ms0.3',
      color: Blues.blue_6,
      textAlign: 'center',
      marginHorizontal: '15@s',
      marginTop: '15@s',
      lineHeight: '25@ms',
    },
    text_3: {
      fontSize: '13@ms0.3',
      color: Blues.blue_7,
      textAlign: 'center',
      // margin: '15@s',
      lineHeight: '20@ms',
    },
    button_feedback: {
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      marginVertical: '20@vs',
      width: '324@s',
      backgroundColor: Blues.blue_5,
      borderRadius: '20@ms',
      height: '40@ms',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
    icon_feedback: {
      // marginHorizontal:'10@s',
      // left:'3@s',
    },
    text_feedback: {
      color: '#ffffff',
      fontSize: '18@ms0.3',
    },
  });
};
export default style;
