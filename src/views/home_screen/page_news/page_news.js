import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import style from './style';
import {Icon} from 'react-native-elements';
import {height_statusbar, Task_Colors} from '../../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import * as ListNews from '../../../redux/actions/ListNewsHomeScreenAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SAGA} from '../../../redux/constant';
import Item from '../place_holder/item_place_page_new';
import FastImage from 'react-native-fast-image';
import {Toast} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';

class Page_news extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam('data', '');
    this.total = this.props.navigation.getParam('total', '');
    this.more = this.props.navigation.getParam('more', '');
    this.type_load = this.props.navigation.getParam('type_load', '');

    // Luôn cho một phần tử null để dùng cho item load cuối danh sách
    this.state = {
      data: this.props.dataListNew[this.data].concat([null]),
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      data:
        nextProps.dataListNew[this.total] ===
        nextProps.dataListNew[this.data].length
          ? nextProps.dataListNew[this.data]
          : nextProps.dataListNew[this.data].concat([null])
        // Luôn cho một phần tử null để dùng cho item load cuối danh sách
    });
  }

  _item_press(uri) {
    // Kiểm tra xem có kết nối hay không
    this.props.connected_internet
      ? this.props.navigation.navigate('Web_component', {uri})
      : this.toast.show({
          text: 'Không có kết nối internet, kiểm tra lại!',
          textColor: Task_Colors.task_danger_dark,
          icon: 'exclamation-circle',
          iconType: 'font-awesome',
          iconColor: Task_Colors.task_danger_dark,
        });
  }

  _render_item(item) {
    if (item.item === null) {
        return (
            // đặt fail và null, giá trị fail là dạng item thông báo lỗi load
            // null là item loading
            this.props.dataListNew[this.total]===-1?
                <Item type={'fail'} more={this._load_more} onReady={false} color={this.props.color}/>
                :
                <Item type={'null'} onReady={false} color={this.props.color} animate="fade"/>)
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={this.style.view_tou}
          onPress={() => this._item_press(item.item.uri)}>
          {/*View chính*/}
          <View style={this.style.view_main}>
            {/*Text tiêu đề và thời gian*/}
            <View style={this.style.view_info}>
              <Text
                allowFontScaling={false}
                style={this.style.text_title}
                numberOfLines={4}
                ellipsizeMode={'tail'}>
                {item.item.title}
              </Text>

              <View style={this.style.view_time}>
                <Icon
                  type={'antdesign'}
                  name={'clockcircleo'}
                  color={this.props.color.blue_8}
                  size={moderateScale(14)}
                />
                <Text allowFontScaling={false} style={this.style.text_time}>
                  {item.item.time}
                </Text>
              </View>
            </View>
          </View>

          {/*View ảnh*/}
          <View style={this.style.view_image}>
            <FastImage
              style={this.style.image_new}
              source={{
                uri: item.item.img,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
        </TouchableOpacity>
      );
    }
  }

    _go_to_feedback_screen=()=>{
        this.props.navigation.navigate('Feedback_component');
    };

    _show_toast_error_send_feedback(){
        this.toast.show({
            text: 'Tải lại không thành công. Nếu xác nhận lỗi phát sinh từ phía máy chủ trong khi kết nối của bạn vẫn ổn định, hãy liên hệ lại cho chúng tôi!',
            textColor: Task_Colors.task_warning_light,
            icon: 'warning',
            iconColor: Task_Colors.task_warning_light,
            iconButton: 'paper-plane',
            textButton: 'Phản hồi',
            textColorButton: 'white',
            typeButton: 'button',
            iconTypeButton:'entypo',
            backgroundButton: Task_Colors.task_warning_light,
            duration: 5000,
            // data: key,
            function_parent: this._go_to_feedback_screen,
        });
    };

    _load_more=()=>{
        this.props.takeListAction.getListNews(
            SAGA.LISTNEWHOMESCREEN[this.more.typeRedux],
            'more',
            this.props.dataListNew[this.more.addressNext],
        )
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.dataListNew[this.type_load]==='fail_2') this._show_toast_error_send_feedback();
    }

    render() {
      // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{paddingTop: height_statusbar + verticalScale(20)}}>


        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          extraData={this.state.data}
          renderItem={item => this._render_item(item)}
          style={{backgroundColor: '#00000000'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={this.style.flatlist}
          removeClippedSubviews={true}
          onEndReached={() => this.props.dataListNew[this.type_load]!=='fail_2'?this._load_more():null}
        />


        {/*Toast thông báo*/}
        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(70)}
          setting_props={this.props.setting_props}
        />
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataListNew: state.listNewHomeScreen,
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
      setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {
    takeListAction: bindActionCreators(ListNews, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page_news);
