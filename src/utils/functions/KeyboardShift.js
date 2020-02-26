import {PropTypes} from 'prop-types';
import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  UIManager,
} from 'react-native';

const {State: TextInputState} = TextInput;

export default class KeyboardShift extends Component {
  constructor(props) {
    super(props);
    this.gap = 0;
    this.shiftTimeout = null;
  }
  state = {
    shift: new Animated.Value(0),
  };

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.handleKeyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  render() {
    const {shift} = this.state;
    return (
      <Animated.View
        style={[styles.container, {transform: [{translateY: shift}]}]}>
        {this.props.children}
      </Animated.View>
    );
  }

  handleKeyboardDidShow = event => {
    const {height: windowHeight} = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    clearTimeout(this.shiftTimeout);
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        console.log(windowHeight);
        console.log(keyboardHeight);
        console.log(pageY);
        console.log(fieldHeight);
        const gap =
          windowHeight - keyboardHeight - (fieldTop + fieldHeight) - 24;
        console.log(gap);
        if (gap >= 0) {
          return;
        }
        Animated.timing(this.state.shift, {
          toValue: -Math.min(Math.abs(gap), keyboardHeight),
          duration: 500,
          useNativeDriver: true,
        }).start();
      },
    );
  };

  handleKeyboardWillHide = () => {
    this.shiftTimeout = setTimeout(() => {
      this.gap = 0;
      Animated.timing(this.state.shift, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, 400);
  };
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});

// KeyboardShift.propTypes = {
//     children: PropTypes.func.isRequired,
// };
