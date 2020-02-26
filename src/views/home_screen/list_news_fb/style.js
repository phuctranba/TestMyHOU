import {StyleSheet, Dimensions} from 'react-native';
import {Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

export const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_tou: {
      width: '270@ms0.45',
      backgroundColor: '#fff',
      marginLeft: '10.8@ms',
      margin: '3@s',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      borderRadius: '10@ms',
    },
    tou: {
      flex: 1,
      width: '270@ms0.45',
      // height: "100%",
      backgroundColor: '#0000',
      justifyContent: 'space-between',
      borderRadius: '10@ms',
      paddingHorizontal: '4%',
      paddingTop: '3%',
      paddingBottom: '2%',
    },
    image: {
      borderRadius: '2@ms',
      marginTop: '3@vs',
      width: '75%',
      height: '129.5@ms',
      flex: 1,
      alignSelf: 'center',
    },
    avatar: {
      width: '25.92@ms',
      height: '31.10@ms',
      // backgroundColor:'#d5d5d5',
      // borderRadius:15
    },
    text_info: {
      width: '100%',
      color: Task_Colors.task_elegant,
      fontSize: '12.24@ms0.3',
      marginVertical: '1%',
      textAlign: 'left',
    },
    text_page: {
      color: '#306ecd',
      marginLeft: '4%',
      fontSize: '14@ms0.3',
      fontWeight: 'bold',
    },
    text_time: {
      color: '#2f2f2f',
      marginLeft: '4%',
      fontSize: '11@ms0.3',
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
      fontSize: '12@ms0.3',
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
  });
};
export default style;
