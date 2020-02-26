import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  PieChart,
  BarChart,
  LineChart,
  RadarChart,
} from 'react-native-charts-wrapper';
import style, {deviceWidth, deviceHeight} from './style';
import {Icon} from 'react-native-elements';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

class Detail_chart extends React.Component {
  constructor() {
    super();

    this.state = {
      pie_score: {
        legend: {
          enabled: true,
          textSize: moderateScale(15),
          form: 'CIRCLE',

          horizontalAlignment: 'RIGHT',
          verticalAlignment: 'CENTER',
          orientation: 'VERTICAL',
          wordWrapEnabled: true,
        },
        data: {
          dataSets: [
            {
              values: [
                {value: 10, label: '10~8.0'},
                {value: 30, label: '7.9~6.0'},
                {value: 40, label: '5.9~4.0'},
                {value: 15, label: '3.9~2.0'},
                {value: 5, label: '1.9~0.0'},
              ],
              label: '',
              config: {
                colors: [
                  processColor('rgba(28, 255, 253, 1)'),
                  processColor('#rgba(28, 210, 253, 1)'),
                  processColor('rgba(28, 170, 253, 1)'),
                  processColor('rgba(28, 130, 253, 1)'),
                  processColor('rgba(28, 90, 253, 1)'),
                ],
                valueTextSize: moderateScale(14),
                valueTextColor: processColor('white'),
                sliceSpace: 2,
                selectionShift: moderateScale(13),
                valueFormatter: "#.#'%'",
                valueLineColor: processColor('green'),
                valueLinePart1Length: moderateScale(0.5),
              },
            },
          ],
        },
        highlights: [{x: 2}],
        description: {
          text: '',
          textSize: 0,
        },
      },
      pie_subject: {
        legend: {
          enabled: true,
          textSize: moderateScale(13),
          form: 'CIRCLE',
          position: 'BELOW_CHART_RIGHT',
          horizontalAlignment: 'CENTER',
          // verticalAlignment: "CENTER",
          // orientation: "VERTICAL",
          wordWrapEnabled: true,
          paddingBottom: verticalScale(10),
        },
        data: {
          dataSets: [
            {
              values: [
                {value: 55, label: 'Đã học'},
                {value: 5, label: 'Trượt'},
                {value: 40, label: 'Chưa học'},
              ],
              label: '',
              config: {
                colors: [
                  processColor('#rgba(28, 210, 253, 1)'),
                  processColor('rgba(28, 170, 253, 1)'),
                  processColor('rgba(28, 130, 253, 1)'),
                ],
                valueTextSize: moderateScale(14),
                valueTextColor: processColor('white'),
                sliceSpace: 2,
                selectionShift: moderateScale(13),
                valueFormatter: "#.#'%'",
                valueLineColor: processColor('green'),
                valueLinePart1Length: moderateScale(0.5),
              },
            },
          ],
        },
        highlights: [{x: 2}],
        description: {
          text: '',
          textSize: 0,
        },
      },
      bargroup_study: {
        legend: {
          enabled: true,
          textSize: moderateScale(12),
          form: 'SQUARE',
          formSize: 14,
          xEntrySpace: 10,
          yEntrySpace: 5,
          wordWrapEnabled: true,
        },
        data: {
          dataSets: [
            {
              values: [2.7, 3.2, 2.9, 3, 3.1],
              label: 'TB tích luỹ',
              config: {
                drawValues: true,
                colors: [processColor('#6ea1ff')],
              },
            },
            {
              values: [16, 22, 20, 19, 15],
              label: 'Số tín chỉ',
              config: {
                drawValues: true,
                colors: [processColor('#997bff')],
              },
            },
          ],
          config: {
            barWidth: 0.2,
            group: {
              fromX: 0,
              groupSpace: 0.2,
              barSpace: 0.2,
            },
          },
        },
        xAxis: {
          valueFormatter: [
            'Kì I-năm 1',
            'Kì II-năm 1',
            'Kì I-năm 2',
            'Kì II-năm 2',
            'Kì I-năm 3',
          ],
          granularityEnabled: true,
          granularity: 1,
          axisMaximum: 5,
          axisMinimum: 0,
          centerAxisLabels: true,
        },

        marker: {
          enabled: true,
          markerColor: processColor('#3e48ff'),
          textColor: processColor('white'),
          markerFontSize: moderateScale(14),
        },
        description: {
          text: '',
          textSize: 0,
        },
      },
      line_gradient_score: {
        dataSets: [
          {
            values: [
              {
                y: 3.2,
                x: 0,
                marker: '3.2',
              },
              {
                y: 3.15,
                x: 1,
                marker: '3.15',
              },
              {
                y: 3.23,
                x: 2,
                marker: '3.23',
              },
              {
                y: 2.95,
                x: 3,
                marker: '2.95',
              },
              {
                y: 2.99,
                x: 4,
                marker: '2.99',
              },
              {
                y: 3.1,
                x: 5,
                marker: '3.1',
              },
            ],
            label: 'TB tích luỹ chung',
            config: {
              mode: 'CUBIC_BEZIER',
              drawValues: false,
              lineWidth: 2,
              drawCircles: true,
              circleColor: processColor('#3d74b4'),
              drawCircleHole: false,
              circleRadius: 5,
              highlightColor: processColor('transparent'),
              color: processColor('rgb(138,159,174)'),
              drawFilled: true,
              fillGradient: {
                colors: [
                  processColor('white'),
                  processColor('rgba(28, 90, 253, 1)'),
                ],
                positions: [0, 0.5],
                angle: 90,
                orientation: 'TOP_BOTTOM',
              },
              fillAlpha: 1000,
              valueTextSize: 15,
            },
          },

          {
            values: [
              {
                y: 3.0,
                x: 0,
                marker: '3.0',
              },
              {
                y: 3.05,
                x: 1,
                marker: '3.05',
              },
              {
                y: 3.15,
                x: 2,
                marker: '3.15',
              },
              {
                y: 3.3,
                x: 3,
                marker: '3.3',
              },
              {
                y: 3.12,
                x: 4,
                marker: '3.12',
              },
              {
                y: 2.95,
                x: 5,
                marker: '2.95',
              },
            ],
            label: 'TB tích luỹ cá nhân',
            config: {
              mode: 'CUBIC_BEZIER',
              drawValues: false,
              lineWidth: 2,
              drawCircles: true,
              circleColor: processColor('#3c739b'),
              drawCircleHole: false,
              circleRadius: 5,
              highlightColor: processColor('transparent'),
              color: processColor('rgb(47,103,151)'),
              drawFilled: true,
              fillGradient: {
                colors: [
                  processColor('rgba(28, 170, 253, 1)'),
                  processColor('white'),
                ],
                positions: [0, 0.5],
                angle: 90,
                orientation: 'TOP_BOTTOM',
              },
              fillAlpha: 1000,
              valueTextSize: 15,
            },
          },
        ],
        marker: {
          enabled: true,
          markerColor: processColor('#a2d5ff'),
          textColor: processColor('black'),
        },
        xAxis: {
          enabled: true,
          granularity: 1,
          drawLabels: true,
          position: 'BOTTOM',
          drawAxisLine: true,
          drawGridLines: false,
          fontFamily: 'HelveticaNeue-Medium',
          textSize: moderateScale(11),
          textColor: processColor('#636363'),
          valueFormatter: [
            'Kì I-1',
            'Kì II-1',
            'Kì III-1',
            'Kì I-2',
            'Kì II-2',
            'Kì III-2',
          ],
        },
        yAxis: {
          left: {
            enabled: true,
          },
          right: {
            enabled: true,
          },
        },
        legend: {
          enabled: true,
          textSize: 10,
          form: 'LINE',
          wordWrapEnabled: true,
        },
      },
      rada_chart: {
        data: {
          dataSets: [
            {
              values: [
                {value: 100},
                {value: 110},
                {value: 105},
                {value: 115},
                {value: 110},
              ],
              label: 'Môn đã học',
              config: {
                color: processColor('#cbf5ff'),

                drawFilled: true,
                fillColor: processColor('#4b4e9d'),
                fillAlpha: 100,
                lineWidth: 1,
              },
            },
            {
              values: [
                {value: 115},
                {value: 100},
                {value: 105},
                {value: 110},
                {value: 120},
              ],
              label: 'Môn chưa học',
              config: {
                color: processColor('#2a606f'),

                drawFilled: true,
                fillColor: processColor('#3cc3ff'),
                fillAlpha: 150,
                lineWidth: 1,
              },
            },
            {
              values: [
                {value: 105},
                {value: 115},
                {value: 121},
                {value: 110},
                {value: 105},
              ],
              label: 'Môn trượt',
              config: {
                color: processColor('#394eb2'),

                drawFilled: true,
                fillColor: processColor('#2e97ff'),
                lineWidth: 1,
              },
            },
            {
              values: [
                {value: 65},
                {value: 124},
                {value: 100},
                {value: 124},
                {value: 95},
              ],
              label: 'Môn cần cải thiện',
              config: {
                color: processColor('#1a50be'),

                drawFilled: true,
                fillColor: processColor('#1a50be'),
                lineWidth: 1,
              },
            },
          ],
        },
        legend: {
          enabled: true,
          textSize: moderateScale(12),
          form: 'CIRCLE',
          wordWrapEnabled: true,
        },
        xAxis: {
          valueFormatter: [
            'Kì I-1',
            'Kì II-1',
            'Kì III-1',
            'Kì I-2',
            'Kì II-2',
          ],
          fontFamily: 'HelveticaNeue-Medium',
          textSize: moderateScale(11),
          textColor: processColor('#636363'),
        },
      },
      stacked_bar_chart: {
        legend: {
          enabled: true,
          textSize: moderateScale(11),
          form: 'SQUARE',
          formSize: 10,
          xEntrySpace: 10,
          yEntrySpace: 5,
          wordWrapEnabled: true,
        },
        data: {
          dataSets: [
            {
              values: [
                {y: [3, 2, 1]},
                {y: [4, 1, 0]},
                {y: [2, 2, 2]},
                {y: [2, 1, 2]},
              ],
              label: '',
              config: {
                colors: [
                  processColor('#befffc'),
                  processColor('#83d9ff'),
                  processColor('#709aff'),
                ],
                stackLabels: ['Điểm cao', 'Điểm trung bình', 'Điểm thấp'],
              },
            },
          ],
        },
        xAxis: {
          valueFormatter: ['Kì II-1', 'Kì II-1', 'Kì I-2', 'Kì II-2'],
          granularityEnabled: true,
          granularity: 1,
        },
      },
      datas_item: [
        {
          title: 'Tổng tín chỉ',
          icon: 'book',
          value: '81',
          type_icon: 'foundation',
          tail: 'tín chỉ',
        },
        {
          title: 'TB tích luỹ',
          icon: 'bookmark-check',
          value: '3.2',
          type_icon: 'material-community',
          tail: 'điểm',
        },
        {
          title: 'Tổng số học kì',
          icon: 'playlist-add-check',
          value: '5',
          type_icon: 'material',
          tail: 'học kì',
        },
        {
          title: 'TB kì cao nhất',
          icon: 'priority-high',
          value: '3.35',
          type_icon: 'material',
          tail: 'điểm',
        },
        {
          title: 'T/C nhiều nhất/kì',
          icon: 'bookmarks',
          value: '25',
          type_icon: 'entypo',
          tail: 'tín chỉ',
        },
        {
          title: 'TB kì thấp nhất',
          icon: 'frown-o',
          value: '2.6',
          type_icon: 'font-awesome',
          tail: 'điểm',
        },
        {
          title: 'T/C ít nhất/kì',
          icon: 'bookmark',
          value: '16',
          type_icon: 'entypo',
          tail: 'tín chỉ',
        },
        {
          title: 'Kì học nhiều nhất',
          icon: 'ios-bookmarks',
          value: 'Kì II-năm 1',
          type_icon: 'ionicon',
          tail: '',
        },
      ],
    };
  }

  _render_pie_score() {
    return (
      <View style={styles.container}>
        <PieChart
          animation={{
            durationY: 1000,
            easingY: 'bounce',
          }}
          style={styles.chart}
          logEnabled={true}
          chartBackgroundColor={processColor('#00000000')}
          chartDescription={this.state.pie_score.description}
          data={this.state.pie_score.data}
          legend={this.state.pie_score.legend}
          highlights={this.state.pie_score.highlights}
          entryLabelColor={processColor('green')}
          entryLabelTextSize={20}
          drawEntryLabels={false}
          rotationEnabled={true}
          rotationAngle={45}
          usePercentValues={true}
          styledCenterText={{
            text: 'Cơ cấu\nthành phần\nđiểm',
            color: processColor('#6677dd'),
            size: moderateScale(15),
          }}
          centerTextRadiusPercent={100}
          holeRadius={50}
          holeColor={processColor('#f0f0f0')}
          transparentCircleRadius={45}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={360}
          onChange={event => console.log(event.nativeEvent)}
        />
      </View>
    );
  }

  _render_pie_subject() {
    return (
      <View style={styles.container}>
        <PieChart
          animation={{
            durationY: 1000,
            easingY: 'bounce',
          }}
          style={styles.chart}
          logEnabled={true}
          chartBackgroundColor={processColor('#00000000')}
          chartDescription={this.state.pie_subject.description}
          data={this.state.pie_subject.data}
          legend={this.state.pie_subject.legend}
          highlights={this.state.pie_subject.highlights}
          drawEntryLabels={false}
          rotationEnabled={true}
          rotationAngle={45}
          usePercentValues={true}
          styledCenterText={{
            text: 'Cơ cấu\nthành phần\nmôn',
            color: processColor('#6677dd'),
            size: moderateScale(13, 0.4),
          }}
          centerTextRadiusPercent={100}
          holeRadius={50}
          holeColor={processColor('#f0f0f0')}
          transparentCircleRadius={45}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={360}
          onChange={event => console.log(event.nativeEvent)}
        />
      </View>
    );
  }

  _render_bargroup_study() {
    return (
      <View style={styles.container}>
        <BarChart
          animation={{
            durationY: 1000,
            easingY: 'bounce',
          }}
          style={styles.chart}
          xAxis={this.state.bargroup_study.xAxis}
          data={this.state.bargroup_study.data}
          legend={this.state.bargroup_study.legend}
          chartDescription={this.state.bargroup_study.description}
          drawValueAboveBar={true}
          onChange={event => console.log(event.nativeEvent)}
          highlights={this.state.bargroup_study.highlights}
          drawHighlightArrow={true}
        />
      </View>
    );
  }

  _render_line_gradient_score() {
    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style={this.style.title_local_chart}>
          TB tích luỹ và TB chung khoa
        </Text>

        <LineChart
          style={styles.chart}
          data={this.state.line_gradient_score}
          chartDescription={{text: ''}}
          legend={this.state.line_gradient_score.legend}
          marker={this.state.line_gradient_score.marker}
          xAxis={this.state.line_gradient_score.xAxis}
          yAxis={this.state.line_gradient_score.yAxis}
          autoScaleMinMaxEnabled={true}
          animation={{
            durationY: 2000,
            easingY: 'bounce',
          }}
          drawGridBackground={false}
          drawBorders={false}
          touchEnabled={true}
          dragEnabled={false}
          scaleEnabled={false}
          scaleXEnabled={false}
          scaleYEnabled={false}
          pinchZoom={false}
          doubleTapToZoomEnabled={false}
          dragDecelerationEnabled={true}
          dragDecelerationFrictionCoef={0.99}
          keepPositionOnRotation={false}
          // onSelect={this.handleSelect.bind(this)}
          onChange={event => console.log(event.nativeEvent)}
        />
      </View>
    );
  }

  _render_rada_chart() {
    return (
      <View style={styles.container}>
        <RadarChart
          style={styles.chart}
          data={this.state.rada_chart.data}
          xAxis={this.state.rada_chart.xAxis}
          // yAxis={{drawLabels:true}}
          chartDescription={{text: ''}}
          legend={this.state.rada_chart.legend}
          drawWeb={true}
          animation={{
            durationY: 1000,
            easingY: 'bounce',
          }}
          webLineWidth={scale(1)}
          webLineWidthInner={scale(1)}
          webAlpha={255}
          webColor={processColor('blue')}
          webColorInner={processColor('#98bed0')}
          skipWebLineCount={1}
          onChange={event => console.log(event.nativeEvent)}
        />
      </View>
    );
  }

  _render_stacked_bar_chart() {
    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style={this.style.title_local_chart}>
          Thành phần điểm theo kì
        </Text>
        <BarChart
          style={styles.chart}
          xAxis={this.state.stacked_bar_chart.xAxis}
          data={this.state.stacked_bar_chart.data}
          legend={this.state.stacked_bar_chart.legend}
          drawValueAboveBar={false}
          chartDescription={{text: ''}}
          animation={{
            durationY: 1000,
            easingY: 'bounce',
          }}
          onChange={event => console.log(event.nativeEvent)}
        />
      </View>
    );
  }

  _render_item(item) {
    return (
      <View style={this.style.view_item_button}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={this.style.title_button}>
          {item.title}
        </Text>

        <View style={this.style.view_icon_button}>
          <Icon
            type={item.type_icon}
            name={item.icon}
            size={moderateScale(21)}
            containerStyle={this.style.icon}
            color={this.props.color.blue_6}
          />

          <Text
            allowFontScaling={false}
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={this.style.text_info}>
            {item.value}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={this.style.text_tail}>
            {item.tail}
          </Text>
        </View>
      </View>
    );
  }

  _control_render() {
    switch (this.props.navigation.state.routeName) {
      case 'Pie_score':
        return this._render_pie_score();
      case 'Pie_subject':
        return this._render_pie_subject();
      case 'Bargroup_study':
        return this._render_bargroup_study();
      case 'Line_gradient_score':
        return this._render_line_gradient_score();
      case 'Rada_chart':
        return this._render_rada_chart();
      case 'Stacked_bar_chart':
        return this._render_stacked_bar_chart();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <LinearGradient
        colors={['white', this.props.color.blue_0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={this.style.view_main}>
        <View style={this.style.view_chart}>{this._control_render()}</View>

        <FlatList
          data={this.state.datas_item}
          keyExtractor={item => item}
          renderItem={item => this._render_item(item.item)}
          contentContainerStyle={this.style.content_container_flatlist}
          columnWrapperStyle={{width: deviceWidth}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(15),
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    width: deviceWidth,
    height: moderateScale(256, 0.6),
  },
  chart: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    color: state.setting_control.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail_chart);
