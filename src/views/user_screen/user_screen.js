import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import style, {
  deviceHeight,
  deviceWidth,
  height_view,
  size_actionbutton,
} from './style';
// import Header_user from './header/header'
import Schedule from './schedule/schedule';
import Info from './table_infor_user/table_infor_user';
import Study from './study/study';
import Svg, {Circle, Defs, G, LinearGradient, Stop} from 'react-native-svg';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import IconMa from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';
import Card_student from './card_student/card_student';
import Icon from 'react-native-vector-icons/FontAwesome5';

const space = height_view * 0.8;
const space_small = height_view / 3;

class User_screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header_color_cy: 0,
      header_color_height: height_view,
      r_Circle_1: height_view,
      r_Circle_2: height_view - deviceHeight * 0.01,
      r_Circle_3: height_view - deviceHeight * 0.02,
      tab_index: 2,
    };
    this._set_state = this._setstate.bind(this);
  }

  _change_header = event => {
    // Thay đổi bán kính, vị trí y dọc xuống cùng chiều cao của view bao dựa trên y của scroll
    const y = event.nativeEvent.contentOffset.y;

    if (y >= 0 && y <= space) {
      let value = y / space;
      this.header_view._change_ava(value);

      // Đống này để cài đặt chiều cao và bán kính, không cần thiết đừng sờ vào, đau đầu lắm
      this.setState({
        header_color_height:
          height_view * 0.8 * (1 - value) + height_view * 0.2,
      });
      this.setState({header_color_cy: (0 - y) * 3});
      this.setState({r_Circle_1: height_view + y * 2});
      this.setState({y: value});
      // Làm cho 3 hình tròn bằng nhau
      this.setState({
        r_Circle_2:
          height_view -
          deviceHeight * 0.01 +
          (y * 2 + deviceHeight * 0.01 * value),
      });
      this.setState({
        r_Circle_3:
          height_view -
          deviceHeight * 0.02 +
          (y * 2 + deviceHeight * 0.02 * value),
      });
    }
    // Khi cuộn nhanh quá, cái này sẽ xử lí, đương nhiên là không để setstate mãi được, re-render hoài, chỉ để đến gấp đôi cái chiều cao header thôi
    else if (y > space && y <= space * 2) {
      this.header_view._change_ava(1);

      // Đống này để cài đặt chiều cao và bán kính, không cần thiết đừng sờ vào, đau đầu lắm
      this.setState({header_color_height: height_view / 5});
      this.setState({header_color_cy: -space * 3});
      this.setState({r_Circle_1: height_view + space * 2});
      // Làm cho 3 hình tròn bằng nhau
      this.setState({
        r_Circle_2:
          height_view - deviceHeight * 0.01 + (space * 2 + deviceHeight * 0.01),
      });
      this.setState({
        r_Circle_3:
          height_view - deviceHeight * 0.02 + (space * 2 + deviceHeight * 0.02),
      });
    }
  };

  _stop_scrool = event => {
    // Bắt buộc phải scroll lên trên cùng hoặc kéo xuống đủ hiện header

    if (
      event.nativeEvent.contentOffset.y > 0 &&
      event.nativeEvent.contentOffset.y <= space_small
    ) {
      this.scrool_view.scrollTo({y: 0});
    } else {
      if (
        event.nativeEvent.contentOffset.y > space_small &&
        event.nativeEvent.contentOffset.y < space
      ) {
        this.scrool_view.scrollTo({y: space});
      }
    }

    // Chắc chắn rằng cài đặt cái header khi bỏ tay ra lần cuối
    this._change_header(event);
  };

  _render_content() {
    switch (this.state.tab_index) {
      case 1:
        return <Info />;
      case 2:
        return <Schedule />;
      case 3:
        return <Study nav={this.props.navigation} />;
    }
  }

  _setstate(index) {
    this.setState({tab_index: index});
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000000',
          height: '100%',
          width: '100%',
          alignItems: 'center',
        }}>
        <Animatable.View
          animation="fadeInDown"
          style={{
            position: 'absolute',
            top: 0,
            zIndex: 2,
            height: this.state.header_color_height,
            width: '100%',
          }}>
          <Svg
            height={`${this.state.header_color_height}`}
            width="100%"
            style={{backgroundColor: '#00000000'}}>
            <Defs>
              <LinearGradient id="1grad" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0" stopColor="#fff" stopOpacity="1" />
                <Stop
                  offset="1"
                  stopColor="rgba(0, 104, 214, 0.9)"
                  stopOpacity="1"
                />
              </LinearGradient>
              <LinearGradient id="2grad" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0" stopColor="#fff" stopOpacity="1" />
                <Stop
                  offset="1"
                  stopColor="rgba(15, 131, 255, 0.9)"
                  stopOpacity="1"
                />
              </LinearGradient>
              <LinearGradient id="3grad" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0" stopColor="#fff" stopOpacity="1" />
                <Stop
                  offset="1"
                  stopColor="rgba(66, 158, 255, 0.9)"
                  stopOpacity="1"
                />
              </LinearGradient>
            </Defs>
            <G id="shape">
              <Circle
                cx="50%"
                cy={`${this.state.header_color_cy}`}
                r={`${this.state.r_Circle_1}`}
                fill="url(#1grad)"
                // style={{elevation: 3}}
              />
              <Circle
                cx="50%"
                cy={`${this.state.header_color_cy}`}
                r={`${this.state.r_Circle_2}`}
                fill="url(#2grad)"
                // style={{elevation: 3}}
              />
              <Circle
                cx="50%"
                cy={`${this.state.header_color_cy}`}
                r={`${this.state.r_Circle_3}`}
                fill="url(#3grad)"
                // style={{elevation: 3}}
              />
            </G>
          </Svg>
        </Animatable.View>

        {/*<Header_user ref={view=>this.header_view=view}*/}
        {/*             _set_state={this._set_state}*/}
        {/*             name={this.props.studentReducer.name}*/}
        {/*             code={this.props.studentReducer.code}*/}
        {/*             nav={this.props.navigation}*/}
        {/*/>*/}

        <ScrollView
          style={{width: '100%', height: 300}}
          showsVerticalScrollIndicator={false}
          onScroll={e => {
            this._change_header(e);
          }}
          onScrollEndDrag={e => {
            this._stop_scrool(e);
          }}
          ref={view => (this.scrool_view = view)}>
          {/*Nội dung chính*/}
          {this._render_content()}
        </ScrollView>
        <ActionButton
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
          offsetY={70}
          spacing={8}
          buttonColor="#38BBD0"
          degrees={360}
          style={{zIndex: 5}}>
          <ActionButton.Item
            textContainerStyle={{height: 25, top: 9, justifyContent: 'center'}}
            buttonColor="#2b2d73"
            title="Đăng kí tín chỉ"
            textStyle={{color: '#4D9BD0', fontSize: 14}}
            onPress={() => {}}>
            <IconMa name="playlist-plus" style={this.style.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item
            textContainerStyle={{height: 25, top: 9, justifyContent: 'center'}}
            buttonColor="#4f548e"
            title="Thẻ sinh viên"
            textStyle={{color: '#2b2d73', fontSize: 14}}
            onPress={() => this.card_student._open()}>
            <Icon name="id-card" style={this.style.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item
            textContainerStyle={{height: 25, top: 9, justifyContent: 'center'}}
            buttonColor="#4975AA"
            title="Học phí"
            textStyle={{color: '#4975AA', fontSize: 14}}
            onPress={() => {}}>
            <Icon name="clipboard-list" style={this.style.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item
            textContainerStyle={{height: 25, top: 9, justifyContent: 'center'}}
            buttonColor="#4D9BD0"
            title="Lịch thi"
            textStyle={{color: '#4f548e', fontSize: 14}}
            onPress={() => {}}>
            <IconMa name="calendar-clock" style={this.style.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <Card_student
          color={this.porps.color}
          ref={view => (this.card_student = view)}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    studentReducer: state.studentReducer,
    color: state.setting_control.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User_screen);
