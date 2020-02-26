import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import style, {deviceWidth} from './style';
import {moderateScale, scale} from 'react-native-size-matters';
import {utilities} from '../../../utils/values';

export default class Uti_school extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  _item_press({nav_address, props_send}) {
    if (this.props.connect) {
      this.props.nav.navigate(nav_address, props_send);
    } else {
      this.props.toast_unconnectted();
    }
  }

  _render_item(item) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          this.style.button,
          {marginRight: item.title === 'Bản đồ' ? scale(20) : 0},
        ]}
        onPress={() => this._item_press(item)}>
        <View style={this.style.icon_view}>
          <Icon
            type={item.icon_type}
            name={item.icon}
            color={'#fff'}
            size={moderateScale(23)}
          />
        </View>

        <View style={this.style.text_view}>
          <Text allowFontScaling={false} style={this.style.text}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <View>
        <Text allowFontScaling={false} style={this.style.text_header}>
          Tiện ích nhà trường
        </Text>
        <FlatList
          data={utilities.uti_scholl}
          keyExtractor={item => item.title}
          renderItem={item => this._render_item(item.item)}
          style={{backgroundColor: '#00000000'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
