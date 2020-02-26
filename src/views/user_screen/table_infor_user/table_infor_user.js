import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import style from './style';
import {
  Rows,
  Table,
  Col,
  Cell,
  Cols,
  TableWrapper,
} from 'react-native-table-component';
import {connect} from 'react-redux';
import {convertDate} from '../../../utils/functions/date-convert';
import {height_view, space, space_small} from '../style';
import * as UserScreenControlAction from '../../../redux/actions/UserScreenControlAction';
import {bindActionCreators} from 'redux';
import {height_statusbar, Task_Colors} from '../../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {move_actionbutton} from '../../../redux/actions/ControlLocalAction';
import {isEnd} from '../../../utils/functions';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationEvents} from 'react-navigation';

class Table_infor_user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      y: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.color !== nextProps.color||this.props.studentProfileReducer!==nextProps.studentProfileReducer;
  }

  _renderTable(human) {
    let {
      code = 'Trống',
      name = 'Trống',
      gender = 'Trống',
      dob = 'Trống',
      email = 'Trống',
      phone_number = 'Trống',
      identity_card_number = 'Trống',
      permanent_residence = 'Trống',
      father_fullname = 'Trống',
      father_yob = 'Trống',
      father_job = 'Trống',
      mother_fullname = 'Trống',
      mother_yob = 'Trống',
      mother_job = 'Trống',
    } = this.props.studentProfileReducer;
    let data = {
      tableData_User: [
        ['Mã sinh viên:', code],
        ['Họ và tên:', name],
        [
          'Giới tính:',
          gender === 'NAM' ? 'Nam' : gender === 'Trống' ? 'Trống' : 'Nữ',
        ],
        ['Ngày sinh:', dob === 'Trống' ? 'Trống' : convertDate(dob)],
        ['Email:', email],
        ['Số điện thoại:', phone_number],
        ['Số CMTND:', identity_card_number],
        ['Địa chỉ:', permanent_residence],
      ],
      tableData_User_Dad: [
        ['Họ và tên:', father_fullname],
        ['Năm sinh:', father_yob],
        ['Nghề nghiệp:', father_job],
      ],
      tableData_User_Mom: [
        ['Họ và tên:', mother_fullname],
        ['Năm sinh:', mother_yob],
        ['Nghề nghiệp:', mother_job],
      ],
    };

    if (human === 'user') {
      return (
        <Table
          borderStyle={{borderColor: 'transparent'}}
          style={[this.style.table, {flexDirection: 'row'}]}>
          <Rows
            allowFontScaling={false}
            style={{alignItems: 'flex-start'}}
            data={data.tableData_User}
            flexArr={[4, 8]}
            textStyle={this.style.text_infor}
          />
        </Table>
      );
    } else if (human === 'dad') {
      return (
        <Table
          borderStyle={{borderColor: 'transparent'}}
          style={this.style.table}>
          <Rows
            allowFontScaling={false}
            style={{alignItems: 'flex-start'}}
            data={data.tableData_User_Dad}
            flexArr={[4, 8]}
            textStyle={this.style.text_infor}
          />
        </Table>
      );
    } else {
      return (
        <Table
          borderStyle={{borderColor: 'transparent'}}
          style={this.style.table}>
          <Rows
            allowFontScaling={false}
            style={{alignItems: 'flex-start'}}
            data={data.tableData_User_Mom}
            flexArr={[4, 8]}
            textStyle={this.style.text_infor}
          />
        </Table>
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.display) {
      if (
        this.state.y === 0 &&
        nextProps.user_screen_control.y_scroll >= space
      ) {
        this.scroll.scrollTo({y: space});
      } else {
        if (
          this.state.y >= space &&
          nextProps.user_screen_control.y_scroll === 0
        ) {
          this.scroll.scrollTo({y: 0});
        }
      }
    }
  }

  _scroll(e) {
    // Kiểm tra cuộn đến cuối để di chuyển nút action
    if (isEnd(e.nativeEvent)) {
      if (!this.props.move) {
        this.props.move_actionButton(true);
      }
    } else {
      if (this.props.move) {
        this.props.move_actionButton(false);
      }
    }

    // Hiệu ứng header
    let y = e.nativeEvent.contentOffset.y;
    this.state.y = y;
    if (this.state.display) {
      this.props.user_screen_control_action.update_y_scroll(y);
    }
  }

  _scroll_drag(e) {
    let y = e.nativeEvent.contentOffset.y;
    if (y > 0 && y <= space_small) {
      this.scroll.scrollTo({y: 0});
    } else {
      if (y > space_small && y < space) {
        this.scroll.scrollTo({y: space});
      }
    }
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{width: '100%', height: '100%'}}>
        <ScrollView
          ref={view => (this.scroll = view)}
          onScroll={e => this._scroll(e)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: height_view + height_statusbar,
            paddingBottom: verticalScale(61),
          }}
          style={this.style.scroll_view}
          onScrollEndDrag={e => this._scroll_drag(e)}>
          <NavigationEvents
            onWillFocus={() =>
              this.props.user_screen_control_action.change_tab(2)
            }
            onDidFocus={() => (this.state.display = true)}
            onDidBlur={() => (this.state.display = false)}
          />

          {/*Tiêu đề đầu bảng*/}
          {/*Bảng thông tin cá nhân*/}
          <Animatable.View
            style={[this.style.view_sup]}
            delay={200}
            animation="fadeInUp">
            <View style={this.style.view_header}>
              <Icon
                type={'font-awesome'}
                name={'user-circle'}
                color={this.props.color.blue_7}
                size={moderateScale(20)}
              />
              <Text
                allowFontScaling={false}
                style={this.style.text_header_title_blue}>
                Thông tin cá nhân
              </Text>

              {/*Nút xem thêm góc phải*/}
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.style.tou_more}
                onPress={() =>
                  this.props.navigation.navigate('Page_infor_component')
                }>
                <Icon
                  type={'material-community'}
                  name={'arrow-expand-all'}
                  color={this.props.color.blue_8}
                  size={moderateScale(22)}
                />
              </TouchableOpacity>
            </View>

            <View style={this.style.view_line} />

            {this._renderTable('user')}
          </Animatable.View>

          {/*Bảng thông tin gia đình gồm cha và mẹ*/}
          <Animatable.View
            style={[this.style.view_sup]}
            delay={400}
            animation="fadeInUp">
            <View style={this.style.view_header}>
              <Icon
                type={'material-community'}
                name={'home-circle'}
                color={this.props.color.blue_7}
                size={moderateScale(23)}
              />
              <Text
                allowFontScaling={false}
                style={this.style.text_header_title_blue}>
                Thông tin gia đình
              </Text>

              {/*Nút xem thêm góc phải*/}
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.style.tou_more}
                onPress={() =>
                  this.props.navigation.navigate('Page_infor_component')
                }>
                <Icon
                  type={'material-community'}
                  name={'arrow-expand-all'}
                  color={this.props.color.blue_8}
                  size={moderateScale(22)}
                />
              </TouchableOpacity>
            </View>

            <View style={this.style.view_line} />

            {/*Icon và text bố */}
            <View style={this.style.view_header}>
              <Icon
                type={'simple-line-icon'}
                name={'user'}
                color={Task_Colors.task_special_dark}
                size={moderateScale(16)}
              />
              <Text
                allowFontScaling={false}
                style={this.style.text_header_title_black}>
                Bố
              </Text>
            </View>

            <View style={this.style.view_line_small} />

            {this._renderTable('dad')}

            <View style={this.style.view_line} />

            {/*icon và text mẹ*/}
            <View style={this.style.view_header}>
              <Icon
                type={'simple-line-icon'}
                name={'user-female'}
                color={Task_Colors.task_special_dark}
                size={moderateScale(16)}
              />
              <Text
                allowFontScaling={false}
                style={this.style.text_header_title_black}>
                Mẹ
              </Text>
            </View>

            <View style={this.style.view_line_small} />

            {this._renderTable('mom')}
          </Animatable.View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    studentProfileReducer: state.studentProfileReducer,
    userReducer: state.userReducer,
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
)(Table_infor_user);
