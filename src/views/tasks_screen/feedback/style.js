import {Blues, Task_Colors, sizes} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const style = Blues => {
  return ScaledSheet.create({
    icon_face: {
      marginHorizontal: '6@s',
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    view_radios: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      borderTopWidth: '0.5@ms',
      borderTopColor: Blues.blue_6,
      paddingVertical: '5@vs',
    },
    radio: {
      marginLeft: '10@s',
      // zIndex:-2,
      // position: "absolute"
    },
    text_radio: {
      // color:Blues.blue_6,
      fontSize: '15@ms0.3',
      marginVertical: '10@vs',
      paddingLeft: '10@s',
    },
    scroll_view: {
      flex: 1,
      // marginTop:'45@vs'
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '324@s',
      alignSelf: 'center',
    },
    text_header: {
      color: Blues.blue_main,
      fontSize: '20@ms0.3',
      marginTop: '15@vs',
      fontWeight: 'bold',
    },
    view_list_face: {
      flexDirection: 'row',
      marginVertical: '12@vs',
    },
    text_face: {
      textAlign: 'center',
      color: Blues.blue_7,
      fontSize: '14@ms0.3',
      marginBottom: '20@vs',
    },
    input: {
      fontSize: '15@ms0.3',
      width: '100%',
      borderRadius: '5@ms',
      height: '140@ms',
      borderWidth: '1@ms',
      borderColor: Blues.blue_6,
      padding: '10@ms',
      color: Task_Colors.task_unique,
    },
    view_checkbox: {
      width: '100%',
      flexDirection: 'row',
    },
    checkbox: {
      marginLeft: 0,
      marginTop: '10@vs',
      marginRight: 0,
      paddingTop: 0,
      paddingRight: '5@s',
      paddingBottom: 0,
    },
    view_text_checkbox: {
      marginTop: '10@vs',
      width: '86%',
    },
    view_text_checkbox_big: {
      color: Blues.blue_6,
      fontSize: '15@ms0.3',
    },
    view_text_checkbox_small: {
      textAlign: 'justify',
      color: Blues.blue_5,
      fontSize: '12@ms0.3',
    },
    button_feedback: {
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      marginVertical: '20@vs',
      width: '100%',
      backgroundColor: Blues.blue_5,
      borderRadius: '20@ms',
      height: '40@ms',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon_feedback: {
      // marginHorizontal:'10@s',
      // left:'3@s',
    },
    text_feedback: {
      color: '#ffffff',
      fontSize: '18@ms0.3',
    },
  });
};
export default style;
