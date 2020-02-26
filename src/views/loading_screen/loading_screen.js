import React, {Component} from 'react';
import {View, ActivityIndicator, Image, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import * as UserAction from '../../redux/actions/UserAction';
import {connect} from 'react-redux';
import {height_statusbar, Task_Colors} from '../../utils/values';

class Loading_screen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (!this.props.isLoadding && this.props.isLogged) {
      this.props.navigation.navigate('Index');
    } else {
      if (!this.props.isLoadding && !this.props.isLogged) {
        this.props.navigation.navigate('Login_component', {
          mess: 'yes',
          toast: {
            text: this.props.error,
            textColor: Task_Colors.task_danger_dark,
            icon: 'exclamation-circle',
            iconType: 'font-awesome',
            iconColor: Task_Colors.task_danger_dark,
            duration: 5000,
          },
        });
      }
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: height_statusbar,
        }}>
        <StatusBar
          translucent={true}
          backgroundColor="#00000000"
          barStyle="dark-content"
        />
        <Image
          source={require('../../assets/img/logo.png')}
          resizeMode={'contain'}
          style={{width: '60%', height: '80%', marginVertical: 15}}
        />
        <ActivityIndicator size="large" color="#28CEFF" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.userReducer.isLogged,
    isLoadding: state.userReducer.isLoadding,
    error: state.userReducer.error,
  };
}

export default connect(mapStateToProps)(Loading_screen);
