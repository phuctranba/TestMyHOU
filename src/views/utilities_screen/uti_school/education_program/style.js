import {StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {sizes} from '../../../../utils/values';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const style = Blues => {
  return ScaledSheet.create({
    view_lv_parent: {
      width: sizes.Width_Devices,
      height: '54@ms',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    text_detail: {
      width: '86%',
      color: '#282828',
      marginLeft: '14%',
      fontSize: '15@ms0.3',
      marginVertical: '13@vs',
    },
    text_title_lv1: {
      color: '#282828',
      fontSize: '16@ms0.3',
      fontWeight: '500',
      width: '100%',
    },
    text_title_lv2: {
      color: '#282828',
      fontSize: '16@ms0.3',
      fontWeight: '200',
      marginHorizontal: '1%',
      width: '78%',
    },
    text_title_lv3: {
      color: '#282828',
      fontSize: '15@ms0.3',
      fontWeight: '200',
      marginHorizontal: '1%',
      width: '75%',
    },
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingTop: '45@vs',
    },
    line_object: {
      backgroundColor: 'white',
      width: '100%',
    },
    icon_view_lv2: {
      marginLeft: '2%',
      width: '8%',
      height: '100%',
      justifyContent: 'center',
      borderLeftWidth: '1@ms',
      borderLeftColor: '#90b0ff',
    },
    icon_arrow: {
      position: 'absolute',
      right: '15@ms',
    },
    icon_view_lv3: {
      marginLeft: '5%',
      width: '8%',
      height: '100%',
      justifyContent: 'center',
      borderLeftWidth: '0.5@ms',
      borderLeftColor: '#a8cdff',
    },
    view_object_lv1: {
      marginLeft: '1%',
      width: '81%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#cbcbcb',
    },
    view_icon_lv1: {
      width: '10%',
      height: '100%',
      position: 'absolute',
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#cbcbcb',
    },
  });
};
export default style;
