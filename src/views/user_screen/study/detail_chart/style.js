import {StyleSheet, Dimensions} from 'react-native';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {Blues} from '../../../../utils/values';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_item_button: {
      height: '78@vs',
      width: '140@ms0.7',
      marginLeft: '25@ms0.7',
      marginBottom: '7@vs',
      marginTop: '2@vs',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      borderRadius: '10@ms',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      backgroundColor: 'white',
      paddingHorizontal: '10@s',
    },
    title_button: {
      textAlign: 'left',
      color: '#535353',
      fontSize: '15@ms0.4',
    },
    view_icon_button: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    icon: {
      marginRight: '7@s',
      width: '15%',
    },
    text_info: {
      textAlign: 'center',
      color: Blues.blue_6,
      fontSize: '18@ms0.4',
      fontWeight: 'bold',
      marginRight: '7@s',
    },
    text_tail: {
      textAlign: 'center',
      color: '#535353',
      fontSize: '11@ms0.4',
    },
    view_main: {
      flex: 1,
      marginTop: '40@vs',
      alignItems: 'center',
    },
    view_chart: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      width: deviceWidth,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    content_container_flatlist: {
      width: '355@ms0.7',
      paddingTop: '12.5@vs',
    },
    title_local_chart: {
      marginHorizontal: '20@ms',
      marginTop: '5@vs',
      fontSize: '13@ms0.4',
      fontWeight: '500',
      color: '#4c4c4c',
    },
  });
};
export default style;
