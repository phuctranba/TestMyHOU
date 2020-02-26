import {StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

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
    view_radios: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      // borderTopWidth: '0.5@ms',
      // borderTopColor:Blues.blue_6,
      paddingVertical: '10@vs',
    },
    radio: {
      // marginLeft: '10@s',
      // zIndex:-2,
      // position: "absolute"
    },
    text_radio: {
      // color:Blues.blue_6,
      fontSize: '16@ms0.3',
      // marginVertical: '10@vs',
      paddingLeft: '10@s',
    },
    text_yesno: {
      fontSize: '16@ms0.3',
      // fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: '7@vs',
    },
  });
};

export default style;
