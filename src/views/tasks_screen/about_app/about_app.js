import React, {Component} from 'react';
import {
  View,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {Task_Colors} from '../../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Toast from '../../../components/toast_custom/toast_custom';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
// import {version as version} from '../../../../package';

class About_app extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <View style={this.style.main}>
        {/*Logo myhou*/}
        <Image
          source={require('../../../assets/img/logo_myhou_horizontal.png')}
          style={{
            width: moderateScale(240),
            height: moderateScale(122),
            marginTop: 10,
          }}
          resizeMode={'contain'}
        />

        {/*Phiên bản*/}
        <Text
          allowFontScaling={false}
          style={{
            textAlign: 'center',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 15,
            color: Task_Colors.task_stylish,
            fontSize: 13,
            marginBottom: 15,
            borderWidth: 0.5,
            borderColor: Task_Colors.task_stylish,
          }}>
          {'Phiên bản 1.0.0'}
        </Text>

        {/*Mô tả*/}
        <Text allowFontScaling={false} style={this.style.text_2}>
          Ứng dụng
          <Text allowFontScaling={false} style={this.style.text_1}>
            {' '}
            MyHOU{' '}
          </Text>
          ra đời với mục đích kết nối
          <Text allowFontScaling={false} style={this.style.text_1}>
            {' '}
            sinh viên{' '}
          </Text>
          với
          <Text allowFontScaling={false} style={this.style.text_1}>
            {' '}
            nhà trường{' '}
          </Text>{' '}
          , một ứng dụng giúp đỡ quá trình học tập và rèn luyện của sinh viên
          đồng thời hỗ trợ công tác quản lí, đào tạo và chăm sóc sinh viên của
          nhà trường.
        </Text>

        {/*Dòng kẻ giữa*/}
        <View
          style={{
            width: '75%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 25,
          }}>
          <Icon
            solid
            name={'university'}
            size={moderateScale(20)}
            color={this.props.color.blue_6}
            style={{padding: 5, backgroundColor: 'white'}}
          />
          <View
            style={{
              width: '100%',
              height: 0.5,
              backgroundColor: this.props.color.blue_5,
              position: 'absolute',
              left: 0,
              zIndex: -1,
            }}
          />
        </View>

        {/*Phát triển bởi*/}
        <Text allowFontScaling={false} style={this.style.text_3}>
          Xây dựng và phát triển bởi
        </Text>
        <Text allowFontScaling={false} style={this.style.text_3}>
          Trung tâm Công nghệ & Học liệu
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/img/logo.png')}
            style={{
              width: moderateScale(15),
              height: moderateScale(18.225),
              marginHorizontal: 5,
            }}
            resizeMode={'stretch'}
          />
          <Text allowFontScaling={false} style={this.style.text_3}>
            Trường Đại học Mở Hà Nội
          </Text>
        </View>

        {/*Nút phản hồi*/}
        <TouchableOpacity
          activeOpacity={0.8}
          style={this.style.button_feedback}
          onPress={() => this.props.navigation.navigate('Feedback_component')}>
          <View
            style={{
              width: moderateScale(40),
              height: moderateScale(40),
              borderRadius: 20,
              position: 'absolute',
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              solid
              name={'paper-plane'}
              size={moderateScale(20)}
              color={'#fff'}
              style={this.style.icon_feedback}
            />
          </View>

          <Text allowFontScaling={false} style={[this.style.text_feedback]}>
            Gửi phản hồi về MyHOU
          </Text>
        </TouchableOpacity>

        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(70)}
          setting_props={this.props.setting_props}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
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
)(About_app);
