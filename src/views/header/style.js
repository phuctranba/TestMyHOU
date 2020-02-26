import {StyleSheet, Dimensions} from 'react-native';
import {Blues} from '../../utils/values';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {height_statusbar} from '../../utils/values';

export const deviceWidth = Dimensions.get('window').width;
const style = Blues => {
  return ScaledSheet.create({
    // search_icon: {
    //     height: 30,
    //     width: 30,
    //     justifyContent: 'center',
    //     alignItems: "center",
    //     borderBottomRightRadius: 25,
    //     borderTopRightRadius: 25,
    //     alignSelf: "center",
    // },
    // search_text: {
    //     flex:1,
    //     fontSize: 13,
    //     alignSelf: "center",
    //     height: 30,
    //     padding: 0
    // },
    // search: {
    //     alignItems:'center',
    //     borderRadius: 25,
    //     height: 30,
    // },
    button_left: {
      left: '15@s',
      position: 'absolute',
    },
    container: {
      position: 'absolute',
      height: verticalScale(50) + height_statusbar,
      zIndex: 2,
      top: 0,
      left: 0,
      right: 0,
      justifyContent: 'flex-end',
    },
    button_right: {
      right: '15@s',
      position: 'absolute',
    },
    style_header_round: {
      height: '40@vs',
      backgroundColor: 'white',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      borderRadius: '25@ms',
      marginVertical: '5@vs',
      marginHorizontal: '8@s',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    style_header_rectangle: {
      height: verticalScale(45) + height_statusbar,
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
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    style_header_rectangle_chart: {
      height: '45@vs',
      backgroundColor: 'white',
      elevation: 0,
      marginBottom: '5@vs',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    tou: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10@ms',
    },
    button_cancel: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5@ms',
      backgroundColor: '#1e5cff',
      marginLeft: '5@s',
      // padding:4,
      height: '28@vs',
    },
    text_cancel: {
      fontSize: '13@ms0.3',
      color: 'white',
      fontWeight: '500',
    },
    title: {
      color: Blues.blue_7,
      fontSize: '18@ms0.4',
    },
  });
};

export default style;
