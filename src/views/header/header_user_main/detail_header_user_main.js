import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import style, {
  marginvertical_button,
  size_item_button,
  marginbottom_button_schedule,
  marginbottom_button,
  top_avatar,
  top_text_name_code,
  marginleft_avatar,
  size_avatar,
  size_button,
  size_text,
  height_view,
  W,
  H,
} from './style';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-elements';
import {height_statusbar} from '../../../utils/values';
import {moderateScale} from 'react-native-size-matters';

// Ảnh đại diện tạm thời nếu chưa có, vẫn để boy do chưa check giới tính
const avatar_boy = require('../../../assets/img/boy.png');
const avatar_girl = require('../../../assets/img/girl.png');

class Detail_header_user_main extends Component {
  constructor(props) {
    super(props);
    // Trả về state theo từng chiều muốn scale (tính toán ở this.style.js)
    this.state = {
      // cài đặt chiều cao khi scroll
      change_height: {
        style: {
          height: height_view + height_statusbar,
        },
      },
      // Các nút
      // Nút lịch
      change_button_schedule: {
        style: {
          bottom: marginbottom_button_schedule /*20*/,
          width: size_button /*70*/,
          height: size_button,
        },
      },

      // Nút thông tin
      change_button_info: {
        style: {
          bottom: marginbottom_button /*70*/,
          left: moderateScale(20, 4) /*20*/,
          width: size_button /*70*/,
          height: size_button,
        },
      },

      // Nút học tập
      change_button_study: {
        style: {
          bottom: marginbottom_button /*70*/,
          right: moderateScale(20, 4) /*20*/,
          width: size_button,
          height: size_button,
        },
      },

      // Chữ trong các nút
      change_text_button: {
        style: {
          display: 'flex',
          fontSize: size_text.text_button,
        },
      },
      // phần text thông tin
      // cách top của phần view name và mã sinhv viên
      change_info_view: {
        style: {
          top: top_text_name_code,
        },
      },

      // tên sinh viên
      change_info_name: {
        style: {
          fontSize: size_text.text_name,
        },
      },

      // Hai thông tin tín chỉ và TBTL
      change_info_study: {
        style: {
          opacity: 1,
          fontSize: size_text.text_info,
        },
      },
      // Chữ nhỏ kèm hai thông tin học tập
      change_small_text: {
        style: {
          opacity: 1,
        },
      },

      // Ẩn mã sinh viên
      change_info_code: {
        style: {
          color: 'rgba(255, 255, 255,1)',
        },
      },
      // vị trí và kích thước view avatar
      change_ava_view: {
        style: {
          top: top_avatar,
          left: marginleft_avatar,
          width: size_avatar,
          height: size_avatar,
        },
      },
      // Kích thước của avatar
      change_ava: {
        style: {
          height: size_avatar,
          width: size_avatar,
        },
      },

      // Đổi tab đang active thôi
      // Thực ra cái này nó không hay lắm do nó re_render lâu nên làm mất trải nghiệm người dùng
      tab_index: 2,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Chỉ re_render khi tab thay đổi
    return (
      this.state.tab_index !== nextState.tab_index ||
      this.props!== nextProps
    );
  }

  _change_ava(value) {
    // Nhấn mạnh các công thức và con số bên dưới được đổi theo tỉ lệ màn hình hiên tại
    // Làm ơn đừng động vào những con số

    // Cái đống công thức này chủ yếu dùng để scale theo tỉ lệ cuộn từ 0 đến 1
    // Có thể tương lai sẽ chuyển sang animated, nhưng nó sẽ dài hơn

    // thay đổi avatar
    //                      70                                   30
    let size = (1 - value) * moderateScale(70) + moderateScale(30);

    this.state.change_ava_view.style.top =
      (1 - value) * moderateScale(45) + moderateScale(5);
    this.state.change_ava_view.style.left =
      (1 - value) * (marginleft_avatar - W * moderateScale(0.02, 3)) +
      W * moderateScale(0.02, 3);
    this.state.change_ava_view.style.width = size;
    this.state.change_ava_view.style.height = size;

    this.state.change_ava.style.height = size;
    this.state.change_ava.style.width = size;

    // thay đổi size button, chuyển kích thước từ 70 -> 28, thay đổi khoảng cách các phía và ẩn chữ
    //                 27                                       43
    let size_button = moderateScale(27) + (1 - value) * moderateScale(43);
    // nút hồ sơ                                20                       103
    this.state.change_button_info.style.left =
      moderateScale(20, 4) + moderateScale(103) * value;
    //                                              7                           63
    this.state.change_button_info.style.bottom =
      moderateScale(7) + moderateScale(63) * (1 - value);
    this.state.change_button_info.style.width = size_button;
    this.state.change_button_info.style.height = size_button;

    // nút lịch
    //                                                     7                       18
    this.state.change_button_schedule.style.bottom =
      moderateScale(7) + moderateScale(18) * (1 - value);
    this.state.change_button_schedule.style.width = size_button;
    this.state.change_button_schedule.style.height = size_button;

    // nút học tập
    //                                             20                       103
    this.state.change_button_study.style.right =
      moderateScale(20, 4) + moderateScale(103) * value;
    //                                               7                        63
    this.state.change_button_study.style.bottom =
      moderateScale(7) + moderateScale(63) * (1 - value);
    this.state.change_button_study.style.width = size_button;
    this.state.change_button_study.style.height = size_button;

    //chữ trong nút
    this.state.change_text_button.style.fontSize =
      (1 - value) * (1 - value) * size_text.text_button;
    this.state.change_text_button.style.display = value === 1 ? 'none' : 'flex';

    // thay đổi text thông tin
    this.state.change_info_view.style.top = (1 - value) * top_text_name_code;

    this.state.change_info_name.style.fontSize =
      value * moderateScale(2, 0.7) + size_text.text_name;

    this.state.change_info_study.style.fontSize =
      (1 - value) * (1 - value) * size_text.text_info;

    this.state.change_small_text.style.opacity = 1 - value * 3;

    this.state.change_info_code.style.color = `rgba(255, 255, 255, ${1 -
      value})`;

    // thay đổi chiều cao view tổng
    this.state.change_height.style.height =
      (1 - value) * (height_view * 0.8) + height_view * 0.2 + height_statusbar;

    // Cài đặt các thay đổi
    this.ava_view && this.ava_view.setNativeProps(this.state.change_ava_view);
    this.ava && this.ava.setNativeProps(this.state.change_ava);

    this.infor_view &&
      this.infor_view.setNativeProps(this.state.change_info_view);
    this.name && this.name.setNativeProps(this.state.change_info_name);
    this.code && this.code.setNativeProps(this.state.change_info_code);
    this.title && this.title.setNativeProps(this.state.change_info_code);
    this.view_sup && this.view_sup.setNativeProps(this.state.change_height);

    this.bt_1 && this.bt_1.setNativeProps(this.state.change_button_info);
    this.bt_2 && this.bt_2.setNativeProps(this.state.change_button_schedule);
    this.bt_3 && this.bt_3.setNativeProps(this.state.change_button_study);

    this.text_button_1 &&
      this.text_button_1.setNativeProps(this.state.change_text_button);
    this.text_button_2 &&
      this.text_button_2.setNativeProps(this.state.change_text_button);
    this.text_button_3 &&
      this.text_button_3.setNativeProps(this.state.change_text_button);

    // this.small_text_1 && this.small_text_1.setNativeProps(this.state.change_small_text);
    // this.small_text_2 && this.small_text_2.setNativeProps(this.state.change_small_text);
    //
    // this.study_1 && this.study_1.setNativeProps(this.state.change_info_study);
    // this.study_2 && this.study_2.setNativeProps(this.state.change_info_study);
  }

  _setState_redux(index) {
    this.setState({tab_index: index});
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    // Thay đổi màu nền các nút
    let color_icon_text = index => {
      return {
        color:
          this.state.tab_index === index ? 'white' : this.props.color.blue_6,
      };
    };
    let color_tou = index => {
      return {
        backgroundColor:
          this.state.tab_index === index ? this.props.color.blue_6 : 'white',
      };
    };
    const hitslop = {
      top: moderateScale(5),
      bottom: moderateScale(5),
      left: moderateScale(5),
      right: moderateScale(5),
    };

    return (
      <View
        style={[this.style.view_header]}
        ref={view => (this.view_sup = view)}>
        {/*Avatar người dùng*/}
        <Animatable.Text
          allowFontScaling={false}
          delay={200}
          animation="fadeInDown"
          ref={view => (this.title = view)}
          style={[this.style.text_screen, {marginTop: height_statusbar}]}>
          Sinh viên
        </Animatable.Text>

        <Animatable.View
          delay={200}
          ref={view => (this.ava_view = view)}
          animation="zoomIn"
          style={[this.style.avatar_view, {marginTop: height_statusbar}]}>
          <Image
            ref={view => (this.ava = view)}
            source={this.props.gender === 'NAM'||this.props.gender === 'Trống' ? avatar_boy : avatar_girl}
            style={this.style.avatar_user}
            resizeMode={'cover'}
          />
        </Animatable.View>

        {/*Nút thông báo*/}
        <Animatable.View
          delay={200}
          animation="fadeInDown"
          style={[this.style.view_bell, {marginTop: height_statusbar}]}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={this.style.tou_bell}
            hitSlop={hitslop}
            onPress={() => this.props.nav.navigate('Notification_list')}>
            <Icon
              type={'font-awesome'}
              name={'bell'}
              color={this.props.color.blue_6}
              size={moderateScale(15)}
            />
          </TouchableOpacity>
        </Animatable.View>

        {/*Tên và mã sinh viên*/}
        <Animatable.View
          delay={200}
          ref={view => (this.infor_view = view)}
          animation="fadeInDown"
          style={[this.style.view_name_code, {marginTop: height_statusbar}]}>
          <Text
            allowFontScaling={false}
            ref={view => (this.name = view)}
            style={this.style.text_name}>
            {this.props.name}
          </Text>

          <Text
            allowFontScaling={false}
            style={this.style.text_code_student}
            ref={view => (this.code = view)}>
            {this.props.code}
          </Text>
        </Animatable.View>

        {/*3 Nút*/}

        {/*Lịch biểu*/}
        <Animatable.View
          ref={view => (this.bt_1 = view)}
          delay={700}
          animation="zoomIn"
          style={[
            this.style.view_item,
            color_tou(1),
            {bottom: marginbottom_button, left: marginvertical_button},
          ]}>
          <TouchableOpacity
            hitSlop={hitslop}
            style={this.style.tou_button}
            onPress={() => {
              // this.props._set_state(1);
              this.props.nav.navigate('Schedule_component');
              this.setState({tab_index: 1});
            }}>
            <Icon5
              name={'calendar-alt'}
              style={color_icon_text(1)}
              size={size_item_button}
            />
            <Text
              allowFontScaling={false}
              ref={view => (this.text_button_1 = view)}
              style={[this.style.text_bt, color_icon_text(1)]}>
              Lịch biểu
            </Text>
          </TouchableOpacity>
        </Animatable.View>

        {/*Hồ sơ*/}
        <Animatable.View
          ref={view => (this.bt_2 = view)}
          delay={700}
          animation="zoomIn"
          style={[
            this.style.view_item,
            color_tou(2),
            {bottom: marginbottom_button_schedule},
          ]}>
          <TouchableOpacity
            hitSlop={hitslop}
            style={this.style.tou_button}
            onPress={() => {
              // this.props._set_state(2);
              this.props.nav.navigate('Info_component');
              this.setState({tab_index: 2});
            }}>
            <Icon5
              name={'id-card-alt'}
              style={color_icon_text(2)}
              size={size_item_button * 1.07692307692} /*chuyển 13->14*/
            />
            <Text
              allowFontScaling={false}
              ref={view => (this.text_button_2 = view)}
              style={[this.style.text_bt, color_icon_text(2)]}>
              Hồ sơ
            </Text>
          </TouchableOpacity>
        </Animatable.View>

        {/*Học tập*/}
        <Animatable.View
          ref={view => (this.bt_3 = view)}
          delay={700}
          animation="zoomIn"
          style={[
            this.style.view_item,
            color_tou(3),
            {bottom: marginbottom_button, right: marginvertical_button},
          ]}>
          <TouchableOpacity
            hitSlop={hitslop}
            style={this.style.tou_button}
            onPress={() => {
              // this.props._set_state(3);
              this.props.nav.navigate('Study_component');
              this.setState({tab_index: 3});
            }}>
            <Icon5
              name={'book-open'}
              style={color_icon_text(3)}
              size={size_item_button}
            />
            <Text
              allowFontScaling={false}
              ref={view => (this.text_button_3 = view)}
              style={[this.style.text_bt, color_icon_text(3)]}>
              Học tập
            </Text>
          </TouchableOpacity>
        </Animatable.View>

        {/*/!*Trung bình tích luỹ bên trái*!/*/}
        {/*<Animatable.View delay={200} animation="flipInY" style={[this.style.view_text_info,{left:moderateScale(18,3)}]}>*/}
        {/*    <Text ref={view=>this.small_text_1=view} style={[this.style.text_small,{left:0,top:0}]}>TB tích luỹ</Text>*/}
        {/*    <Text ref={view=>this.study_1=view} style={this.style.text_big}>3.32</Text>*/}
        {/*</Animatable.View>*/}

        {/*/!*Số tín chỉ bên phải*!/*/}
        {/*<Animatable.View delay={200} animation="flipInY" style={[this.style.view_text_info,{right:moderateScale(18,3)}]}>*/}
        {/*    <Text ref={view=>this.study_2=view} style={this.style.text_big}>97</Text>*/}
        {/*    <Text ref={view=>this.small_text_2=view} style={[this.style.text_small,{right:0,bottom:0}]}>Tín chỉ</Text>*/}
        {/*</Animatable.View>*/}
      </View>
    );
  }
}

export default Detail_header_user_main;
