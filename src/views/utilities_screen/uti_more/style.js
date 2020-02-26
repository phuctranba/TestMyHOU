import {StyleSheet, Dimensions} from 'react-native';
import {Blues, Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const style = Blues => {
  return ScaledSheet.create({
    text_header: {
      color: Blues.blue_7,
      marginHorizontal: '14.4@s',
      marginBottom: '3.6@vs',
      marginTop: '21.6@vs',
      fontSize: '18@ms0.3',
      fontWeight: 'bold',
    },
    view_tou: {
      width: '324@ms',
      height: '200@ms',
      backgroundColor: '#fff',
      marginVertical: '10@vs',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      borderRadius: '10@vs',
      alignSelf: 'center',
    },
    image_new: {
      borderRadius: '10@vs',
      width: '50%',
      height: '100%',
    },
    text_info: {
      color: Task_Colors.task_elegant,
      fontSize: '13@ms0.3',
      width: '50%',
      padding: '10@s',
    },
    text_title: {
      color: Task_Colors.task_elegant,
      marginHorizontal: '5%',
      fontSize: '14@ms0.3',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text_pre: {
      color: '#ffffff',
      marginHorizontal: '5%',
      fontSize: '13@ms0.3',
      marginVertical: '4%',
    },
    container: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    view_icon: {
      backgroundColor: Blues.blue_7,
      position: 'absolute',
      width: '40%',
      height: '15%',
      bottom: 0,
      right: 0,
      zIndex: 2,
      borderTopLeftRadius: '10@ms',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: '10@ms',
      borderBottomRightRadius: '10@ms',
      flexDirection: 'row',
    },
    view_title: {
      width: '50%',
      height: '20%',
      alignItems: 'center',
      zIndex: 2,
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderBottomLeftRadius: '10@ms',
      borderBottomRightRadius: '10@ms',
    },
  });
};
export default style;
