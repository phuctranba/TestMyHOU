import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Uti_school from './uti_school/uti_school';
import Uti_more from './uti_more/uti_more';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {height_statusbar, Toast_form} from '../../utils/values';
import {sizes} from '../../utils/values';
import style from './style';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import Toast from '../../components/toast_custom/toast_custom';

class Utilities_screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // change_bg_color:{
      color_top_1: 108,
      color_top_2: 189,
      color_top_3: 231,
      color_bot_1: 255,
      color_bot_2: 255,
      color_bot_3: 255,
      // }
    };
  }

  _onScroll(e) {
    const y = e.nativeEvent.contentOffset.y;
    const value = y / (Dimensions.get('window').height * 1.82);
    this.setState({
      color_top_1: 108 + value * 147,
      color_top_2: 189 + value * 66,
      color_top_3: 231 + value * 24,
      color_bot_1: 240 - value * 147,
      color_bot_2: 247 - value * 66,
      color_bot_3: 255 - value * 24,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps;
  }

  _show_toast_unconnectted = () => {
    this.toast.show(Toast_form.no_connected);
  };

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
         <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={this.style.container}>
        {/*Header màn hình*/}
        <View style={this.style.header}>
          <Text allowFontScaling={false} style={this.style.text_header}>
            Tiện ích
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
              containerStyle={{marginTop: height_statusbar}}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={this.style.scroll_view}
          onScroll={e => this._onScroll(e)}
          onScrollEndDrag={e => this._onScroll(e)}
          showsVerticalScrollIndicator={false}>
          {/*List nút bên trên*/}
          <Uti_school
            color={this.props.color}
            toast_unconnectted={this._show_toast_unconnectted}
            connect={this.props.connected_internet}
            nav={this.props.navigation}
          />

          {/*List tiện ích bên dưới*/}
          <Uti_more
            color={this.props.color}
            toast_unconnectted={this._show_toast_unconnectted}
            connect={this.props.connected_internet}
            nav={this.props.navigation}
          />
        </ScrollView>

        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(110)}
          setting_props={this.props.setting_props}
        />
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
    setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Utilities_screen);
