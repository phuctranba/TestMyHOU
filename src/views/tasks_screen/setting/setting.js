import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Switch,
  Picker,
} from 'react-native';
import React, {Component} from 'react';
import style from './style';
import {Icon} from 'react-native-elements';
import {
  button_setting,
  convert_value_setting,
  height_statusbar,
} from '../../../utils/values';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Modal_setting from '../../../components/modal_setting/modal_setting';
import AsyncStorage from '@react-native-community/async-storage';
import * as setting_action from '../../../redux/actions/SettingAction';
import {connect} from 'react-redux';
import setting from '../../../redux/reducers/Setting_control';
import {bindActionCreators} from 'redux';

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props.setting_props['Save_user']);
    // console.log(nextState['Save_user']);
    return true;
  }

  _render_mutil_item(subject) {
    let arr_item = subject.detail_subject.map((item, index) => {
      return (
        <TouchableOpacity
          key={item.title}
          activeOpacity={0.8}
          style={this.style.view_tou}
          onPress={() => {
            this._render_action_type(item);
          }}>
          <View style={this.style.view_icon}>
            <Icon
              type={item.type_icon}
              name={item.icon}
              color={this.props.setting_props.color.blue_7}
              size={item.size_icon}
            />
          </View>

          <Text
            allowFontScaling={false}
            style={this.style.text_title}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {item.title}
          </Text>

          {this._render_tail_type(item)}
        </TouchableOpacity>
      );
    });

    return (
      <View style={{elevation: 2,shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41, marginBottom: 15, backgroundColor: 'white'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: this.props.setting_props.color.blue_6,
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          {subject.name_subject}
        </Text>

        {arr_item}
      </View>
    );
  }

  _render_tail_type({type_setting, name_setting}) {
    switch (type_setting) {
      case 'Switch':
        return (
          <Switch
            style={{position: 'absolute', right: scale(15)}}
            trackColor={{
              true: this.props.setting_props.color.blue_6,
              false: this.props.setting_props.color.blue_1,
            }}
            thumbColor={this.props.setting_props.color.blue_4}
            onValueChange={value => {
              this.props.update_setting({[name_setting]: value.toString()}, [
                [name_setting, value.toString()],
              ]);
            }}
            value={JSON.parse(this.props.setting_props[name_setting])}
          />
        );

      case 'Navigate':
        return (
          <Icon
            type={'ionicon'}
            name={'md-arrow-dropright'}
            color={this.props.setting_props.color.blue_7}
            size={25}
            containerStyle={this.style.icon_arrow}
          />
        );

      case 'Radio':
      case 'RadioPickerImage':
        return (
          <Text
            style={[
              this.style.icon_arrow,
              {
                textAlign: 'right',
                fontSize: 15,
                color: this.props.setting_props.color.blue_8,
              },
            ]}>
            {convert_value_setting[this.props.setting_props[name_setting]]}
          </Text>
        );

      case 'ColorPicker':
        return (
          <View
            style={{
              elevation: 3,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
              position: 'absolute',
              right: scale(15),
              width: 25,
              height: 25,
              borderRadius: 15,
              backgroundColor: this.props.setting_props.color.blue_main,
            }}
          />
        );

      case 'CheckBox':
        return (
          <Text
            style={[
              this.style.icon_arrow,
              {
                textAlign: 'right',
                fontSize: 15,
                color: this.props.setting_props.color.blue_8,
              },
            ]}>
            {this.props.setting_props[name_setting].length > 0
              ? `Đã chọn ${this.props.setting_props[name_setting].length} mục`
              : 'Không nhận thông báo'}
          </Text>
        );
    }
  }

  _render_action_type({title, type_setting, name_setting, detail_setting}) {
    switch (type_setting) {
      case 'Switch':
        return this.props.update_setting(
          {[name_setting]: (!(JSON.parse(this.props.setting_props[name_setting]))).toString()},
          [[name_setting, (!(JSON.parse(this.props.setting_props[name_setting]))).toString()]],
        );

      case 'Navigate':
        return this.props.navigation.navigate(detail_setting.router_name);

      case 'YesNo':
      case 'Radio':
      case 'ColorPicker':
      case 'RadioPickerImage':
      case 'CheckBox':
        return this.modal_setting._open(
          title,
          type_setting,
          detail_setting,
          name_setting,
        );
    }
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.setting_props.color);
    console.log(this.props.setting_props);
    return (
      <LinearGradient
        colors={['white', this.props.setting_props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{width: '100%', height: '100%'}}>

          {/*Danh sách các cài đặt*/}
        <FlatList
          data={button_setting}
          extraData={this.props.setting_props}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => this._render_mutil_item(item.item)}
          contentContainerStyle={this.style.flatlist}
          showsVerticalScrollIndicator={false}
        />

        {/*Modal chi tiết cài đặt từng cái*/}
        <Modal_setting
          color={this.props.setting_props.color}
          ref={view => (this.modal_setting = view)}
        />

      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    setting_props: state.setting_control,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update_setting: bindActionCreators(setting_action.update_setting, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setting);
