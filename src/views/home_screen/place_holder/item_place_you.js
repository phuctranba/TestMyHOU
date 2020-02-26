import {Text, TouchableOpacity, View} from 'react-native';
import {style_you} from './style';
import {Icon} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import Placeholder from 'rn-placeholder';
import React from 'react';
import {Task_Colors} from "../../../utils/values";

const Item = ({type='null', color=null, more=null}) => {
  // trả về dạng của item cuối danh sách, null là dạng load cho load tiếp, fail là lỗi load
  return (
      type==='null'?
    <View style={[style_you.view_tou,{backgroundColor:'#00000000'}]}>
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
          :
          <View style={[style_you.view_tou,{backgroundColor:'#fff', justifyContent:'space-evenly', padding:moderateScale(20),    elevation: 3,
            shadowColor: "#000", alignItems:'center', width:moderateScale(200),
            shadowOffset: {
              width: 0,
              height: 1,
            }, shadowOpacity: 0.22, shadowRadius: 2.22,
            height: moderateScale(260), marginVertical:moderateScale(5)}]}>
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
