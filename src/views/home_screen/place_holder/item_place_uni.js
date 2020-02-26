import {Text, TouchableOpacity, View, Animated} from 'react-native';
import {style_uni} from './style';
import React from 'react';
import Placeholder from 'rn-placeholder';
import {Task_Colors} from "../../../utils/values";
import {moderateScale} from "react-native-size-matters";
import {Icon} from "react-native-elements";

const Item = ({type='null', color=null, more=null}) => {
    // trả về dạng của item cuối danh sách, null là dạng load cho load tiếp, fail là lỗi load
  return (
      type==='null'?
            <View style={[style_uni.view_tou,{justifyContent:'center'}]}>
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
          :
          <View style={[style_uni.view_tou,{justifyContent:'space-evenly', alignItems:'center'}]}>
              <View style={{alignItems:'center'}}>
                  <Text
                      allowFontScaling={false}
                      style={{color:Task_Colors.task_stylish, fontSize:moderateScale(16,0.3), fontWeight:'bold', textAlign:'center'}}>
                      Tải thêm dữ liệu không thành công.
                  </Text>
                  <Text
                      allowFontScaling={false}
                      style={{color:Task_Colors.task_stylish, fontSize:moderateScale(14,0.3), textAlign:'center'}}>
                      Kiểm tra lại kết nối của thiết bị.
                  </Text>
              </View>


              <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={()=>more()}
                  style={{backgroundColor:color.blue_7, elevation:4, borderRadius: moderateScale(10, 0.3),
                      padding:moderateScale(10), flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                  <Text allowFontScaling={false}
                        style={{color:'white', fontSize:moderateScale(14,0.3), fontWeight:'bold', textAlign:'center', marginRight:moderateScale(7)}}>
                      Nhấn để tải lại
                  </Text>
                  <Icon type={"material-community"} color={"white"}  name={"reload"} size={moderateScale(20,0.3)} />
              </TouchableOpacity>
          </View>
  );
};

export default Placeholder.connect(Item);
