import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Linking,
  Share,
  StatusBar,
} from 'react-native';
import {WebView} from 'react-native-webview';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMa from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSi from 'react-native-vector-icons/SimpleLineIcons';
import {height_statusbar, Toast_form} from '../../../utils/values';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import Modal_web from './modal_web/modal_web';
import {connect} from 'react-redux';
import Toast from '../../../components/toast_custom/toast_custom';
import LinearGradient from 'react-native-linear-gradient';

class Webview_news_home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false,
      canGoForward: false,
      name_screen: this.props.navigation.state.routeName,
      url: this.props.navigation.getParam('uri', ''),
    };
    this.update_url = this._update_url.bind(this);
    this.open_brower = this._open_brower.bind(this);
    this.onShare = this._onShare.bind(this);
  }

  componentWillMount() {
    if (this.state.name_screen === 'GoogleWebView') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps;
  }

  _onLoad(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
      canGoForward: navState.canGoForward,
      url: navState.url,
    });
  }

  _onBack() {
    if (this.props.connected_internet) {
      this.web.goBack();
    } else {
      this._show_toast_unconnectted();
    }
  }

  _goForward() {
    if (this.props.connected_internet) {
      this.web.goForward();
    } else {
      this._show_toast_unconnectted();
    }
  }

  _update_url(url) {
    this.setState({url: url});
  }

  _open_brower() {
    Linking.openURL(this.state.url);
  }

  _onShare = async () => {
    try {
      await Share.share({
        message: this.state.url,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  _show_toast_unconnectted = () => {
    this.toast.show(Toast_form.no_connected);
  };

  _check_connect() {
    if (this.props.connected_internet) {
      return true;
    } else {
      this._show_toast_unconnectted();
      return false;
    }
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: height_statusbar}}>
        <WebView
          ref={view => (this.web = view)}
          source={{uri: this.state.url}}
          onNavlationStateChange={this.onNavlationStateChange}
          onLoad={({nativeEvent}) => this._onLoad(nativeEvent)}
          onShouldStartLoadWithRequest={request => {
            // Only allow navigating within this website
            return this._check_connect();
          }}
        />

        <ActionButton
          bgColor={'rgba(0, 0, 0, 0.5)'}
          size={moderateScale(43)}
          spacing={moderateScale(8)}
          buttonColor={this.props.color.blue_5}
          renderIcon={active =>
            active ? (
              <Icon name="exchange-alt" style={styles.actionButtonIcon} />
            ) : (
              <IconSi name="directions" style={styles.actionButtonIcon} />
            )
          }
          position={'left'}
          offsetY={verticalScale(20)}
          offsetX={moderateScale(20)}
          degrees={360}>
          >
          <ActionButton.Item
            textContainerStyle={styles.view_item}
            buttonColor={this.props.color.blue_8}
            title={
              this.state.name_screen === 'GoogleWebView'
                ? 'Bản đồ trường'
                : 'Trang chính'
            }
            textStyle={{
              color: this.props.color.blue_8,
              fontSize: moderateScale(14, 0.3),
            }}
            onPress={() => this.props.navigation.goBack(null)}>
            <IconMa
              name={
                this.state.name_screen === 'GoogleWebView'
                  ? 'home-map-marker'
                  : 'home'
              }
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={styles.view_item}
            buttonColor={this.props.color.blue_8}
            title={'Tiện ích'}
            textStyle={{
              color: this.props.color.blue_8,
              fontSize: moderateScale(14, 0.3),
            }}
            onPress={() => this.modal._open()}>
            <Icon name={'tools'} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          {this.state.canGoBack ? (
            <ActionButton.Item
              textContainerStyle={styles.view_item}
              buttonColor={this.props.color.blue_7}
              title="Trang trước"
              textStyle={{
                color: this.props.color.blue_7,
                fontSize: moderateScale(14, 0.3),
              }}
              onPress={() => this._onBack()}>
              <Icon name="arrow-left" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          ) : undefined}
          {this.state.canGoForward ? (
            <ActionButton.Item
              textContainerStyle={styles.view_item}
              buttonColor={this.props.color.blue_6}
              title="Trang tới"
              textStyle={{
                color: this.props.color.blue_6,
                fontSize: moderateScale(14, 0.3),
              }}
              onPress={() => this._goForward()}>
              <Icon name="arrow-right" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          ) : undefined}
        </ActionButton>

        <Modal_web
          color={this.props.color}
          onShare={this.onShare}
          onpen_brower={this.open_brower}
          update={this.update_url}
          url={this.state.url}
          ref={view => (this.modal = view)}
        />

        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(115)}
          setting_props={this.props.setting_props}
        />
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  actionButtonIcon: {
    fontSize: '20@ms0.3',
    height: '22@ms',
    color: 'white',
  },
  view_item: {
    height: '25@ms',
    top: '9@vs',
    justifyContent: 'center',
  },
});
function mapStateToProps(state) {
  return {
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
    setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Webview_news_home);
