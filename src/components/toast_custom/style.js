import {ScaledSheet} from 'react-native-size-matters';

const style = Blues => {
  return ScaledSheet.create({
    tou_button: {
      flexDirection: 'row',
      marginVertical: '5@vs',
      paddingHorizontal: '10@s',
      paddingVertical: '6@vs',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10@ms',
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
    },
    container: {
      marginHorizontal: '7.5%',
      borderRadius: '10@ms',
      position: 'absolute',
      alignSelf: 'center',
      paddingVertical: '8@vs',
      paddingHorizontal: '12@s',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    text_toast: {
      fontSize: '16@ms0.3',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
};

export default style;
