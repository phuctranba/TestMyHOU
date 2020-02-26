import React, {Component} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import style from './style';
import * as Animatable from 'react-native-animatable';
import {Task_Colors} from '../../../../utils/values';
import {moderateScale} from 'react-native-size-matters';

const deviceHeight = Dimensions.get('window').height;

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_detail: false,
    };
    this.show_detail = this.animateHeight.bind(this);

    this.ani_detail = new Animated.Value(0);
  }

  _render_detail(list_data) {
    const animatedStyleHeight = {
      height: this.ani_detail,
    };
    let list_details = list_data.detail;
    let details = [];
    list_details.forEach(item =>
      details.push(
        <View
          key={item.code_class + list_data.date}
          style={this.style.view_sup}>
          {/*view chính*/}
          <View style={this.style.view_main}>
            {/*Thời gian bắt đầu*/}
            <View style={this.style.view_time}>
              <Text allowFontScaling={false} style={this.style.text_time}>
                {item.time_from}
              </Text>
            </View>

            {/*Tên môn và phòng*/}
            <View style={this.style.view_detail}>
              <View style={this.style.view_row}>
                <Text allowFontScaling={false} style={this.style.text_left}>
                  Môn học:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={this.style.text_subject}>
                  {item.subject}
                </Text>
              </View>

              <View style={this.style.view_row}>
                <Text allowFontScaling={false} style={this.style.text_left}>
                  Phòng:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={this.style.text_right}>
                  {item.room}
                </Text>
              </View>
            </View>
          </View>

          {/*view chi tiết*/}
          <Animated.View
            style={[this.style.view_more_detail, {height: this.ani_detail}]}>
            {/*Thời gian kết thúc*/}
            <View style={this.style.view_time}>
              <Text allowFontScaling={false} style={this.style.text_time}>
                {item.time_to}
              </Text>
            </View>

            {/*Tên giáo viên và mã lớp*/}
            <View style={this.style.view_detail}>
              <View style={this.style.view_row}>
                <Text allowFontScaling={false} style={this.style.text_left}>
                  G.viên:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={this.style.text_right}>
                  {item.teacher}
                </Text>
              </View>

              <View style={this.style.view_row}>
                <Text allowFontScaling={false} style={this.style.text_left}>
                  Mã lớp:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={this.style.text_right}>
                  {item.code_class}
                </Text>
              </View>
            </View>
          </Animated.View>
        </View>,
      ),
    );
    return details;
  }

  animateHeight() {
    Animated.timing(this.ani_detail, {
      toValue: this.state.show_detail ? 0 : moderateScale(60),
      duration: 200,
    }).start();
    this.state.show_detail = !this.state.show_detail;
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <Animatable.View
        delay={200}
        animation="fadeInUp"
        style={{width: moderateScale(350, 0.9)}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.show_detail}
          style={this.style.view_tou}>
          {/*Thẻ thứ*/}
          <View style={this.style.view_day}>
            <Text allowFontScaling={false} style={this.style.text_day}>
              {this.props.data.date}
            </Text>
          </View>

          {/*Thẻ chi tiết lịch*/}
          <View style={this.style.container}>
            {this._render_detail(this.props.data)}
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}
