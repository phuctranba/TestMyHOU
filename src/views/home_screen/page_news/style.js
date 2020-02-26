import {StyleSheet, Dimensions} from 'react-native';
import {Blues, sizes, Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const style = Blues => {
  return ScaledSheet.create({
    view_tou: {
      width: '355@ms0.7',
      height: '125@ms',
      backgroundColor: '#00000000',
      alignItems: 'flex-end',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    image_new: {
      borderRadius: '5@ms',
      marginHorizontal: '0.5%',
      marginTop: '1%',
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    text_time: {
      color: Blues.blue_8,
      marginHorizontal: '5%',
      fontSize: '13@ms0.3',
    },
    text_title: {
      color: Task_Colors.task_elegant,
      fontSize: '12.5@ms',
      fontWeight: 'bold',
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
    },
    view_time: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '175@ms0.8',
      justifyContent: 'flex-start',
    },
    view_image: {
      borderRadius: '5@ms',
      elevation: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      position: 'absolute',
      left: '10.08@s',
      zIndex: 2,
      width: '140@ms',
      height: '90@ms',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    flatlist: {
      width: sizes.Width_Devices,
      paddingVertical: '6.4@vs',
      paddingTop: '25@vs',
    },
  });
};
export default style;
