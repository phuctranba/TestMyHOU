import React, {Component} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import style, {deviceHeight} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import Carousel from '../list_news_fb/list_new_fb';
import {list_button_fa_home} from '../../../utils/values';
import {moderateScale} from 'react-native-size-matters';
// import {bindActionCreators} from "redux";
// import * as control_local from "../../../redux/actions/ControlLocalAction";
// import * as listNews from "../../../redux/actions/ListNewsHomeScreenAction";
// import connect from "react-redux/es/connect/connect";

export default class List_button_fa extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  _item_press(uri) {
    // Kiểm tra xem có kết nối hay không
    this.props.connect
      ? this.props.nav.navigate('Web_component', {uri})
      : this.props.toast_unconnect();
  }

  _render_item(item, index) {
    return (
      <View
        style={[
          this.style.button,
          {
            marginRight:
              index === list_button_fa_home.length - 1 ? moderateScale(15) : 0,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={this.style.view_item_f}
          onPress={() => this._item_press(item.uri)}>
          <Icon
            name={'city'}
            style={{color: this.props.color.blue_main}}
            size={moderateScale(14)}
          />
          <Text allowFontScaling={false} style={this.style.text_button}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _render_list_button_Faculty(item) {
    return (
      <View>
        {this._render_item(item.item[0], item.index)}
        {item.item.length === 2 ? this._render_item(item.item[1]) : null}
      </View>
    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <Animatable.View style={this.style.main_component} animation="fadeInUp" delay={1300}>
        <View style={this.style.container}>
          <Text allowFontScaling={false} style={this.style.text_header}>
            Trang chủ các khoa
          </Text>
        </View>

        <FlatList
          data={list_button_fa_home}
          keyExtractor={item => item[0].name}
          renderItem={item => this._render_list_button_Faculty(item)}
          style={{backgroundColor: '#00000000'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Animatable.View>
    );
  }
}
