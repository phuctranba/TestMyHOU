'use strict';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {Component} from 'react';
import {objects_setting, sizes} from '../../utils/values';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import style from './style';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
      this.single_color=this.props.setting_props.color.blue_6;
      this.type_color = this.props.setting_props[objects_setting.Setting_Tooltip_Color]==='Multi';
    // Đống state để quản lí toast
    this.state = {
      toastShown: false,
      textColor: this.type_color?'black':this.single_color,
      text: 'Thông báo',
      icon: null,
      iconColor: this.type_color?'black':this.single_color,
      iconType: 'font-awesome',
        typeButton: null,
      textButtonRight: 'Nút',
      textColorButtonRight: 'white',
      backgroundButtonRight: this.type_color?'black':this.single_color,
      iconButtonRight: null,
      iconColorButtonRight: 'white',
      iconTypeButtonRight: 'font-awesome',
        textButtonLeft: 'Nút',
        textColorButtonLeft: 'white',
        backgroundButtonLeft: this.type_color?'black':this.single_color,
        iconButtonLeft: null,
        iconColorButtonLeft: 'white',
        iconTypeButtonLeft: 'font-awesome',
      background: 'white',
      timeShow: 350,
      delay: 0,
      duration: 3000,
      height_toast: 0,


      // Hàm và dữ liệu được gửi vào cho các sự kiện nút
      functionButtonLeft: () => {},
      dataButtonLeft: null,
        functionButtonRight: () => {},
        dataButtonRight: null,
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      this.single_color=nextProps.setting_props.color.blue_6;
      this.type_color = nextProps.setting_props[objects_setting.Setting_Tooltip_Color]==='Multi';
      return true;
  }


    show({
         textColor = 'black',
         text = 'Thông báo',
         icon = null,
         iconColor = 'black',
         iconType = 'font-awesome',
             typeButton = null,
             textButtonRight= 'Nút',
             textColorButtonRight= 'white',
             backgroundButtonRight= 'black',
        iconButtonRight= null,
        iconColorButtonRight= 'white',
        iconTypeButtonRight= 'font-awesome',
        textButtonLeft= 'Nút',
        textColorButtonLeft= 'white',
        backgroundButtonLeft='black',
        iconButtonLeft= null,
        iconColorButtonLeft= 'white',
        iconTypeButtonLeft= 'font-awesome',
         background = '#ededed',
         timeShow = 350,
         delay = 0,
         duration = 3000,

         functionButtonLeft=() =>{},
        dataButtonLeft= null,
        functionButtonRight= () => {},
        dataButtonRight= null,
       }) {
    // Kiểm tra xem có đang hiện toast hay không, nếu được ấn tiếp sẽ làm mới thời gian hiện
    //     bằng cách huỷ sự hiện ẩn đi và gọi lại từ sự kiện hiện bên dưới
    if (this.state.toastShown && this.hide_toast) {
      clearTimeout(this.hide_toast);
    }
    this.setState({
      toastShown: true,
      textColor: this.type_color?textColor:this.single_color,
      text: text,
      icon: icon,
      iconColor: this.type_color?iconColor:this.single_color,
      iconType: iconType,
        typeButton: typeButton,
        textButtonRight: textButtonRight,
        textColorButtonRight: textColorButtonRight,
        backgroundButtonRight: this.type_color?backgroundButtonRight:this.single_color,
        iconButtonRight: iconButtonRight,
        iconColorButtonRight: iconColorButtonRight,
        iconTypeButtonRight: iconTypeButtonRight,
        textButtonLeft: textButtonLeft,
        textColorButtonLeft: textColorButtonLeft,
        backgroundButtonLeft: this.type_color?backgroundButtonLeft:this.single_color,
        iconButtonLeft: iconButtonLeft,
        iconColorButtonLeft: iconColorButtonLeft,
        iconTypeButtonLeft: iconTypeButtonLeft,
      background: background,
      timeShow: timeShow,
      delay: delay,
      duration: duration,


        functionButtonLeft:functionButtonLeft,
        dataButtonLeft: dataButtonLeft,
        functionButtonRight:functionButtonRight,
        dataButtonRight: dataButtonRight,
    });

    setTimeout(() => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: timeShow,
      }).start(duration!==-1?this.hide(duration, timeShow):null); /*Gọi hàm ẩn toast*/
    }, delay);
  }

  hide_now() {
    if (this.state.toastShown && this.hide_toast) {
      clearTimeout(this.hide_toast);
    }

    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: this.state.timeShow,
    }).start();
  }

  hide(duration, timeShow) {
    this.hide_toast = setTimeout(() => {
      this.setState({toastShown: false});
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: timeShow,
      }).start();
    }, duration);
  }

  // Render ra button tuỳ chọn theo tham số truyền vào
  _render_button() {
    if (this.state.typeButton !== null) {
      switch (this.state.typeButton) {
        case 'button_right':
          return (
              <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    this.style.tou_button,
                    {backgroundColor: this.state.backgroundButtonRight, alignSelf: 'flex-end', marginRight: scale(20)},
                  ]}
                  onPress={() => {
                    this.hide_now();

                    if (this.state.functionButtonRight !== null) {

                      if(this.state.dataButtonRight!==null){
                        return this.state.functionButtonRight(this.state.dataButtonRight);
                      }
                      else {
                        return this.state.functionButtonRight();
                      }
                    }
                  }}>
                <Text
                    allowFontScaling={false}
                    style={{color: this.state.textColorButtonRight}}>
                  {this.state.textButtonRight}
                </Text>
                  <Icon
                      size={moderateScale(15)}
                      type={this.state.iconTypeButtonRight}
                      name={this.state.iconButtonRight}
                      color={this.state.iconColorButtonRight}
                      containerStyle={{marginLeft: scale(8)}}
                  />
              </TouchableOpacity>
          );

          case 'double_button':
              return (
                  <View style={{flexDirection:'row', justifyContent:'space-evenly',width:'100%'}}>
                      <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                              this.style.tou_button,
                              {backgroundColor: this.state.backgroundButtonLeft, marginRight:scale(30)},
                          ]}
                          onPress={() => {
                              this.hide_now();

                              if (this.state.functionButtonLeft !== null) {

                                  if(this.state.dataButtonLeft!==null){
                                      return this.state.functionButtonLeft(this.state.dataButtonLeft);
                                  }
                                  else {
                                      return this.state.functionButtonLeft();
                                  }
                              }
                          }}>
                          <Text
                              allowFontScaling={false}
                              style={{color: this.state.textColorButtonLeft}}>
                              {this.state.textButtonLeft}
                          </Text>
                          <Icon
                              size={moderateScale(15)}
                              type={this.state.iconTypeButtonLeft}
                              name={this.state.iconButtonLeft}
                              color={this.state.iconColorButtonLeft}
                              containerStyle={{marginLeft: scale(10)}}
                          />
                      </TouchableOpacity>


                      <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                              this.style.tou_button,
                              {backgroundColor: this.state.backgroundButtonRight, marginLeft:scale(30)},
                          ]}
                          onPress={() => {
                              this.hide_now();

                              if (this.state.functionButtonRight !== null) {

                                  if(this.state.dataButtonRight!==null){
                                      return this.state.functionButtonRight(this.state.dataButtonRight);
                                  }
                                  else {
                                      return this.state.functionButtonRight();
                                  }
                              }
                          }}>
                          <Text
                              allowFontScaling={false}
                              style={{color: this.state.textColorButtonRight}}>
                              {this.state.textButtonRight}
                          </Text>
                          <Icon
                              size={moderateScale(15)}
                              type={this.state.iconTypeButtonRight}
                              name={this.state.iconButtonRight}
                              color={this.state.iconColorButtonRight}
                              containerStyle={{marginLeft: scale(10)}}
                          />
                      </TouchableOpacity>
                  </View>
              );

        default:
          return null;
      }
    }
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    let num =
        this.props.marginBottom +
        this.state.height_toast +
        this.props.marginBottom / 10;

    let animationY = this.animatedValue.interpolate({
      inputRange: [0, 0.2, 1],
      outputRange: [
        sizes.Height_Devices,
        sizes.Height_Devices - num / 2,
        sizes.Height_Devices - num,
      ],
    });

    let animationOpa = this.animatedValue.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 0, 1],
    });

    return (
        <Animated.View
            onLayout={e =>
                this.state.height_toast !== e.nativeEvent.layout.height
                    ? this.setState({height_toast: e.nativeEvent.layout.height})
                    : null
            }
            style={[
              this.style.container,
              {
                transform: [{translateY: animationY}],
                backgroundColor: this.state.background,
                opacity: animationOpa,
              },
            ]}>
          <Text
              allowFontScaling={false}
              style={[this.style.text_toast, {color: this.state.textColor}]}>
            {this.state.icon !== null ? (
                <IconFA
                    style={{marginRight: scale(10)}}
                    name={this.state.icon}
                    color={this.state.iconColor}
                    size={moderateScale(20)}
                />
            ) : null}
            &nbsp;&nbsp;{this.state.text}
          </Text>
          {this._render_button()}
        </Animated.View>
    );
  }
}

export default Toast;
