import {Platform} from 'react-native';
const check_OS = () => Platform.OS === 'android';
export const OS=check_OS();
