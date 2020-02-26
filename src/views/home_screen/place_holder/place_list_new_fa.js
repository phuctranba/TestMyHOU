import {View, FlatList} from 'react-native';
import React, {Component} from 'react';
import {style_fa} from './style';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Placeholder from 'rn-placeholder';
import {verticalScale} from 'react-native-size-matters';

const Item = () => {
  return (
    <View style={style_fa.view_sup}>
      <View style={style_fa.view_tou}>
        <View style={style_fa.image_new} />

        {/*Title và time*/}
        <View style={style_fa.view_title}>
          <View style={style_fa.text_title}>
            <View style={[style_fa.line_title, {width: '100%'}]} />
            <View style={[style_fa.line_title, {width: '98%'}]} />
            <View style={[style_fa.line_title, {width: '92%'}]} />
            <View style={[style_fa.line_title, {width: '30%'}]} />
          </View>

          {/*time*/}
          <View style={style_fa.text_time} />
        </View>
      </View>

      <View style={style_fa.view_tou}>
        <View style={style_fa.image_new} />

        {/*Title và time*/}
        <View style={style_fa.view_title}>
          <View style={style_fa.text_title}>
            <View style={[style_fa.line_title, {width: '100%'}]} />
            <View style={[style_fa.line_title, {width: '90%'}]} />
            <View style={[style_fa.line_title, {width: '95%'}]} />
            <View style={[style_fa.line_title, {width: '60%'}]} />
          </View>

          {/*time*/}
          <View style={style_fa.text_time} />
        </View>
      </View>
    </View>
  );
};

const Place_list_new_fa = () => {
  return (
    <FlatList
      data={['1', '2', '3', '4', '5']}
      keyExtractor={item => item}
      renderItem={item => Item()}
      style={{backgroundColor: '#00000000'}}
      horizontal={true}
      contentContainerStyle={{paddingHorizontal: verticalScale(10)}}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Placeholder.connect(Place_list_new_fa);
