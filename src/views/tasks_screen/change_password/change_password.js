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
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style';
import {height_statusbar, Task_Colors} from '../../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import * as UserAction from '../../../redux/actions/UserAction';
import userReducer from '../../../redux/reducers/User';
import {bindActionCreators} from 'redux';
import Toast from '../../../components/toast_custom/toast_custom';
import Icon_vector from 'react-native-vector-icons/FontAwesome';
import {checkPass} from '../../../utils/functions';
import {checkEmpty} from '../../../utils/functions/validate';
import {error_change_pass} from '../../../utils/values';

class Change_password extends Component {
  constructor(props) {
    super(props);
    this.ani_icon = new Animated.Value(1);
    this.ani_login = new Animated.Value(1);
    this.state = {
      highlight1: 'rgba(143, 143, 143, 0.5)',
      highlight2: 'rgba(143, 143, 143, 0.5)',
      highlight3: 'rgba(143, 143, 143, 0.5)',
      oldPassword: '',
      newPassword: '',
      re_newPassword: '',
      state_oldPassword: false,
      state_newPassword: false,
      state_re_newPassword: false,
      height_small_text_1: 0,
      height_small_text_2: 0,
      height_small_text_3: 0,
      content_small_text_1: '',
      content_small_text_2: '',
      content_small_text_3: '',
    };
    this.onClickChange = this._onClickChangeButton.bind(this);
    this.onClickCancel = this._onClickCancelButton.bind(this);
    this.onClickForget = this._onClickForgetButton.bind(this);
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

  keyboardWillShow = event => {
    Animated.timing(this.ani_icon, {
      duration: 500,
      toValue: 0,
      // useNativeDriver: true,
    }).start();
  };

  keyboardWillHide = event => {
    Animated.timing(this.ani_icon, {
      duration: 500,
      toValue: 1,
      // useNativeDriver: true,
    }).start();
  };

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _ani_login_load() {
    Animated.timing(this.ani_login, {
      toValue: 0,
      duration: 500,
    }).start();
  }

  _ani_login_wait() {
    Animated.timing(this.ani_login, {
      toValue: 1,
      duration: 500,
    }).start();
  }

  _onClickChangeButton() {
    Keyboard.dismiss();

    this.state.oldPassword = this.state.oldPassword.replace(/\s+/g, '');
    this.state.newPassword = this.state.newPassword.replace(/\s+/g, '');
    this.state.re_newPassword = this.state.re_newPassword.replace(/\s+/g, '');

    if (this.props.connected_internet) {
      this._ani_login_load();
      this.props.change_password(
        this.props.access_token,
        this.state.oldPassword,
        this.state.newPassword,
      );
    } else {
      this._show_toast_unconnectted();
    }

    // Thay đổi màu các input
    this.setState({
      highlight2: 'rgba(143, 143, 143, 0.5)',
      highlight1: 'rgba(143, 143, 143, 0.5)',
      highlight3: 'rgba(143, 143, 143, 0.5)',
    });
  }

  _onClickCancelButton() {
    Alert.alert(
      'Xác nhận huỷ bỏ',
      'Bạn muốn huỷ thao tác này?',
      [
        {
          text: 'Không',
          style: 'cancel',
        },
        {text: 'Có', onPress: () => this.props.navigation.goBack(null)},
      ],
      {cancelable: false},
    );

    // Thay đổi màu các input
    this.setState({highlight2: 'rgba(143, 143, 143, 0.5)'});
    this.setState({highlight1: 'rgba(143, 143, 143, 0.5)'});
    this.setState({highlight3: 'rgba(143, 143, 143, 0.5)'});
  }

  _onClickForgetButton() {
    if (this.props.connected_internet) {
      this.props.navigation.navigate('Web_Task_component', {
        uri: 'https://accounts.hou.edu.vn/reset-password.php',
      });
    } else {
      this._show_toast_unconnectted();
    }

    // Thay đổi màu các input
    this.setState({highlight2: 'rgba(143, 143, 143, 0.5)'});
    this.setState({highlight1: 'rgba(143, 143, 143, 0.5)'});
    this.setState({highlight3: 'rgba(143, 143, 143, 0.5)'});
  }

  _show_toast_unconnectted() {
    this.toast.show({
      text: 'Không có kết nối internet, kiểm tra lại!',
      textColor: Task_Colors.task_danger_dark,
      icon: 'exclamation-circle',
      iconType: 'font-awesome',
      iconColor: Task_Colors.task_danger_dark,
      duration: 4000,
    });
  }

  onChangeOldPassword(text) {
    this.setState({oldPassword: text}, () => {
      this._check_old();
    });
  }

  onChangeNewPassword(text) {
    this.setState({newPassword: text}, () => {
      this._check_new();
    });
  }

  onChangeRe_NewPassword(text) {
    this.setState({re_newPassword: text}, () => {
      this._check_re_new();
    });
  }

  _check_old() {
    if (checkEmpty(this.state.oldPassword)) {
      !this.state.state_oldPassword
        ? this.setState({height_small_text_1: 0, state_oldPassword: true})
        : null;
    } else {
      this.setState({
        height_small_text_1: 'auto',
        content_small_text_1: error_change_pass.tooltip_empty,
        state_oldPassword: false,
      });
    }
  }

  _check_new() {
    if (checkEmpty(this.state.newPassword)) {
      if (checkPass(this.state.newPassword)) {
        if (
          this.state.oldPassword.replace(/\s+/g, '') ===
          this.state.newPassword.replace(/\s+/g, '')
        ) {
          this.setState({
            height_small_text_2: 'auto',
            content_small_text_2: error_change_pass.tooltip_same_old,
            state_newPassword: false,
          });
        } else {
          !this.state.state_newPassword
            ? this.setState({height_small_text_2: 0, state_newPassword: true})
            : null;
        }
      } else {
        !(
          this.state.height_small_text_2 === 'auto' &&
          this.state.content_small_text_2 === error_change_pass.tooltip_false
        )
          ? this.setState({
              height_small_text_2: 'auto',
              content_small_text_2: error_change_pass.tooltip_false,
              state_newPassword: false,
            })
          : null;
      }
    } else {
      this.setState({
        height_small_text_2: 'auto',
        content_small_text_2: error_change_pass.tooltip_empty,
        state_newPassword: false,
      });
    }
  }

  _check_re_new() {
    if (checkEmpty(this.state.re_newPassword)) {
      if (checkPass(this.state.re_newPassword)) {
        if (
          this.state.re_newPassword.replace(/\s+/g, '') ===
          this.state.newPassword.replace(/\s+/g, '')
        ) {
          if (
            this.state.re_newPassword.replace(/\s+/g, '') ===
            this.state.oldPassword.replace(/\s+/g, '')
          ) {
            this.setState({
              height_small_text_3: 'auto',
              content_small_text_3: error_change_pass.tooltip_same_old,
              state_re_newPassword: false,
            });
          } else {
            !this.state.state_re_newPassword
              ? this.setState({
                  height_small_text_3: 0,
                  state_re_newPassword: true,
                })
              : null;
          }
        } else {
          !(
            this.state.height_small_text_3 === 'auto' &&
            this.state.content_small_text_3 ===
              error_change_pass.tooltip_same_new
          )
            ? this.setState({
                height_small_text_3: 'auto',
                content_small_text_3: error_change_pass.tooltip_same_new,
                state_re_newPassword: false,
              })
            : null;
        }
      } else {
        !(
          this.state.height_small_text_3 === 'auto' &&
          this.state.content_small_text_3 === error_change_pass.tooltip_false
        )
          ? this.setState({
              height_small_text_3: 'auto',
              content_small_text_3: error_change_pass.tooltip_false,
              state_re_newPassword: false,
            })
          : null;
      }
    } else {
      this.setState({
        height_small_text_3: 'auto',
        content_small_text_3: error_change_pass.tooltip_empty,
        state_re_newPassword: false,
      });
    }
  }

  _onEndEditing_new() {
    if (
      checkEmpty(this.state.re_newPassword) &&
      checkEmpty(this.state.newPassword) &&
      !checkEmpty(this.state.oldPassword)
    ) {
      this.setState({
        height_small_text_1: 'auto',
        content_small_text_1: error_change_pass.tooltip_empty,
        state_oldPassword: false,
      });
    } else {
      if (
        checkEmpty(this.state.re_newPassword) &&
        !checkEmpty(this.state.newPassword) &&
        checkEmpty(this.state.oldPassword)
      ) {
        this.setState({
          height_small_text_2: 'auto',
          content_small_text_2: error_change_pass.tooltip_empty,
          state_newPassword: false,
        });
      } else {
        if (
          checkEmpty(this.state.re_newPassword) &&
          !checkEmpty(this.state.newPassword) &&
          !checkEmpty(this.state.oldPassword)
        ) {
          this.setState({
            height_small_text_2: 'auto',
            content_small_text_2: error_change_pass.tooltip_empty,
            state_newPassword: false,
            height_small_text_1: 'auto',
            content_small_text_1: error_change_pass.tooltip_empty,
            state_oldPassword: false,
          });
        }
      }
    }

    if (
      checkPass(this.state.re_newPassword) &&
      checkPass(this.state.newPassword) &&
      this.state.re_newPassword.replace(/\s+/g, '') !==
        this.state.newPassword.replace(/\s+/g, '')
    ) {
      this.setState({
        height_small_text_3: 'auto',
        content_small_text_3: error_change_pass.tooltip_same_new,
        state_re_newPassword: false,
      });
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // Kiểm tra kết quả đổi mật khẩu
    // Dù thành công hay thất bại thì sau khi hiện toast, đưa state kết quả về trạng thái wait
    switch (nextProps.result_change_password) {
      case 'success': {
        this.props.userLogoutAction(this.props.access_token);
        this.props.navigation.navigate('Login_component', {
          mess: 'yes',
          toast: {
            text: 'Thay đổi mật khẩu thành công, vui lòng đăng nhập lại!',
            textColor: Task_Colors.task_success_dark,
            icon: 'check-circle',
            iconType: 'font-awesome',
            iconColor: Task_Colors.task_success_dark,
            duration: 5000,
          },
        });

        this.props.resultChangePassword('wait');

        break;
      }
      case 'fail': {
        this._ani_login_wait();
        this.toast.show({
          text: nextProps.error_change_password,
          textColor: Task_Colors.task_warning_light,
          icon: 'warning',
          iconType: 'font-awesome',
          iconColor: Task_Colors.task_warning_light,
          duration: 3500,
        });

        this.props.resultChangePassword('wait');
        break;
      }
    }
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    const scale = this.ani_icon.interpolate({
      inputRange: [0, 1],
      outputRange: [0.00000001, 1],
    });
    const height = this.ani_icon.interpolate({
      inputRange: [0, 1],
      outputRange: [0, moderateScale(120)],
    });
    const opa = this.ani_icon.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const paddingTop = this.ani_icon.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (verticalScale(45) + height_statusbar) / 1.5,
        verticalScale(45) + height_statusbar,
      ],
    });

    const width_login = this.ani_login.interpolate({
      inputRange: [0, 1],
      outputRange: [moderateScale(45), moderateScale(310)],
    });

    const opa_text_login = this.ani_login.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 0, 1],
    });

    const opa_load = this.ani_login.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [1, 0, 0],
    });

    return (
      <Animated.View
        style={[this.style.main, {paddingTop}]}
        pointerEvents={
          this.props.result_change_password === 'wait' ? 'auto' : 'none'
        }>
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={this.style.container}
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            {/*Vòng tròn chìa khoá*/}
            <Animated.View
              style={[
                this.style.view_round,
                {height: height, opacity: opa, transform: [{scale: scale}]},
              ]}>
              <Animated.View style={this.style.view_round_small}>
                <Icon
                  name="key-variant"
                  type={'material-community'}
                  size={moderateScale(40)}
                  color={this.props.color.blue_5}
                />
              </Animated.View>
            </Animated.View>

            <Text allowFontScaling={false} style={this.style.text_1}>
              Thay đổi mật khẩu
            </Text>
            <Text allowFontScaling={false} style={this.style.text_2}>
              Chắc chắn rằng mật khẩu mới của bạn đủ mạnh để không bị tìm ra và
              hãy ghi nhớ nó
            </Text>

            {/*3 input text*/}
            <View
              style={[
                this.style.item,
                {backgroundColor: this.state.highlight1},
              ]}>
              <Icon
                active
                name="lock"
                type={'material-community'}
                containerStyle={this.style.iconlogin}
                size={moderateScale(20)}
              />

              <TextInput
                placeholder="Mật khẩu hiện tại"
                style={this.style.input}
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                allowFontScaling={false}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  this.input2.focus();
                }}
                blurOnSubmit={false}
                onFocus={() =>
                  this.setState({highlight1: 'rgba(153, 182, 255, 0.5)'})
                }
                onEndEditing={() =>
                  this.setState({
                    highlight1: 'rgba(143, 143, 143, 0.5)',
                    oldPassword: this.state.oldPassword.replace(/\s+/g, ''),
                  })
                }
                onChangeText={text => {
                  this.onChangeOldPassword(text);
                }}
                value={this.state.oldPassword}
              />

              <Icon
                active
                name="check"
                type={'entypo'}
                containerStyle={[
                  this.style.iconload,
                  {opacity: this.state.state_oldPassword ? 1 : 0},
                ]}
                size={moderateScale(20)}
                color={'green'}
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
              &nbsp;&nbsp;{this.state.content_small_text_1}
            </Text>

            <View
              style={[
                this.style.item,
                {backgroundColor: this.state.highlight2},
              ]}>
              <Icon
                active
                name="lock-plus"
                type={'material-community'}
                containerStyle={this.style.iconlogin}
                size={moderateScale(20)}
              />

              <TextInput
                placeholder="Mật khẩu mới"
                style={this.style.input}
                underlineColorAndroid={'transparent'}
                ref={view => (this.input2 = view)}
                onSubmitEditing={() => {
                  this.input3.focus();
                }}
                returnKeyType={'next'}
                secureTextEntry={true}
                blurOnSubmit={false}
                allowFontScaling={false}
                onFocus={() =>
                  this.setState({highlight2: 'rgba(153, 182, 255, 0.5)'})
                }
                onEndEditing={() => {
                  this.setState({
                    highlight2: 'rgba(143, 143, 143, 0.5)',
                    newPassword: this.state.newPassword.replace(/\s+/g, ''),
                  });
                  this._onEndEditing_new();
                }}
                onChangeText={text => {
                  this.onChangeNewPassword(text);
                }}
                value={this.state.newPassword}
              />

              <Icon
                active
                name="check"
                type={'entypo'}
                containerStyle={[
                  this.style.iconload,
                  {
                    opacity:
                      this.state.state_newPassword &&
                      this.state.state_re_newPassword
                        ? 1
                        : 0,
                  },
                ]}
                size={moderateScale(20)}
                color={'green'}
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
              &nbsp;&nbsp;{this.state.content_small_text_2}
            </Text>

            <View
              style={[
                this.style.item,
                {backgroundColor: this.state.highlight3},
              ]}>
              <Icon
                active
                name="lock-reset"
                type={'material-community'}
                containerStyle={this.style.iconlogin}
                size={moderateScale(20)}
              />

              <TextInput
                placeholder="Xác nhận"
                style={this.style.input}
                underlineColorAndroid={'transparent'}
                ref={view => (this.input3 = view)}
                secureTextEntry={true}
                allowFontScaling={false}
                returnKeyType={'done'}
                onFocus={() =>
                  this.setState({highlight3: 'rgba(153, 182, 255, 0.5)'})
                }
                onEndEditing={() => {
                  this.setState({
                    highlight3: 'rgba(143, 143, 143, 0.5)',
                    re_newPassword: this.state.re_newPassword.replace(
                      /\s+/g,
                      '',
                    ),
                  });
                  this._onEndEditing_new();
                }}
                onChangeText={text => {
                  this.onChangeRe_NewPassword(text);
                }}
                value={this.state.re_newPassword}
              />

              <Icon
                active
                name="check"
                type={'entypo'}
                containerStyle={[
                  this.style.iconload,
                  {
                    opacity:
                      this.state.state_newPassword &&
                      this.state.state_re_newPassword
                        ? 1
                        : 0,
                  },
                ]}
                size={moderateScale(20)}
                color={'green'}
              />
            </View>

            <Text
              allowFontScaling={false}
              style={[
                this.style.tooltip,
                {height: this.state.height_small_text_3},
              ]}>
              <Icon_vector
                size={10}
                name={'warning'}
                color={Task_Colors.task_danger_dark}
              />
              &nbsp;&nbsp;{this.state.content_small_text_3}
            </Text>

            {/*3 nút ấn*/}
            <Animated.View style={{width: width_login}}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  this.style.btn_change,
                  {
                    backgroundColor:
                      this.state.state_oldPassword &&
                      this.state.state_newPassword &&
                      this.state.state_re_newPassword
                        ? this.props.color.blue_7
                        : this.props.color.blue_6,
                  },
                ]}
                disabled={
                  !(
                    this.state.state_oldPassword &&
                    this.state.state_newPassword &&
                    this.state.state_re_newPassword
                  )
                }
                onPress={this.onClickChange}>
                <Animated.Text
                  allowFontScaling={false}
                  style={[this.style.text_change, {opacity: opa_text_login}]}>
                  Đổi mật khẩu
                </Animated.Text>
                <Animated.View
                  style={{position: 'absolute', opacity: opa_load}}>
                  <ActivityIndicator size={'large'} color={'white'} />
                </Animated.View>
              </TouchableOpacity>
            </Animated.View>

            {/*2 nút ấn*/}
            <View style={this.style.view_small_button}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  this.style.btn_small,
                  {backgroundColor: this.props.color.blue_6},
                ]}
                onPress={this.onClickForget}>
                <Text
                  allowFontScaling={false}
                  style={[this.style.text_small, {color: 'white'}]}>
                  Quên mật khẩu
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={[this.style.btn_small, {backgroundColor: 'white'}]}
                onPress={this.onClickCancel}>
                <Text
                  allowFontScaling={false}
                  style={[
                    this.style.text_small,
                    {color: this.props.color.blue_6},
                  ]}>
                  Huỷ bỏ
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(70)}
          setting_props={this.props.setting_props}
        />
      </Animated.View>
    );
  }
}

function mapStateToProps(state) {
  return {
    access_token: state.userReducer.access_token,
    changing_password: state.userReducer.changing_password,
    result_change_password: state.userReducer.result_change_password,
    error_change_password: state.userReducer.error_change_password,
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
    setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_password: bindActionCreators(UserAction.changePassword, dispatch),
    resultChangePassword: bindActionCreators(
      UserAction.resultChangePassword,
      dispatch,
    ),
    userLogoutAction: bindActionCreators(UserAction.userLogoutAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Change_password);
