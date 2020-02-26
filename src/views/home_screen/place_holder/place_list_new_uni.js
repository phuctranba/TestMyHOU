import {View, FlatList} from 'react-native';
import React, {Component} from 'react';
import {style_uni} from './style';
import {Icon} from 'react-native-elements';
import Placeholder from 'rn-placeholder';
import * as Animatable from 'react-native-animatable';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const Item = () => {
  return (
    <View style={style_uni.view_tou}>
      {/*Image tin*/}
      <View style={style_uni.image_new} />

      {/*View title và time*/}
      {/*time*/}
      <View style={style_uni.text_time} />

      {/*title*/}
      <View style={style_uni.text_title}>
        <View style={[style_uni.line_title, {width: '100%'}]} />
        <View style={[style_uni.line_title, {width: '90%'}]} />
        <View style={[style_uni.line_title, {width: '95%'}]} />
        <View style={[style_uni.line_title, {width: '30%'}]} />
      </View>
    </View>
  );
};

const Place_list_news_uni = () => {
  return (
    <FlatList
      data={['1', '2', '3', '4', '5']}
      keyExtractor={item => item}
      renderItem={item => Item()}
      style={{backgroundColor: '#00000000'}}
      horizontal={true}
      contentContainerStyle={{paddingHorizontal: verticalScale(10), marginTop:moderateScale(5)}}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Placeholder.connect(Place_list_news_uni);
