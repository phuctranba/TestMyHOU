import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  BackHandler,
    Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import style, {H, W, height_view, size_actionbutton} from './style';
import Detail_header_user_main from './detail_header_user_main';
import Svg, {Circle, Defs, G, LinearGradient, Stop} from 'react-native-svg';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import IconMa from 'react-native-vector-icons/MaterialCommunityIcons';
import Card_student from '../../user_screen/card_student/card_student';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {withNavigation} from 'react-navigation';
import * as UserScreenControlAction from '../../../redux/actions/UserScreenControlAction';
import {height_statusbar, Task_Colors} from '../../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import ActionButton_User from './ActionButton_User';
import {Toast} from '../../../components';
import SafeAreaView from 'react-native-safe-area-view';
import userReducer from "../../../redux/reducers/User";
import {reloadUser} from "../../../redux/actions/UserAction";
import {bindActionCreators} from 'redux';

// const space=height_view*0.8;
const space = height_view * 0.8;
// const space_small=height_view/3;


const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
class Header_user_main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ani_y: new Animated.Value(0),
      header_color_cy: 0,
      header_color_height:height_view + height_statusbar,
      r_Circle_1:height_view + height_statusbar,
      r_Circle_2: height_view - H * 0.01 + height_statusbar,
      r_Circle_3: height_view - H * 0.02 + height_statusbar,
    };

    this.toast_content_error_load_data={
      text: 'Tải dữ liệu sinh viên thất bại, nhấn để thử lại. Phản hồi lại cho chúng tôi nếu lỗi này vẫn xảy ra.',
      textColor: Task_Colors.task_danger_dark,
      icon: 'exclamation-circle',
      iconType: 'font-awesome',
      iconColor: Task_Colors.task_danger_dark,
      iconButtonRight: 'reload',
      textButtonRight: 'Tải lại',
      textColorButtonRight: 'white',
      typeButton: 'double_button',
      iconTypeButtonRight:'material-community',
      backgroundButtonRight: Task_Colors.task_danger_dark,
      duration: -1,
      functionButtonRight: this._reload_data,
      iconButtonLeft: 'cancel',
      textButtonLeft: 'Hủy',
      textColorButtonLeft: 'white',
      iconTypeButtonLeft:'material-community',
      backgroundButtonLeft: Task_Colors.task_danger_light,
      functionButtonLeft: ()=>{},
    };

    this.data_load=true;
  }

  _change_header = y => {
    // Thay đổi bán kính, vị trí y dọc xuống cùng chiều cao của view bao dựa trên y của scroll

    if (y >= 0 && y <= space) {
      let value = y / space;
      // y=y*moderateScale(1,-0.2);
      this.header_view._change_ava(value);

      // Đống này để cài đặt chiều cao và bán kính, không cần thiết đừng sờ vào, đau đầu lắm
      this.setState({
        header_color_height:
          height_view * 0.8 * (1 - value) +
          height_view * 0.2 +
          height_statusbar,
      });
      this.setState({header_color_cy: -y * 3});
      this.setState({r_Circle_1: height_view + y * 2 + height_statusbar});
      // this.setState({y:value});
      // Làm cho 3 hình tròn bằng nhau
      this.setState({
        r_Circle_2:
          height_view -
          H * 0.01 +
          (y * 2 + H * 0.01 * value) +
          height_statusbar,
      });
      this.setState({
        r_Circle_3:
          height_view -
          H * 0.02 +
          (y * 2 + H * 0.02 * value) +
          height_statusbar,
      });
    }
    // Khi cuộn nhanh quá, cái này sẽ xử lí, đương nhiên là không để setstate mãi được, re-render hoài,
    // chỉ để đến gấp rưỡi cái chiều cao header thôi
    else if (y > space && y <= space * 1.5) {
      this.header_view._change_ava(1);

      // Đống này để cài đặt chiều cao và bán kính, không cần thiết đừng sờ vào, đau đầu lắm
      this.setState({header_color_height: height_view / 5 + height_statusbar});
      this.setState({header_color_cy: -space * 3});
      this.setState({r_Circle_1: height_view + space * 2 + height_statusbar});
      // Làm cho 3 hình tròn bằng nhau
      this.setState({
        r_Circle_2:
          height_view - H * 0.01 + (space * 2 + H * 0.01) + height_statusbar,
      });
      this.setState({
        r_Circle_3:
          height_view - H * 0.02 + (space * 2 + H * 0.02) + height_statusbar,
      });
    }
  };

  _show_toast = (setup) => {
    this.toast.show(setup);
  };

  componentWillReceiveProps(nextProps) {
    let y = nextProps.user_screen_control.y_scroll;

    if (nextProps.move !== this.props.move) {
      if (nextProps.move) {
         this.actionButton._right();
      } else {
        this.actionButton._left();
      }
    }

    if (y >= 0 && y <= space){
      this.state.ani_y.setValue(y);
      let value = y / space;

      this.header_view._change_ava(value);
    } else if (y > space && y <= space * 1.5){
      this.state.ani_y.setValue(space);

      this.header_view._change_ava(1);
    }

    if (
      this.props.user_screen_control.tab_index !==
      nextProps.user_screen_control.tab_index
    ) {
      this.header_view._setState_redux(nextProps.user_screen_control.tab_index);
    }
  }

  _reload_data=()=>{
      this.props.reload_user_data(this.props.userReducer.access_token);
  };

  componentDidMount() {
    !this.data_load?this._show_toast(this.toast_content_error_load_data):null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //Điều kiện cuối để tránh scroll cũng hiện toast lúc chưa load dữ liệu
    !this.data_load&&!this.props.studentReducer.isLoadding&&this.props.studentReducer.isLoadding!==prevProps.studentReducer.isLoadding?this._show_toast(this.toast_content_error_load_data):null;
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    const {name="Trống"} = this.props.userReducer;
    const {code="Trống", gender="Trống"} = this.props.studentProfileReducer;
    // Các thông số lấy từ 3 API khác nhau, kiểm tra xem có con nào lỗi không, nếu có thì toast thông báo lỗi tải lại
    this.data_load= !(name === "Trống" || code === "Trống");
    return (
      <View pointerEvents={'box-none'} style={this.style.container}>
        <Animated.View
          // animation="fadeInDown"
          style={[
            this.style.view_main,
            {height: this.state.ani_y.interpolate({
                inputRange:[0, space],
                outputRange:[height_view + height_statusbar, height_view * 0.2 +
                height_statusbar]
              })},
          ]}>
          <AnimatedSvg
            height={this.state.ani_y.interpolate({
              inputRange:[0, space],
              outputRange:[height_view + height_statusbar, height_view * 0.2 +
              height_statusbar]
            })}
            width="100%"
            style={{backgroundColor: '#00000000'}}>
            {/*3 màu cũ*/}
            {/*"rgba(0, 104, 214, 0.9)"*/}
            {/*"rgba(15, 131, 255, 0.9)"*/}
            {/*"rgba(66, 158, 255, 0.9)"*/}
            <Defs>
              <LinearGradient id="1grad" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0" stopColor="#fff" stopOpacity="1" />
                <Stop
                  offset="1"
                  stopColor={this.props.color.blue_6}
                  stopOpacity="1"
                />
              </LinearGradient>
              <LinearGradient id="2grad" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0" stopColor="#fff" stopOpacity="1" />
                <Stop
                  offset="1"
                  stopColor={this.props.color.blue_5}
                  stopOpacity="1"
                />
              </LinearGradient>
              <LinearGradient id="3grad" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0" stopColor="#fff" stopOpacity="1" />
                <Stop
                  offset="1"
                  stopColor={this.props.color.blue_4}
                  stopOpacity="1"
                />
              </LinearGradient>
            </Defs>
            <G id="shape">
              <AnimatedCircle
                cx="50%"
                cy={this.state.ani_y.interpolate({
                  inputRange:[0, space],
                  outputRange:[0, -space*3]
                })}
                r={this.state.ani_y.interpolate({
                  inputRange:[0, space],
                  outputRange:[height_view + height_statusbar, height_view + space * 2 + height_statusbar]
                })}
                fill="url(#1grad)"
              />
              <AnimatedCircle
                cx="50%"
                cy={this.state.ani_y.interpolate({
                  inputRange:[0, space],
                  outputRange:[0, -space*3]
                })}
                r={this.state.ani_y.interpolate({
                  inputRange:[0, space],
                  outputRange:[height_view - H * 0.01 + height_statusbar, height_view - H * 0.01 + (space * 2 + H * 0.01) + height_statusbar]
                })}
                fill="url(#2grad)"
              />
              <AnimatedCircle
                cx="50%"
                cy={this.state.ani_y.interpolate({
                  inputRange:[0, space],
                  outputRange:[0, -space*3]
                })}
                r={this.state.ani_y.interpolate({
                  inputRange:[0, space],
                  outputRange:[height_view - H * 0.02 + height_statusbar, height_view - H * 0.02 + (space * 2 + H * 0.02) + height_statusbar]
                })}
                fill="url(#3grad)"
              />
            </G>
          </AnimatedSvg>
        </Animated.View>

        <Detail_header_user_main
          color={this.props.color}
          ref={view => (this.header_view = view)}
          name={name}
          code={code}
          gender={gender}
          nav={this.props.navigation}
        />

        <ActionButton_User
          color={this.props.color}
          Card={this.card_student}
          ref={view => (this.actionButton = view)}
          toast={this._show_toast}
          data={this.data_load}
          reload={this._reload_data}
        />

        <Card_student
          color={this.props.color}
          toast={this._show_toast}
          studentReducer={this.props.studentReducer}
          ref={view => (this.card_student = view)}
        />
        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(110)}
          setting_props={this.props.setting_props}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    studentReducer: state.studentReducer,
    studentProfileReducer: state.studentProfileReducer,
    userReducer:state.userReducer,
    user_screen_control: state.user_screen_control,
    move: state.control_local.move,
    color: state.setting_control.color,
    setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reload_user_data: bindActionCreators(reloadUser, dispatch),
  };
}

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header_user_main),
);
