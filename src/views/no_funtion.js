import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class No_funtion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9edeff',
          flex: 1,
        }}>
        <Text allowFontScaling={false} style={{fontSize: 18}}>
          Chức năng chưa sẵn sàng
        </Text>
      </View>
    );
  }
}
