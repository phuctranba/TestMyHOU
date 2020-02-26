import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import style from '../style';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

class Header_rectangle_tab_chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: 'rgba(0, 98, 255, 0.3)',
      onFocus: false,
    };
  }

  // Hiển thị icon bên phải theo ý
  _render_right() {
    if (this.props.icon !== null) {
      return (
        <TouchableOpacity
          style={{right: 0, padding: 15, position: 'absolute'}}
          onPress={() => this.props.navigation.navigate(this.props.nav)}>
          <Icon
            type={this.props.lib_icon}
            name={this.props.icon}
            size={moderateScale(24)}
            color={this.props.color}
          />
        </TouchableOpacity>
      );
    }
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    const title = this.props.title;
    return (
      <View style={this.style.container}>
        <View style={this.style.style_header_rectangle_chart}>
          {/*Mũi tên back*/}
          <TouchableOpacity
            hitSlop={{
              top: moderateScale(10),
              bottom: moderateScale(10),
              left: moderateScale(10),
              right: moderateScale(10),
            }}
            style={this.style.button_left}
            onPress={() => this.props.navigation.goBack(null)}>
            <Icon
              type={'material'}
              name="keyboard-arrow-left"
              size={moderateScale(30)}
              color={this.props.color.blue_7}
            />
          </TouchableOpacity>

          <Text allowFontScaling={false} style={this.style.title}>
            {title}
          </Text>

          {this._render_right()}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.setting_control.color,
  };
}

export default withNavigation(
  connect(mapStateToProps)(Header_rectangle_tab_chart),
);
