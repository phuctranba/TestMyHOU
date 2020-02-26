import React, {Component} from 'react';
import IconMa from 'react-native-vector-icons/MaterialCommunityIcons';
import style, {size_actionbutton} from './style';
import {sizes, Task_Colors} from '../../../utils/values';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Animated, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {OS} from '../../../utils/functions';

export default class ActionButton_User extends Component {
  constructor(props) {
    super(props);
    this.ani_button = new Animated.Value(-moderateScale(100));

    this.toast_content={
        text: 'Chức năng này sẽ được cập nhật trong các phiên bản sắp tới!',
        textColor: Task_Colors.task_info_dark,
        icon: 'cogs',
        iconType: 'font-awesome',
        iconColor: Task_Colors.task_info_dark,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.color !== nextProps.color||this.props.data!==nextProps.data;
  }

  // Hai hàm animated để cho nút này ẩn sang phải về về bên trái khi kéo xuống tận cùng
  // để tránh che mất thông tin hiển thị
  _right() {
    Animated.timing(this.ani_button, {
      toValue: -moderateScale(100),
      duration: 500,
    }).start();
  }

  _left() {
    Animated.timing(this.ani_button, {
      toValue: 0,
      duration: 500,
    }).start();
  }

  // Hiệu ứng khi mới vào màn hình
  componentDidMount() {
    Animated.timing(this.ani_button, {
      toValue: 0,
      duration: 500,
      delay: 200,
    }).start();
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
        <Animated.View
        pointerEvents={'box-none'}
        style={{
          position: 'absolute',
          right: this.ani_button,
            // Cái này nó hơi sida một chút, bên android thì để bottom vẫn hiện nút lên
            // còn IOS phải để top, android để top cũng hiện nhưng máy nào mà có nút điều hướng ảo là toi ngay
            // Nên check như này cho chắc ăn
          [OS?'bottom':'top']: 0,
          width: sizes.Width_Devices + moderateScale(100),
          height: sizes.Height_Devices,
          zIndex: 3,
        }}
        // Để style đây cho dễ hiểu animated
      >
        <ActionButton
            fixNativeFeedbackRadius={true}
          bgColor={'rgba(0, 0, 0, 0.5)'}
          renderIcon={active =>
            active ? (
              <IconMa
                name="briefcase-outline"
                style={this.style.actionButtonIcon}
              />
            ) : (
              <IconMa name="briefcase" style={this.style.actionButtonIcon} />
            )
          }
          size={size_actionbutton}
          offsetY={verticalScale(70)}
          spacing={verticalScale(8)}
          buttonColor={this.props.color.blue_3}
          degrees={360}
          style={{zIndex: 5}}>
          {/*Nút đăng kí tín chỉ*/}
          <ActionButton.Item
            textContainerStyle={this.style.actionbutton_item}
            buttonColor={this.props.color.blue_8}
            title="Đăng kí tín chỉ"
            textStyle={{
              color: Task_Colors.task_elegant,
              fontSize: moderateScale(14, 0.3),
            }}
            onPress={() => this.props.toast(this.toast_content)}>
            <IconMa name="playlist-plus" style={this.style.actionButtonIcon} />
          </ActionButton.Item>

          {/*Nút hiện thẻ sinh viên*/}
          <ActionButton.Item
            textContainerStyle={this.style.actionbutton_item}
            buttonColor={this.props.color.blue_7}
            title="Thẻ sinh viên"
            textStyle={{
              color: this.props.color.blue_7,
              fontSize: moderateScale(14, 0.3),
            }}
            onPress={() => this.props.Card._open()}>
            <Icon name="id-card" style={this.style.actionButtonIcon} />
          </ActionButton.Item>

          {/*Nút xem học phí*/}
          <ActionButton.Item
            textContainerStyle={this.style.actionbutton_item}
            buttonColor={this.props.color.blue_6}
            title="Học phí"
            textStyle={{
              color: Task_Colors.task_elegant,
              fontSize: moderateScale(14, 0.3),
            }}
            onPress={() => this.props.toast(this.toast_content)}>
            <Icon name="clipboard-list" style={this.style.actionButtonIcon} />
          </ActionButton.Item>

          {/*Xem lịch thi*/}
          <ActionButton.Item
            textContainerStyle={this.style.actionbutton_item}
            buttonColor={this.props.color.blue_5}
            title="Lịch thi"
            textStyle={{
              color: Task_Colors.task_elegant,
              fontSize: moderateScale(14, 0.3),
            }}
            onPress={() => this.props.toast(this.toast_content)}>
            <IconMa name="calendar-clock" style={this.style.actionButtonIcon} />
          </ActionButton.Item>

            {/*Reload dữ liệu*/}
            {!this.props.data?(<ActionButton.Item
                textContainerStyle={this.style.actionbutton_item}
                buttonColor={this.props.color.blue_4}
                title="Tải lại dữ liệu"
                textStyle={{
                    color: this.props.color.blue_7,
                    fontSize: moderateScale(14, 0.3),
                }}
                onPress={() => this.props.reload()}>
                <IconMa name="reload" style={this.style.actionButtonIcon}/>
            </ActionButton.Item>):<View/>}
        </ActionButton>
      </Animated.View>
    );
  }
}
