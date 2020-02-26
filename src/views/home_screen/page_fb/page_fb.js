import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
} from 'react-native';
import style from './style';
import {Icon} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import {convertNumber} from '../../../utils/functions';
import FastImage from 'react-native-fast-image';
import {height_statusbar} from '../../../utils/values';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

class Page_fb extends Component {
  constructor(props) {
    super(props);
  }

  _itemPress() {
    if (!this.props.connected_internet) {
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
    // Kiểm ra có ảnh hay không
    const content = item.item.img === null ? 1 : 0;

    return (
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
        <View style={{width: '100%', justifyContent: 'flex-start'}}>
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

        {/*Phần like, cmt,..*/}
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

          {/*Share*/}
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
    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{paddingTop: height_statusbar}}>
        <FlatList
          data={this.props.navigation.getParam('data', '')}
          keyExtractor={item => item.info}
          renderItem={item => this._render_item(item)}
          style={{backgroundColor: '#00000000'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={this.style.flatlist}
        />
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
    setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page_fb);
