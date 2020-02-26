import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style, {deviceWidth, deviceHeight} from './style';
import {Icon} from 'react-native-elements';
import React, {Component} from 'react';

export default class Detail_item extends Component {
  constructor(props) {
    super(props);
  }

  // Cái này là trước định thay đổi theo state
  // Sử dụng getDerivedStateFromProps
  // Nhưng chợt nhân ra có thể theo props trực tiếp luôn nên bỏ
  // vẫn để đây phòng trường hợp dùng lại

  // // Cần thay đổi state
  // static getDerivedStateFromProps(nextProps, prevState){
  //     console.log(nextProps);
  //     let new_state={
  //         lv1_Height: 0,
  //         lv2_Height: [],
  //         lv3_Height: [],
  //     };
  //     if(nextProps!==prevState){
  //
  //         if (nextProps.item.expanded_level_1) {
  //             new_state.lv1_Height='auto';
  //         }
  //         else {
  //             new_state.lv1_Height=0;
  //         }
  //
  //
  //         if(nextProps.item.grade_level_2.length!==1){
  //
  //             nextProps.item.grade_level_2.map((item_lv2,key_lv2)=>{
  //
  //                 console.log(item_lv2);
  //                 if (item_lv2.expanded_level_2) {
  //                     new_state.lv2_Height[key_lv2]='auto';
  //                 }
  //                 else {
  //                     new_state.lv2_Height[key_lv2]=0;
  //                 }
  //
  //
  //                 if(item_lv2.grade_level_3.length!==1){
  //
  //                     item_lv2.grade_level_3.map((item_lv3,key_lv3)=>{
  //                         console.log(item_lv3);
  //                         if (item_lv3.expanded_level_3) {
  //                             new_state.lv3_Height[key_lv3]='auto';
  //                         }
  //                         else {
  //                             new_state.lv3_Height[key_lv3]=0;
  //
  //                         }
  //                     })
  //                 }
  //
  //             })
  //
  //         }
  //     }
  //
  //     return { lv1_Height: new_state.lv1_Height,lv2_Height: new_state.lv2_Height,lv3_Height: new_state.lv3_Height };
  // }

  // Kiểm tra props khác thì re-render
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props;
  }

  show_Selected_Category(item) {
    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);
  }

  _render_item_lv1() {
    // Kiểm tra xem data truyền sang có mấy cấp phụ thuộc vào độ dài cấp dưới
    // Nếu cấp dưới có 1 item thì không có cấp dưới nữa
    if (this.props.item.grade_level_2.length === 1) {
      // Trả về view có lv1 khối và các môn

      // Dòng môn
      return this.props.item.grade_level_2[0].subjects.map(
        (item_lv1, key_lv1) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={key_lv1}
            style={this.style.line_object}
            onPress={() => this.show_Selected_Category(item_lv1.name)}>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={this.style.text_detail}>
              {' '}
              {item_lv1.name}{' '}
            </Text>
          </TouchableOpacity>
        ),
      );
    } else {
      // Trả về view có lv1 khối và, chi tiết các phần ngành và môn
      return this.props.item.grade_level_2.map((item_lv2, key_lv2) => {
        // this.state.lv2_Height[key_lv2]=item_lv2.expanded_level_2?'auto':0;

        // Trả về khối lv2
        return (
          <View key={key_lv2}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={this.style.view_lv_parent}
              onPress={() =>
                this.props.onClickFunction(this.props.key_lv1, key_lv2)
              }>
              <View style={this.style.icon_view_lv2}>
                <Icon
                  type={'material-community'}
                  name={'book-multiple-variant'}
                  color={'#4a83c7'}
                  size={18}
                />
              </View>

              <Text
                allowFontScaling={false}
                style={this.style.text_title_lv2}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {item_lv2.name_level_2}
              </Text>

              <Icon
                type={'ionicon'}
                name={'md-arrow-dropright'}
                color={'#4a83c7'}
                size={25}
                containerStyle={this.style.icon_arrow}
              />
            </TouchableOpacity>

            <View
              style={{
                height: item_lv2.expanded_level_2 ? 'auto' : 0,
                overflow: 'hidden',
              }}>
              {this._render_item_lv2(item_lv2, key_lv2)}
            </View>
          </View>
        );
      });
    }
  }

  _render_item_lv2(item_lv2, key_lv2) {
    // Nếu grade_level_3 bằng 1 thì không có cấp dưới, nếu lớn hơn thì có
    if (item_lv2.grade_level_3.length === 1) {
      // Dòng môn
      return item_lv2.grade_level_3[0].subjects.map((item_lv2, key_lv2) => (
        <TouchableOpacity
          key={key_lv2}
          style={this.style.line_object}
          onPress={() => this.show_Selected_Category.bind(this, item_lv2.name)}>
          <Text style={this.style.text_detail}> {item_lv2.name} </Text>
        </TouchableOpacity>
      ));
    } else {
      return item_lv2.grade_level_3.map((item_lv3, key_lv3) => {
        // this.state.lv3_Height[key_lv3]=item_lv3.expanded_level_3?'auto':0;

        // Trả về khối lv3
        return (
          <View key={key_lv3}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={this.style.view_lv_parent}
              onPress={() =>
                this.props.onClickFunction(this.props.key_lv1, key_lv2, key_lv3)
              }>
              <View style={this.style.icon_view_lv3}>
                <Icon
                  type={'material-community'}
                  name={'book'}
                  color={'#4a83c7'}
                  size={14}
                />
              </View>

              <Text
                style={this.style.text_title_lv3}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {item_lv3.name_level_3}
              </Text>

              <Icon
                type={'ionicon'}
                name={'md-arrow-dropright'}
                color={'#4a83c7'}
                size={25}
                containerStyle={this.style.icon_arrow}
              />
            </TouchableOpacity>

            <View
              style={{
                height: item_lv3.expanded_level_3 ? 'auto' : 0,
                overflow: 'hidden',
              }}>
              {this._render_item_lv3(item_lv3.subjects)}
            </View>
          </View>
        );
      });
    }
  }

  _render_item_lv3(item_lv3) {
    // Dòng môn lv4 cuối
    return item_lv3.map((item_lv4, key_lv4) => (
      <TouchableOpacity
        key={key_lv4}
        style={this.style.line_object}
        onPress={() => this.show_Selected_Category.bind(this, item_lv4.name)}>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={this.style.text_detail}>
          {' '}
          {item_lv4.name}{' '}
        </Text>
      </TouchableOpacity>
    ));
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    // this.state.lv1_Height=this.props.item.expanded_level_1?'auto':0;

    // Khối học lv1
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          style={this.style.view_lv_parent}
          onPress={() => this.props.onClickFunction(this.props.key_lv1)}>
          <Icon
            type={'font-awesome'}
            containerStyle={{width: '8%'}}
            name={'book'}
            color={'#4a83c7'}
            size={deviceWidth * 0.05555556}
          />

          <View
            style={[
              this.style.view_object_lv1,
              {
                borderBottomWidth:
                  this.props.length - 1 === this.props.key_lv1 ? 0 : 1,
              },
            ]}>
            <Text
              style={this.style.text_title_lv1}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {this.props.item.name_level_1}
            </Text>
          </View>

          <View
            style={[
              this.style.view_icon_lv1,
              {
                borderBottomWidth:
                  this.props.length - 1 === this.props.key_lv1 ? 0 : 1,
              },
            ]}>
            <Icon
              type={'ionicon'}
              name={'md-arrow-dropright'}
              color={'#4a83c7'}
              size={25}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: this.props.item.expanded_level_1 ? 'auto' : 0,
            overflow: 'hidden',
          }}>
          {this._render_item_lv1()}
        </View>
      </View>
    );
  }
}
