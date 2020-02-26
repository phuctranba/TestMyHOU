import {StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {sizes} from '../../../utils/values';

const style = Blues => {
  return ScaledSheet.create({
    tou: {
      flex: 1,
      width: '340@ms',
      // height: "100%",
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      paddingHorizontal: '3%',
      paddingVertical: '3%',
      marginTop: '3@vs',
      marginBottom: '10@ms',
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      alignSelf: 'center',
      borderRadius: '4@ms',
    },
    image: {
      borderRadius: '2@ms',
      marginBottom: '2%',
      width: '75%',
      height: '129.5@ms',
      flex: 1,
      alignSelf: 'center',
    },
    avatar: {
      width: '31.1@ms',
      height: '37.32@ms',
    },
    text_info: {
      width: '100%',
      color: '#2f2f2f',
      fontSize: '14@ms0.3',
      marginVertical: '2%',
      textAlign: 'left',
    },
    text_page: {
      color: '#306ecd',
      marginLeft: '4%',
      fontSize: '16@ms0.3',
      fontWeight: 'bold',
    },
    text_time: {
      color: '#2f2f2f',
      marginLeft: '4%',
      fontSize: '13@ms0.3',
      // marginBottom: "2%"
    },
    text_title: {
      color: '#282828',
      marginLeft: '5%',
      fontSize: '13@ms0.3',
      fontWeight: 'bold',
    },
    text_detail: {
      color: '#2f2f2f',
      fontSize: '12.24@ms0.3',
      marginLeft: '8%',
      height: '48%',
      textAlign: 'left',
    },
    view_info_detail: {
      flexDirection: 'row',
      width: '33%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header_post: {
      width: '100%',
      height: '32.4@ms',
      flexDirection: 'row',
      alignItems: 'center',
    },
    view_info: {
      width: '100%',
      height: '32.4@ms',
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      width: '0.2%',
      height: '80%',
      backgroundColor: '#8b8b8b',
    },
    flatlist: {
      width: sizes.Width_Devices,
      paddingVertical: '6.4@vs',
      paddingTop: '50@vs',
    },
  });
};
export default style;
