import {StyleSheet, Dimensions} from 'react-native';
import {Blues} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const style = Blues => {
  return ScaledSheet.create({
    text: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '14@ms0.3',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10@ms',
      width: '85@ms',
      height: '110@ms',
      backgroundColor: Blues.blue_5,
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      marginLeft: '20@ms',
      marginVertical: '10@vs',
    },
    text_header: {
      color: Blues.blue_7,
      marginHorizontal: '14.4@s',
      marginBottom: '3.6@vs',
      marginTop: '21.6@vs',
      fontSize: '18@ms0.3',
      fontWeight: 'bold',
    },
    icon_view: {
      height: '35%',
      marginTop: '3%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text_view: {
      height: '60%',
      marginHorizontal: '5@s',
      marginBottom: '2%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
export default style;
