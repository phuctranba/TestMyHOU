import {ScaledSheet} from 'react-native-size-matters';
import {sizes} from '../../../../utils/values';

const React = require('react-native');

const style = Blues => {
  return ScaledSheet.create({
    container: {
      backgroundColor: '#726dff',
      height: sizes.Height_Devices,
      width: sizes.Width_Devices,
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    btnInMaps: {
      margin: 10,
      marginBottom: 5,
      backgroundColor: '#ffffff95',
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDescription: {
      fontSize: 10,
      color: Blues.blue_8,
    },
    textOpenMap: {
      fontSize: 10,
      color: Blues.blue_6,
      fontStyle: 'italic',
      textAlign: 'right',
    },
    textTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: Blues.blue_8,
    },
    containerWeb: {
      backgroundColor: '#ffffff',
      flex: 1,
      width: sizes.Width_Devices,
      height: sizes.Height_Devices,
    },
    contentWeb: {
      flex: 1,
    },
    viewContentWeb: {
      flex: 1,
    },
  });
};
export default style;
