// import {fontSize_actionbutton} from "../../user_screen/style";
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {height_statusbar, sizes} from '../../../utils/values';

export const H = sizes.Height_Devices;
export const W = sizes.Width_Devices;

export const height_view = moderateScale(290, 0.6);
export const size_avatar = moderateScale(100); /*108-100*/
export const top_avatar = moderateScale(47, 0.6); /*50*/
export const top_text_name_code = moderateScale(153, 0.6); /*157*/
export const marginleft_avatar = (W - size_avatar) / 2;
export const size_button = moderateScale(70); /*70*/
export const marginbottom_button = moderateScale(70); /*70*/
export const marginvertical_button = moderateScale(20, 4); /*20*/
export const marginbottom_button_schedule = moderateScale(25); /*20*/
export const size_item_button = moderateScale(13); /*13*/
export const size_actionbutton = moderateScale(45); /*45*/
export const fontSize_actionbutton = moderateScale(18);
export const size_text = {
  text_name: moderateScale(14, 0.7) /*16*/,
  text_sinhvien: moderateScale(22, 0.3) /*22*/,
  text_code: moderateScale(12, 0.3) /*12*/,
  text_button: moderateScale(12, 0.3) /*12*/,
  text_info: moderateScale(37, 0.3) /*37*/,
  text_smaill: moderateScale(10, 0.4),
};

const style = Blues => {
  return ScaledSheet.create({
    view_header: {
      width: '100%',
      height: height_view + height_statusbar,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#00000000',
      position: 'absolute',
      zIndex: 3,
      top: 0,
      left: 0,
      right: 0,
    },
    avatar_view: {
      top: top_avatar,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      zIndex: 2,
      left: marginleft_avatar,
      borderRadius: '55@ms',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: size_avatar,
      height: size_avatar,
    },
    avatar_user: {
      width: size_avatar,
      height: size_avatar,
      borderRadius: '55@ms',
    },
    segmentstyle: {
      width: '140@ms',
      height: '65@ms',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000000',
    },
    view_tabs: {
      justifyContent: 'flex-start',
      height: '140@ms',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      width: '85%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '5@ms',
      bottom: '3@ms',
      alignSelf: 'center',
      alignItems: 'center',
      marginHorizontal: '2@ms',
    },
    text_seg: {
      fontWeight: '300',
      fontSize: '15@ms0.3',
    },
    view_seg: {
      flexDirection: 'row',
      height: '65@ms',
      width: '280@ms',
      justifyContent: 'center',
    },
    view_item: {
      position: 'absolute',
      zIndex: 2,
      width: '70@ms' /*70*/,
      height: '70@ms',
      borderRadius: '35@ms',
      justifyContent: 'center',
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
    text_bt: {
      textAlign: 'center',
      fontSize: size_text.text_button,
    },
    view_name_code: {
      position: 'absolute',
      zIndex: 2,
      top: top_text_name_code,
      alignItems: 'center',
    },
    text_name: {
      fontSize: size_text.text_name,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    actionButtonIcon: {
      fontSize: fontSize_actionbutton,
      height: '22@ms',
      color: 'white',
    },
    style_header_rectangle: {
      height: '45@ms',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      marginBottom: '5@ms',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    container: {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#00000000',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    view_main: {
      position: 'absolute',
      top: 0,
      zIndex: 2,
      width: '100%',
    },
    actionbutton_item: {
      height: '25@ms',
      top: '9@vs',
      justifyContent: 'center',
    },
    text_screen: {
      fontSize: size_text.text_sinhvien,
      fontWeight: 'bold',
      color: '#ffffff',
      height: '40@ms',
      marginTop: '10@ms',
    },
    view_bell: {
      position: 'absolute',
      top: '5@vs',
      right: W * moderateScale(0.02, 3),
      width: '29@ms',
      height: '29@ms',
    },
    tou_bell: {
      borderRadius: '16@ms',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    text_code_student: {
      color: '#ffffff',
      fontSize: size_text.text_code,
    },
    tou_button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    view_text_info: {
      position: 'absolute',
      zIndex: 2,
      width: '100@ms',
      height: '75@ms',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '3@ms',
      top: top_avatar,
    },
    text_small: {
      fontSize: size_text.text_smaill,
      color: '#ffffff',
      marginVertical: '10@ms',
      position: 'absolute',
      zIndex: 2,
    },
    text_big: {
      fontSize: size_text.text_info,
      fontWeight: 'bold',
      color: '#ffffff',
      marginVertical: '10@ms',
    },
  });
};

export default style;
