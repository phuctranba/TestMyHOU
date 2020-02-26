import {sizes} from '../values';

export function ct_scale(value) {
  return value / (350 / sizes.Width_Devices);
}

export function ct_verticalScale(value) {
  return value / (680 / sizes.Height_Devices);
}

export function ct_moderateScale(value, factor = 0.5) {
  return value + (value / (350 / sizes.Width_Devices) - value) * factor;
}
