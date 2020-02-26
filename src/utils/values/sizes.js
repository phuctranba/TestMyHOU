import {Dimensions, StatusBar,Platform } from 'react-native';
import {OS} from '../functions';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const sizes = {
  Width_Devices: Dimensions.get('screen').width,
  Height_Devices: Dimensions.get('screen').height,
};

export const height_statusbar = getStatusBarHeight();
