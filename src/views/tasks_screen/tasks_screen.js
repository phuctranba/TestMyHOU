import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  StatusBar
} from 'react-native';
import React, {Component} from 'react';
import style from './style';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {bindActionCreators} from 'redux';
import * as UserAction from '../../redux/actions/UserAction';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {
    button_task,
  height_statusbar,
  objects_setting,
} from '../../utils/values';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

class Tasks_screen extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.setting_props[objects_setting.Setting_Start_Screen]);
    // Cho màn hình này là mặc địch hiển thị đầu tiên
    // Xét xem màn hình khởi động là cái nào để navigate sang
    if (
      this.props.setting_props[objects_setting.Setting_Start_Screen] !==
      'Tasks_Pages'
    ) {
      this.props.navigation.navigate(
        this.props.setting_props[objects_setting.Setting_Start_Screen],
      );
    }

    this.state = {
      modal_logout: false,
    };

    this.color = this.props.color;
  }


  shouldComponentUpdate(nextProps, nextState) {
    this.color = nextProps.color;
    return (
      this.state !== nextState ||
      this.props.setting_props.color !== nextProps.setting_props.color
    );
  }

  _render_modal_logout() {
    return (
      <Modal
        isVisible={this.state.modal_logout}
        animationIn={'fadeInUp'}
        animationInTiming={400}
        animationOutTiming={400}
        animationOut={'fadeOutDown'}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        hideModalContentWhileAnimating={true}
        // backdropOpacity={0.4}
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
              borderBottomColor: this.props.setting_props.color.blue_8,
              borderBottomWidth: 0.5,
              // paddingVertical: verticalScale(15),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontWeight: 'bold',
                fontSize: moderateScale(17, 0.3),
                color: this.props.setting_props.color.blue_7,
              }}>
              Đăng xuất
            </Text>
          </View>

          {/*Nội dung*/}
          <View style={{paddingVertical: 10, width: '85%'}}>
            <Text
              allowFontScaling={false}
              style={[
                this.style.text_yesno,
                {color: this.props.setting_props.color.blue_7},
              ]}>
              {this.state.icon !== null ? (
                <IconFA
                  style={{marginRight: scale(10)}}
                  name={'warning'}
                  color={this.props.setting_props.color.blue_7}
                  size={moderateScale(18)}
                />
              ) : null}
              &nbsp;&nbsp;Bạn có chắc chắn muốn đăng xuất?
            </Text>
          </View>
        </View>

        {/*Nút  Huỷ / Đăng xuất*/}
        <View
          style={{
            width: moderateScale(320),
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
              marginTop: verticalScale(10),
              marginBottom:verticalScale(20)
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
            onPress={() => this.setState({modal_logout: false})}>
            <Text
              allowFontScaling={false}
              style={{
                color: this.props.setting_props.color.blue_7,
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
            onPress={() => {
              this.setState({modal_logout: false});
              this.props.userLogoutAction(this.props.access_token);
              this.props.navigation.navigate('Login_main');
            }}>
            <Text
              allowFontScaling={false}
              style={{
                color: this.props.setting_props.color.blue_7,
                fontSize: moderateScale(17, 0.3),
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  _render_mutil_item(mutil_item) {
    let arr_item = mutil_item.map((item, index) => {
      return (
        <TouchableOpacity
          key={item.title}
          activeOpacity={0.8}
          style={this.style.view_tou}
          onPress={() => {
            if (item.title === 'Đăng xuất') {
              this.setState({modal_logout: true});
            } else {
              this.props.navigation.navigate(item.link_nav);
            }
          }}>
          <View style={this.style.view_icon}>
            <Icon
              type={item.type_icon}
              name={item.icon}
              color={this.props.setting_props.color.blue_7}
              size={item.size_icon}
            />
          </View>

          <Text
            allowFontScaling={false}
            style={this.style.text_title}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {item.title}
          </Text>

          <Icon
            type={'ionicon'}
            name={'md-arrow-dropright'}
            color={this.props.setting_props.color.blue_7}
            size={25}
            containerStyle={this.style.icon_arrow}
          />
        </TouchableOpacity>
      );
    });

    return (
      <View style={{elevation: 2,shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41, marginBottom: 15, backgroundColor: 'white'}}>
        {arr_item}
      </View>
    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.setting_props.color);
    console.log(this.props.setting_props.color);
    return (
          <LinearGradient
            colors={['white', this.props.setting_props.color.blue_0]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{width: '100%', height: '100%'}}>
            <StatusBar
              translucent={true}
              backgroundColor="#00000000"
              barStyle="dark-content"
            />

            {/*Header màn hình*/}
            <View style={this.style.header}>
              <Text allowFontScaling={false} style={this.style.text_header}>
                Tác vụ
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
                  color={this.props.setting_props.color.blue_main}
                  size={moderateScale(18)}
                  containerStyle={{marginTop: height_statusbar}}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={button_task}
              keyExtractor={(item, index) => index.toString()}
              renderItem={item => this._render_mutil_item(item.item)}
              contentContainerStyle={this.style.flatlist}
              showsVerticalScrollIndicator={false}
            />

            {this._render_modal_logout()}
          </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    access_token: state.userReducer.access_token,
    isLogged: state.userReducer.isLogged,
    setting_props: state.setting_control,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userLogoutAction: bindActionCreators(UserAction.userLogoutAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Tasks_screen));
