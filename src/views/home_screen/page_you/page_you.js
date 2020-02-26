import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
  StatusBar,
} from 'react-native';
import style from './style';
import {Icon} from 'react-native-elements';
import {convertDate} from '../../../utils/functions/date-convert';
import {height_statusbar, Task_Colors} from '../../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {SAGA} from '../../../redux/constant';
import * as ListNews from '../../../redux/actions/ListNewsHomeScreenAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Item from '../place_holder/item_place_page_you';
import {convertNumber} from '../../../utils/functions';
import FastImage from 'react-native-fast-image';
import {Toast} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';

class Page_you extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataYou.concat([null]),
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      data:
        nextProps.dataYou.length === nextProps.totalYoutube
          ? nextProps.dataYou
          : nextProps.dataYou.concat([null]),
    });
  }

  _item_press(id) {
    // Kiểm tra xem có kết nối hay không
    this.props.connected_internet
      ? Linking.canOpenURL(`vnd.youtube:${id}`).then(supported => {
          if (supported) {
            return Linking.openURL(`vnd.youtube:${id}`);
          } else {
            return this.props.navigation.navigate('Web_component', {
              uri: `https://www.youtube.com/watch?v=${id}`,
            });
          }
        })
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
          this.props.totalYoutube===-1?
              <Item type={'fail'} more={this._load_more} onReady={false} color={this.props.color}/>
              :
              <Item type={'null'} onReady={false} color={this.props.color} animate="fade"/>)
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={this.style.view_tou}
          onPress={() => this._item_press(item.item.id)}>
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
                  color={Task_Colors.task_danger_dark}
                  size={moderateScale(14, 0.4)}
                />
                <Text allowFontScaling={false} style={this.style.text_time}>
                  {convertDate(item.item.time.substring(0, 10))}
                </Text>
              </View>
            </View>

            {/*View like, cmt,...*/}
            <View style={this.style.view_detail}>
              <View style={[this.style.view_info_detail]}>
                <Icon
                  type={'antdesign'}
                  name={'eye'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
                <Text allowFontScaling={false} style={this.style.text_detail}>
                  {convertNumber(item.item.view)}
                </Text>
              </View>

              <View style={this.style.line} />

              <View style={[this.style.view_info_detail]}>
                <Icon
                  type={'font-awesome'}
                  name={'comment'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
                <Text allowFontScaling={false} style={this.style.text_detail}>
                  {convertNumber(item.item.cmt)}
                </Text>
              </View>

              <View style={this.style.line} />

              <View style={[this.style.view_info_detail]}>
                <Icon
                  type={'antdesign'}
                  name={'like1'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
                <Text allowFontScaling={false} style={this.style.text_detail}>
                  {convertNumber(item.item.like)}
                </Text>
              </View>

              <View style={this.style.line} />

              <View style={[this.style.view_info_detail]}>
                <Icon
                  type={'antdesign'}
                  name={'dislike1'}
                  color={'#cd3f3a'}
                  size={moderateScale(15, 0.4)}
                />
                <Text allowFontScaling={false} style={this.style.text_detail}>
                  {convertNumber(item.item.dislike)}
                </Text>
              </View>
            </View>
          </View>

          {/*View phụ*/}
          {/*<View style={{width:"70%",height:"24%",alignItems: 'center',*/}
          {/*zIndex:2, position: "absolute",right:2,bottom:2,elevation: 3,*/}
          {/*borderRadius: 10,backgroundColor:'#fff'}}>*/}
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
        SAGA.LISTNEWHOMESCREEN.LOAD_YOUTUBE,
        'more',
        this.props.nextAddressPageYoutube,
    )
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.isYoutubeLoad==='fail_2') this._show_toast_error_send_feedback();
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
          extraData={this.state}
          renderItem={item => this._render_item(item)}
          style={{backgroundColor: '#00000000'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={this.style.flatlist}
          onEndReached={() => this.props.isYoutubeLoad!=='fail_2'?this._load_more():null}
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
    dataYou: state.listNewHomeScreen.dataYoutube,
    totalYoutube: state.listNewHomeScreen.totalYoutube,
    nextAddressPageYoutube: state.listNewHomeScreen.nextAddressPageYoutube,
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
    isYoutubeLoad: state.listNewHomeScreen.isYoutubeLoad,
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
)(Page_you);
