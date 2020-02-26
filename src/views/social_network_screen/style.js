import {Blues, Task_Colors, sizes} from '../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const style = Blues => {
  return ScaledSheet.create({
    text_header: {
      fontSize: '20@ms0.3',
      fontWeight: 'bold',
      color: Blues.blue_main,
    },
    button_bell: {
      position: 'absolute',
      right: '15@s',
    },
    header: {
      width: '100%',
      height: '45@vs',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      elevation: 3,
      marginBottom: '5@vs',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
    },
  });
};
export default style;
