import {StyleSheet, Dimensions} from 'react-native';
import {Task_Colors, Blues} from '../../../../utils/values';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_sup: {
      width: '335@ms0.85',
      alignSelf: 'center',
      borderRadius: '20@ms',
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      backgroundColor: 'white',
      marginVertical: '5@vs',
      zIndex: -1,
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
      // paddingBottom:verticalScale(5),
      flex: 1,
      width: '100%',
      // paddingBottom: '150@ms0.3'
    },
  });
};
export default style;
