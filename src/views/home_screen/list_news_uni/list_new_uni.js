import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {Component} from 'react';
import style from './style';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {Task_Colors} from '../../../utils/values';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Item from '../place_holder/item_place_uni';
import FastImage from 'react-native-fast-image';
import {sizes} from "../../../utils/values/sizes";
import {SAGA} from "../../../redux/constant";

export default class List_new_uni extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // Nếu list không rỗng mình nối phần tử null vào cuối
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

  _item_press(uri) {
    // Kiểm tra xem có kết nối hay không
    this.props.connect
      ? this.props.nav.navigate('Web_component', {uri})
      : this.props.toast_unconnect();
  }

  _render_item(item) {
    if (item.item === null) {
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
          onPress={() => this._item_press(item.item.uri)}>
          {/*Image tin*/}
          <FastImage
            style={this.style.image_new}
            source={{
              uri: item.item.img,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />

          {/*View title và time*/}
          {/*time*/}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              type={'antdesign'}
              name={'clockcircleo'}
              color={this.props.color.blue_8}
              size={moderateScale(14, 0.4)}
            />
            <Text allowFontScaling={false} style={this.style.text_time}>
              {item.item.time}
            </Text>
          </View>

          {/*title*/}
          <Text
            allowFontScaling={false}
            style={this.style.text_title}
            numberOfLines={4}
            ellipsizeMode={'tail'}>
            {item.item.title}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  _render_empty_list(){
    return(
        <View style={{width:sizes.Width_Devices-verticalScale(20)-scale(14.4), height:moderateScale(234,0.32), padding: moderateScale(20,0.3),
        elevation:3, borderRadius:moderateScale(10,0.3), backgroundColor:'white', marginHorizontal:scale(7.2), marginVertical:verticalScale(3),
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
      <FlatList
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        extraData={this.state.data}
        renderItem={item => this._render_item(item)}
        contentContainerStyle={{paddingHorizontal: verticalScale(10), marginTop:moderateScale(5)}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => this.props.type_load!=='fail_2'?this.props.more():null}
        removeClippedSubviews={true}
        ListEmptyComponent={this._render_empty_list()}
      />
    );
  }
}


