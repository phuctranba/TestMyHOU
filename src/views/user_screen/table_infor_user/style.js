import {StyleSheet, Dimensions} from 'react-native';
import {Blues, Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_sup: {
      width: '335@ms0.8',
      alignSelf: 'center',
      borderRadius: '20@ms',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      backgroundColor: 'white',
      marginVertical: '5@vs',
    },
    view_line: {
      width: '94%',
      height: '0.5@ms',
      backgroundColor: Task_Colors.task_special_dark,
      alignSelf: 'center',
    },
    view_line_small: {
      width: '15%',
      height: '0.5@ms',
      backgroundColor: 'gray',
      marginLeft: '3%',
    },
    text_header_title_blue: {
      color: Blues.blue_7,
      fontWeight: 'bold',
      fontSize: '16@ms0.4',
      paddingHorizontal: '10@s',
      paddingVertical: '10@vs',
    },
    view_header: {
      marginLeft: '4%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text_header_title_black: {
      color: Task_Colors.task_special_dark,
      fontWeight: 'bold',
      fontSize: '14@ms0.4',
      paddingHorizontal: '10@s',
      paddingVertical: '10@ms',
    },
    text_infor: {
      textAlign: 'left',
      width: '100%',
      fontSize: '13@ms0.4',
      marginVertical: '7@vs',
      color: Task_Colors.task_special_dark,
    },
    table: {
      borderRadius: '20@ms',
      backgroundColor: '#00000000',
      marginHorizontal: '10@s',
      marginVertical: '5@vs',
    },
    scroll_view: {
      width: '100%',
      // backgroundColor:"#ebf4ff"
    },
    tou_more: {
      position: 'absolute',
      right: '15@s',
      backgroundColor: 'white',
      borderRadius: '5@ms',
      padding: '3@ms',
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
    },
  });
};
export default style;
