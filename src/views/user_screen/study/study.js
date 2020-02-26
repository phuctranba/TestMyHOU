import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {LineChart, BarChart} from 'react-native-charts-wrapper';
import style, {deviceWidth} from './style';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import Chart from './chart';
import {Table, Row, Rows} from 'react-native-table-component';
import {deviceHeight} from '../schedule/style';
import * as Animatable from 'react-native-animatable';
import {height_view, space, space_small} from '../style';
import {bindActionCreators} from 'redux';
import * as UserScreenControlAction from '../../../redux/actions/UserScreenControlAction';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';
import {height_statusbar, Task_Colors} from '../../../utils/values';
import {moderateScale} from 'react-native-size-matters';
import {isEnd} from '../../../utils/functions';
import {move_actionbutton} from '../../../redux/actions/ControlLocalAction';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header_table: ['Môn học', 'Số tín chỉ', 'Điểm TB'],
      datas_table: [
        ['Lập trình hướng sự kiện', 4, 9.5],
        ['Lập trình web', 3, 8.4],
        ['Thiết kế web', 3, 8],
        ['Lập trình hướng đối tượng', 3, 8.7],
        ['Nguyên lí', 5, 5],
        ['Pháp luật đại cương', 2, 7.6],
        ['Lập trình thiết bị di động', 3, 8.5],
        ['Giáo dục thể chất', 4, 7.5],
        ['Quốc phòng an ninh', 5, 7.5],
        ['Tin học đại cương', 3, 6.7],
        ['Đại số hình và giải tích', 4, 3.4],
        ['Kỹ thuật điện tử số', 4, 6.5],
        ['Lập trình hướng sự kiện', 4, 9.5],
        ['Lập trình web', 3, 8.4],
        ['Thiết kế web', 3, 8],
        ['Lập trình hướng đối tượng', 3, 8.7],
        ['Nguyên lí', 5, 5],
        ['Pháp luật đại cương', 2, 7.6],
        ['Lập trình thiết bị di động', 3, 8.5],
        ['Giáo dục thể chất', 4, 7.5],
        ['Quốc phòng an ninh', 5, 7.5],
        ['Tin học đại cương', 3, 6.7],
        ['Đại số hình và giải tích', 4, 3.4],
        ['Kỹ thuật điện tử số', 4, 6.5],
      ],
      data_chart: [
        'bargroup_study',
        'pie_score',
        'line_gradient_score',
        'rada_chart',
        'pie_subject',
        'stacked_bar_chart',
      ],
      display: false,
      y: 0,
      img: true,
    };
  }

  shouldComponentUpdate() {
    return true;
  }
  //
  // _scrollInterpolator (index, carouselProps) {
  //     const range = [2, 1, 0, -1];
  //     const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  //     const outputRange = range;
  //
  //     return { inputRange, outputRange };
  // }
  //
  // _animatedStyles (index, animatedValue, carouselProps,cardOffset) {
  //     const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
  //     const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  //
  //     return {
  //         zIndex: carouselProps.data.length - index,
  //         opacity: animatedValue.interpolate({
  //             inputRange: [-1, 0, 1, 2],
  //             outputRange: [0.75, 1, 0.6, 0.4]
  //         }),
  //         transform: [{
  //             rotate: animatedValue.interpolate({
  //                 inputRange: [-1, 0, 1, 2],
  //                 outputRange: ['0deg', '0deg', '5deg', '8deg'],
  //                 extrapolate: 'clamp'
  //             })
  //         }, {
  //             scale: animatedValue.interpolate({
  //                 inputRange: [-1, 0, 1, 2],
  //                 outputRange: [0.96, 1, 0.85, 0.7]
  //             })
  //         }, {
  //             [translateProp]: animatedValue.interpolate({
  //                 inputRange: [-1, 0, 1, 2],
  //                 outputRange: [
  //                     0,
  //                     0,
  //                     -sizeRef-moderateScale(2),
  //                     -sizeRef * 2 + moderateScale(45)
  //                 ],
  //                 extrapolate: 'clamp'
  //             })
  //         }]
  //     };
  // }
  //
  //
  //
  componentWillReceiveProps(nextProps) {
    // if(!this.state.display){
    //     if(this.state.y===0&&nextProps.user_screen_control.y_scroll>=space)
    //     {
    //         this.scroll.scrollTo({y:space});
    //     }
    //     else {
    //         if(this.state.y>=space&&nextProps.user_screen_control.y_scroll===0){
    //             this.scroll.scrollTo({y:0});
    //         }
    //     }
    // }

    // Nhớ xoá đống dưới
    if (!this.state.display) {
      if (nextProps.user_screen_control.y_scroll >= space) {
        // this.scroll.scrollTo({y:space});

        // biến cho màn hình khi chưa có chức năng, nhớ xoá
        this.setState({img: false});
      } else {
        if (nextProps.user_screen_control.y_scroll === 0) {
          // this.scroll.scrollTo({y:0});

          // biến cho màn hình khi chưa có chức năng, nhớ xoá
          this.setState({img: true});
        }
      }
    }
  }
  //
  // _scroll(e){
  //
  //
  //     // Kiểm tra cuộn đến cuối để di chuyển nút action
  //     if (isEnd(e.nativeEvent)) {
  //         if(!this.props.move){
  //             this.props.move_actionButton(true);
  //         }
  //     }
  //     else {
  //         if(this.props.move){
  //             this.props.move_actionButton(false);
  //         }
  //     }
  //
  //
  //     // Hiệu ứng header
  //     let y=e.nativeEvent.contentOffset.y;
  //     this.state.y=y;
  //     if(this.state.display){
  //         this.props.user_screen_control_action.update_y_scroll(y);
  //     }
  // }
  //
  // _scroll_drag(e){
  //     let y = e.nativeEvent.contentOffset.y;
  //     if(y>0&&y<=space_small){
  //         this.scroll.scrollTo({y:0});
  //     }
  //     else {
  //         if(y>space_small&&y<space){
  //             this.scroll.scrollTo({y:space});
  //         }
  //     }
  // }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[
          this.style.container,
          {
            justifyContent: 'center',
            paddingTop: this.state.img ? moderateScale(290, 0.6)+height_statusbar :height_statusbar,
          },
        ]}>
        <NavigationEvents
          onWillFocus={() =>
            this.props.user_screen_control_action.change_tab(3)
          }
          onDidFocus={() => (this.state.display = true)}
          onDidBlur={() => (this.state.display = false)}
        />

        {/*/!*List ngang các biểu đồ*!/*/}
        {/*<ScrollView showsVerticalScrollIndicator={false}*/}
        {/*            contentContainerStyle={this.style.scroll_view}*/}
        {/*            onScroll={(e)=>this._scroll(e)}*/}
        {/*            onScrollEndDrag={(e)=>this._scroll_drag(e)}*/}
        {/*            ref={view=>this.scroll=view}>*/}

        {/*<Carousel*/}
        {/*    ref={(c) => { this._carousel = c; }}*/}
        {/*    data={this.state.data_chart}*/}
        {/*    renderItem={(item)=><Chart color={this.props.color} type={item.item} nav={this.props.navigation} />}*/}
        {/*    sliderWidth={deviceWidth}*/}
        {/*    scrollInterpolator={this._scrollInterpolator}*/}
        {/*    slideInterpolatedStyle={this._animatedStyles}*/}
        {/*    itemWidth={moderateScale(320,0.85)}*/}
        {/*    // contentContainerCustomStyle={{backgroundColor:'white'}}*/}

        {/*/>*/}

        {/*<Text style={this.style.title_chart}>Biểu đồ thống kê</Text>*/}

        {/* /!*Bảng kết quả học tập   *!/*/}
        {/*<View style={this.style.view_table}>*/}

        {/*    /!*Header view*!/*/}
        {/*    <View style={this.style.header_table}>*/}
        {/*        <View style={this.style.view_header}>*/}
        {/*            <Icon type={"material-community"} name={"table-edit"} color={this.props.color.blue_7} size={moderateScale(25)}/>*/}
        {/*            <Text style={this.style.text_header}>Kết quả học tập</Text>*/}
        {/*        </View>*/}

        {/*        <TouchableOpacity activeOpacity={0.6} style={this.style.icon_open_more}>*/}
        {/*            <Icon type={"material-community"} name={"arrow-expand-all"} color={this.props.color.blue_8} size={moderateScale(22)}/>*/}
        {/*        </TouchableOpacity>*/}

        {/*    </View>*/}

        {/*    <Table borderStyle={{borderWidth: 1, borderColor: this.props.color.blue_4}}>*/}
        {/*        <Row data={this.state.header_table} flexArr={[6, 2, 2]} style={this.style.row_header} textStyle={this.style.text_row_header}/>*/}
        {/*        <Rows data={this.state.datas_table} flexArr={[6, 2, 2]} textStyle={this.style.text_table}/>*/}
        {/*    </Table>*/}
        {/*</View>*/}

        {/*</ScrollView>*/}

        <FastImage
          style={{width: moderateScale(235), height: moderateScale(180)}}
          source={{
            uri: 'http://www.pngmart.com/files/5/Work-PNG-Pic.png',
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text
          allowFontScaling={false}>
          Chức năng đang được xây dựng!
        </Text>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_screen_control: state.user_screen_control,
    move: state.control_local.move,
    color: state.setting_control.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    user_screen_control_action: bindActionCreators(
      UserScreenControlAction,
      dispatch,
    ),
    move_actionButton: bindActionCreators(move_actionbutton, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Study);
