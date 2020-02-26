import React, {Component} from 'react';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {bindActionCreators} from 'redux';
import * as UserAction from '../redux/actions/UserAction';
import SplashScreen from 'react-native-splash-screen';
import * as listNews from '../redux/actions/ListNewsHomeScreenAction';
import * as devices from '../redux/actions/DeviceActions';
import {SAGA} from '../redux/constant';
import AsyncStorage from '@react-native-community/async-storage';
import {
  array_setting,
  default_array_setting,
  default_setting,
  objects_setting,
} from '../utils/values';
import * as setting_action from '../redux/actions/SettingAction';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Dùng screen này để kiểm tra đăng nhập rồi mới vào phía trong để tránh tình trạng nháy màn hình

class Check extends Component {
  constructor(props) {
    super(props);
    this.connect = false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  async componentWillMount() {
    if (this.props.setting_props.loaded === 'nope') {
      await this.getSetting();
    }

    // Lấy dữ liệu người dùng, kiểm tra, load dữ liệu tin tức
    this.props.userAction.getCurrentUserInDBAction();
    this.props.takeListAction.getListNews(
      SAGA.LISTNEWHOMESCREEN.LOAD_YOUTUBE,
      'nope',
    );
    this.props.takeListAction.getListNews(
      SAGA.LISTNEWHOMESCREEN.LOAD_WEBHOU,
      'nope',
    );
  }

  async getSetting() {
    let values;
    try {
      let check_null = await AsyncStorage.getItem(objects_setting.Fisrt_open);
      if (check_null !== null) {
        values = await AsyncStorage.multiGet(array_setting);

        let setting_value = values.reduce((values, item, index) => {
          return {
            ...values,
            [item[0]]: item[1],
          };
        }, {});

        this.props.update_setting(setting_value, values);
      } else {
        this.props.update_setting(default_setting, default_array_setting);
      }

      console.log(values);
    } catch (e) {
      console.log(e.toString());
    }
  }

  componentWillReceiveProps(nextProps) {
    // Kiểm tra tình trạng load và đăng nhập để chuyển màn hình

    if (!nextProps.isLoadding && nextProps.isLogged) {
      this.props.navigation.navigate('Index');
    } else {
      if (!nextProps.isLoadding && !nextProps.isLogged) {
        this.props.navigation.navigate('Login_main');
      }
    }
  }

  componentDidMount() {
    NetInfo.addEventListener(state => {
      // console.log("Connection type", state.type);
      console.log('Is connected?', state.isConnected);
      if (this.connect !== state.isConnected) {
        this.connect = state.isConnected;
        this.props.devices.check_connected(state.isConnected);
      }
    });
  }

  componentWillUnmount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <StatusBar
        translucent={true}
        backgroundColor="#00000000"
        barStyle="dark-content"
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.userReducer.isLogged,
    isLoadding: state.userReducer.isLoadding,
    connected_internet: state.device.connected_internet,
    setting_props: state.setting_control,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAction: bindActionCreators(UserAction, dispatch),
    takeListAction: bindActionCreators(listNews, dispatch),
    devices: bindActionCreators(devices, dispatch),
    update_setting: bindActionCreators(setting_action.update_setting, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Check);
