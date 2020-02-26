import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  Alert,
  StatusBar,
  BackHandler,
} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';
import {bindActionCreators} from 'redux';
import * as StudentAction from '../../../redux/actions/StudentAction';
import {connect} from 'react-redux';
import {convertDate} from '../../../utils/functions/date-convert';
import {sizes} from '../../../utils/values';
import {moderateScale} from 'react-native-size-matters';

const logo = require('../../../assets/img/logo_card.png');
const img_code = require('../../../assets/img/code_card.png');

export default class Card_student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  _open() {
    this.setState({visible: true});
  }

  _close() {
    this.setState({visible: false});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.studentReducer !== nextProps.studentReducer ||
      this.state.visible !== nextState.visible
    );
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    const sourceImage = require('../../../assets/img/no_image.png');
    const {
      name = 'Trống',
      dob = 'Trống',
      gender = 'Trống',
      year_study = 'Trống',
      academic_period = 'Trống',
      major = 'Trống',
      code = 'Trống',
    } = this.props.studentReducer;

    return (
      <Modal
        isVisible={this.state.visible}
        onBackButtonPress={() => {
          this.setState({visible: false});
        }}
        animationIn={'flipInY'}
        animationInTiming={400}
        animationOutTiming={400}
        animationOut={'flipOutY'}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        hideModalContentWhileAnimating={true}
        // onSwipeComplete={() => this.setState({ visible: false })}
        // swipeDirection={'down'}
        onBackdropPress={() => {
          this.setState({visible: false});
        }}
        style={this.style.container_modal}>

        <View
          style={{
            borderRadius: moderateScale(15),
            backgroundColor: 'white',
            width: moderateScale(450),
            height: moderateScale(290),
            transform: [{rotateZ: '90deg'}],
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderTopRightRadius: 15,
              borderTopLeftRadius: moderateScale(15),
              backgroundColor: '#0c1497',
              width: moderateScale(450),
              height: moderateScale(50),
              top: 0,
            }}>
            <View style={{flex: 6, margin: moderateScale(5)}}>
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  color: 'white',
                  fontSize: moderateScale(17, 0.25),
                  textAlign: 'right',
                }}>
                TRƯỜNG ĐẠI HỌC MỞ HÀ NỘI
              </Text>
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  color: 'white',
                  fontSize: moderateScale(9, 0.25),
                  textAlign: 'right',
                }}>
                HANOI OPEN UNIVERSITY
              </Text>
            </View>
            <View
              style={{
                flex: 4.5,
                alignItems: 'flex-end',
                marginTop: moderateScale(5),
                marginRight: moderateScale(6),
              }}>
              <Image
                source={logo}
                style={{
                  width: moderateScale(100),
                  height: moderateScale(35),
                  top: 0,
                }}
                resizeMode={'stretch'}
              />
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  color: 'white',
                  fontSize: moderateScale(6, 0.25),
                  marginRight: moderateScale(14),
                }}>
                Learning Opportunity for All
              </Text>
            </View>
          </View>

          <View
            style={{
              width: moderateScale(450),
              height: moderateScale(2),
              backgroundColor: '#0c1497',
              marginVertical: moderateScale(3),
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              width: moderateScale(450),
              height: moderateScale(165),
              top: 0,
              alignItems: 'center',
            }}>
            <Image
              source={sourceImage}
              style={{
                width: moderateScale(110),
                height: moderateScale(135),
                marginLeft: moderateScale(10),
              }}
              resizeMode={'stretch'}
            />
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                height: moderateScale(135),
                marginHorizontal: moderateScale(15),
              }}>
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  color: '#ff282c',
                  fontSize: moderateScale(22, 0.25),
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                THẺ SINH VIÊN
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'blue',
                    flex: 3,
                    fontWeight: 'bold',
                    fontSize: moderateScale(15, 0.25),
                    marginVertical: moderateScale(3),
                  }}>
                  Họ tên:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'black',
                    flex: 8,
                    fontSize: moderateScale(17, 0.25),
                    fontWeight: 'bold',
                    marginVertical: moderateScale(3),
                  }}>
                  {name.toUpperCase()}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'blue',
                    flex: 3,
                    fontWeight: 'bold',
                    fontSize: moderateScale(15, 0.25),
                    marginVertical: moderateScale(3),
                  }}>
                  Ngày sinh:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'black',
                    flex: 3.5,
                    fontSize: moderateScale(15, 0.25),
                    fontWeight: 'bold',
                    marginVertical: moderateScale(3),
                  }}>
                  {dob === 'Trống' ? 'Trống' : convertDate(dob)}
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'blue',
                    flex: 1.5,
                    fontWeight: 'bold',
                    fontSize: moderateScale(15, 0.25),
                    marginVertical: moderateScale(3),
                  }}>
                  GT:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'black',
                    flex: 3,
                    fontSize: moderateScale(15, 0.25),
                    fontWeight: 'bold',
                    marginVertical: moderateScale(3),
                  }}>
                  {gender === 'NAM'
                    ? 'Nam'
                    : gender === 'Trống'
                    ? 'Trống'
                    : 'Nữ'}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'blue',
                    flex: 3,
                    fontWeight: 'bold',
                    fontSize: moderateScale(15, 0.25),
                    marginVertical: moderateScale(3),
                  }}>
                  Khoá:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'black',
                    flex: 3.5,
                    fontSize: moderateScale(15, 0.25),
                    fontWeight: 'bold',
                    marginVertical: moderateScale(3),
                  }}>
                  {year_study === 'Trống'
                    ? 'Trống'
                    : Number(year_study) + ' - ' + (Number(year_study) + 4)}
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'blue',
                    flex: 1.5,
                    fontWeight: 'bold',
                    fontSize: moderateScale(15, 0.25),
                    marginVertical: moderateScale(3),
                  }}>
                  Hệ:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'black',
                    flex: 3,
                    fontSize: moderateScale(15, 0.25),
                    fontWeight: 'bold',
                    marginVertical: moderateScale(3),
                  }}>
                  {academic_period}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'blue',
                    flex: 3,
                    fontWeight: 'bold',
                    fontSize: moderateScale(15, 0.25),
                    marginVertical: moderateScale(3),
                  }}>
                  Ngành:
                </Text>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'black',
                    flex: 8,
                    fontSize: moderateScale(15, 0.25),
                    fontWeight: 'bold',
                    marginVertical: moderateScale(3),
                  }}>
                  {major}
                </Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, marginBottom: moderateScale(3)}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  marginLeft: moderateScale(10),
                  color: 'blue',
                  flex: 1.25,
                  fontWeight: 'bold',
                  fontSize: moderateScale(15, 0.25),
                }}>
                Mã SV:
              </Text>
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  color: 'black',
                  fontSize: moderateScale(15, 0.25),
                  fontWeight: 'bold',
                  flex: 3.75,
                }}>
                {code}
              </Text>
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  color: '#ff282c',
                  fontSize: moderateScale(15, 0.25),
                  fontWeight: 'bold',
                  flex: 5,
                }}>
                XXXXXXXX XXXXXXXX XXX
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  source={img_code}
                  style={{
                    width: moderateScale(180),
                    height: moderateScale(40),
                    marginLeft: moderateScale(10),
                  }}
                  resizeMode={'stretch'}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    allowFontScaling={false}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{
                      padding: 0,
                      color: 'black',
                      fontSize: moderateScale(10, 0.25),
                      marginRight: moderateScale(3),
                      textAlign: 'center',
                    }}>
                    VALID ID
                  </Text>
                  <Text
                    allowFontScaling={false}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{
                      color: 'black',
                      fontSize: moderateScale(12, 0.25),
                      fontWeight: '500',
                      marginRight: moderateScale(3),
                      textAlign: 'center',
                    }}>
                    FROM
                  </Text>
                </View>
                <Text
                  allowFontScaling={false}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    color: 'black',
                    fontSize: moderateScale(15, 0.25),
                    fontWeight: 'bold',
                    marginLeft: moderateScale(5),
                  }}>
                  XX/XX
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
