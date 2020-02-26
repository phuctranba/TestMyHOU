import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style';
// import Dialog_button from './dialog/dialog_button'
import {withNavigation, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import SafeAreaView from 'react-native-safe-area-view'

class Header_round extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _render_right() {
    if (this.props.icon !== null&&this.props.icon !== undefined) {
      return (
        <TouchableOpacity
          style={this.style.button_right}
          onPress={() => this.props.navigation.navigate(this.props.nav)}>
          <Icon
            type={this.props.lib_icon}
            name={this.props.icon}
            size={moderateScale(26)}
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
      <SafeAreaView style={this.style.container} forceInset = {{bottom:'never', top:'never'}}>
        <View style={this.style.style_header_round}>
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
              size={moderateScale(28)}
              color={this.props.color.blue_7}
            />
          </TouchableOpacity>
          <Text allowFontScaling={false} style={this.style.title}>
            {title}
          </Text>
          {this._render_right()}
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.setting_control.color,
  };
}

export default withNavigation(connect(mapStateToProps)(Header_round));
