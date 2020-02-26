import {StyleSheet, Dimensions} from 'react-native';
import {Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const style = Blues => {
  return ScaledSheet.create({
    view_date: {
      backgroundColor: 'white',
      // elevation: 2,
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 1,
      // },
      // shadowOpacity: 0.20,
      // shadowRadius: 1.41,
      width: '64@ms',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30@ms',
    },
    text_day_snap_list: {
      backgroundColor: '#00000000',
      fontSize: '16@ms0.3',
      fontWeight: 'bold',
      color: Task_Colors.task_unique,
    },
    container: {
      backgroundColor: '#ebf4ff',
      // width:"100%",
      // height:"100%",
      flex: 1,
      // justifyContent: "center",
      alignItems: 'center',
    },
    view_week: {
      backgroundColor: '#fff',
      width: '315@ms0.8',
      height: '45@ms',
      justifyContent: 'center',
      borderRadius: '5@ms',
      alignSelf: 'center',
      marginVertical: '5@vs',
      alignItems: 'center',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    button_from_week: {
      backgroundColor: '#00000000',
      position: 'absolute',
      zIndex: 3,
      left: '5%',
      borderRadius: '5@ms',
      marginVertical: '5@vs',
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '32@ms',
    },
    text_from_week: {
      backgroundColor: '#00000000',
      fontSize: '14@ms',
      color: Task_Colors.task_special_dark,
    },
    view_icon_arrow: {
      backgroundColor: '#00000000',
      position: 'absolute',
      zIndex: 3,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      right: '16%',
    },
    view_icon_schedule: {
      backgroundColor: 'white',
      position: 'absolute',
      zIndex: 3,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      right: '5%',
      borderRadius: '5@ms',
      width: '9%',
      marginVertical: '5@vs',
      height: '32@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    view_container_snap_list: {
      marginLeft: '25%',
      marginRight: '18%',
      marginVertical: '5@vs',
      backgroundColor: 'white',
    },
    view_content_container_snap_list: {
      alignSelf: 'center',
      height: '30@ms',
    },
  });
};
export default style;
