import React, {Component} from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from 'react-native';
import {List_new_uni, List_new_fa, List_new_you, List_new_fb, List_button_fa, List_News_You_Placeholder, List_News_Uni_placeholder, List_News_Fa_placeholder, List_News_Fb_placeholder} from './index';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {Icon} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import * as ListNews from '../../redux/actions/ListNewsHomeScreenAction';
import {connect} from 'react-redux';
import {Toast} from '../../components';
import {
  height_statusbar,
  Task_Colors,
  test_home,
  Toast_form,
} from '../../utils/values';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';
import {SAGA} from '../../redux/constant';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import Icon5 from 'react-native-vector-icons/FontAwesome5';


// Tạo màn hình load cùng header mỗi mục tin tức
const Header_list = ({
  children,
  done,
  time,
  title,
  data,
  nav,
  address,
  total,
  more,
  style,
  color,
  type_load
}) => {
  return (
    <Animatable.View style={{width: '100%'}} delay={time} animation="fadeInUp">
      <View style={style.container_header}>
        {/*Title*/}
        <Text
          allowFontScaling={false}
          style={[
            style.text_title_list,
            {color: done ? color.blue_7 : Task_Colors.task_stylish},
          ]}>
          {title}
        </Text>

        {/*Nút thêm*/}
        <TouchableOpacity
            disabled={!done}
          onPress={() =>
            done
              ? nav.navigate(address, {data: data, total: total, more: more, type_load:type_load})
              : () => true
          }
          activeOpacity={0.7}
          style={style.tou_more}>
          <Text
            allowFontScaling={false}
            style={[
              style.text_more,
              {color: done ? color.blue_8 : Task_Colors.task_stylish},
            ]}>
            Thêm >>
          </Text>
        </TouchableOpacity>
      </View>

      {/*Đây là list*/}
      {children}

    </Animatable.View>
  );
};

class Home_screen extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(this.props.code!==nextProps.code)
    // this._check_code(nextProps.code);
    return this.props !== nextProps;
  }

  // _check_code(code){
  //     let check = check_code(code);
  //     check.type?this.toast.show(check.toast):null;
  // }

  async componentDidMount() {
    // this._check_code(this.props.code);
    // Xử lí firebase
    this.checkPermission();
    this.createNotificationListeners();
  }

  async createNotificationListeners() {
    const channel = new firebase.notifications.Android.Channel(
      'my_hou_notification',
      'Demo app name',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('Demo app description');
    firebase.notifications().android.createChannel(channel);

    // Nếu app đóng, mở theo thông báo được mở
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      // const action = notificationOpen.action;
      // const notification: Notification = notificationOpen.notification;
      console.log('Mở app do thông báo:');
      // console.log('action:'+action);
      console.log(notificationOpen);
      // console.log(notificationOpen.notification._data.Test1);
      setTimeout(() => {
        this.props.navigation.navigate('Detail_notification');
      }, 3000);
    } else {
      console.log('Mở app không do thông báo:');
      console.log(notificationOpen);
    }

    // Khi nhận thông báo
    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed((notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        console.log('onNotificationDisplayed:');
        // const actionDisplayed = notification.action;
        // const notificationDisplayed: Notification = notification.notification;
        // console.log('action:'+actionDisplayed);
        console.log(notification);
      });

    this.notificationListener = firebase
      .notifications()
      .onNotification((notification) => {
        // Process your notification as required
        console.log('onNotification:');

        const actionDisplayed = notification.action;
        const notificationDisplayed = notification.notification;
        // console.log('action:'+actionDisplayed);
        console.log(notification);
        // console.log(JSON.parse(notification._data.content));
        // console.log('{ "name":"John", "age":30, "city":"New York"}')
        // console.log(JSON.parse('{ "name":"John", "age":30, "city":"New York"}'))
        // const actionDisplayedOn = notificationOpen.action;
        // const notificationDisplayedOn: Notification = notificationOpen.notification;
        // // console.log('action:'+actionDisplayedOn);
        // console.log('notification:'+notificationDisplayedOn);
        // this.showAlert(title, body);
        // alert('message');
        // notification
        // .setSubtitle(notification.subtitle)
        // .setData(notification.data)
        //     .android.setBadgeIconType(5)
        //     .android.setChannelId('my_hou_notification') // e.g. the id you chose above
        //     .android.setContentInfo('content infor') // e.g. the id you chose above
        // // .android.setSmallIcon('icon_myhou_big') // create this icon in Android Studio
        //     .android.setPriority(firebase.notifications.Android.Priority.High);
        //
        //
        // firebase.notifications()
        //     .displayNotification(notification)
        //     .catch(err => console.error(err));

        const localNotification = new firebase.notifications.Notification({
          sound: 'default',
          // show_in_foreground: true
        })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          .setData(notification.data)
          .android.setChannelId('my_hou_notification') // e.g. the id you chose above
          .android.setSmallIcon('ic_notification') // create this icon in Android Studio
          // .android.setColor('#00000000') // you can set a color here
          .android.setPriority(firebase.notifications.Android.Priority.High);
        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(err => console.error(err));
      });

    // Thông báo được mở
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen) => {
        // Get the action triggered by the notification being opened
        // const action = notificationOpen.action;
        // Get information about the notification that was opened
        // const notification: Notification = notificationOpen.notification;

        console.log('onNotificationOpened:');
        // this.props.navigation.navigate(notificationOpen.notification._data.Test1)
        // console.log('action:'+action);
        console.log(notificationOpen);
        setTimeout(() => {
          this.props.navigation.navigate('Detail_notification');
        }, 3000);
        // this.showAlert(title, body);
      });
  }

  //Kiểm tra quyền
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
}
  //Xin quyền
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
    }
  }

  //3
  async getToken() {
    // Khá là ôn dịch vì đôi khi cái AsyncStorage nó vẫn lưu token cũ, thôi cho chắc, mỗi lần vào ta nên làm một cái lấy token xD

    // let fcmToken = await AsyncStorage.getItem('fcmToken');
    // if (!fcmToken) {
    let fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      // user_screen has a device token
      console.log('fcmToken:', fcmToken);
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
    // }
    // console.log('fcmToken:', fcmToken);
  }

  componentWillUnmount() {
    // this.notificationDisplayedListener();
    // this.notificationListener();
    // this.notificationOpenedListener();
  }

    _onScroll(e) {
        const y = e.nativeEvent.contentOffset.y;
        const value = y / (Dimensions.get('window').height * 1.82);
    }

    _show_toast_unconnect = () => {
        this.toast.show(Toast_form.no_connected);
    };

    _show_toast_error_send_feedback=()=>{
        this.toast.show({
            text: 'Tải lại không thành công. Nếu xác nhận lỗi phát sinh từ phía máy chủ trong khi kết nối của bạn vẫn ổn định, hãy liên hệ lại cho chúng tôi!',
            textColor: Task_Colors.task_warning_light,
            icon: 'warning',
            iconColor: Task_Colors.task_warning_light,
            iconButtonRight: 'paper-plane',
            textButtonRight: 'Phản hồi',
            textColorButtonRight: 'white',
            typeButton: 'button_right',
            iconTypeButtonRight:'entypo',
            backgroundButtonRight: Task_Colors.task_warning_light,
            duration: 5000,
            // data: key,
            functionButtonRight: this._go_to_feedback_screen,
        });
    };

    _go_to_feedback_screen=()=>{
        this.props.navigation.navigate('Feedback_component');
    };

    reload_list_news_empty=(typeLoad)=>{
        this.props.takeListAction.getListNews(
            typeLoad,
            'nope',
            'love'
        );
    };

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    const isYoutubeLoad = this.props.dataListNew.isYoutubeLoad !== 'nope';
    const isWebHOULoad = this.props.dataListNew.isWebHOULoad !== 'nope';
    return (
          <LinearGradient
            colors={['white', this.props.color.blue_0]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={this.style.container}>
            <StatusBar
              translucent={true}
              backgroundColor="#00000000"
              barStyle="dark-content"
            />
            {/*Header màn hình*/}
            <View style={this.style.header}>
              <Text allowFontScaling={false} style={this.style.text_header}>
                Tin tức
              </Text>
              <TouchableOpacity
                hitSlop={{
                  top: verticalScale(5),
                  bottom: verticalScale(5),
                  left: verticalScale(5),
                  right: verticalScale(5),
                }}
                style={this.style.button_bell}
                onPress={() => this.props.navigation.navigate('Notification_list')}>
                <Icon
                  type="font-awesome"
                  name={'bell'}
                  color={this.props.color.blue_main}
                  size={moderateScale(18)}
                  containerStyle={{marginTop: height_statusbar}}
                />
              </TouchableOpacity>
            </View>

            <ScrollView
              onScroll={e => this._onScroll(e)}
              onScrollEndDrag={e => this._onScroll(e)}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={this.style.scroll_view}>


              {/*Tin trường*/}
              <Header_list
                done={isWebHOULoad&&this.props.dataListNew.dataWebHOU.length!==0}
                // Thời gian animated hiện lên
                time={300}
                title={'Bản tin trường'}
                style={this.style}
                color={this.props.color}
                Cái đống dưới
                nav={this.props.navigation}
                data={'dataWebHOU'}
                address={'Page_news_component'}
                total={'totalWebHOU'}
                type_load={'isWebHOULoad'}
                more={{
                  typeRedux: 'LOAD_WEBHOU',
                  addressNext: 'nextAddressPageWebHOU',
                }}>
                <List_News_Uni_placeholder onReady={isWebHOULoad} animate="fade">
                  <List_new_uni
                    reload_list_news_empty={()=>this.reload_list_news_empty(SAGA.LISTNEWHOMESCREEN.LOAD_WEBHOU)}
                    toast_unconnect={this._show_toast_unconnect}
                    toast_error_feedback={this._show_toast_error_send_feedback}
                    connect={this.props.connected_internet}
                    color={this.props.color}
                    nav={this.props.navigation}
                    data={this.props.dataListNew.dataWebHOU}
                    total={this.props.dataListNew.totalWebHOU}
                    type_load={this.props.dataListNew.isWebHOULoad}
                    more={() =>
                      this.props.takeListAction.getListNews(
                        SAGA.LISTNEWHOMESCREEN.LOAD_WEBHOU,
                        'more',
                        this.props.dataListNew.nextAddressPageWebHOU,
                      )
                    }
                  />
                </List_News_Uni_placeholder>
              </Header_list>

              {/*/!*Tin khoa*!/*/}
              {/*<Header_list done={isYoutubeLoad} time={800} title={'Bản tin khoa'}*/}
              {/*             nav={this.props.navigation}*/}
              {/*             data={test_home.data_fa}*/}
              {/*             address={"Page_news_component"}>*/}
              {/*    <List_News_Fa_placeholder onReady={isYoutubeLoad} animate="fade" >*/}
              {/*        <List_new_fa connect={this.props.connected_internet} nav={this.props.navigation} data={test_home.data_fa}/>*/}
              {/*    </List_News_Fa_placeholder>*/}
              {/*</Header_list>*/}


              {/*Tin youtube*/}
              <Header_list
                done={isYoutubeLoad&&this.props.dataListNew.dataYoutube.length!==0}
                time={800}
                // time={1300}
                title={'Kênh Youtube'}
                nav={this.props.navigation}
                style={this.style}
                color={this.props.color}
                data={'dataYoutube'}
                address={'Page_you_component'}
                total={'totalYoutube'}
                type_load={'isYoutubeLoad'}
                more={{
                  typeRedux: 'LOAD_YOUTUBE',
                  addressNext: 'nextAddressPageYoutube',
                }}>
                <List_News_You_Placeholder onReady={isYoutubeLoad} animate="fade">
                  <List_new_you
                      reload_list_news_empty={()=>this.reload_list_news_empty(SAGA.LISTNEWHOMESCREEN.LOAD_YOUTUBE)}
                      color={this.props.color}
                    toast_unconnect={this._show_toast_unconnect}
                      toast_error_feedback={this._show_toast_error_send_feedback}
                      connect={this.props.connected_internet}
                    nav={this.props.navigation}
                    data={this.props.dataListNew.dataYoutube}
                    total={this.props.dataListNew.totalYoutube}
                      type_load={this.props.dataListNew.isYoutubeLoad}
                      more={() =>
                      this.props.takeListAction.getListNews(
                        SAGA.LISTNEWHOMESCREEN.LOAD_YOUTUBE,
                        'more',
                        this.props.dataListNew.nextAddressPageYoutube,
                      )
                    }
                  />
                </List_News_You_Placeholder>
              </Header_list>


              {/*/!*Tin facebook*!/*/}
              {/*<Header_list done={isYoutubeLoad} time={1800} title={'Fanpage HOU'}*/}
              {/*             nav={this.props.navigation}*/}
              {/*style={this.style}*/}
              {/*color={this.props.color}*/}
              {/*             data={test_home.data_fb}*/}
              {/*             address={"Page_fb_component"}>*/}
              {/*    <List_News_Fb_placeholder onReady={isYoutubeLoad} animate="fade">*/}
              {/*        <List_new_fb color={this.props.color} connect={this.props.connected_internet} nav={this.props.navigation} data={test_home.data_fb}/>*/}
              {/*    </List_News_Fb_placeholder>*/}
              {/*</Header_list>*/}



              {/*Danh sách khoa khác*/}
              <List_button_fa
                color={this.props.color}
                connect={this.props.connected_internet}
                toast_unconnect={this._show_toast_unconnect}
                nav={this.props.navigation}
              />
            </ScrollView>


            {/*Toast thông báo*/}
            <Toast
              color={this.props.color}
              ref={view => (this.toast = view)}
              marginBottom={verticalScale(110)}
              setting_props={this.props.setting_props}
            />


          </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataListNew: state.listNewHomeScreen,
    token: state.userReducer.access_token,
    code: state.userReducer.code,
    connected_internet: state.device.connected_internet,
    color: state.setting_control.color,
      setting_props:state.setting_control
  };
}

function mapDispatchToProps(dispatch) {
  return {
    takeListAction: bindActionCreators(ListNews, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home_screen);
