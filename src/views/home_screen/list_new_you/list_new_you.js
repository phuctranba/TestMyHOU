import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import style from './style';
import {Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {convertDate} from '../../../utils/functions/date-convert';
import {sizes, Task_Colors} from '../../../utils/values';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Item from '../place_holder/item_place_you';
import {convertNumber} from '../../../utils/functions';
import FastImage from 'react-native-fast-image';

export default class List_new_you extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.length===0?[]:this.props.data.concat([null]),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data||this.props.total!==nextProps.total;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      data:
        nextProps.total === nextProps.data.length||nextProps.data.length===0
          ? nextProps.data
          : nextProps.data.concat([null]),
    });
  }

  _item_press(id) {
    // Kiểm tra xem có kết nối hay không
    this.props.connect
      ? Linking.canOpenURL(`vnd.youtube:${id}`).then(supported => {
          if (supported) {
            return Linking.openURL(`vnd.youtube:${id}`);
          } else {
            return this.props.nav.navigate('Web_component', {
              uri: `https://www.youtube.com/watch?v=${id}`,
            });
          }
        })
      : this.props.toast_unconnect({
          text: 'Không có kết nối internet, kiểm tra lại!',
          textColor: Task_Colors.task_danger_dark,
          icon: 'exclamation-circle',
          iconType: 'font-awesome',
          iconColor: Task_Colors.task_danger_dark,
        });
  }

  _render_item(item) {
    if (item === null) {
        return (
            // đặt fail và null, giá trị fail là dạng item thông báo lỗi load
            // null là item loading
            this.props.total===-1?
                <Item type={'fail'} more={this.props.more} onReady={false} color={this.props.color}/>
                :
                <Item type={'null'} onReady={false} color={this.props.color} animate="fade"/>)
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={this.style.view_tou}
          onPress={() => this._item_press(item.id)}>
          <View style={this.style.view_info}>
            {/*Ảnh*/}
            <FastImage
              style={this.style.image_new}
              source={{
                uri: item.img,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />

            {/*Tiêu đề*/}
            <Text
              allowFontScaling={false}
              style={this.style.text_title}
              numberOfLines={3}
              ellipsizeMode={'tail'}>
              {item.title}
            </Text>

            {/*View thời gian*/}
            <View style={this.style.view_time}>
              <Icon
                type={'antdesign'}
                name={'clockcircleo'}
                color={Task_Colors.task_danger_dark}
                size={moderateScale(14, 0.4)}
              />
              <Text allowFontScaling={false} style={this.style.text_time}>
                {convertDate(item.time.substring(0, 10))}
              </Text>
            </View>

            {/*Icon biểu đồ*/}
            <View style={this.style.view_chart}>
              <Icon
                type={'font-awesome'}
                name={'bar-chart-o'}
                color={'#fff'}
                size={moderateScale(15)}
              />
            </View>
          </View>

          {/*View các thông số*/}
          <View style={this.style.view_detail}>
            {/*Lượt view và cmt*/}
            <View style={this.style.container_info}>
              <View
                style={[
                  this.style.view_info_detail,
                  {justifyContent: 'flex-start'},
                ]}>
                <Icon
                  type={'antdesign'}
                  name={'eye'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
                <Text allowFontScaling={false} style={this.style.text_info}>
                  {convertNumber(item.view)}
                </Text>
              </View>

              <View
                style={[
                  this.style.view_info_detail,
                  {justifyContent: 'flex-end'},
                ]}>
                <Text allowFontScaling={false} style={this.style.text_info}>
                  {convertNumber(item.cmt)}
                </Text>
                <Icon
                  type={'font-awesome'}
                  name={'comment'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
              </View>
            </View>

            {/*Dòng kẻ*/}
            <View style={this.style.line_horizontal} />

            {/*Lượt like và dislike*/}
            <View style={this.style.container_info}>
              <View
                style={[
                  this.style.view_info_detail,
                  {justifyContent: 'flex-start'},
                ]}>
                <Icon
                  type={'antdesign'}
                  name={'like1'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
                <Text allowFontScaling={false} style={this.style.text_info}>
                  {convertNumber(item.like)}
                </Text>
              </View>

              <View
                style={[
                  this.style.view_info_detail,
                  {justifyContent: 'flex-end'},
                ]}>
                <Text allowFontScaling={false} style={this.style.text_info}>
                  {convertNumber(item.dislike)}
                </Text>
                <Icon
                  type={'antdesign'}
                  name={'dislike1'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

  _render_empty_list(){
    return(
        <View style={{width:sizes.Width_Devices-verticalScale(20)-scale(14.4), height:moderateScale(270), padding: moderateScale(20,0.3),
          elevation:3, borderRadius:moderateScale(10,0.3), backgroundColor:'white',marginTop:moderateScale(10), marginHorizontal:scale(7.2)+verticalScale(10),
          justifyContent:'space-evenly', alignItems:'center',shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,}}>
          <View style={{alignItems:'center'}}>
            <Text
                allowFontScaling={false}
                style={{color:Task_Colors.task_stylish, fontSize:moderateScale(18,0.3), fontWeight:'bold', textAlign:'center'}}>
              Tải dữ liệu không thành công.
            </Text>
            <Text
                allowFontScaling={false}
                style={{color:Task_Colors.task_stylish, fontSize:moderateScale(16,0.3), textAlign:'center'}}>
              Kiểm tra lại kết nối của thiết bị.
            </Text>
          </View>

          <TouchableOpacity
              activeOpacity={0.7}
              onPress={()=>this.props.reload_list_news_empty()}
              style={{backgroundColor:this.props.color.blue_7, elevation:4, borderRadius: moderateScale(10, 0.3),
                padding:moderateScale(15), flexDirection:'row', alignItems:'center'}}>
            <Text allowFontScaling={false}
                  style={{color:'white', fontSize:moderateScale(16,0.3), fontWeight:'bold', textAlign:'center', marginRight:moderateScale(7)}}>
              Nhấn để tải lại
            </Text>
            <Icon type={"material-community"} color={"white"}  name={"reload"} size={moderateScale(22,0.3)} />
          </TouchableOpacity>

        </View>
    )
  }

  render() {
      if(this.props.type_load==='fail_2') this.props.toast_error_feedback();
      // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
        this.state.data.length===0?
            this._render_empty_list()
            :
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={this.state.data}
              renderItem={item => this._render_item(item.item)}
              sliderWidth={sizes.Width_Devices}
              onSnapToItem={index => {
                let loadIndex = this.props.data.length - 3;
                if (
                  index === loadIndex &&
                  this.props.total !== this.props.data.length &&
                    this.props.type_load!=='fail_2'
                ) {
                  this.props.more();
                }
              }}
              itemWidth={moderateScale(244)}
              activeSlideAlignment={'start'}
            />
    );
  }
}
