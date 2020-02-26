import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  Alert,
  Animated,
  BackHandler,
  PanResponder,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import {Toast} from '../../components';
import {height_statusbar, Task_Colors} from '../../utils/values';
import {sizes} from '../../utils/values/sizes';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import * as setting_action from '../../redux/actions/SettingAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const datas = [
  // {
  //     id:0,
  //     mark:true,
  //     title:"Thông báo lịch thi cuối kì II khoá 1710A khoa công nghệ thông tin",
  //     img: require("../../assets/img/logo.png"),
  //     time: "20:35 25/03/2019"
  // },
  // {
  //     id:1,
  //     mark:false,
  //     title:'Tổ chức chương trình văn nghệ chào mừng ngày thành lập đoàn thanh niên công sản Hồ Chí Minh 26/03 tại nhà văn hoá HSSV',
  //     img: require("../../assets/img/fithou_logo.jpg"),
  //     time:"12:14 02/12/2018"
  // },
  // {
  //     id:2,
  //     mark:false,
  //     title:'Phương án tuyển sinh đại học chính quy năm 2019 của Trường Đại học Mở Hà Nội',
  //     img: require("../../assets/img/logo.png"),
  //     time:"03:21 21/03/2019"
  // },
  // {
  //     id:3,
  //     mark:false,
  //     title:'Kết quả xét duyệt học bổng khuyến khích học tập kì I năm học 2017/2018 khoa CNTT',
  //     img: require("../../assets/img/logo.png"),
  //     time:"05:02 02/03/2019"
  // },
  // {
  //     id:4,
  //     mark:true,
  //     title:"Lịch nộp học phí chính thức khoa công nghệ thông tin Lịch nộp học phí chính thức khoa công nghệ thông tin Lịch nộp học phí chính thức khoa công nghệ thông tin",
  //     img: require("../../assets/img/fithou_logo.jpg"),
  //     time:"14:02 11/02/2019"
  // },
  // {
  //     id:5,
  //     mark:false,
  //     title:"Thông báo về hoạt động giảng dạy kì II năm học 2018-2019 khoa CNTT",
  //     img: require("../../assets/img/logo.png"),
  //     time:"20:21 05/02/2019"
  // },
  // {
  //     id:6,
  //     mark:false,
  //     title:'Khoa công nghệ thông tin đạt giải khoa xuất sắc nhất cả nước năm 2018',
  //     img: require("../../assets/img/fithou_logo.jpg"),
  //     time:"15:36 02/12/2018"
  // },
  // {
  //     id:7,
  //     mark:false,
  //     title:'Đại học Mở Hà Nội vừa khánh thành hai cơ sở dạy học lớn  nhất cả nước trên mặt trăng',
  //     img: require("../../assets/img/logo.png"),
  //     time:"04:25 02/12/2018"
  // },
  // {
  //     id:8,
  //     mark:true,
  //     title:'Đại học Mở công bố kết quả nghiên cứu khoa học về chống ung thứ, hứa hẹn sẽ mang đến kỉ nguyên mới cho loài ngườiĐại học Mở công bố kết quả nghiên cứu khoa học về chống ung thứ, hứa hẹn sẽ mang đến kỉ nguyên mới cho loài người',
  //     img: require("../../assets/img/logo.png"),
  //     time:"03:25 02/12/2018"
  // },
  // {
  //     id:9,
  //     mark:false,
  //     title:"Mật khẩu của bạn đã được thay đổi Mật khẩu của bạn đã được thay đổi Mật khẩu của bạn đã được thay đổi",
  //     img: require("../../assets/img/fithou_logo.jpg"),
  //     time:"14:06 02/12/2018"
  // }
];

class Notification_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listViewData: datas,
      list_prev: [],
      item_working: null,
    };
    this.undo = this._undo_item.bind(this);
    this.change_mark = this._change_mark.bind(this);
    this.remove_item = this._remove_item.bind(this);

    // tạo style theo state, cho chức năng thay đổi màu giao diện
    // this.style=style(this.props.color);
  }

  shouldComponentUpdate(
    nextProps,
    nextState
  ) {
    // this.style=style(nextProps.setting_props.color);

    return true;
  }

  _remove_item(key) {
    if (this.delete_item) {
      clearTimeout(this.delete_item);
    }

    let list = this.state.listViewData;
    this.state.list_prev = this.state.listViewData;
    // Xoá item bằng cách lọc
    list = list.filter(item => item.id !== key);
    // Hiệu ứng xoá item
    // this[key]._hide_item();

    // Hiện toast hoàn tác
    this.Toast.show({
      text: 'Đã xoá thông báo!',
      textColor: Task_Colors.task_success_dark,
      icon: 'trash-o',
      iconColor: Task_Colors.task_success_dark,
      iconButtonRight: 'undo',
      textButtonRight: 'Hoàn tác',
      textColorButtonRight: 'white',
      typeButton: 'button_right',
      backgroundButtonRight: this.props.color.blue_main,
      duration: 4000,
      dataButtonRight: key,
      functionButtonRight: this.undo,
    });
    this.state.item_working = key;
    // Độ trễ kẻo hiệu ứng chưa chạy, item đã biến mất
    setTimeout(() => {
      this._delete_item(key);
      this.setState({listViewData: list});
    }, 800);
  }

  _delete_item(key) {
    this.delete_item = setTimeout(() => {
      this.state.list_prev = this.state.list_prev.filter(
        item => item.id !== key,
      );
    }, 3000);
  }

  _undo_item(key) {
    if (this.delete_item) {
      clearTimeout(this.delete_item);
    }
    let list = this.state.list_prev;
    this.state.item_working = key;
    this.setState({listViewData: list});
  }

  _change_mark(key) {
    const list = this.state.listViewData.map((item, i) => {
      if (item.id === key) {
        item.mark = !item.mark;
      }
      return item;
    });
    this.state.item_working = key;
    this.setState({listViewData: list});
  }

  _show_mark = () => {
    console.log('show_mark');
  };

  _renderEmptyContainer() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon
          name={'inbox'}
          color={this.props.color.blue_4}
          size={moderateScale(80, 0.4)}
          style={{marginBottom: 20}}
        />
        <Text allowFontScaling={false} style={this.style.text_empty}>
          Bạn không có thông báo!
        </Text>
      </View>
    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: height_statusbar,
        }}>
        {/*<View style={{width:"100%",height:45,justifyContent: "center",alignItems: "center",backgroundColor:'white',elevation:3,marginBottom:5}}>*/}
        {/*    <Text style={{fontSize:20, fontWeight:"500",color:this.props.color.blue_main}}>*/}
        {/*        Tin tức*/}
        {/*    </Text>*/}
        {/*    <TouchableOpacity hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}  style={{position:'absolute', right:15}}*/}
        {/*                      onPress={()=>this.props.navigation.navigate("Notification_list")}>*/}
        {/*        <Icon name={"star"} color={this.props.color.blue_main} size={18}/>*/}
        {/*    </TouchableOpacity>*/}
        {/*</View>*/}
        <FlatList
          data={this.state.listViewData}
          extraData={this.state.listViewData}
          disableScrollViewPanResponder={true}
          // snapToInterval={2}
          keyExtractor={item => item.id.toString()}
          renderItem={item => (
            <Row_news
              remove_item={this.remove_item}
              change_mark={this.change_mark}
              data={item.item}
              item_working={this.state.item_working}
              nav={this.props.navigation}
            />
          )}
          // style={{backgroundColor:"#00000000"}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={this.style.flatlist}
          ListEmptyComponent={this._renderEmptyContainer()}
        />
        <Toast
          ref={view => (this.Toast = view)}
          marginBottom={verticalScale(70)}
          setting_props={this.props.setting_props}
        />
      </View>
    );
  }
}

class Row_news extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ani_height:
        this.props.data.id === this.props.item_working
          ? new Animated.Value(0)
          : new Animated.Value(1),
      ani_color: new Animated.Value(0),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data.id === nextProps.item_working;
  }

  // Animated vuốt
  translateX = new Animated.Value(0);
  _panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, {dx: this.translateX}]),
    onPanResponderRelease: (e, {vx, dx}) => {
      if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * sizes.Width_Devices) {
        if (dx < 0) {
          Animated.timing(this.translateX, {
            toValue: -sizes.Width_Devices,
            duration: 200,
          }).start(this._hide_item());
        } else {
          Animated.spring(this.translateX, {
            toValue: 0,
            bounciness: 10,
          }).start(this.props.change_mark(this.props.data.id));
        }
      } else {
        Animated.spring(this.translateX, {
          toValue: 0,
          bounciness: 10,
        }).start();
      }
    },
  });

  _hide_item() {
    Animated.timing(this.state.ani_height, {
      toValue: 0,
      duration: 350,
    }).start(this.props.remove_item(this.props.data.id));
  }

  _show_item() {
    Animated.timing(this.state.ani_height, {
      toValue: 1,
      duration: 350,
    }).start();
  }

  componentDidMount() {
    this.props.data.id === this.props.item_working ? this._show_item() : null;
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    const {title, img, time, mark, id} = this.props.data;
    const height_view = this.state.ani_height.interpolate({
      inputRange: [0, 1],
      outputRange: [0, moderateScale(90)],
    });
    const translateY = this.state.ani_height.interpolate({
      inputRange: [0, 1],
      outputRange: [-0.0000000001, 1],
    });
    const change_color_background = this.translateX.interpolate({
      inputRange: [
        -sizes.Width_Devices,
        -sizes.Width_Devices / 2,
        0,
        sizes.Width_Devices / 2,
        sizes.Width_Devices,
      ],
      outputRange: [
        Task_Colors.task_danger_light,
        Task_Colors.task_danger_light,
        'white',
        Task_Colors.task_warning_light,
        Task_Colors.task_warning_light,
      ],
    });

    const change_opa_delete = this.translateX.interpolate({
      inputRange: [0, sizes.Width_Devices / 2],
      outputRange: [1, 0],
    });

    const change_opa_mark = this.translateX.interpolate({
      inputRange: [-sizes.Width_Devices / 2, 0],
      outputRange: [0, 1],
    });

    const opacity_icon_mark = mark
      ? this.translateX.interpolate({
          inputRange: [0, sizes.Width_Devices / 2, sizes.Width_Devices * 0.55],
          outputRange: [1, 0.3, 0],
        })
      : this.translateX.interpolate({
          inputRange: [0, sizes.Width_Devices / 2, sizes.Width_Devices * 0.55],
          outputRange: [0, 0.7, 1],
        });

    return (
      <Animated.View style={{width: '100%', height: height_view}}>
        {/*Nội dung phía trên*/}
        <Animated.View
          style={{transform: [{translateX: this.translateX}], zIndex: 0}}
          {...this._panResponder.panHandlers}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[this.style.view_row, this.style.tou_item]}
            onPress={() => this.props.nav.navigate('Detail_notification')}>
            <View style={this.style.header_item}>
              <Image
                style={this.style.view_img}
                source={img}
                resizeMode={'center'}
              />
              <Animated.View
                style={[
                  this.style.icon_star_item,
                  {opacity: opacity_icon_mark},
                ]}>
                <Icon
                  name={'star-half'}
                  color={Task_Colors.task_warning_light}
                  size={moderateScale(30)}
                />
              </Animated.View>
            </View>

            <View style={this.style.view_content}>
              <Text
                allowFontScaling={false}
                style={this.style.txt_title}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {title}
              </Text>
              <Text
                allowFontScaling={false}
                style={this.style.txt_detail}
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                {title}
              </Text>
              <Text allowFontScaling={false} style={this.style.icon_clock}>
                <Icon
                  name={'clock-o'}
                  color={'#5b62ed'}
                  size={moderateScale(15)}
                />
                &nbsp;&nbsp;{time}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/*Background phía sau*/}
        <Animated.View
          style={[
            this.style.view_hide,
            {height: height_view, backgroundColor: change_color_background},
          ]}>
          <Animated.View
            style={[
              this.style.background_hide,
              {opacity: change_opa_mark, transform: [{scale: translateY}]},
            ]}>
            <Icon
              name="star"
              size={moderateScale(25)}
              color={'#fff'}
              style={{marginRight: scale(10)}}
            />
            <Text allowFontScaling={false} style={this.style.text_hide}>
              Đánh dấu
            </Text>
          </Animated.View>

          <Animated.View
            style={[
              this.style.background_hide,
              {opacity: change_opa_delete, transform: [{scale: translateY}]},
            ]}>
            <Icon
              name="trash"
              size={moderateScale(25)}
              color={'#fff'}
              style={{marginRight: scale(10)}}
            />
            <Text allowFontScaling={false} style={this.style.text_hide}>
              Xoá
            </Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
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
)(Notification_list);
