import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';
import {bindActionCreators} from 'redux';
import * as StudentAction from '../../../redux/actions/StudentAction';
import {connect} from 'react-redux';
import {convertDate} from '../../../utils/functions/date-convert';
import {sizes, Task_Colors} from '../../../utils/values';
import {moderateScale} from 'react-native-size-matters';

const img_thanks = require('../../../assets/img/thanks_feedback.png');
const img_code = require('../../../assets/img/code_card.png');

export default class Modal_feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  _open() {
    this.setState({visible: true});
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     // return this.props.studentReducer!==nextProps.studentReducer||this.state.visible!==nextState.visible;
  // }

  render() {
    return (
      <Modal
        isVisible={this.state.visible}
        animationIn={'fadeInUp'}
        animationInTiming={400}
        animationOutTiming={400}
        animationOut={'bounceOut'}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        hideModalContentWhileAnimating={true}
        // onSwipeComplete={() => this.setState({ visible: false })}
        // swipeDirection={"down"}
        // onBackdropPress={() => {
        //     this.setState({ visible: false });
        // }}

        style={{justifyContent: 'center', alignItems: 'center', margin: 0}}>
        <View
          style={{
            borderRadius: 15,
            backgroundColor: '#d3eaea',
            width: moderateScale(270),
            height: moderateScale(360),
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image
            source={img_thanks}
            style={{width: moderateScale(170), height: moderateScale(140)}}
            resizeMode={'stretch'}
          />

          <Text
            allowFontScaling={false}
            style={{
              width: '80%',
              textAlign: 'center',
              color: Task_Colors.task_elegant,
              fontSize: moderateScale(15, 0.3),
            }}>
            {
              'Cảm ơn bạn vì những chia sẻ\nChúng tôi sẽ cân nhắc và cải thiện ứng dụng tốt hơn!'
            }
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: moderateScale(100),
              height: moderateScale(50),
              backgroundColor: this.props.color.blue_6,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: moderateScale(15),
              elevation: 3,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
            }}
            onPress={() => {
              this.setState({visible: false});
              setTimeout(() => {
                this.props.nav.goBack(null);
              }, 400);
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: moderateScale(22, 0.3),
                fontWeight: 'bold',
                color: 'white',
              }}>
              OK!
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
