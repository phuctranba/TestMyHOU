import React, {Component} from 'react';
import {
  View,
  TouchableHighlight,
  PermissionsAndroid,
  Linking,
} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import {
  height_statusbar,
  Task_Colors,
  Toast_form,
} from '../../../../utils/values';
import {verticalScale} from 'react-native-size-matters';
import Toast from '../../../../components/toast_custom/toast_custom';
import {connect} from 'react-redux';

const DEFAULT_PADDING = {top: 60, right: 60, bottom: 60, left: 60};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      minLatitudeDelta: 0.0015,
      minLongitudeDelta: 0.00114,
      maxLatitudeDelta: 102.2975,
      maxLongitudeDelta: 93.894,
      defaultLocation: {
        latitude: 21.001104,
        longitude: 105.847899,
        latitudeDelta: 0.1998,
        longitudeDelta: 0.1459,
      },
      markers: [
        {
          latitude: 21.00111011525004,
          longitude: 105.84767371416092,
          title: 'Đại Học Mở Hà Nội',
          description:
            'Cơ sở 1:\nĐại Học Mở Hà Nội \nKhoa Đào Tạo Từ Xa \nTrung Tâm Đào Tạo Elearning \nTrung Tâm Tin Học, Ngoại ngữ và BDNH.\nĐc: Nhà B101 Nguyễn Hiền, Hai Bà Trưng, Hà Nội',
          url: 'https://goo.gl/maps/evUQWngNjYq',
        },
        {
          latitude: 20.98511220362793,
          longitude: 105.83873391151428,
          title: 'Khoa Công Nghệ Thông Tin \nKhoa Đào Tạo Sau Đại Học',
          description:
            'Cơ sở 2:\nKhoa Công Nghệ Thông Tin \nKhoa Đào Tạo Sau Đại Học.\nĐc: 96 Định Công - Hà Nội',
          url: 'https://goo.gl/maps/B12WAMm4rVz',
        },
        {
          latitude: 20.988585637765365,
          longitude: 105.87705932557583,
          title: 'Khoa Luật \nKhoa Kinh Tế',
          description:
            'Cơ sở 2:\nKhoa Luật \nKhoa Kinh Tế. \nĐc: Số 193 Vĩnh Hưng,Hoàng Mai, Hà Nội \nĐc: 193 Vĩnh Hưng, Hoàng Mai, Hà Nội.',
          url: 'https://goo.gl/maps/fUg4FgzAR452',
        },
        {
          latitude: 20.99078122218093,
          longitude: 105.80536723136902,
          title: 'Khoa Tiếng Anh \nKhoa Du Lịch \nKhoa Công Nghệ Sinh Học',
          description:
            'Cơ sở 2:\nKhoa Tiếng Anh \nKhoa Du Lịch \nKhoa Công Nghệ Sinh Học.\nĐc: Số 301 Nguyễn Trãi, Quận Thanh Xuân, Hà Nội',
          url: 'https://goo.gl/maps/fackgbiU2fF2',
        },
        {
          latitude: 20.99105731134961,
          longitude: 105.83834566175938,
          title: 'Khoa Công Nghệ Điện Tử Thông Tin',
          description:
            'Cơ sở 2:\nKhoa Công Điện Tử Nghệ Thông Tin.\nĐc: Số 62 Phan Đình Giót, Q.Thanh Xuân, Hà nội.',
          url: 'https://goo.gl/maps/4qGGqUzcnxt',
        },
        {
          latitude: 20.918747105002126,
          longitude: 105.85196256637573,
          title: 'Khoa Kiến Trúc \nKhoa Tài Chính Ngân Hàng',
          description:
            'Cơ sở 2:\nKhoa Kiến Trúc \nKhoa Tài Chính Ngân Hàng.\nĐc: 267 Ngọc Hồi - Thanh Trì - Hà Nội(Tòa nhà An Huy - Lô GD1- 3, khu công nghiệp Ngọc Hồi, Thanh Trì, Hà Nội)',
          url: 'https://goo.gl/maps/xR59twjdnSq',
        },
        {
          latitude: 21.046053,
          longitude: 105.786273,
          title: 'Khoa Tiếng Trung Quốc',
          description:
            'Cơ sở 2:\nKhoa Tiếng Trung Quốc.\nĐc: Số 475 Hoàng Quốc Việt, Cầu Giấy, Hà Nội',
          url: 'https://goo.gl/maps/ty2fm4cAWDC2',
        },
        {
          latitude: 20.993148310248973,
          longitude: 105.86143344640732,
          title: 'Khoa Tạo Dáng Công Nghiệp',
          description:
            'Cơ sở 2:\nKhoa Tạo Dáng Công Nghiệp. \nĐc: 18 Tam Trinh, Hoàng Mai, Hà Nội, Việt Nam',
          url: 'https://goo.gl/maps/sQFTSmG869R2',
        },
      ],
    };
  }

  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //     const { params } = navigation.state;
  //     return {
  //         headerTitle: <Text style={{color:'#284ab9', alignItems: 'center'}}>Bản đồ</Text>,
  //         headerStyle: {
  //             backgroundColor: navigationOptions.headerTintColor,
  //         },
  //         headerTintColor: navigationOptions.headerTintColor,
  //     };
  // };

  componentDidMount() {
    this.setState({
      location: this.state.defaultLocation,
    });
  }

  onPressZoomOut() {
    this.region = {
      latitude: this.state.location.latitude,
      longitude: this.state.location.longitude,
      latitudeDelta: Math.min(
        this.state.maxLatitudeDelta,
        this.state.location.latitudeDelta * 2,
      ),
      longitudeDelta: Math.min(
        this.state.maxLongitudeDelta,
        this.state.location.longitudeDelta * 2,
      ),
    };
    this.setState({
      location: {
        latitudeDelta: this.region.latitudeDelta,
        longitudeDelta: this.region.longitudeDelta,
        latitude: this.region.latitude,
        longitude: this.region.longitude,
      },
    });
    this.map.animateToRegion(this.region, 100);
  }

  onPressZoomIn() {
    this.region = {
      latitude: this.state.location.latitude,
      longitude: this.state.location.longitude,
      latitudeDelta: Math.max(
        this.state.minLatitudeDelta,
        this.state.location.latitudeDelta / 2,
      ),
      longitudeDelta: Math.max(
        this.state.minLongitudeDelta,
        this.state.location.longitudeDelta / 2,
      ),
    };
    this.setState({
      location: {
        latitudeDelta: this.region.latitudeDelta,
        longitudeDelta: this.region.longitudeDelta,
        latitude: this.region.latitude,
        longitude: this.region.longitude,
      },
    });
    this.map.animateToRegion(this.region, 100);
  }

  fitAllMarkers() {
    this.map.fitToCoordinates(this.state.markers, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  }

  _onPressMark(marker) {
    this.props.connected_internet
      ? Linking.canOpenURL(
          `google.navigation:q=${marker.latitude},${marker.longitude}`,
        ).then(supported => {
          if (supported) {
            return Linking.openURL(
              `google.navigation:q=${marker.latitude},${marker.longitude}`,
            );
          } else {
            return this.props.navigation.navigate('GoogleWebView', {
              uri: marker.url,
              PermissionsAndroid: true,
            });
          }
        })
      : this.toast.show(Toast_form.no_connected);
  }

  onRegionChange(region) {
    this.setState({
      location: region,
    });
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <View style={this.style.container}>
        <MapView
          style={this.style.map}
          region={this.state.location}
          mapType={'standard'}
          // onPress={this.pickLocationHandler}
          showsUserLocation={true}
          // followUserLocation={true}
          zoomEnabled={true}
          ref={ref => (this.map = ref)}
          onRegionChangeComplete={this.onRegionChange.bind(this)}>
          {this.state.markers.map(marker => (
            <Marker key={marker.title} coordinate={marker}>
              <Icon
                name="school"
                style={{fontSize: 25, color: this.props.color.blue_8}}
              />
              <Callout onPress={() => this._onPressMark(marker)}>
                <View style={{width: 200}}>
                  <Text allowFontScaling={false} style={this.style.textTitle}>
                    {marker.title}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={this.style.textDescription}>
                    {marker.description}
                  </Text>
                  <Text allowFontScaling={false} style={this.style.textOpenMap}>
                    Click để mở trong google maps!
                  </Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <TouchableOpacity
          style={[
            this.style.btnInMaps,
            {marginTop: verticalScale(60) + height_statusbar},
          ]}
          onPress={() => {
            this.onPressZoomIn();
          }}>
          <Icon name="plus" style={this.style.icon} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={this.style.btnInMaps}
          onPress={() => {
            this.onPressZoomOut();
          }}>
          <Icon name="minus" style={this.style.icon} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={this.style.btnInMaps}
          onPress={() => {
            this.fitAllMarkers();
          }}>
          <Icon name="school" style={this.style.icon} size={20} />
        </TouchableOpacity>
        <Toast
          color={this.props.color}
          ref={view => (this.toast = view)}
          marginBottom={verticalScale(70)}
          setting_props={this.props.setting_props}
        />
      </View>
    );
  }
}

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
)(Map);
