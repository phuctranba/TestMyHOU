import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {Component} from 'react';
import style from './style';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

export default class List_new_fa extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  _render_item(item) {
    return (
      <View style={this.style.view_sup}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={this.style.view_tou}
          onPress={() =>
            this.props.nav.navigate('Web_component', {uri: item.item.uri})
          }>
          <FastImage
            style={this.style.image_new}
            source={{
              uri: item.item.img,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />

          {/*Title và time*/}
          <View
            style={{
              width: '48%',
              justifyContent: 'space-between',
              marginRight: '3%',
              height: '76%',
            }}>
            <Text
              allowFontScaling={false}
              style={this.style.text_title}
              numberOfLines={4}
              ellipsizeMode={'tail'}>
              {item.item.title}
            </Text>

            {/*time*/}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                type={'antdesign'}
                name={'clockcircleo'}
                color={this.props.color.blue_8}
                style={{marginHorizontal: '5%'}}
                size={moderateScale(13, 0.4)}
              />
              <Text allowFontScaling={false} style={this.style.text_time}>
                {item.item.time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={this.style.view_tou}
          onPress={() =>
            this.props.nav.navigate('Web_component', {uri: item.item.uri})
          }>
          <FastImage
            style={this.style.image_new}
            source={{
              uri: item.item.img,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />

          {/*Title và time*/}
          <View
            style={{
              width: '48%',
              justifyContent: 'space-between',
              marginRight: '3%',
              height: '76%',
            }}>
            <Text
              allowFontScaling={false}
              style={this.style.text_title}
              numberOfLines={4}
              ellipsizeMode={'tail'}>
              {item.item.title}
            </Text>

            {/*time*/}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                type={'antdesign'}
                name={'clockcircleo'}
                color={this.props.color.blue_8}
                style={{marginHorizontal: '5%'}}
                size={moderateScale(13, 0.4)}
              />
              <Text allowFontScaling={false} style={this.style.text_time}>
                {item.item.time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={item => item.title}
        extraData={this.props.data}
        renderItem={item => this._render_item(item)}
        style={{backgroundColor: '#00000000'}}
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: verticalScale(10)}}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
      />
    );
  }
}
