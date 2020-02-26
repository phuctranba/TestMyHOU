import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import style from './style';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Social_network_screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={require('../../assets/img/demo_bg2.jpg')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/*Header màn hình*/}
        <View style={this.style.header}>
          <Text allowFontScaling={false} style={this.style.text_header}>
            Chat
          </Text>

          <TouchableOpacity
            hitSlop={{
              top: verticalScale(5),
              bottom: verticalScale(5),
              left: verticalScale(5),
              right: verticalScale(5),
            }}
            style={this.style.button_bell}
            onPress={() => this.props.navigation.navigate('Notification_list')}>
            <Icon
              type="font-awesome"
              name={'bell'}
              color={this.props.color.blue_main}
              size={moderateScale(18)}
            />
          </TouchableOpacity>
        </View>

        <Text allowFontScaling={false}>Mạng xã hội</Text>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.setting_control.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Social_network_screen);
