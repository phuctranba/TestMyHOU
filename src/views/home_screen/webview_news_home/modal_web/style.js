import {StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const window = Dimensions.get('window');

const style = Blues => {
  return ScaledSheet.create({
    container_modal: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 0,
    },
    input: {
      height: '33@ms',
      // marginVertical: '5@vs',
      fontSize: '14@ms0.3',
      marginRight: '4%',
      borderColor: 'black',
      width: '57%',
      borderWidth: 0.5,
      borderRadius: 5,
      justifyContent: 'center',
      paddingVertical: 0,
    },
  });
};
export default style;
