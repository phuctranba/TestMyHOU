import {View} from 'react-native';
import React, {Component} from 'react';
import {style_fb, deviceWidth} from './style';
import {Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import Placeholder from 'rn-placeholder';
import style from '../list_news_fb/style';
import {moderateScale} from 'react-native-size-matters';
const IS_ANDROID = Platform.OS === 'android';

class Place_list_new_fb extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  _render_item(item) {
    // Kiểm ra có ảnh hay không

    return (
      <View style={style_fb.view_tou}>
        <View
          activeOpacity={0.7}
          style={style_fb.tou}
          onPress={() => this.props.nav.navigate('No_fun')}>
          {/*Tên page và avatar*/}
          <View style={style_fb.header_post}>
            <View style={style_fb.avatar} />
            {/*Tên và thời gian post*/}
            <View style={style_fb.header_post_text}>
              <View style={style_fb.text_page} />
              <View style={style_fb.text_time} />
            </View>
          </View>

          {/*Phần nội dung, được kiểm tra xem có ảnh không*/}
          {/*Nếu không sẽ chỉ hiện chữ, kích thước tự scale, tối đa 16 dòng*/}
          {/*Nếu có ảnh thì hiện một ảnh và chữ, kích thước tự scale, tối đa 8 dòng chữ và 1 ảnh*/}

          {item.item ? (
            <View style={style_fb.content}>
              <View style={[style_fb.text_info, {width: '100%'}]} />
              <View style={[style_fb.text_info, {width: '95%'}]} />
              <View style={[style_fb.text_info, {width: '90%'}]} />
              <View style={[style_fb.text_info, {width: '50%'}]} />
              <View style={[style_fb.text_info, {width: 0}]} />
              <View style={[style_fb.text_info, {width: '100%'}]} />
              <View style={[style_fb.text_info, {width: '95%'}]} />
              <View style={[style_fb.text_info, {width: '95%'}]} />
              <View style={[style_fb.text_info, {width: '100%'}]} />
              <View style={[style_fb.text_info, {width: '98%'}]} />
              <View style={[style_fb.text_info, {width: '20%'}]} />
              <View style={[style_fb.text_info, {width: 0}]} />
              <View style={[style_fb.text_info, {width: '100%'}]} />
              <View style={[style_fb.text_info, {width: '95%'}]} />
              <View style={[style_fb.text_info, {width: '90%'}]} />
              <View style={[style_fb.text_info, {width: '85%'}]} />
            </View>
          ) : (
            <View style={style_fb.content}>
              <View style={[style_fb.text_info, {width: '100%'}]} />
              <View style={[style_fb.text_info, {width: '100%'}]} />
              <View style={[style_fb.text_info, {width: '95%'}]} />
              <View style={[style_fb.text_info, {width: '50%'}]} />
              <View style={[style_fb.text_info, {width: 0}]} />
              <View style={[style_fb.text_info, {width: '100%'}]} />
              <View style={[style_fb.text_info, {width: '95%'}]} />
              <View style={[style_fb.text_info, {width: '20%'}]} />
              <View style={style_fb.image} />
            </View>
          )}

          {/*Thông số like, cmt, share*/}
          <View style={style_fb.view_info}>
            {/*like*/}
            <View style={[style_fb.view_info_detail]}>
              <Icon
                type={'antdesign'}
                name={'like1'}
                color={'#a3a3a3'}
                size={moderateScale(15)}
              />
              <View style={style_fb.text_detail} />
            </View>

            {/*Đường kẻ*/}
            <View style={style_fb.line} />

            {/*cmt*/}
            <View style={[style_fb.view_info_detail]}>
              <Icon
                type={'font-awesome'}
                name={'comment'}
                color={'#a3a3a3'}
                size={moderateScale(15)}
              />
              <View style={style_fb.text_detail} />
            </View>

            {/*Đường kẻ*/}
            <View style={style_fb.line} />

            {/*share*/}
            <View style={[style_fb.view_info_detail]}>
              <Icon
                type={'font-awesome'}
                name={'share'}
                color={'#a3a3a3'}
                size={moderateScale(15)}
              />
              <View style={style_fb.text_detail} />
            </View>
          </View>
        </View>
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
        data={[false, true, false, true]}
        renderItem={item => this._render_item(item)}
        sliderWidth={deviceWidth}
        activeSlideAlignment={'start'}
        useScrollView={true}
        itemWidth={moderateScale(288)}
      />
    );
  }
}

export default Placeholder.connect(Place_list_new_fb);
