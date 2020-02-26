import {StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const window = Dimensions.get('window');

const style = Blues => {
  return ScaledSheet.create({
    container_modal: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
    },
  });
};
export default style;
