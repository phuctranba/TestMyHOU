import {Task_Colors, sizes, height_statusbar} from '../../utils/values';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
let height = verticalScale(45) + height_statusbar;

const style = Blues => {
  return ScaledSheet.create({
    view_tou: {
      width: sizes.Width_Devices,
      height: '54@ms',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    text_title: {
      color: Task_Colors.task_special,
      fontSize: '16@ms0.3',
      fontWeight: '200',
      width: '85%',
    },
    flatlist: {
      backgroundColor: '#00000000',
      marginBottom: '15@vs',
      // marginTop:'7.2@vs',
      paddingTop: verticalScale(45) + height_statusbar,
      paddingBottom: verticalScale(61),
    },
    text_header: {
      fontSize: '20@ms0.3',
      fontWeight: 'bold',
      color: Blues.blue_main,
    },
    button_bell: {
      position: 'absolute',
      right: '15@s',
    },
    header: {
      width: '100%',
      height: height,
      paddingTop: height_statusbar,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      marginBottom: '5@vs',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
    },
    view_icon: {
      width: '15%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon_arrow: {
      position: 'absolute',
      right: '15@s',
    },
    text_yesno: {
      fontSize: '16@ms0.3',
      // fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: '7@vs',
    },
    container_modal: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 0,
    },
  });
};
export default style;
