import {Text, TouchableOpacity, View} from 'react-native';
import {style_page_new} from './style';
import React from 'react';
import Placeholder from 'rn-placeholder';
import {Task_Colors} from "../../../utils/values";
import {moderateScale, scale} from "react-native-size-matters";
import {Icon} from "react-native-elements";

const Item = ({type='null', color=null, more=null}) => {
    // trả về dạng của item cuối danh sách, null là dạng load cho load tiếp, fail là lỗi load
    return (
        type==='null'?
            <TouchableOpacity activeOpacity={0.8} style={style_page_new.view_tou}>
              {/*View chính*/}
              <View style={style_page_new.view_main}>
                {/*Text tiêu đề và thời gian*/}
                <View style={style_page_new.view_info}>
                  <View style={style_page_new.text_title}>
                    <View style={[style_page_new.line_title, {width: '100%'}]} />
                    <View style={[style_page_new.line_title, {width: '96%'}]} />
                    <View style={[style_page_new.line_title, {width: '98%'}]} />
                    <View style={[style_page_new.line_title, {width: '65%'}]} />
                  </View>

                  <View style={style_page_new.view_time} />
                </View>
              </View>

              {/*View ảnh*/}
              <View style={style_page_new.view_image} />
            </TouchableOpacity>
            :
            <View style={{backgroundColor:'#fff',width: moderateScale(355,0.7)-scale(20.16),
                height: moderateScale(115.2), elevation: 2, borderRadius:moderateScale(5),
                shadowColor: "#000",
                shadowOffset: {width: 0, height: 1,},
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                alignItems: 'center', justifyContent: 'space-evenly', alignSelf: 'center',}}>
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
                    style={{backgroundColor:color.blue_7, elevation:4, borderRadius: moderateScale(10, 0.3), paddingVertical:moderateScale(6),
                        paddingHorizontal:moderateScale(10), flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
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