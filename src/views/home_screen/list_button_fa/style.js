import {Dimensions, StyleSheet} from 'react-native';
import {Blues} from '../../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const style = Blues => {
  return ScaledSheet.create({
    main_component: {
      flex: 1,
      marginBottom: '61@vs',
    },
    view_item: {
      height: '60@ms',
      width: '75@ms',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5@s',
      borderRadius: '20@ms',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      borderTopWidth: 0,
      backgroundColor: 'white',
    },
    view_item_f: {
      height: '60@ms',
      width: '80@ms',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20@ms',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      borderTopWidth: 0,
      backgroundColor: 'white',
    },
    text_header: {
      color: Blues.blue_7,
      marginHorizontal: '14.4@s',
      marginBottom: '3.6@vs',
      marginTop: '21.6@vs',
      fontSize: '18@ms0.3',
      fontWeight: 'bold',
    },
    container: {
      backgroundColor: '#00000000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    view_sup: {
      marginHorizontal: '7.2@s',
    },
    text_button: {
      textAlign: 'center',
      color: Blues.blue_main,
      fontSize: '11@ms0.3',
    },
    button: {
      marginVertical: '5@vs',
      flexDirection: 'row',
      marginLeft: '15@s',
    },
  });
};
export default style;
