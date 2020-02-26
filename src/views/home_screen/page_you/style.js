import {StyleSheet, Dimensions} from 'react-native';
import {sizes, Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const style = Blues => {
  return ScaledSheet.create({
    view_tou: {
      width: '355@ms0.7',
      height: '162@ms0.4',
      backgroundColor: '#00000000',
      alignItems: 'flex-end',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    image_new: {
      borderRadius: '5@ms',
      marginHorizontal: '0.5%',
      marginTop: '1%',
      width: '99%',
      height: '99%',
      alignItems: 'center',
    },
    text_time: {
      color: Task_Colors.task_danger_dark,
      marginHorizontal: '5%',
      fontSize: '13@ms0.3',
    },
    text_title: {
      color: Task_Colors.task_elegant,
      fontSize: '13@ms0.4',
      fontWeight: 'bold',
    },
    view_info_detail: {
      flexDirection: 'row',
      width: '25%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text_detail: {
      color: '#2f2f2f',
      fontSize: '12@ms0.3',
      marginLeft: '8%',
      // height:"48%",
      textAlign: 'left',
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
      flexDirection: 'row',
      alignItems: 'center',
      width: '175@ms0.8',
      justifyContent: 'flex-start',
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
      top: '23@ms0.4',
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
