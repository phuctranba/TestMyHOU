import {StyleSheet, Dimensions} from 'react-native';
import {Blues, Task_Colors} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const window = Dimensions.get('window');

const deviceWidth = Dimensions.get('window').width;

const style = Blues => {
  return ScaledSheet.create({
    view_tou: {
      width: '190@ms0.3',
      height: '234@ms0.32',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      marginHorizontal: '7.2@s',
      padding: '10@ms0.3',
      elevation: 3,
      marginVertical: '3@vs',
      borderRadius: '10@ms0.3',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    image_new: {
      borderRadius: '10@ms0.3',
      width: '100%',
      height: '50%',
    },
    text_time: {
      color: Blues.blue_8,
      marginHorizontal: '5%',
      fontSize: '13@ms0.2',
      marginVertical: '5%',
    },
    text_title: {
      color: Task_Colors.task_elegant,
      fontSize: '13.5@ms0.2',
      fontWeight: 'bold',
      // fontFamily: 'rubicon-icon-font',
    },
  });
};
export default style;
