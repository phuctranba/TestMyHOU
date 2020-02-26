import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native';
import {View} from 'react-native';

class Icon_Tabbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon5
          name={this.props.iconName}
          size={verticalScale(19)}
          style={{color: this.props.color.blue_main}}
        />
        {this.props.focused ? (
          <Text
            allowFontScaling={false}
            style={{
              fontSize: verticalScale(10),
              color: this.props.color.blue_main,
            }}>
            {this.props.title}
          </Text>
        ) : null}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.setting_control.color,
  };
}

export default connect(mapStateToProps)(Icon_Tabbar);
