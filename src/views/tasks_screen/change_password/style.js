import { Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const style = Blues => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    input: {
      height: '50@ms',
      marginVertical: '5@vs',
      borderRadius: '25@ms',
      marginHorizontal: '10@s',
      borderColor: 'transparent',
      fontSize: '16@ms0.3',
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
    btn_change: {
      width: '100%',
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
      flexDirection: 'row',
    },
    btn_small: {
      width: '150@ms',
      marginTop: '10@vs',
      borderRadius: '20@ms',
      height: '40@ms',
      // alignSelf: "center",
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
    iconlogin: {
      paddingLeft: '15@ms',
      width: '35@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconload: {
      paddingRight: '15@ms',
      width: '35@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    main: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    view_round: {
      width: '120@ms',
      borderWidth: '0.5@ms',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: Blues.blue_5,
      borderRadius: '60@ms',
      margin: '10@ms',
    },
    view_round_small: {
      width: '90@ms',
      height: '90@ms',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      borderRadius: '45@ms',
      // margin: '10@ms',
      // transform: [{rotateX: '1deg'}],
    },
    text_1: {
      fontSize: '20@ms0.3',
      color: Blues.blue_6,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text_2: {
      fontSize: '14@ms0.3',
      color: Blues.blue_5,
      textAlign: 'center',
      marginHorizontal: '45@s',
      marginTop: '5@vs',
      marginBottom: '15@vs',
    },
    text_change: {
      color: 'white',
      fontSize: '18@ms0.3',
      fontWeight: 'bold',
    },
    view_small_button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '310@ms',
    },
    text_small: {
      fontSize: '15@ms0.3',
      fontWeight: '100',
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