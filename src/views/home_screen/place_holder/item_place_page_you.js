import {Text, TouchableOpacity, View} from 'react-native';
import {style_page_you} from './style';
import React from 'react';
import Placeholder from 'rn-placeholder';
import {moderateScale, scale} from 'react-native-size-matters';
import {Icon} from 'react-native-elements';
import {Task_Colors} from "../../../utils/values";

const Item = ({type='null', color=null, more=null}) => {
  // trả về dạng của item cuối danh sách, null là dạng load cho load tiếp, fail là lỗi load
  return (
      type==='null'?
          <TouchableOpacity activeOpacity={0.8} style={style_page_you.view_tou}>
            {/*View chính*/}
            <View style={style_page_you.view_main}>
              {/*Text tiêu đề và thời gian*/}
              <View style={style_page_you.view_info}>
                <View style={style_page_you.text_title}>
                  <View style={[style_page_you.line_title, {width: '100%'}]} />
                  <View style={[style_page_you.line_title, {width: '96%'}]} />
                  <View style={[style_page_you.line_title, {width: '98%'}]} />
                  <View style={[style_page_you.line_title, {width: '65%'}]} />
                </View>

                <View style={style_page_you.view_time} />
              </View>

              {/*/!*View like, cmt,...*!/*/}
              <View style={style_page_you.view_detail}>
                <View style={[style_page_you.view_info_detail]}>
                  <Icon
                    type={'antdesign'}
                    name={'eye'}
                    color={'#a3a3a3'}
                    size={moderateScale(15, 0.4)}
                  />
                  <View style={style_page_you.text_detail} />
                </View>

                <View style={style_page_you.line} />

                <View style={[style_page_you.view_info_detail]}>
                  <Icon
                    type={'font-awesome'}
                    name={'comment'}
                    color={'#a3a3a3'}
                    size={moderateScale(15, 0.4)}
                  />
                  <View style={style_page_you.text_detail} />
                </View>

                <View style={style_page_you.line} />

                <View style={[style_page_you.view_info_detail]}>
                  <Icon
                    type={'antdesign'}
                    name={'like1'}
                    color={'#a3a3a3'}
                    size={moderateScale(15, 0.4)}
                  />
                  <View style={style_page_you.text_detail} />
                </View>

                <View style={style_page_you.line} />

                <View style={[style_page_you.view_info_detail]}>
                  <Icon
                    type={'antdesign'}
                    name={'dislike1'}
                    color={'#a3a3a3'}
                    size={moderateScale(15, 0.4)}
                  />
                  <View style={style_page_you.text_detail} />
                </View>
              </View>
            </View>

            {/*View phụ*/}
            {/*<View style={{width:"70%",height:"24%",alignItems: 'center',*/}
            {/*zIndex:2, position: "absolute",right:2,bottom:2,elevation: 3,*/}
            {/*borderRadius: 10,backgroundColor:'#fff'}}>*/}

            {/*View ảnh*/}
            <View style={style_page_you.view_image} />
          </TouchableOpacity>
          :
          <View style={{backgroundColor: '#fff', width: moderateScale(355,0.7)-scale(20.16),
            height: moderateScale(149,0.4), elevation: 2, borderRadius:moderateScale(5),
            shadowColor: "#000", shadowOffset: {width: 0, height: 1,}, shadowOpacity: 0.20, shadowRadius: 1.41,
            alignItems: 'center', justifyContent: 'space-evenly', alignSelf: 'center', marginVertical:moderateScale(6.5,0.4)}}>
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
