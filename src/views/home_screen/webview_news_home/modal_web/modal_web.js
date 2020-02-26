import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  Animated,
  TextInput,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export default class Modal_web extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      url: this.props.url,
      small_info: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({url: nextProps.url});
    }
  }

  _open() {
    this.setState({visible: true});
  }

  _writeToClipboard = async () => {
    await Clipboard.setString(this.state.url);
    this.setState({visible: false});
  };

  _press_open_brower() {
    this.setState({visible: false});
    this.props.onpen_brower();
  }

  _press_onShare() {
    this.setState({visible: false});
    this.props.onShare();
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <Modal
        isVisible={this.state.visible}
        animationIn={'fadeInUp'}
        animationInTiming={400}
        animationOutTiming={400}
        animationOut={'fadeOutDown'}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        hideModalContentWhileAnimating={true}
        // onSwipeComplete={() => this.setState({ visible: false })}
        // swipeDirection={"down"}
        onBackButtonPress={() => {
          this.setState({visible: false});
        }}
        onBackdropPress={() => {
          this.setState({visible: false});
        }}
        style={this.style.container_modal}>
        <View
          style={{
            borderRadius: moderateScale(15),
            backgroundColor: 'white',
            width: moderateScale(320),
            height: moderateScale(170),
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '25%',
              width: '90%',
              borderBottomColor: this.props.color.blue_8,
              borderBottomWidth: 0.5,
              paddingVertical: verticalScale(15),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontWeight: 'bold',
                fontSize: moderateScale(17, 0.3),
                color: this.props.color.blue_7,
              }}>
              Tiện ích
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: '65%',
              width: '90%',
              justifyContent: 'space-around',
              paddingVertical: '5%',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: '27%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: this.props.color.blue_6,
                height: '100%',
                borderRadius: moderateScale(15),
              }}
              onPress={() => this._writeToClipboard()}>
              <Icon
                solid
                name={'copy'}
                size={moderateScale(27)}
                color={'white'}
              />
              <Text
                allowFontScaling={false}
                style={{
                  fontSize: moderateScale(13, 0.3),
                  color: 'white',
                  textAlign: 'center',
                  height: '45%',
                  marginTop: '5%',
                }}>
                {'Sao chép\nliên kết'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: '27%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: this.props.color.blue_6,
                height: '100%',
                borderRadius: moderateScale(15),
                borderRightColor: 'white',
                borderLeftColor: 'white',
              }}
              onPress={() => this._press_open_brower()}>
              <Icon
                solid
                name={'globe'}
                size={moderateScale(27)}
                color={'white'}
              />
              <Text
                allowFontScaling={false}
                style={{
                  fontSize: moderateScale(12, 0.3),
                  color: 'white',
                  textAlign: 'center',
                  height: '45%',
                  marginTop: '5%',
                }}>
                {'Mở trong\ntrình duyệt'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: '27%',
                height: '100%',
                backgroundColor: this.props.color.blue_6,
                borderRadius: moderateScale(15),
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => this._press_onShare()}>
              <Icon
                solid
                name={'share-alt'}
                size={moderateScale(27)}
                color={'white'}
              />
              <Text
                allowFontScaling={false}
                style={{
                  fontSize: moderateScale(14, 0.3),
                  color: 'white',
                  textAlign: 'center',
                  height: '45%',
                  marginTop: '5%',
                }}>
                Chia sẻ
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Nút trở lại*/}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            borderRadius: moderateScale(15, 0.3),
            backgroundColor: 'white',
            width: moderateScale(320),
            height: moderateScale(40),
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: verticalScale(10),
          }}
          onPress={() => this.setState({visible: false})}>
          <Text
            allowFontScaling={false}
            style={{
              color: this.props.color.blue_7,
              fontSize: moderateScale(19, 0.3),
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Trở lại
          </Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}
