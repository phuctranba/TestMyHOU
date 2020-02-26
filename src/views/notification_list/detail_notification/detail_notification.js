import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Linking,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  Blues,
  height_statusbar,
  sizes,
  Toast_form,
} from '../../../utils/values';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import Toast from '../../../components/toast_custom/toast_custom';

const data = {
  title_header: 'Tin tức',
  color_title_header: 'Tin tức',
  image_header:
    'https://hou.edu.vn/files/anhbaiviet/Images/2019/Thang_05/Le%20ki%20niem%20ngay%20KHVN%20va%20trao%20thuong%20SV%20NCKH/Trao%20giai%20Viotec%20va%20Tin%20hoc%20toan%20quoc.jpg',
  type_notifi: 'detail',
  title_button: 'Tôi đã hiểu',
  color_button: '',
  color_arrow_back: '',
  title_notifi: 'Xuất hiện anh chàng đẹp trai tên phúc',
  link_navigation: {
    type_nav: 'screen',
    name: '',
    data_nav: '',
    linking_1: 'moodlemobile://https://hoclieu.hou.edu.vn',
    linking_2: 'market://details?id=com.moodle.moodlemobile',
  },
  content: [
    {
      text:
        'Nghiên cứu khoa học (NCKH) của sinh viên đã trở thành một hoạt động thường xuyên của nhà trường. Ngay từ đầu năm học, công tác NCKH của sinh viên đã được Trường Đại học Mở Hà Nội xác định là một trong các nhiệm vụ trọng tâm.',
      image:
        'https://hou.edu.vn/files/anhbaiviet/Images/2019/Thang_05/Le%20ki%20niem%20ngay%20KHVN%20va%20trao%20thuong%20SV%20NCKH/Trao%20giai%20OLP2019.jpg',
    },
    {
      text:
        'Với sự quan tâm hỗ trợ của các thầy/cô hướng dẫn, của các khoa chuyên môn và Nhà trường, chất lượng đề tài NCKH của sinh viên năm 2018 được nâng cao hơn. Các chủ đề NCKH sinh viên năm nay phong phú, đa dạng và có chất lượng cao, nhiều công trình đã được thực hiện công phu, nghiêm túc và có tính thực tiễn. Các đề tài đảm bảo được tính khoa học sáng tạo cũng như khả năng ứng dụng thực tiễn, góp phần thiết thực cho công tác học tập tại trường, làm hành trang vững chắc cho sinh viên sau khi ra trường.',
      image:
        'https://hou.edu.vn/files/anhbaiviet/Images/2019/Thang_05/Le%20ki%20niem%20ngay%20KHVN%20va%20trao%20thuong%20SV%20NCKH/Trao%20giai%20SV%20NCKH.jpg',
    },
    {
      text:
        'Ghi nhận và đánh giá cao sự nỗ lực, sáng tạo NCKH của các sinh viên và sự nhiệt tình, tâm huyết của các cán bộ, giảng viên, 08h00 ngày 17/05/2019, Trường Đại học Mở Hà Nội tổ chức Lễ kỷ niệm Ngày Khoa học công nghệ Việt Nam 18/5 và Trao giải thưởng SV NCKH năm học 2018-2019. Chương trình diễn ra tại Nhà văn hóa Quận Hai Bà Trưng, số 255-257 Bạch Mai, Phường Thanh Nhàn, Hai Bà Trưng, Hà Nội.',
      image: null,
    },
    {
      text:
        'Trong khuôn khổ chương trình, BTC sẽ trao giấy khen cho sinh viên đạt giải VIFOTEC, Olympic Tin học SV toàn quốc; Trao giải cho các sinh viên đạt giải sinh viên NCKH cấp Trường năm học 2018-2019; Trao giải cho sinh viên đạt giải Olympic Tiếng Anh; Tin học không chuyên của Trường Đại học Mở Hà Nội và Trao giấy khen cho các giảng viên hướng dẫn sinh viên đạt giải thưởng NCKH năm học 2018- 2019.',
      image: null,
    },
  ],
};

class Detail_notification extends Component {
  constructor(props) {
    super(props);
    this.ani = new Animated.Value(0);
    this.width = 0;
    this.state = {
      width_begin: 0,
    };
  }

  _onPress() {
    let {link_navigation, internet} = this.props.navigation.getParam('data');

    switch (link_navigation.type_nav) {
      case 'screen': {
        if (internet) {
          if (this.props.connected_internet) {
            this.props.navigation.navigate(link_nav.name, link_nav.data_nav);
          } else {
            this._show_toast_unconnectted();
          }
        } else {
          this.props.navigation.navigate(
            link_navigation.name,
            link_navigation.data_nav,
          );
        }
        break;
      }
      case 'linking': {
        if (this.props.connected_internet) {
          Linking.canOpenURL(link_navigation.linking_1).then(supported => {
            if (supported) {
              return Linking.openURL(link_navigation.linking_1);
            } else {
              return Linking.openURL(link_navigation.linking_2);
            }
          });
        } else {
          this._show_toast_unconnectted();
        }

        break;
      }
      case 'back': {
        this.props.navigation.goBack(null);
        break;
      }
    }
  }

  _show_toast_unconnectted = () => {
    this.toast.show(Toast_form.no_connected);
  };

  render() {
    const ani_height = this.ani.interpolate({
      inputRange: [
        0,
        verticalScale(100),
        verticalScale(176),
        verticalScale(2500),
      ],
      outputRange: [
        verticalScale(34),
        verticalScale(34),
        verticalScale(45) + height_statusbar,
        verticalScale(45) + height_statusbar,
      ],
    });

    const ani_marginTop = this.ani.interpolate({
      inputRange: [
        0,
        verticalScale(100),
        verticalScale(176),
        verticalScale(2500),
      ],
      outputRange: [verticalScale(5.5), verticalScale(5.5), 0, 0],
    });

    const ani_marginTop_text = this.ani.interpolate({
      inputRange: [
        0,
        verticalScale(100),
        verticalScale(176),
        verticalScale(2500),
      ],
      outputRange: [0, 0, height_statusbar, height_statusbar],
    });

    const ani_width = this.ani.interpolate({
      inputRange: [
        0,
        verticalScale(100),
        verticalScale(176),
        verticalScale(2500),
      ],
      outputRange: [
        this.state.width_begin,
        this.state.width_begin,
        sizes.Width_Devices,
        sizes.Width_Devices,
      ],
    });

    const ani_borderRadius = this.ani.interpolate({
      inputRange: [
        0,
        verticalScale(100),
        verticalScale(176),
        verticalScale(2500),
      ],
      outputRange: [moderateScale(17), moderateScale(17), 0, 0],
    });

    const {
      color_title_header,
      title_header,
      image_header,
      title_button,
      title_notifi,
      content,
      color_button,
      color_arrow_back,
    } = this.props.navigation.getParam('data');

    return (
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            width: '100%',
            alignItems: 'center',
            zIndex: 1,
            paddingBottom: verticalScale(65),
          }}
          stickyHeaderIndices={[1]}
          onScroll={Animated.event(
            // this.ani = e.nativeEvent.contentOffset.y
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.ani,
                  },
                },
              },
            ],
          )}>
          {/*Image header*/}
          <View style={{width: '100%', height: verticalScale(177.5)}}>
            <FastImage
              style={{width: '100%', height: verticalScale(200)}}
              source={{
                uri: image_header,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          {/*Title header*/}
          <View
            pointerEvents={'box-none'}
            style={{
              width: '100%',
              height: verticalScale(48),
              backgroundColor: '#00000000',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Animated.View
              onLayout={e => {
                if (this.state.width_begin === 0) {
                  this.setState({
                    width_begin: e.nativeEvent.layout.width + scale(30),
                  });
                }
              }}
              style={{
                width: this.state.width_begin === 0 ? 'auto' : ani_width,
                height: ani_height,
                backgroundColor: 'white',
                elevation: 3,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                marginBottom: verticalScale(3),
                marginTop: ani_marginTop,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: ani_borderRadius,
              }}>
              <Animated.Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  fontSize: moderateScale(18, 0.3),
                  color: color_title_header,
                  marginTop: ani_marginTop_text,
                }}>
                {title_header}
              </Animated.Text>
            </Animated.View>
          </View>

          <Text
            allowFontScaling={false}
            style={{
              fontSize: moderateScale(22, 0.3),
              color: 'black',
              textAlign: 'center',
              marginHorizontal: scale(40),
              marginVertical: verticalScale(10),
              fontWeight: 'bold',
            }}>
            {title_notifi}
          </Text>

          {/*Content*/}
          <View>
            {content.map((value, index) => {
              return (
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  key={index.toString()}>
                  {value.text === '' ? null : (
                    <Text
                      allowFontScaling={false}
                      style={{
                        alignSelf: 'center',
                        fontSize: moderateScale(15, 0.3),
                        color: 'black',
                        marginHorizontal: scale(20),
                        marginVertical: verticalScale(7),
                      }}>
                      {value.text}
                    </Text>
                  )}
                  {value.image === null ? null : (
                    <FastImage
                      style={{
                        width: moderateScale(200, 0.8),
                        height: moderateScale(130, 0.8),
                        borderRadius: 5,
                        marginVertical: verticalScale(5),
                        alignSelf: 'center',
                      }}
                      source={{
                        uri: value.image,
                        priority: FastImage.priority.high,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/*Nút quay lại header, không biết tại sao nhưng phải đưa xuống dưới scroll view mới ấn được*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.props.navigation.goBack(null)}
          hitSlop={{
            top: moderateScale(10),
            bottom: moderateScale(10),
            left: moderateScale(10),
            right: moderateScale(10),
          }}
          style={{
            left: 0,
            height: verticalScale(45) + height_statusbar,
            justifyContent: 'center',
            paddingHorizontal: moderateScale(5),
            position: 'absolute',
          }}>
          <Icon
            type={'material'}
            name="keyboard-arrow-left"
            size={moderateScale(30)}
            color={color_arrow_back}
            containerStyle={{marginTop: height_statusbar}}
          />
        </TouchableOpacity>

        {/*Button bottom*/}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            position: 'absolute',
            bottom: verticalScale(10),
            left: '13%',
            width: '70%',
            height: verticalScale(45),
            borderRadius: moderateScale(10),
            backgroundColor: color_button,
            margin: moderateScale(5),
            elevation: 3,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this._onPress()}>
          <Text
            allowFontScaling={false}
            style={{color: 'white', fontSize: moderateScale(18, 0.3)}}>
            {title_button}
          </Text>
        </TouchableOpacity>

        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(105)}
          setting_props={this.props.setting_props}
        />
      </View>
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
)(Detail_notification);
