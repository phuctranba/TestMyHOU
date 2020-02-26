import {StyleSheet, Dimensions, Platform} from 'react-native';
// import {screen} from "./header/style";
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {W} from '../header/header_user_main/style';
import {height_statusbar} from '../../utils/values';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
// export const height_view=screen<=0.52?0.4375*deviceHeight:0.46875*deviceHeight; /*280 - 300*/
export const height_view = moderateScale(290, 0.6); /*280 - 300*/
export const size_actionbutton = moderateScale(45); /*45*/
export const fontSize_actionbutton = moderateScale(18); /*18*/
export const space = height_view * 0.8;
export const space_small = height_view / 3 + height_statusbar;

const style = Blues => {
  return ScaledSheet.create({
    actionButtonIcon: {
      fontSize: fontSize_actionbutton,
      height: '22@ms',
      color: 'white',
    },
  });
};
export default style;
