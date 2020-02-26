import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  Animated,
  TextInput,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';
import {
  default_array_setting,
  default_setting,
  objects_setting,
  Task_Colors,
} from '../../utils/values';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';
import * as setting_action from '../../redux/actions/SettingAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IconFA from 'react-native-vector-icons/FontAwesome';

const img_thanks = require('../../assets/img/Medium_blue_user.png');

class Modal_setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      detail_setting: null,
      name_setting: null,
      type_setting: null,
      title: null,
      value: null,
    };
  }

  _open(title, type_setting, detail_setting, name_setting) {
    this.setState({
      visible: true,
      detail_setting: detail_setting,
      name_setting: name_setting,
      type_setting: type_setting,
      title: title,
      value: this.props.setting_props[name_setting],
    });
  }

  _render_bottom_button() {
    switch (this.state.type_setting) {
      case 'YesNo':
        return (
          <View
            style={{
              width: moderateScale(320),
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
                marginTop: verticalScale(10),
                marginBottom: verticalScale(20),
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                borderRadius: moderateScale(15, 0.3),
                backgroundColor: 'white',
                width: moderateScale(140),
                height: moderateScale(40),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => this.setState({visible: false})}>
              <Text
                allowFontScaling={false}
                style={{
                  color: this.props.color.blue_7,
                  fontSize: moderateScale(17, 0.3),
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Huỷ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                borderRadius: moderateScale(15, 0.3),
                backgroundColor: 'white',
                width: moderateScale(140),
                height: moderateScale(40),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => this._function_button_bottom()}>
              <Text
                allowFontScaling={false}
                style={{
                  color: this.props.color.blue_7,
                  fontSize: moderateScale(17, 0.3),
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {this.state.detail_setting.button_title}
              </Text>
            </TouchableOpacity>
          </View>
        );

      case 'CheckBox':
      case 'ColorPicker':
      case 'RadioPickerImage':
      case 'Radio':
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              borderRadius: moderateScale(15, 0.3),
              backgroundColor: 'white',
              width: moderateScale(320),
              height: moderateScale(40),
              justifyContent: 'center',
              alignItems: 'center',
                marginTop: verticalScale(10),
                marginBottom: verticalScale(20),
            }}
            onPress={() => this._function_button_bottom()}>
            <Text
              allowFontScaling={false}
              style={{
                color: this.props.color.blue_7,
                fontSize: moderateScale(19, 0.3),
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Lưu
            </Text>
          </TouchableOpacity>
        );
    }
  }

  _render_content() {
    switch (this.state.type_setting) {
      case 'Radio':
        return this._render_modal_radio();

      case 'ColorPicker':
        return this._render_modal_colorpicker();

        case 'RadioPickerImage':
            return this._render_modal_radiopickerimage();

      case 'CheckBox':
        return this._render_modal_checkbox();

      case 'YesNo':
        return this._render_modal_yesno();
    }
  }

  // Modal Radio
  _render_modal_radio() {
    let items = [];
    this.state.detail_setting.list_value.forEach((item, index) => {
      items.push(
        <TouchableOpacity
          activeOpacity={1}
          key={item.title}
          style={this.style.view_radios}
          onPress={() => this.setState({value: item.value})}
          hitSlop={{left: moderateScale(20), right: moderateScale(20)}}>
          <Icon
            size={moderateScale(20)}
            color={
              this.state.value === item.value
                ? this.props.color.blue_7
                : this.props.color.blue_6
            }
            name={
              this.state.value === item.value
                ? 'md-radio-button-on'
                : 'md-radio-button-off'
            }
            type={'ionicon'}
            style={this.style.radio}
          />
          <Text
            allowFontScaling={false}
            style={[
              this.style.text_radio,
              {
                color:
                  this.state.value === item.value
                    ? this.props.color.blue_7
                    : this.props.color.blue_6,
              },
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });
    return items;
  }

  // Modal Radio Picker Image
  _render_modal_radiopickerimage() {
    let buttons = [];
    this.state.detail_setting.list_value.forEach((item, index) => {
      // let check = this.state.value === item.value;
      buttons.push(
          <TouchableOpacity
              activeOpacity={1}
              key={item.title}
              style={[this.style.view_radios]}
              onPress={() => this.setState({value: item.value})}
              hitSlop={{left: moderateScale(20), right: moderateScale(20)}}>
              <Icon
                  size={moderateScale(20)}
                  color={
                      this.state.value === item.value
                          ? this.props.color.blue_7
                          : this.props.color.blue_6
                  }
                  name={
                      this.state.value === item.value
                          ? 'md-radio-button-on'
                          : 'md-radio-button-off'
                  }
                  type={'ionicon'}
                  style={this.style.radio}
              />
              <Text
                  allowFontScaling={false}
                  style={[
                      this.style.text_radio,
                      {
                          color:
                              this.state.value === item.value
                                  ? this.props.color.blue_7
                                  : this.props.color.blue_6,
                      },
                  ]}>
                  {item.title}
              </Text>
          </TouchableOpacity>
      );
    });

    return (
      <View style={{width: '100%'}}>
        <View
          style={{
            width: '100%',
            // height: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={this.state.detail_setting.list_img[this.state.value]}
            style={{
              width: moderateScale(150),
              height: moderateScale(266.666666666666667),
              // borderWidth: 0.5,
              // borderColor: Task_Colors.task_info_light,
            }}
            resizeMode={'stretch'}
          />
        </View>

        <View
          style={{
            width: '100%',
            // height: 50,
            // flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
              paddingVertical:verticalScale(10)
          }}>
          {buttons}
        </View>
      </View>
    );
  }


    // Modal ColorPicker
    _render_modal_colorpicker() {
        let buttons = [];
        this.state.detail_setting.list_value.forEach((item, index) => {
            let check = this.state.value === item.value;
            buttons.push(
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        width: moderateScale(40),
                        height: moderateScale(40),
                        backgroundColor: check ? Task_Colors.task_info_light : 'white',
                        borderRadius: moderateScale(25),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => this.setState({value: item.value})}>
                    <View
                        style={{
                            width: moderateScale(33),
                            height: moderateScale(33),
                            backgroundColor: item.color,
                            borderRadius: moderateScale(20),
                            borderWidth: check ? moderateScale(4) : 0,
                            borderColor: 'white',
                        }}
                    />
                </TouchableOpacity>,
            );
        });

        return (
            <View style={{width: '100%'}}>
                <View
                    style={{
                        width: '100%',
                        // height: 300,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        source={this.state.detail_setting.list_img[this.state.value]}
                        style={{
                            width: moderateScale(150),
                            height: moderateScale(266.666666666666667),
                            borderWidth: 0.5,
                            borderColor: Task_Colors.task_info_light,
                        }}
                        resizeMode={'stretch'}
                    />
                </View>

                <View
                    style={{
                        width: '100%',
                        height: moderateScale(50),
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    {buttons}
                </View>
            </View>
        );
    }

  // Modal CheckBox
  _render_modal_checkbox() {
    let items = [];
    this.state.detail_setting.list_value.forEach((item, index) => {
      items.push(
        <TouchableOpacity
          activeOpacity={1}
          key={item.title}
          style={this.style.view_radios}
          onPress={() => this._oncheck(item.value)}
          hitSlop={{left: 20, right: 20}}>
          <Icon
            size={moderateScale(20)}
            color={
              this.state.value.includes(item.value)
                ? this.props.color.blue_7
                : this.props.color.blue_6
            }
            name={
              this.state.value.includes(item.value)
                ? 'checkbox-marked'
                : 'checkbox-blank-outline'
            }
            type={'material-community'}
            style={this.style.radio}
          />
          <Text
            allowFontScaling={false}
            style={[
              this.style.text_radio,
              {
                color: this.state.value.includes(item.value)
                  ? this.props.color.blue_7
                  : this.props.color.blue_6,
              },
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>,
      );
    });
    return items;
  }

  _oncheck(value) {
    if (this.state.value.includes(value)) {
      let new_value = this.state.value.replace(value, '');
      this.setState({value: new_value});
    } else {
      this.setState({value: this.state.value + value});
    }
  }

  // Modal YesNo
  _render_modal_yesno() {
    let value = this.state.detail_setting;

    return (
      <Text
        allowFontScaling={false}
        style={[this.style.text_yesno, {color: this.props.color[value.color]}]}>
        {this.state.icon !== null ? (
          <IconFA
            style={{marginRight: scale(10)}}
            name={value.icon}
            color={this.props.color.blue_7}
            size={moderateScale(18)}
          />
        ) : null}
        &nbsp;&nbsp;{value.content}
      </Text>
    );
  }

  _function_button_bottom() {
    this.setState({visible: false});
    switch (this.state.name_setting) {
      case objects_setting.Restore_Settings:
        {
          this.props.update_setting(default_setting, default_array_setting);
        }
        break;

      default:
        this.props.update_setting(
          {[this.state.name_setting]: this.state.value},
          [[this.state.name_setting, this.state.value]],
        );
    }
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <Modal
        isVisible={this.state.visible}
        animationIn={'fadeInUp'}
        animationInTiming={400}
        animationOutTiming={400}
        animationOut={'fadeOutDown'}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        hideModalContentWhileAnimating={true}
        backdropOpacity={0.4}
        // onSwipeComplete={() => this.setState({ visible: false })}
        // swipeDirection={"down"}
        style={this.style.container_modal}>
        <View
          style={{
            borderRadius: moderateScale(15),
            backgroundColor: 'white',
            width: moderateScale(320),
            alignItems: 'center',
          }}>
          <View
            style={{
              height: moderateScale(42),
              width: '90%',
              borderBottomColor: this.props.color.blue_8,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontWeight: 'bold',
                fontSize: moderateScale(17, 0.3),
                color: this.props.color.blue_7,
              }}>
              {this.state.title}
            </Text>
          </View>

          {/*Content modal*/}
          <View style={{paddingVertical: 10, width: '85%'}}>
            {this._render_content()}
          </View>
        </View>

        {/*Nút lưu/ Huỷ / Đồng ý*/}
        {this._render_bottom_button()}
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    setting_props: state.setting_control,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update_setting: bindActionCreators(setting_action.update_setting, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {forwardRef: true},
)(Modal_setting);
