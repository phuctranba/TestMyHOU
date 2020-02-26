import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {Blues, Task_Colors} from '../../../utils/values';
import {height_view} from '../style';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    container: {
      // justifyContent: "center",
      alignItems: 'center',
      backgroundColor: '#ebf4ff',
      // Có thể sẽ bỏ flex
      flex: 1,
    },
    title_chart: {
      alignSelf: 'center',
      marginTop: '5@vs',
      marginBottom: '15@vs',
      fontSize: '15@ms0.3',
      color: '#383838',
    },
    view_table: {
      width: '345@ms0.8',
      // marginHorizontal: '5@s',
      marginVertical: '10@vs',
      paddingHorizontal: '7@s',
      borderRadius: '5@ms',
      elevation: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      paddingVertical: '10@vs',
      backgroundColor: 'white',
    },
    header_table: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    view_header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text_header: {
      margin: '5@ms',
      fontSize: '16@ms0.4',
      color: Blues.blue_7,
      fontWeight: 'bold',
    },
    icon_open_more: {
      backgroundColor: 'white',
      borderRadius: '5@ms',
      padding: '3@ms',
      marginBottom: '10@vs',
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
    },
    row_header: {
      height: '40@ms',
      backgroundColor: Blues.blue_1,
    },
    text_row_header: {
      textAlign: 'center',
      fontWeight: '500',
      width: '100%',
      fontSize: '13@ms',
      marginVertical: '6@s',
      color: Task_Colors.task_special_dark,
    },
    text_table: {
      fontSize: '13@ms',
      textAlign: 'left',
      width: '100%',
      margin: '6@s',
      color: '#4a4a4a',
    },
    scroll_view: {
      paddingTop: height_view,
      paddingBottom: '50@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title_local_chart: {
      marginHorizontal: '20@ms',
      marginTop: '30@ms',
      fontSize: '14@ms0.3',
      fontWeight: '500',
      color: '#4c4c4c',
    },
  });
};
export default style;
