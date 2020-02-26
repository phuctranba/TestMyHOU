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
import {withNavigation, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import user_screen_control from '../../redux/reducers/user_screen_control';
import {moderateScale} from 'react-native-size-matters';
import {height_statusbar, Task_Colors} from '../../utils/values';
import SafeAreaView from 'react-native-safe-area-view'

class Header_rectangle extends Component {
  constructor(props) {
    super(props);
  }

  _render_right() {
    if (this.props.icon !== null) {
      return (
        <TouchableOpacity style={this.style.button_right}>
          <Icon
            type={this.props.lib_icon}
            name={this.props.icon}
            size={moderateScale(22)}
            color={Task_Colors.task_warning_light}
            containerStyle={{marginTop: height_statusbar}}
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
        <View style={this.style.style_header_rectangle}>
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
              containerStyle={{marginTop: height_statusbar}}
            />
          </TouchableOpacity>
          <Text
            allowFontScaling={false}
            style={[this.style.title, {marginTop: height_statusbar}]}>
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

export default withNavigation(connect(mapStateToProps)(Header_rectangle));
