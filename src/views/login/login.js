import React, {Component} from 'react';
import {
  View,
  Animated,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  Alert,
  TouchableOpacity,
  Linking,
  TextInput,
  StatusBar,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Icon_vector from 'react-native-vector-icons/FontAwesome';
import {checkEmpty} from '../../utils/functions/validate';
import {connect} from 'react-redux';
import style, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './style';
import {bindActionCreators} from 'redux';
import * as UserAction from '../../redux/actions/UserAction';
import Toast from '../../components/toast_custom/toast_custom';
import {height_statusbar, Task_Colors, Toast_form} from '../../utils/values';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {checkPass, checkSpecialCharacters} from '../../utils/functions';

const logo = require('../../assets/img/logo.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.imageMarginBottom = new Animated.Value(verticalScale(40));
    this.state = {
      highlight1: 'rgba(143, 143, 143, 0.5)',
      highlight2: 'rgba(143, 143, 143, 0.5)',
      username: '',
      password: '',
      height_small_text_1: 0,
      height_small_text_2: 0,
      state_user: false,
      state_pass: false,
      tooltips_user: '  Mã sinh viên không được trống!',
    };
    this.link_icon = [
      {
        icon: 'web',
        color: this.props.color.blue_6,
        iconType: 'material-community',
        size: moderateScale(27),
        onPress: () => {
          if (!this.props.connected_internet) {
            this._show_toast_unconnectted();
          } else {
            this.props.navigation.navigate('Web_Login_component', {
              uri: 'https://hou.edu.vn/',
            });
          }
        },
      },
      {
        icon: 'facebook-square',
        color: '#1d46ff',
        iconType: 'font-awesome',
        size: moderateScale(25),
        onPress: () => {
          if (!this.props.connected_internet) {
            this._show_toast_unconnectted();
          } else {
            Linking.canOpenURL('fb://page/185073022002194').then(supported => {
              if (supported) {
                return Linking.openURL('fb://page/185073022002194');
              } else {
                return Linking.openURL(
                  'market://details?id=com.facebook.katana',
                );
              }
            });
          }
        },
        // Link trên ios khác nha: 'fb://profile/175500062536618'
      },
      {
        icon: 'youtube-square',
        color: '#c2251f',
        iconType: 'font-awesome',
        size: moderateScale(25),
        onPress: () => {
          if (!this.props.connected_internet) {
            this._show_toast_unconnectted();
          } else {
            Linking.canOpenURL(
              'vnd.youtube://www.youtube.com/channel/UCzObwWgsS7pUgLQPR-i7UMw',
            ).then(supported => {
              if (supported) {
                return Linking.openURL(
                  'vnd.youtube://www.youtube.com/channel/UCzObwWgsS7pUgLQPR-i7UMw',
                );
              } else {
                return this.props.navigation.navigate('Web_Login_component', {
                  uri:
                    'https://www.youtube.com/channel/UCzObwWgsS7pUgLQPR-i7UMw',
                });
              }
            });
          }
        },
      },
    ];
    this.onClickLogin = this.onClickLoginButton.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state || nextProps !== this.props;
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide,
    );
  }

  componentDidMount() {
    if (this.props.navigation.getParam('mess', '') !== '') {
      this._show_toast_mess();
    } else {
      if (!this.props.connected_internet) {
        this._show_toast_unconnectted();
      }
    }
  }

  _show_toast_unconnectted() {
    this.toast.show(Toast_form.no_connected);
  }

  _show_toast_mess() {
    this.toast.show(this.props.navigation.getParam('toast', undefined));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardWillShow = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
    Animated.timing(this.imageMarginBottom, {
      toValue: verticalScale(10),
    }).start();
  };

  keyboardWillHide = event => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
    Animated.timing(this.imageMarginBottom, {
      toValue: verticalScale(40),
    }).start();
  };

  onClickLoginButton() {
    this.state.username = this.state.username.replace(/\s+/g, '');
    this.state.password = this.state.password.replace(/\s+/g, '');

    if (!this.props.connected_internet) {
      this._show_toast_unconnectted();
    } else {
      this.props.userAction.userLoginAction(
        this.state.username.toLocaleLowerCase(),
        this.state.password,
      );
      this.props.navigation.navigate('Load');
    }

    this.setState({
      highlight2: 'rgba(143, 143, 143, 0.5)',
      highlight1: 'rgba(143, 143, 143, 0.5)',
    });
  }

  onChangeUsername(text) {
    this.setState({username: text}, () => {
      this._check_user();
    });
  }

  onChangePassword(text) {
    this.setState({password: text}, () => {
      this._check_pass();
    });
  }

  _check_user() {
    if (checkEmpty(this.state.username)) {
      if (checkSpecialCharacters(this.state.username)) {
        !this.state.state_user
          ? this.setState({height_small_text_1: 0, state_user: true})
          : null;
      } else {
        this.setState({
          height_small_text_1: 'auto',
          state_user: false,
          tooltips_user: '  Mã sinh viên không chứa kí tự đặc biệt!',
        });
      }
    } else {
      this.setState({
        height_small_text_1: 'auto',
        state_user: false,
        tooltips_user: '  Mã sinh viên không được trống!',
      });
    }
  }

  _check_pass() {
    if (checkEmpty(this.state.password)) {
      !this.state.state_pass
        ? this.setState({height_small_text_2: 0, state_pass: true})
        : null;
    } else {
      this.setState({
        height_small_text_2: 'auto',
        state_pass: false,
      });
    }
  }

  _render_icon_link() {
    return this.link_icon.map((link, index) => (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{marginHorizontal: scale(10)}}
        key={index}
        onPress={() => link.onPress()}>
        <Icon
          name={link.icon}
          type={link.iconType}
          color={link.color}
          size={link.size}
        />
      </TouchableOpacity>
    ));
  }

  _forget_onpress() {
    if (!this.props.connected_internet) {
      this._show_toast_unconnectted();
    } else {
      this.props.navigation.navigate('Web_Login_component', {
        uri: 'https://accounts.hou.edu.vn/reset-password.php',
      });
    }
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <View style={{flex: 1, paddingTop: height_statusbar}}>
        <StatusBar
          translucent={true}
          backgroundColor="#00000000"
          barStyle="dark-content"
        />
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
          <View style={this.style.imageBackground}>
            <KeyboardAvoidingView
              style={this.style.container}
              behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <Animated.Image
                source={logo}
                style={[
                  this.style.logo,
                  {
                    height: this.imageHeight,
                    marginBottom: this.imageMarginBottom,
                  },
                ]}
              />

              <View
                style={[
                  this.style.item,
                  {backgroundColor: this.state.highlight1},
                ]}>
                <Icon
                  active
                  name="user"
                  type={'font-awesome'}
                  containerStyle={this.style.iconlogin}
                  size={moderateScale(20)}
                />
                <TextInput
                  placeholder="Mã sinh viên"
                  style={this.style.input}
                  underlineColorAndroid={'transparent'}
                  returnKeyType={'next'}
                  allowFontScaling={false}
                  onSubmitEditing={() => {
                    this.input_next.focus();
                  }}
                  blurOnSubmit={false}
                  onFocus={() =>
                    this.setState({highlight1: 'rgba(153, 182, 255, 0.5)'})
                  }
                  onEndEditing={() =>
                    this.setState({
                      highlight1: 'rgba(143, 143, 143, 0.5)',
                      username: this.state.username.replace(/\s+/g, ''),
                    })
                  }
                  onChangeText={text => {
                    this.onChangeUsername(text);
                  }}
                  value={this.state.username}
                />
              </View>
              <Text
                allowFontScaling={false}
                style={[
                  this.style.tooltip,
                  {height: this.state.height_small_text_1},
                ]}>
                <Icon_vector
                  size={10}
                  name={'warning'}
                  color={Task_Colors.task_danger_dark}
                />
                {this.state.tooltips_user}
              </Text>
              <View
                style={[
                  this.style.item,
                  {backgroundColor: this.state.highlight2},
                ]}>
                <Icon
                  active
                  name="lock"
                  type={'material-community'}
                  containerStyle={this.style.iconlogin}
                  size={moderateScale(20)}
                />
                <TextInput
                  placeholder="Mật khẩu"
                  style={this.style.input}
                  ref={view => (this.input_next = view)}
                  returnKeyType={'done'}
                  allowFontScaling={false}
                  underlineColorAndroid={'transparent'}
                  secureTextEntry={true}
                  onFocus={() =>
                    this.setState({highlight2: 'rgba(153, 182, 255, 0.5)'})
                  }
                  onEndEditing={() => {
                    this.setState({
                      highlight2: 'rgba(143, 143, 143, 0.5)',
                      password: this.state.password.replace(/\s+/g, ''),
                    });
                    if (
                      checkEmpty(this.state.password) &&
                      !checkEmpty(this.state.username)
                    ) {
                      this.setState({
                        height_small_text_1: 'auto',
                        state_user: false,
                      });
                    }
                  }}
                  onChangeText={text => {
                    this.onChangePassword(text);
                  }}
                  value={this.state.password}
                />
              </View>
              <Text
                allowFontScaling={false}
                style={[
                  this.style.tooltip,
                  {height: this.state.height_small_text_2},
                ]}>
                <Icon_vector
                  size={10}
                  name={'warning'}
                  color={Task_Colors.task_danger_dark}
                />
                &nbsp;&nbsp;Mật khẩu không được trống
              </Text>

              {/*Nút đăng nhập*/}
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={!(this.state.state_user && this.state.state_pass)}
                style={[
                  this.style.btn_login,
                  {
                    backgroundColor:
                      this.state.state_user && this.state.state_pass
                        ? this.props.color.blue_7
                        : this.props.color.blue_6,
                  },
                ]}
                onPress={this.onClickLogin}>
                <Text allowFontScaling={false} style={this.style.text_login}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={this.style.button_forget}
                onPress={() => this._forget_onpress()}>
                <Text allowFontScaling={false} style={this.style.forgetPass}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>

              <View style={this.style.text_orgo}>
                <Text
                  allowFontScaling={false}
                  style={[
                    this.style.orGo,
                    {
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    },
                  ]}>
                  {' '}
                </Text>
                <Text allowFontScaling={false} style={this.style.orGo}>
                  {' '}
                  Hoặc truy cập{' '}
                </Text>
                <Text
                  allowFontScaling={false}
                  style={[
                    this.style.orGo,
                    {
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    },
                  ]}>
                  {' '}
                </Text>
              </View>
              <View style={this.style.viewIcon}>
                {this._render_icon_link()}
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>

        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(70)}
          setting_props={this.props.setting_props}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.userReducer.isLogged,
    isLoadding: state.userReducer.isLoadding,
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
    setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAction: bindActionCreators(UserAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
