import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import style, {deviceWidth} from './style';
import {Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import {sizes} from '../../../utils/values';
import {moderateScale} from 'react-native-size-matters';
import {convertNumber} from '../../../utils/functions';
import FastImage from 'react-native-fast-image';
const IS_ANDROID = Platform.OS === 'android';

export default class List_new_fb extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  _itemPress() {
    if (!this.props.connect) {
      this._show_toast_unconnectted();
    } else {
      Linking.canOpenURL('fb://page/185073022002194').then(supported => {
        if (supported) {
          return Linking.openURL('fb://page/185073022002194');
        } else {
          return Linking.openURL('market://details?id=com.facebook.katana');
        }
      });
    }
  }

  _render_item(item) {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    // Kiểm ra có ảnh hay không
    const content = item.item.img === null ? 1 : 0;

    return (
      <View style={this.style.view_tou}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={this.style.tou}
          onPress={() => this._itemPress()}>
          {/*Tên page và avatar*/}
          <View style={this.style.header_post}>
            <FastImage
              style={this.style.avatar}
              source={item.item.avatar}
              resizeMode={FastImage.resizeMode.stretch}
            />
            {/*Tên và thời gian post*/}
            <View style={{justifyContent: 'center'}}>
              <Text
                allowFontScaling={false}
                style={this.style.text_page}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                Đại Học Mở Hà Nội - HOU
              </Text>
              <Text allowFontScaling={false} style={this.style.text_time}>
                26 tháng 4 lúc 23:02
              </Text>
            </View>
          </View>

          {/*Phần nội dung, được kiểm tra xem có ảnh không*/}
          {/*Nếu không sẽ chỉ hiện chữ, kích thước tự scale, tối đa 16 dòng*/}
          {/*Nếu có ảnh thì hiện một ảnh và chữ, kích thước tự scale, tối đa 8 dòng chữ và 1 ảnh*/}
          <View style={{width: '100%'}}>
            <Text
              allowFontScaling={false}
              style={this.style.text_info}
              numberOfLines={content === 1 ? 16 : 8}
              ellipsizeMode={'tail'}>
              {item.item.info}
            </Text>

            {/*Ảnh*/}
            {content === 1 ? null : (
              <FastImage
                style={this.style.image}
                source={{
                  uri: item.item.img,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            )}
          </View>

          {/*Thông số like, cmt, share*/}
          <View style={this.style.view_info}>
            {/*like*/}
            <View style={[this.style.view_info_detail]}>
              <Icon
                type={'antdesign'}
                name={'like1'}
                color={'rgba(72,90,195,0.9)'}
                size={moderateScale(15)}
              />
              <Text allowFontScaling={false} style={this.style.text_detail}>
                {convertNumber(item.item.like)}
              </Text>
            </View>

            {/*Đường kẻ*/}
            <View style={this.style.line} />

            {/*cmt*/}
            <View style={[this.style.view_info_detail]}>
              <Icon
                type={'font-awesome'}
                name={'comment'}
                color={'rgba(72,90,195,0.9)'}
                size={moderateScale(15)}
              />
              <Text allowFontScaling={false} style={this.style.text_detail}>
                {convertNumber(item.item.cmt)}
              </Text>
            </View>

            {/*Đường kẻ*/}
            <View style={this.style.line} />

            {/*share*/}
            <View style={[this.style.view_info_detail]}>
              <Icon
                type={'font-awesome'}
                name={'share'}
                color={'rgba(72,90,195,0.9)'}
                size={moderateScale(15)}
              />
              <Text allowFontScaling={false} style={this.style.text_detail}>
                {convertNumber(item.item.share)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  // Hàm của snap
  _scrollInterpolator(index, carouselProps) {
    const range = IS_ANDROID ? [1, 0, -1, -2, -3] : [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  }

  _animatedStyles(index, animatedValue, carouselProps, cardOffset) {
    const sizeRef = carouselProps.vertical
      ? carouselProps.itemHeight
      : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    const card1Scale = 0.9;
    const card2Scale = 0.8;

    cardOffset = !cardOffset && cardOffset !== 0 ? 10 : cardOffset;

    const getTranslateFromScale = (cardIndex, scale) => {
      const centerFactor = (1 / scale) * cardIndex;
      const centeredPosition = -Math.round(sizeRef * centerFactor);
      const edgeAlignment = Math.round((sizeRef - sizeRef * scale) / 2);
      const offset = Math.round((cardOffset * Math.abs(cardIndex)) / scale);

      return IS_ANDROID
        ? centeredPosition - edgeAlignment - offset
        : centeredPosition + edgeAlignment + offset;
    };

    return IS_ANDROID
      ? {
          opacity: animatedValue.interpolate({
            inputRange: [-3, -2, -1, 0, 1],
            outputRange: [0, 0.2, 0.3, 1, 0.7],
            extrapolate: 'clamp',
          }),
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [-2, -1, 0, 1],
                outputRange: [card2Scale, card1Scale, 1, card1Scale],
                extrapolate: 'clamp',
              }),
            },
            {
              [translateProp]: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0, 1],
                outputRange: [
                  getTranslateFromScale(-3, card2Scale),
                  getTranslateFromScale(-2, card2Scale),
                  getTranslateFromScale(-1, card1Scale),
                  0,
                  getTranslateFromScale(0, 0.8),
                ],
                extrapolate: 'clamp',
              }),
            },
          ],
        }
      : {
          zIndex: carouselProps.data.length - index,
          opacity: animatedValue.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [1, 0.75, 0.5, 0],
            extrapolate: 'clamp',
          }),
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2],
                outputRange: [card1Scale, 1, card1Scale, card2Scale],
                extrapolate: 'clamp',
              }),
            },
            {
              [translateProp]: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2, 3],
                outputRange: [
                  -sizeRef * 0.5,
                  0,
                  getTranslateFromScale(1, card1Scale),
                  getTranslateFromScale(2, card2Scale),
                  getTranslateFromScale(3, card2Scale),
                ],
                extrapolate: 'clamp',
              }),
            },
          ],
        };
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.props.data}
        renderItem={item => this._render_item(item)}
        sliderWidth={sizes.Width_Devices}
        activeSlideAlignment={'start'}
        useScrollView={true}
        itemWidth={moderateScale(288)}
      />
    );
  }
}
