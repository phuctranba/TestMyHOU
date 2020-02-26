import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {View, Text, Dimensions} from 'react-native';
import Login from './views/login/login';
import {Home_screen, Page_news, Page_fb, Page_you, Webview_news_home} from './views/home_screen';
import {Study, Schedule, Table_infor_user, Detail_chart, Page_infor_user} from './views/user_screen';
import Social_network_screen from './views/social_network_screen/social_network_screen';
import {Tasks_screen, Feedback, About_app, Setting, Change_password} from './views/tasks_screen';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-elements';
import {Notification_list, Detail_notification} from './views/notification_list';
import {Header_round, Header_rectangle, Header_user_main} from './views/header';
import {Utilities_screen, Map, Education_program} from './views/utilities_screen';
import Check from './views/check_login';
import Loading_screen from './views/loading_screen/loading_screen';
import No_fun from './views/no_funtion';
import {Task_Colors, objects_setting} from './utils/values';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import Icon_Tabbar from './components/icon_tabbar/Icon_tabbar';
import {OS} from './utils/functions';
import TabBar from './components/tabbarBottom/tabbarBottom'

// Tạo icon tuỳ chọn ở tab
const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  let title;

  switch (routeName) {
    case 'HomePages':
      iconName = 'newspaper';
      title = 'Tin tức';
      break;
    case 'User_Pages':
      iconName = 'id-badge';
      title = 'Cá nhân';
      break;
    case 'Social_network_Pages':
      iconName = 'users';
      title = 'Chat';
      break;
    case 'Utilities_Pages':
      iconName = 'shapes';
      title = 'Tiện ích';
      break;
    case 'Tasks_Pages':
      iconName = 'toolbox';
      title = 'Tác vụ';
      break;
  }

  return <Icon_Tabbar iconName={iconName} title={title} focused={focused} />;
};

// Tạo nhánh màn hình Home
export const Home_view = createAppContainer(
  createStackNavigator({
    Home_component: {
      screen: Home_screen,
      navigationOptions: {
        header: null,
      },
    },
    Page_fb_component: {
      screen: Page_fb,
      navigationOptions: {
        header: <Header_round title={'Fanpage'} />,
      },
    },
    Page_you_component: {
      screen: Page_you,
      navigationOptions: {
        header: <Header_round title={'Kênh Youtube'} />,
      },
    },
    Page_news_component: {
      screen: Page_news,
      navigationOptions: {
        header: <Header_round title={'Bản tin'} />,
      },
    },
    Web_component: {
      screen: Webview_news_home,
      navigationOptions: {
        header: null,
      },
    },
  }),
);

// Cái hàm ôn dịch dùng để ẩn tabbar của những màn hình trong nhóm home này, đừng viết thẳng vào trong navigationOptions ở create stack
// Đéo chạy đâu
Home_view.navigationOptions = ({navigation}) => {
  let tabBarVisible = false;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Home_component') {
    tabBarVisible = true;
  }

  return {
    tabBarVisible,
  };
};

// Tab main màn hình user
export const User_view_main = createMaterialTopTabNavigator(
  {
    Schedule_component: {
      screen: Schedule,
    },
    Info_component: {
      screen: Table_infor_user,
    },
    Study_component: {
      screen: Study,
    },
  },
  {
    initialRouteName: 'Info_component',
    backBehavior: 'none',
    animationEnabled: true,
    initialLayout: {
      height: 0,
      width: Dimensions.get('window').width,
    },
    tabBarComponent: null,
    optimizationsEnabled: true,
    navigationOptions: {
      header: <Header_user_main />,
    },
  },
);

// Tab chart của user
const Tabs_detail_chart = createMaterialTopTabNavigator(
  {
    Pie_score: {
      screen: Detail_chart,
      navigationOptions: {
        tabBarLabel: 'Thành phần điểm',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'material-community'}
            name={'chart-pie'}
            size={moderateScale(20)}
            color={tintColor}
          />
        ),
      },
    },
    Pie_subject: {
      screen: Detail_chart,
      navigationOptions: {
        tabBarLabel: 'Thành phần môn',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'material-community'}
            name={'chart-pie'}
            size={moderateScale(20)}
            color={tintColor}
          />
        ),
      },
    },
    Bargroup_study: {
      screen: Detail_chart,
      navigationOptions: {
        tabBarLabel: 'TB tích luỹ-Tín chỉ',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'material-community'}
            name={'chart-bar'}
            size={moderateScale(20)}
            color={tintColor}
          />
        ),
      },
    },
    Line_gradient_score: {
      screen: Detail_chart,
      navigationOptions: {
        tabBarLabel: 'Tb tích luỹ chung',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'material-community'}
            name={'chart-areaspline'}
            size={moderateScale(20)}
            color={tintColor}
          />
        ),
      },
    },
    Rada_chart: {
      screen: Detail_chart,
      navigationOptions: {
        tabBarLabel: 'Thành phần môn',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'material-community'}
            name={'chart-scatterplot-hexbin'}
            size={moderateScale(20)}
            color={tintColor}
          />
        ),
      },
    },
    Stacked_bar_chart: {
      screen: Detail_chart,
      navigationOptions: {
        tabBarLabel: 'Thành phần điểm',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'material-community'}
            name={'chart-bar-stacked'}
            size={moderateScale(20)}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Pie_score',
    animationEnabled: true,
    lazy: true,
    tabBarPosition: 'bottom',
    backBehavior: 'none',
    optimizationsEnabled: true,
    tabBarOptions: {
      upperCaseLabel: false,
      scrollEnabled: true,
      showIcon: true,
      showLabel: true,
      // pressColor:Blues.blue_4,
      pressColor: 'blue',
      pressOpacity: 0.5,
      style: {
        backgroundColor: 'white',
        elevation: 2,
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
        // left: 0,
        // right: 0,
        // top: verticalScale(45),
        borderTopWidth: 1,
        borderTopColor: 'rgba(117,117,117,0.2)',
        height: verticalScale(58),
        justifyContent: 'center',
      },
      labelStyle: {
        fontSize: verticalScale(12),
        marginTop: 0,
        marginBottom: verticalScale(5),
        padding: 0,
      },
      iconStyle: {
        margin: 0,
        padding: 0,
      },
      tabStyle: {
        margin: 0,
        padding: 0,
      },
      activeTintColor: 'blue',
      inactiveTintColor: Task_Colors.task_load_gray,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

// Tạo nhánh màn hình User
export const User_view = createStackNavigator(
  {
    Tabs_detail_chart_component: {
      screen: Tabs_detail_chart,
      navigationOptions: {
        header: (
          <Header_rectangle
            title={'Biểu đồ thống kê'}
            icon={null}
            nav={null}
            lib_icon={null}
            color={null}
          />
        ),
      },
    },
    Page_infor_component: {
      screen: Page_infor_user,
      navigationOptions: {
        header: <Header_round title={'Thông tin chi tiết'} />,
      },
    },
    User_view_main_view: {
      screen: User_view_main,
    },
  },
  {
    initialRouteName: 'User_view_main_view',
  },
);

// Cái hàm ôn dịch dùng để ... như trên nhé
User_view.navigationOptions = ({navigation}) => {
  let tabBarVisible = false;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'User_view_main_view') {
    tabBarVisible = true;
  }

  return {
    tabBarVisible,
  };
};

// Tạo nhánh màn hình Tiện ích

export const Utilities_view = createAppContainer(
  createStackNavigator({
    Utilities_component: {
      screen: Utilities_screen,
      navigationOptions: {
        header: null,
      },
    },
    Map: {
      screen: Map,
      navigationOptions: {
        header: (
          <Header_round
            title={'Bản đồ'}
            icon={null}
            nav={null}
            lib_icon={null}
          />
        ),
      },
    },
    GoogleWebView: {
      screen: Webview_news_home,
      navigationOptions: {
        header: null,
      },
    },
    Web_Utilities_component: {
      screen: Webview_news_home,
      navigationOptions: {
        header: null,
      },
    },
    Education_program_component: {
      screen: Education_program,
      navigationOptions: {
        header: (
          <Header_rectangle
            title={'Chương trình đào tạo'}
            icon={null}
            nav={null}
            lib_icon={null}
          />
        ),
      },
    },
  }),
);

// Cái hàm ôn dịch dùng để ... như trên nhé
Utilities_view.navigationOptions = ({navigation}) => {
  let tabBarVisible = false;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Utilities_component') {
    tabBarVisible = true;
  }

  return {
    tabBarVisible,
  };
};

// Tạo nhánh màn hình Tác vụ - Task
export const Task_view = createAppContainer(
  createStackNavigator({
    Task_component: {
      screen: Tasks_screen,
      navigationOptions: {
        header: null,
      },
    },
    Feedback_component: {
      screen: Feedback,
      navigationOptions: {
        header: <Header_round title={'Phản hồi'} />,
      },
    },
    Setting_component: {
      screen: Setting,
      navigationOptions: {
        header: <Header_rectangle title={'Cài đặt'} />,
      },
    },
    Change_password_component: {
      screen: Change_password,
      navigationOptions: {
        header: <Header_round title={'Đổi mật khẩu'} />,
      },
    },
    About_app_component: {
      screen: About_app,
      navigationOptions: {
        header: <Header_round title={'Thông tin ứng dụng'} />,
      },
    },
    Web_Task_component: {
      screen: Webview_news_home,
      navigationOptions: {
        header: null,
      },
    },
  }),
);

// Cái hàm ôn dịch dùng để ... như trên nhé
Task_view.navigationOptions = ({navigation}) => {
  let tabBarVisible = false;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Task_component') {
    tabBarVisible = true;
  }

  return {
    tabBarVisible,
  };
};

// Tạo tab
export const TabNavi = createBottomTabNavigator(
  {
    HomePages: {
      screen: Home_view,
    },
    User_Pages: {
      screen: User_view,
    },
    // Social_network_Pages: {
    //     screen: Social_network_screen,
    // },
    Utilities_Pages: {
      screen: Utilities_view,
    },
    Tasks_Pages: {
      screen: Task_view,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarComponent:TabBar,
    initialRouteName: 'Tasks_Pages',
    animationEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
      // containerStyle: { position: 'absolute'},
      showIcon: true,
      showLabel: false,
      // safeAreaInset: { bottom: 'never', top: 'never' },
      // style: {
        // backgroundColor: 'white',
        // marginHorizontal: scale(5),
        // marginBottom: OS?verticalScale(5):verticalScale(20),
        // marginTop: verticalScale(2),
        // paddingHorizontal: verticalScale(10),
        // elevation: 2,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 1.41,
        // borderRadius: moderateScale(25),
        // // position: 'absolute',
        // left: 0,
        // zIndex: 10,
        // right: 0,
        // bottom: 50,
        // borderWidth: moderateScale(0.5),
        // borderColor: Task_Colors.task_load_gray,
        // height: verticalScale(46),
      // },
      // activeTintColor:Blues.blue_main,
      inactiveTintColor: Task_Colors.task_load_gray,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
    },
  },
);

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Notification_list: {
        screen: Notification_list,
        navigationOptions: {
          header: (
            <Header_rectangle
              title={'Thông báo'}
              icon={'star'}
              nav={null}
              lib_icon={'font-awesome'}
              color={Task_Colors.task_warning_light}
            />
          ),
        },
      },
      Detail_notification: {
        screen: Detail_notification,
        navigationOptions: {
          header: null,
        },
      },
      TabsApp: {
        screen: TabNavi,
        navigationOptions: {
          header: null,
        },
      },
      No_fun: {
        screen: No_fun,
        navigationOptions: {
          header: <Header_rectangle title={'Chức năng chưa sẵn sàng'} />,
        },
      },
    },
    {
      initialRouteName: 'TabsApp',
      defaultNavigationOptions: {
        headerStyle: {
          // backgroundColor: Blues.blue_main,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: '500',
        },
      },
      swipeEnables: true,
    },
  ),
);

const LoginNavigator = createAppContainer(
  createStackNavigator(
    {
      Login_component: {
        screen: Login,
        navigationOptions: {
          header: null,
        },
      },
      Web_Login_component: {
        screen: Webview_news_home,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: 'Login_component',
    },
  ),
);

/* Tạo screen gốc để chuyển giữa các màn hình
Check screen dùng để điều hướng */

const RootNavigation = createSwitchNavigator({
    Login_main: {
      screen: LoginNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Load: {
      screen: Loading_screen,
      navigationOptions: {
        header: null,
      },
    },
    Check: {
      screen: Check,
      navigationOptions: {
        header: null,
      },
    },
    Index: {
      screen: AppNavigator,
    },
  },
  {
    initialRouteName: 'Check',
  },
);

export default createAppContainer(RootNavigation);
