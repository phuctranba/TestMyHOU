import {Dimensions} from 'react-native';
import {Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

export const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_tou: {
      width: '226@ms',
      height: '270@ms',
      backgroundColor: '#00000000',
      marginLeft: '14.4@s',
      marginTop:'10@ms'
    },
    image_new: {
      borderRadius: '10@ms',
      marginHorizontal: '0.5%',
      marginTop: '1%',
      width: '99%',
      height: '55%',
    },
    text_info: {
      color: Task_Colors.task_elegant,
      marginHorizontal: '5@s',
      fontSize: '12@ms0.3',
      marginVertical: '1%',
    },
    text_time: {
      color: Task_Colors.task_danger_dark,
      marginHorizontal: '5%',
      fontSize: '13@ms0.3',
      marginVertical: '1%',
    },
    text_title: {
      color: Task_Colors.task_elegant,
      marginHorizontal: '5%',
      fontSize: '13@ms0.3',
      fontWeight: 'bold',
    },
    view_info_detail: {
      flexDirection: 'row',
      width: '50%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: '#00000000',
    },
    view_info: {
      height: '90%',
      width: '85%',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginLeft: '2@s',
      borderRadius: '10@ms',
      paddingBottom: '17%',
    },
    view_chart: {
      backgroundColor: '#cd3f3a',
      position: 'absolute',
      width: '27%',
      height: '15%',
      bottom: 0,
      left: 0,
      zIndex: 2,
      borderTopRightRadius: '10@ms',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: '10@ms',
      borderBottomRightRadius: '10@ms',
    },
    container_info: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '87%',
      height: '49.5%',
      backgroundColor: '#00000000',
    },
    line_horizontal: {
      backgroundColor: '#bfbfbf',
      height: '1%',
      width: '87%',
    },
    view_detail: {
      width: '70%',
      height: '24%',
      alignItems: 'center',
      zIndex: 2,
      position: 'absolute',
      right: '2@s',
      bottom: '2@vs',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      borderRadius: '10@ms',
      backgroundColor: '#fff',
    },
    view_time: {
      flexDirection: 'row',
      marginHorizontal: '5%',
      alignItems: 'center',
    },
  });
};
export default style;
