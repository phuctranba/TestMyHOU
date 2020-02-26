import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import {sizes, utilities} from '../../../utils/values';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

export default class Uti_more extends Component {
  constructor(props) {
    super(props);
  }

  _item_press(item) {
    let link_nav = item.data_detail.link_navigation;

    switch (item.type_press) {
      case 'screen': {
        if (item.data_detail.internet) {
          if (this.props.connect) {
            this.props.nav.navigate(link_nav.name, link_nav.data_nav);
          } else {
            this.props.toast_unconnectted();
          }
        } else {
          this.props.nav.navigate(link_nav.name, link_nav.data_nav);
        }
        break;
      }
      case 'linking': {
        if (this.props.connect) {
          Linking.canOpenURL(link_nav.linking_1).then(supported => {
            if (supported) {
              return Linking.openURL(link_nav.linking_1);
            } else {
              return Linking.openURL(link_nav.linking_2);
            }
          });
        } else {
          this.props.toast_unconnectted();
        }
        break;
      }
    }
  }

  _render_item(item) {
    return (
        <View style={{width:sizes.Width_Devices, alignItems:'center'}}>
          <TouchableOpacity
              activeOpacity={0.8}
              style={this.style.view_tou}
              onPress={() => this._item_press(item)}>
            <View style={this.style.container}>
              <FastImage
                  style={this.style.image_new}
                  source={{
                    uri: item.image,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
              />

              {/*Chi tiết*/}
              <Text
                  allowFontScaling={false}
                  style={this.style.text_info}
                  numberOfLines={item.data_detail.content === null ? 11 : 10}
                  ellipsizeMode={'tail'}>
                {item.detail}
              </Text>

              {/*Icon xem giới thiệu góc dưới*/}

              {item.data_detail.content === null ? null : (
                  <TouchableOpacity
                      activeOpacity={0.7}
                      style={this.style.view_icon}
                      onPress={() =>
                          this.props.nav.navigate('Detail_notification', {
                            data: item.data_detail,
                          })
                      }>
                    <Text allowFontScaling={false} style={this.style.text_pre}>
                      Giới thiệu thêm
                    </Text>
                    <Icon
                        type={'material-community'}
                        name={'chevron-double-right'}
                        color={'#fff'}
                        style={{marginHorizontal: '5%'}}
                        size={moderateScale(15)}
                    />
                  </TouchableOpacity>
              )}
            </View>

            {/*Tiêu đề*/}
            <LinearGradient
                colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.5)']}
                start={{x: 1, y: 1}}
                end={{x: 1, y: 0}}
                style={this.style.view_title}>
              {/*<View >*/}

              <Text allowFontScaling={false} style={this.style.text_title}>
                {item.title}
              </Text>

              {/*</View>*/}
            </LinearGradient>
          </TouchableOpacity>
        </View>

    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <View style={{marginBottom: moderateScale(61, 0.4)}}>
        <Text allowFontScaling={false} style={this.style.text_header}>
          Liên kết tiện ích
        </Text>
        <FlatList
          data={utilities.uti_more}
          keyExtractor={item => item.title}
          renderItem={item => this._render_item(item.item)}
          contentContainerStyle={{backgroundColor: '#00000000'}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
