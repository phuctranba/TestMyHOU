import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import Toast from '../../../components/toast_custom/toast_custom';
import {
  Task_Colors,
  icon_feedback,
  type_feedback,
  height_statusbar,
} from '../../../utils/values';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import style from './style';
import Modal_feedback from './modal_feedback';
import * as FeedBack from '../../../redux/actions/FeedbackAction';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon_check: -1,
      type_check: -1,
      // checked:true,
      content: '',
    };
    this.ani_button = new Animated.Value(1);
    this.onBack = this._onBack;
  }

  componentWillReceiveProps(nextProps) {
    // Kiểm tra kết quả gửi phản hồi
    // Dù thành công hay thất bại thì sau khi hiện toast, đưa state kết quả về trạng thái wait
    switch (nextProps.state_feedback) {
      case 'success': {
        this._ani_wait();

        this.modal._open();

        this.props.statusFeedbackAction('wait');

        break;
      }
      case 'fail': {
        this._ani_wait();
        this.toast.show({
          text: 'Lỗi máy chủ, vui lòng thử lại sau',
          textColor: Task_Colors.task_danger_dark,
          icon: 'exclamation-circle',
          iconType: 'font-awesome',
          iconColor: Task_Colors.task_danger_dark,
          duration: 3500,
        });

        this.props.statusFeedbackAction('wait');
        break;
      }
    }
  }

  _ani_load() {
    Animated.timing(this.ani_button, {
      toValue: 0,
      duration: 1000,
    }).start();
  }

  _ani_wait() {
    Animated.timing(this.ani_button, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  _render_icon() {
    let icons = [];
    icon_feedback.forEach((item, index) => {
      /*Kiểm tra xem có phải icon đang chọn không để cho thêm solid*/
      icons.push(
        <Animatable.View key={index.toString()} ref={view => (this['face' + index.toString()] = view)}>
          <Icon5
            key={item.icon}
            solid={this.state.icon_check === item.index}
            name={item.icon}
            size={moderateScale(45)}
            color={this.props.color.blue_7}
            style={this.style.icon_face}
            onPress={() => this.setState({icon_check: item.index})}
          />
        </Animatable.View>,
      );
    });
    return icons;
  }

  _render_type() {
    let types = [];
    type_feedback.forEach((item, index) => {
      types.push(
        <Animatable.View
            key={index.toString()}
          style={{width: '100%'}}
          ref={view => (this['radio' + index.toString()] = view)}>
          <TouchableOpacity
            activeOpacity={1}
            key={item.title}
            style={this.style.view_radios}
            onPress={() => this.setState({type_check: item.index})}
            hitSlop={{left: 20, right: 20}}>
            <Icon
              size={moderateScale(20)}
              color={
                this.state.type_check === item.index
                  ? this.props.color.blue_6
                  : this.props.color.blue_5
              }
              name={
                this.state.type_check === item.index
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
                    this.state.type_check === item.index
                      ? this.props.color.blue_6
                      : this.props.color.blue_5,
                },
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </Animatable.View>,
      );
    });
    return types;
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

  _ani_item(view) {
    switch (view) {
      case 'face': {
        for (let i = 0; i < 5; i++) {
          this[view + i.toString()].tada(1500).then();
        }
        break;
      }
      case 'radio': {
        for (let i = 0; i < 5; i++) {
          this[view + i.toString()].pulse(800).then();
        }
        break;
      }
      case 'input': {
        this[view].pulse(800).then();
        break;
      }
    }
  }

  _onPress() {
    let text_toast = '';
    if (this.state.icon_check === -1) {
      text_toast = 'Bạn chưa đánh giá mức độ hài lòng cho MyHOU!';
      this.scroll.scrollTo({x: 0, y: 0, animated: true});
      setTimeout(() => {
        this._ani_item('face');
      }, 500);
    } else {
      if (this.state.type_check === -1) {
        text_toast = 'Hãy lựa chọn loại phản hồi!';
        this.scroll.scrollTo({x: 0, y: 0, animated: true});
        setTimeout(() => {
          this._ani_item('radio');
        }, 500);
      } else {
        if (this.state.content === '') {
          text_toast = 'Nội dung phản hồi không được để trống!';
          this.scroll.scrollTo({x: 0, y: 0, animated: true});
          setTimeout(() => {
            this._ani_item('input');
          }, 500);
        } else {
          if (this.props.connected_internet) {
            this._ani_load();
            this.props.sendFeedBack(
              this.props.access_token,
              this.state.icon_check,
              this.state.content,
              this.state.type_check,
            );
          } else {
            this._show_toast_unconnectted();
          }
        }
      }
    }

    // console.log(text_toast)

    if (text_toast !== '') {
      this.toast.show({
        text: text_toast,
        textColor: Task_Colors.task_warning_dark,
        icon: 'exclamation-circle',
        iconType: 'font-awesome',
        iconColor: Task_Colors.task_warning_dark,
        duration: 3500,
      });
    }
  }

  _onBack() {
    this.props.navigation.goBack(null);
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    const plane_opa = this.ani_button.interpolate({
      inputRange: [0, 0.35, 0.65, 1],
      outputRange: [0, 0, 1, 1],
    });

    const plane_scale = this.ani_button.interpolate({
      inputRange: [0, 0.35, 0.65, 1],
      outputRange: [0.00000000001, 0.00000000001, 1, 1],
    });

    const text_opa = this.ani_button.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [0, 0, 1],
    });

    const load_opa = this.ani_button.interpolate({
      inputRange: [0, 0.35, 1],
      outputRange: [1, 0, 0],
    });

    const width = this.ani_button.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [moderateScale(40), moderateScale(40), scale(324)],
    });

    return (
      <View style={{flex: 1, paddingTop: height_statusbar + verticalScale(45)}}>
        <ScrollView
          style={this.style.scroll_view}
          ref={view => (this.scroll = view)}
          showsVerticalScrollIndicator={false}>
          <View
            style={this.style.container}
            pointerEvents={
              this.props.state_feedback === 'wait' ? 'auto' : 'none'
            }>
            <Text allowFontScaling={false} style={this.style.text_header}>
              ĐÁNH GIÁ CHO MYHOU !
            </Text>

            {/*List Icon đánh giá*/}
            <View style={this.style.view_list_face}>{this._render_icon()}</View>

            <Text allowFontScaling={false} style={this.style.text_face}>
              {this.state.icon_check === -1
                ? 'Hmm...\nCho chúng tôi biết bạn\ncảm nhận như thế nào về MyHOU?'
                : icon_feedback[this.state.icon_check].title}
            </Text>

            {/*List radio*/}
            {this._render_type()}

            {/*Khung text phản hồi*/}
            <Animatable.View
              style={{
                width: '100%',
                borderRadius: moderateScale(5),
                height: moderateScale(140),
              }}
              ref={view => (this.input = view)}>
              <TextInput
                allowFontScaling={false}
                underlineColorAndroid={'#00000000'}
                returnKeyType={'done'}
                textAlignVertical={'top'}
                autoCapitalize={'sentences'}
                style={this.style.input}
                multiline={true}
                placeholder={
                  this.state.type_check === -1
                    ? 'Phản hồi của bạn về MyHOU...'
                    : type_feedback[this.state.type_check].place_holder
                }
                onChangeText={text => (this.state.content = text)}
              />
            </Animatable.View>

            {/*/!*Check box*!/*/}
            {/*<View style={this.style.view_checkbox}>*/}
            {/*    <CheckBox*/}
            {/*        activeOpacity={1}*/}
            {/*        size={moderateScale(25)}*/}
            {/*        iconType={"font-awesome"}*/}
            {/*        checkedIcon={"check-square-o"}*/}
            {/*        uncheckedIcon={"square-o"}*/}
            {/*        checked={this.state.checked}*/}
            {/*        checkedColor={this.props.color.blue_6}*/}
            {/*        uncheckedColor={this.props.color.blue_6}*/}
            {/*        onPress={() => this.setState({checked: !this.state.checked})}*/}
            {/*        containerStyle={this.style.checkbox}*/}
            {/*    />*/}
            {/*    <View style={this.style.view_text_checkbox}>*/}
            {/*        <Text style={this.style.view_text_checkbox_big}>Nhận câu trả lời từ chúng tôi!</Text>*/}
            {/*        <Text  style={this.style.view_text_checkbox_small}>(Việc này không làm mất tính ẩn danh khi bạn gửi phải hồi,*/}
            {/*            chỉ đơn giản chúng tôi sẽ gửi câu trả lời về thiết bị này trong trường hợp cần thiết)</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

            {/*Nút phản hồi*/}
            <Animated.View style={{width: width}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={this.style.button_feedback}
                onPress={() => this._onPress()}>
                <Animated.View
                  style={{
                    transform: [{scale: plane_scale}],
                    width: moderateScale(40),
                    height: moderateScale(40),
                    borderRadius: 20,
                    position: 'absolute',
                    left: 0,
                    opacity: plane_opa,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon5
                    solid
                    name={'paper-plane'}
                    size={moderateScale(20)}
                    color={'#fff'}
                    style={this.style.icon_feedback}
                  />
                </Animated.View>

                <Animated.View
                  style={{position: 'absolute', opacity: load_opa}}>
                  <ActivityIndicator size={'large'} color={'white'} />
                </Animated.View>

                <Animated.Text
                  allowFontScaling={false}
                  style={[this.style.text_feedback, {opacity: text_opa}]}>
                  Gửi phản hồi
                </Animated.Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Modal_feedback
            color={this.props.color}
            nav={this.props.navigation}
            ref={view => (this.modal = view)}
          />
        </ScrollView>
        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(110)}
          setting_props={this.props.setting_props}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    access_token: state.userReducer.access_token,
    connected_internet: state.device.connected_internet,
    state_feedback: state.feedbackReducer.status,
    color: state.setting_control.color,
    setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendFeedBack: bindActionCreators(FeedBack.sendFeedbackAction, dispatch),
    statusFeedbackAction: bindActionCreators(
      FeedBack.statusFeedbackAction,
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feedback);
