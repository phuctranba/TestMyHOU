import React from 'react';
import {View} from 'react-native';
import Placeholder from 'rn-placeholder';
import {style_you} from './style';
import {Icon} from 'react-native-elements';
import {deviceWidth} from './style';
import Carousel from 'react-native-snap-carousel';
import {moderateScale} from 'react-native-size-matters';

const Item = () => {
  return (
    <View style={style_you.view_tou}>
      <View style={style_you.view_info}>
        {/*View ảnh*/}
        <View style={style_you.image_view} />

        {/*View tiêu đề*/}
        <View
          style={style_you.text_title}
          numberOfLines={3}
          ellipsizeMode={'tail'}>
          <View style={style_you.line_title} />
          <View style={[style_you.line_title, {marginVertical: '2%'}]} />
          <View style={style_you.line_title} />
        </View>

        {/*View thời gian*/}
        <View style={style_you.view_time}>
          <View style={style_you.text_time} />
        </View>

        {/*View cái biểu đồ nhỏ nhỏ*/}
        <View style={style_you.view_chart}>
          <Icon
            type={'font-awesome'}
            name={'bar-chart-o'}
            color={'#fff'}
            size={moderateScale(15)}
          />
        </View>
      </View>

      {/*Phần thông số*/}
      <View style={style_you.view_detail}>
        <View style={style_you.container_info}>
          <View
            style={[
              style_you.view_info_detail,
              {justifyContent: 'flex-start'},
            ]}>
            <Icon
              type={'antdesign'}
              name={'eye'}
              color={'#a3a3a3'}
              style={style_you.icon_left}
              size={moderateScale(15, 0.4)}
            />
            <View style={style_you.text_info} />
          </View>
          <View
            style={[style_you.view_info_detail, {justifyContent: 'flex-end'}]}>
            <View style={style_you.text_info} />
            <Icon
              type={'font-awesome'}
              name={'comment'}
              color={'#a3a3a3'}
              style={style_you.icon_right}
              size={moderateScale(15, 0.4)}
            />
          </View>
        </View>

        <View style={style_you.line_horizontal} />

        <View style={style_you.container_info}>
          <View
            style={[
              style_you.view_info_detail,
              {justifyContent: 'flex-start'},
            ]}>
            <Icon
              type={'antdesign'}
              name={'like1'}
              color={'#a3a3a3'}
              style={style_you.icon_left}
              size={moderateScale(15, 0.4)}
            />
            <View style={style_you.text_info} />
          </View>
          <View
            style={[style_you.view_info_detail, {justifyContent: 'flex-end'}]}>
            <View style={style_you.text_info} />
            <Icon
              type={'antdesign'}
              name={'dislike1'}
              color={'#a3a3a3'}
              style={style_you.icon_right}
              size={moderateScale(15, 0.4)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const List_News_You_Placeholder = () => {
  return (
    <Carousel
      ref={c => {
        this._carousel = c;
      }}
      data={['1', '2', '3', '4', '5']}
      renderItem={item => Item()}
      sliderWidth={deviceWidth}
      itemWidth={moderateScale(244)}
      activeSlideAlignment={'start'}
    />
  );
};

export default Placeholder.connect(List_News_You_Placeholder);
