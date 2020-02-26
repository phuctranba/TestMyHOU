import {StyleSheet, Dimensions} from 'react-native';
import {Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const window = Dimensions.get('window');

const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_tou: {
      width: '288@ms0.4',
      height: '108@ms0.32',
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection: 'row',
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      borderRadius: '10@ms0.3',
      marginVertical: '3@vs',
    },
    image_new: {
      borderRadius: '10@ms0.3',
      width: '43%',
      height: '80%',
      marginLeft: '3%',
      marginRight: '3%',
    },
    text_time: {
      color: Blues.blue_8,
      fontSize: '12@ms0.3',
      marginVertical: '2%',
      marginHorizontal: '5%',
    },
    text_title: {
      color: Task_Colors.task_elegant,
      fontSize: '12@ms0.28',
      fontWeight: 'bold',
    },
    view_sup: {
      marginHorizontal: '7.2@s',
    },
  });
};

export default style;
