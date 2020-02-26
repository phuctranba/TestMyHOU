import {StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Blues, Task_Colors} from '../../../../utils/values';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_sup: {
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      marginVertical: '10@vs',
      borderWidth: '0.5@ms',
      borderColor: 'white',
    },
    view_main: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      height: '60@ms',
    },
    view_time: {
      width: '15%',
      backgroundColor: Blues.blue_6,
      // paddingVertical:'5@vs',
      borderRadius: '5@ms',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '2%',
      height: '40%',
    },
    view_more_detail: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    text_time: {
      color: 'white',
      fontSize: '13@ms',
    },
    view_detail: {
      width: '81%',
      borderLeftWidth: '0.5@ms',
      borderLeftColor: 'gray',
      height: '100%',
    },
    view_row: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    text_left: {
      color: Task_Colors.task_elegant,
      fontSize: '13@ms',
      borderLeftWidth: '0.5@ms',
      borderLeftColor: Blues.blue_6,
      marginHorizontal: '5@s',
      paddingHorizontal: '5@s',
      marginVertical: '5@vs',
      width: '26%',
      textAlign: 'left',
    },
    text_subject: {
      color: Blues.blue_6,
      fontSize: '14@ms0.4',
      fontWeight: 'bold',
      // marginHorizontal:'5@s',
      paddingRight: '10@s',
      marginVertical: '5@vs',
      width: '70%',
      textAlign: 'right',
    },
    text_right: {
      color: Task_Colors.task_elegant,
      fontSize: '14@ms0.4',
      marginHorizontal: '5@s',
      paddingHorizontal: '5@s',
      marginVertical: '5@vs',
      width: '65%',
      textAlign: 'right',
    },
    view_tou: {
      width: '98%',
      alignSelf: 'center',
      paddingTop: '32@vs',
      marginVertical: '10@vs',
      marginHorizontal: '1%',
    },
    view_day: {
      backgroundColor: 'transparent',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      position: 'absolute',
      top: 0,
      left: '10@s',
      zIndex: 2,
      alignItems: 'center',
    },
    text_day: {
      fontWeight: 'bold',
      backgroundColor: 'white',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      color: Task_Colors.task_special,
      fontSize: '16@ms0.4',
      paddingHorizontal: '15@s',
      paddingVertical: '5@vs',
      borderRadius: '5@ms',
      margin: '5@ms',
    },
    container: {
      backgroundColor: 'white',
      width: '98%',
      borderRadius: '5@ms',
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      marginHorizontal: '1%',
      marginVertical: '3@vs',
    },
  });
};
export default style;
