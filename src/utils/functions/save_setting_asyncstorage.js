import AsyncStorage from '@react-native-community/async-storage';

export async function save_setting_asyncstorage(storage_setting) {
  console.log(storage_setting);
  try {
    await AsyncStorage.multiSet(storage_setting);
  } catch (e) {
    console.log(e.toString());
    return false;
  }

  return true;
}
