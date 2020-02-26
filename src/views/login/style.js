import {StyleSheet, Dimensions} from 'react-native';
import {Blues, Task_Colors} from '../../utils/values';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

const window = Dimensions.get('window');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export const IMAGE_HEIGHT = verticalScale(220);
export const IMAGE_HEIGHT_SMALL = verticalScale(70);

const style = Blues => {
  return ScaledSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '20@vs',
    },
    input: {
      height: '45@ms',
      // marginHorizontal: 10,
      // marginVertical: '5@vs',
      // paddingVertical: 5,
      // paddingHorizontal: 15,
      fontSize: '16@ms0.3',
      borderRadius: '25@ms',
      marginHorizontal: '10@s',
      borderColor: 'transparent',
      flex: 1,
    },
    item: {
      width: '310@ms',
      height: '45@ms',
      marginVertical: '5@vs',
      borderRadius: '25@ms',
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
    },
    logo: {
      resizeMode: 'contain',
      padding: '10@ms0.3',
      marginTop: '20@vs',
      alignSelf: 'center',
    },
    btn_login: {
      width: '310@ms',
      marginTop: '20@vs',
      borderRadius: '25@ms',
      height: '45@ms',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
    },
    imageBackground: {
      width: deviceWidth,
      height: deviceHeight,
      flex: 1,
    },
    forgetPass: {
      color: Blues.blue_8,
      fontSize: '15@ms0.3',
    },
    orGo: {
      color: Blues.blue_6,
      fontSize: '15@ms0.3',
      marginVertical: '20@vs',
      alignSelf: 'center',
    },
    viewIcon: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '30@vs',
    },
    iconlogin: {
      paddingLeft: '15@ms',
      width: '35@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text_login: {
      color: 'white',
      fontSize: '18@ms0.3',
      fontWeight: 'bold',
    },
    button_forget: {
      alignSelf: 'center',
      width: '310@ms',
      marginTop: '10@vs',
      alignItems: 'flex-start',
    },
    text_orgo: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tooltip: {
      width: '310@ms',
      paddingLeft: '20@ms',
      fontSize: 12,
      color: Task_Colors.task_danger_dark,
    },
  });
};
export default style;
