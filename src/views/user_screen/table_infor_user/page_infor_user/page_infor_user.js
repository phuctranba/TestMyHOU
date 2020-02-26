import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {Rows, Table} from 'react-native-table-component';
import {bindActionCreators} from 'redux';
import * as StudentProfileAction from '../../../../redux/actions/StudentProfileAction';
import {connect} from 'react-redux';
import {convertDate} from '../../../../utils/functions/date-convert';
import {height_statusbar, Task_Colors} from '../../../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

class Page_infor_user extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(this.state.tableData_User !== nextState.tableData_User
    // || this.state.tableData_User_Dad !== nextState.tableData_User_Dad
    //     || this.state.tableData_User_Mom !== nextState.tableData_User_Mom) {
    //     return true;
    // }
    return true;
  }

  _renderTable(human) {
    let {
      code = 'Trống',
      last_name = 'Trống',
      middle_name = 'Trống',
      first_name = 'Trống',
      gender = 'Trống',
      dob = 'Trống',
      email = 'Trống',
      phone_number = 'Trống',
      identity_card_number = 'Trống',
      ethnical = 'Trống',
      religious = 'Trống',
      admission_code = 'Trống',
      enrollment_date = 'Trống',
      graduation_place = 'Trống',
      learning_region_code = 'Trống',
      pob = 'Trống',
      permanent_residence = 'Trống',
      contact_address = 'Trống',
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
        ['Họ:', last_name],
        ['Tên đệm:', middle_name],
        ['Tên:', first_name],
        [
          'Giới tính:',
          gender === 'NAM' ? 'Nam' : gender === 'Trống' ? 'Trống' : 'Nữ',
        ],
        ['Ngày sinh:', dob === 'Trống' ? 'Trống' : convertDate(dob)],
        ['Email:', email],
        ['Số điện thoại:', phone_number],
        ['Số CMTND:', identity_card_number],
        ['Dân tộc:', ethnical],
        ['Tôn giáo:', religious],
        [
          'Số báo danh:',
          admission_code === 'Trống' ? 'Trống' : admission_code.substring(1),
        ],
        [
          'Ngày nhập học:',
          enrollment_date === 'Trống' ? 'Trống' : convertDate(enrollment_date),
        ],
        ['Tốt nghiệp:', graduation_place],
        ['Khu vực:', learning_region_code],
        ['Nơi sinh:', pob],
        ['Địa chỉ:', permanent_residence],
        ['Người liên hệ:', contact_address],
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
          borderStyle={{borderColor: '#00000000'}}
          style={this.style.table}>
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
          borderStyle={{borderColor: '#00000000'}}
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
          borderStyle={{borderColor: '#00000000'}}
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

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          paddingTop: height_statusbar + verticalScale(20),
          width: '100%',
          flex: 1,
          backgroundColor: 'rgba(185,203,255,0.52)',
        }}>
        <ScrollView
          style={this.style.scroll_view}
          showsVerticalScrollIndicator={false}>
          {/*Thông tin cá nhân*/}
          <View style={[this.style.view_sup, {marginTop: verticalScale(30)}]}>
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
            </View>

            {/*Đường kẻ*/}
            <View style={this.style.view_line} />

            {this._renderTable('user')}
          </View>

          {/*Thông tin gia đình*/}
          <View style={[this.style.view_sup,{marginBottom:verticalScale(10)}]}>
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
            </View>

            {/*Đường kẻ*/}
            <View style={this.style.view_line} />

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

            {/*Đường kẻ*/}
            <View style={this.style.view_line_small} />

            {/*Bố*/}
            {this._renderTable('dad')}

            {/*Đường kẻ*/}
            <View style={this.style.view_line} />

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

            {/*Mẹ*/}
            {this._renderTable('mom')}
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    studentProfileReducer: state.studentProfileReducer,
    userReducer: state.userReducer,
    color: state.setting_control.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    studentProfileAction: bindActionCreators(StudentProfileAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page_infor_user);
