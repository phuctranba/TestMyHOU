import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Item from './item/item';
import style, {deviceWidth, deviceHeight} from './style';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import {height_view, space_small, space} from '../style';
import {connect} from 'react-redux';
import * as UserScreenControlAction from '../../../redux/actions/UserScreenControlAction';
import {bindActionCreators} from 'redux';
import {NavigationEvents} from 'react-navigation';
import {height_statusbar, Task_Colors} from '../../../utils/values';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {isEnd} from '../../../utils/functions';
import {move_actionbutton} from '../../../redux/actions/ControlLocalAction';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

const datas = [
  {
    date: 'Thứ hai 24/4',
    detail: [
      {
        time_from: '06:45',
        time_to: '11:25',
        subject: 'Kiến trúc máy tính',
        teacher: 'Vũ Chấn Hưng',
        room: 'Phòng 52',
        state: '1',
        code_class: 'AAS2102018.3',
      },
      {
        time_from: '12:45',
        time_to: '17:25',
        subject: 'Lập trình Web',
        teacher: 'Thái Thanh Tùng',
        room: 'Phòng 43',
        state: '1',
        code_class: 'AAW7112018.6',
      },
    ],
  },
  {
    date: 'Thứ ba 25/4',
    detail: [
      {
        time_from: '06:45',
        time_to: '11:25',
        subject: 'Lập trình hướng sự kiện',
        teacher: 'Lê Hữu Dũng',
        room: 'Phòng 33',
        state: '1',
        code_class: 'AAW6102018.6',
      },
      {
        time_from: '12:45',
        time_to: '17:25',
        subject: 'An ninh và bảo mật dữ liệu',
        teacher: 'Trần Duy Hùng',
        room: 'Phòng 24',
        state: '1',
        code_class: 'AAN5022018.9',
      },
    ],
  },
  {
    date: 'Thứ năm 27/4',
    detail: [
      {
        time_from: '06:45',
        time_to: '11:25',
        subject: 'Giải tích 2',
        teacher: 'Nguyễn Thuỳ Linh',
        room: 'Phòng 24',
        state: '1',
        code_class: 'AAB2092018.6',
      },
      {
        time_from: '12:45',
        time_to: '17:25',
        subject:
          'Tiếng anh chuyên ngànhTiếng anh chuyên ngànhTiếng anh chuyên ngành',
        teacher: 'Nguyễn Thị Thuý Lan',
        room: 'Phòng 41',
        state: '1',
        code_class: 'AAB4162018.246',
      },
    ],
  },
  {
    date: 'Thứ bảy 29/4',
    detail: [
      {
        time_from: '06:45',
        time_to: '11:25',
        subject: 'Thực hành LTr Web',
        teacher: 'Nguyễn Thị Quỳnh Như',
        room: 'Phòng 33',
        state: '1',
        code_class: 'W710TH2018.15',
      },
    ],
  },
];

const dates = [
  '01/02',
  '02/02',
  '03/02',
  '04/02',
  '05/02',
  '06/02',
  '07/02',
  '08/02',
  '09/02',
  '10/02',
];

// console.log(deviceWidth,deviceHeight);
const Item_date = (item, style) => {
  return (
    <View style={style.view_date}>
      <Text allowFontScaling={false} style={style.text_day_snap_list}>
        {item.item}
      </Text>
    </View>
  );
};

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      y: 0,
      img: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  // // 2 hàm bên dưới là hàm animation của lib snap carousel
  // _scrollInterpolator (index, carouselProps) {
  //     const range = [2, 1, 0, -1];
  //     const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  //     const outputRange = range;
  //
  //     return { inputRange, outputRange };
  // }
  //
  // _animatedStyles (index, animatedValue, carouselProps,cardOffset) {
  //     const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
  //     const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  //
  //
  //     return {
  //         opacity: animatedValue.interpolate({
  //             inputRange: [-1, 0, 1, 2],
  //             outputRange: [0.1, 1, 0.3, 0.3],
  //             extrapolate: 'clamp'
  //         }),
  //         transform: [{
  //             scale: animatedValue.interpolate({
  //                 inputRange: [-1, 0, 1, 2],
  //                 outputRange: [0.1, 1, 0.8, 0.6],
  //                 extrapolate: 'clamp'
  //             })
  //         }, {
  //             [translateProp]: animatedValue.interpolate({
  //                 inputRange: [-1, 0, 1, 2],
  //                 outputRange: [
  //                     moderateScale(80),
  //                     0,
  //                     moderateScale(5),
  //                     -moderateScale(10),
  //                 ],
  //                 extrapolate: 'clamp'
  //             })
  //         }]
  //     };
  // }
  //
  //
  componentWillReceiveProps(nextProps) {
    // if(!this.state.display){
    //     if(this.state.y===0&&nextProps.user_screen_control.y_scroll>=space)
    //     {
    //         // this.scroll.scrollTo({y:space});
    //     }
    //     else {
    //         if(this.state.y>=space&&nextProps.user_screen_control.y_scroll===0){
    //             // this.scroll.scrollTo({y:0});
    //         }
    //     }
    // }

    // Nhớ xoá đống dưới
    if (!this.state.display) {
      if (nextProps.user_screen_control.y_scroll >= space) {
        // this.scroll.scrollTo({y:space});

        // biến cho màn hình khi chưa có chức năng, nhớ xoá
        this.setState({img: false});
      } else {
        if (nextProps.user_screen_control.y_scroll === 0) {
          // this.scroll.scrollTo({y:0});

          // biến cho màn hình khi chưa có chức năng, nhớ xoá
          this.setState({img: true});
        }
      }
    }
  }
  //
  // _scroll(e){
  //
  //
  //     // Kiểm tra cuộn đến cuối để di chuyển nút action
  //     if (isEnd(e.nativeEvent)) {
  //         if(!this.props.move){
  //             this.props.move_actionButton(true);
  //         }
  //     }
  //     else {
  //         if(this.props.move){
  //             this.props.move_actionButton(false);
  //         }
  //     }
  //
  //
  //     // Hiệu ứng header
  //     let y=e.nativeEvent.contentOffset.y;
  //     this.state.y=y;
  //     if(this.state.display){
  //         this.props.user_screen_control_action.update_y_scroll(y);
  //     }
  // }
  //
  // _scroll_drag(e){
  //     let y = e.nativeEvent.contentOffset.y;
  //         if(y>0&&y<=space_small){
  //             this.scroll.scrollTo({y:0});
  //         }
  //         else {
  //             if(y>space_small&&y<space){
  //                 this.scroll.scrollTo({y:space});
  //             }
  //         }
  // }
  //
  // move_actionButton(e){
  //     console.log('a')
  // }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[
          this.style.container,
          {
            justifyContent:'center',
            paddingTop: this.state.img ? moderateScale(290, 0.6)+height_statusbar :height_statusbar,
          },
        ]}>
        {/*Nhớ thay đổi flex 1 thành with, height 100*/}
        <NavigationEvents
          onWillFocus={() =>
            this.props.user_screen_control_action.change_tab(1)
          }
          onDidFocus={() => (this.state.display = true)}
          onDidBlur={() => (this.state.display = false)}
        />
        {/*<ScrollView ref={view=>this.scroll=view} showsVerticalScrollIndicator={false}*/}
        {/*contentContainerStyle={{paddingTop:height_view,paddingBottom: moderateScale(47,0.3)}}*/}
        {/*onScroll={(e)=>this._scroll(e)}*/}
        {/*onScrollEndDrag={(e)=>this._scroll_drag(e)}>*/}
        {/*<Animatable.View delay={200}  animation="fadeInDown" style={this.style.view_week} >*/}

        {/*    /!*Nút tuần từ *!/*/}
        {/*    <View pointerEvents={"none"} style={this.style.button_from_week}>*/}
        {/*        <Text*/}
        {/*              style={this.style.text_from_week}>Tuần từ:</Text>*/}
        {/*    </View>*/}

        {/*    <View style={this.style.view_icon_arrow}>*/}
        {/*        <Icon type={"ionicon"} name={"md-arrow-dropright"} color={Task_Colors.task_special_dark} size={moderateScale(18)}/>*/}
        {/*    </View>*/}

        {/*    /!*Icon lịch*!/*/}
        {/*    <TouchableOpacity activeOpacity={0.7} style={this.style.view_icon_schedule}>*/}
        {/*        <Icon type={"font-awesome"} name={"calendar"} color={this.props.color.blue_7} size={moderateScale(20)}/>*/}
        {/*    </TouchableOpacity>*/}

        {/*    /!*Cái lib ôn dịch này cần set chiều cao để có thể cuộn đến trung tâm 1 item*!/*/}
        {/*    /!*Prop activeSlideOffset,swipeThreshold chưa biết cái nào là là khoảng cách vuốt ngắn nhất để nó tự swipe*!/*/}
        {/*    <Carousel*/}
        {/*        ref={(c) => { this._carousel = c; }}*/}
        {/*        data={dates}*/}
        {/*        renderItem={(item)=>Item_date(item,this.style)}*/}
        {/*        sliderWidth={moderateScale(179.55,0.8)}*/}
        {/*        scrollInterpolator={this._scrollInterpolator}*/}
        {/*        slideInterpolatedStyle={this._animatedStyles}*/}
        {/*        // layout={"default"}*/}
        {/*        containerCustomStyle={this.style.view_container_snap_list}*/}
        {/*        contentContainerCustomStyle={this.style.view_content_container_snap_list}*/}
        {/*        activeSlideAlignment={"start"}*/}
        {/*        enableSnap={true}*/}
        {/*        useScrollView={true}*/}
        {/*        itemWidth={moderateScale(64)}*/}
        {/*        swipeThreshold={moderateScale(10)}*/}
        {/*        activeSlideOffset={moderateScale(10)}*/}
        {/*        firstItem={3}*/}
        {/*        // onScroll={()=>{console.log(this._carousel.currentIndex);}}*/}
        {/*    />*/}
        {/*</Animatable.View>*/}

        {/*/!*Danh sách lịch học*!/*/}
        {/*<FlatList*/}
        {/*    data={datas}*/}
        {/*    keyExtractor={(item)=>item["date"]}*/}
        {/*    renderItem={(item)=><Item color={this.props.color} data={item.item} />}*/}
        {/*    style={{backgroundColor:"#00000000"}}*/}
        {/*    showsVerticalScrollIndicator={false}*/}
        {/*/>*/}

        {/*</ScrollView>*/}

        <FastImage
          style={{width: moderateScale(235), height: moderateScale(180)}}
          source={{
            uri: 'http://www.pngmart.com/files/5/Work-PNG-Pic.png',
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text
          allowFontScaling={false}>
          Chức năng đang được xây dựng!
        </Text>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_screen_control: state.user_screen_control,
    move: state.control_local.move,
    color: state.setting_control.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    user_screen_control_action: bindActionCreators(
      UserScreenControlAction,
      dispatch,
    ),
    move_actionButton: bindActionCreators(move_actionbutton, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Schedule);
