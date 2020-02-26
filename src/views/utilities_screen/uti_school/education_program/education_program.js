import React, {Component} from 'react';
import style from './style';
import Detail_item from './detail_item';

import {
  LayoutAnimation,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default class Education_program extends Component {
  constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const array = [
      {
        expanded_level_1: false,
        name_level_1: 'Khối I. Kiến thức giáo dục đại cương',
        grade_level_2: [
          {
            subjects: [
              {id: 1, name: 'Giáo dục thể chất (5)'},
              {id: 2, name: 'Giáo dục quốc phòng (8)'},
              {id: 3, name: 'Tiếng Anh cơ bản 1'},
              {id: 4, name: 'Tiếng Anh cơ bản 2'},
              {id: 5, name: 'Tiếng Anh cơ bản 3'},
              {id: 6, name: 'Tiếng Anh chuyên ngành'},
              {id: 7, name: 'Pháp luật đại cương'},
              {id: 8, name: 'Những Nguyên lý cơ bản của CN Mác LêNin'},
              {id: 9, name: 'Đường lối cách mạng của Đảng CSVN'},
              {id: 10, name: 'Tư tưởng HCM'},
              {id: 11, name: 'Giải tích 1'},
              {id: 12, name: 'Giải tích 2'},
              {id: 13, name: 'Lý thuyết xác suất và thống kê toán'},
              {id: 14, name: 'Đại số và hình giải tích'},
              {id: 15, name: 'Tin học đại cương'},
              {id: 16, name: 'Kỹ thuật điện tử số'},
            ],
          },
        ],
      },
      {
        expanded_level_1: true,
        name_level_1: 'Khối II. Kiến thức giáo dục chuyên nghiệp',
        grade_level_2: [
          {
            expanded_level_2: false,
            name_level_2: 'A. Khối kiến thức cơ sở ngành',
            grade_level_3: [
              {
                subjects: [
                  {id: 17, name: 'Kỹ thuật lập trình cơ sở'},
                  {id: 18, name: 'Toán rời rạc'},
                  {id: 19, name: 'Cấu trúc dữ liệu và giải thuật'},
                  {id: 20, name: 'Cơ sở dữ liệu'},
                  {id: 21, name: 'Nguyên lý hệ điều hành '},
                  {id: 22, name: 'Kiến trúc máy tính'},
                  {id: 23, name: 'Chuyên đề thực tập cơ sở'},
                ],
              },
            ],
          },
          {
            expanded_level_2: false,
            name_level_2: 'B. Khối kiến thức ngành',
            grade_level_3: [
              {
                subjects: [
                  {id: 24, name: 'Thiết kế Web'},
                  {id: 25, name: 'Mạng và truyền thông'},
                  {id: 26, name: 'Phần mềm tự do mã nguồn mở'},
                  {id: 27, name: 'Kỹ thuật lập trình hướng đối tượng'},
                  {id: 28, name: 'Lập trình hướng sự kiện'},
                  {id: 29, name: 'Hệ quản trị CSDL'},
                  {id: 30, name: 'Phân tích và thiết kế hệ thống TT'},
                  {id: 31, name: 'Thương mại điện tử'},
                  {id: 32, name: 'An ninh và bảo mật dữ liệu'},
                  {id: 33, name: 'Quản trị mạng'},
                  {id: 34, name: 'Lập trình hệ thống'},
                  {id: 35, name: 'Lập trình Web'},
                  {id: 36, name: 'Lập trình cho thiết bị di động'},
                  {id: 37, name: 'Chuyên đề thực tập ngành'},
                ],
              },
            ],
          },
          {
            expanded_level_2: false,
            name_level_2: 'C. Khối kiến thức chuyên ngành',
            grade_level_3: [
              {
                expanded_level_3: false,
                name_level_3: '1. CN Công nghệ phần mềm (SE)',
                subjects: [
                  {id: 38, name: 'Lập trình Web nâng cao'},
                  {id: 39, name: 'Lập trình trên thiết bị di động nâng cao'},
                  {id: 40, name: 'Nhập môn Công nghệ phần mềm'},
                  {id: 41, name: 'Đảm bảo chất lượng phần mềm'},
                  {id: 42, name: 'Quản lý dự án CNTT'},
                  {id: 43, name: 'Chuyên đề thực tập chuyên ngành CNPM'},
                  {id: 44, name: 'Hệ quản trị CSDL Oracle'},
                  {id: 45, name: 'Xử lý dữ liệu lớn với Apache Hadoop'},
                  {
                    id: 46,
                    name: 'Phát triển hệ thống trên các Hệ Quản trị nội dung',
                  },
                  {
                    id: 47,
                    name: 'Phát triển hệ thống trên các Hệ Bán hàng trực tuyến',
                  },
                  {
                    id: 48,
                    name: 'Phát triển ứng dụng trên nền các dịch vụ đám mây',
                  },
                ],
              },
              {
                expanded_level_3: false,
                name_level_3: '2. CN Hệ thống thông tin (IS)',
                subjects: [
                  {id: 49, name: 'Lập trình trên thiết bị di động nâng cao'},
                  {id: 50, name: 'Ứng dụng UML trong Phân tích và Thiết kế'},
                  {id: 51, name: 'Các hệ thống phân tán'},
                  {id: 52, name: 'Kho dữ liệu'},
                  {id: 53, name: 'Cơ sở dữ liệu đa phương tiện'},
                  {id: 55, name: 'Chuyên đề thực tập chuyên ngành HTTT'},
                  {id: 56, name: 'Ngôn ngữ tích hợp dữ liệu và ứng dụng'},
                  {id: 57, name: 'Hệ thống thông tin địa lý (GIS)'},
                ],
              },
              {
                expanded_level_3: false,
                name_level_3: '3. CN Công nghệ đa phương tiện (MT)',
                subjects: [
                  {id: 58, name: 'Thiết kế đồ họa'},
                  {id: 59, name: 'Thiết kế đồ họa nâng cao'},
                  {id: 60, name: 'Kỹ thuật đồ họa và thực tại ảo'},
                  {id: 61, name: 'Công nghệ đa phương tiện'},
                  {id: 62, name: 'Lý thuyết thiết kế giao diện người dùng'},
                  {id: 63, name: 'Chuyên đề thực tập chuyên ngành CNĐPT'},
                  {id: 64, name: 'Thiết kế ứng dụng trên đầu cuối di động'},
                  {id: 65, name: 'Phát triển ứng dụng game'},
                  {id: 66, name: 'Dựng hình phi tuyến'},
                ],
              },
              {
                expanded_level_3: false,
                name_level_3: '4. CN Mạng và an toàn hệ thống (NS)',
                subjects: [
                  {id: 67, name: 'An ninh mạng máy tính'},
                  {id: 68, name: 'Mạng máy tính nâng cao'},
                  {id: 69, name: 'Quản trị hệ thống Linux'},
                  {id: 70, name: 'Phân tích và thiết kế mạng máy tính'},
                  {id: 71, name: 'Lập trình mạng'},
                  {id: 72, name: 'Chuyên đề thực tập chuyên ngành M&ATHT'},
                  {id: 73, name: 'Truyền Thông Đa Phương Tiện'},
                  {id: 74, name: 'Đánh giá hiệu năng mạng máy tính'},
                ],
              },
            ],
          },
        ],
      },
      {
        expanded_level_1: false,
        name_level_1: 'Khối III. Khối kiến thức tốt nghiệp',
        grade_level_2: [
          {
            subjects: [
              {id: 75, name: 'Chuyên đề Lập trình ứng dụng'},
              {id: 76, name: 'Chuyên đề kết thúc chuyên ngành'},
              {id: 77, name: 'Đồ án tốt nghiệp'},
            ],
          },
        ],
      },
    ];

    this.state = {AccordionData: [...array]};
    this.update_Layout = this._update_Layout.bind(this);
  }

  _update_Layout(level_1 = null, level_2 = null, level_3 = null) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    if (level_2 === null) {
      array[level_1].expanded_level_1 = !array[level_1].expanded_level_1;
    } else {
      if (level_3 === null) {
        array[level_1].grade_level_2[level_2].expanded_level_2 = !array[level_1]
          .grade_level_2[level_2].expanded_level_2;
        console.log(array[level_1].grade_level_2[level_2].expanded_level_2);
      } else {
        array[level_1].grade_level_2[level_2].grade_level_3[
          level_3
        ].expanded_level_3 = !array[level_1].grade_level_2[level_2]
          .grade_level_3[level_3].expanded_level_3;
      }
    }

    this.setState(() => {
      return {
        AccordionData: array,
      };
    });
  }

  _render_content() {
    return this.state.AccordionData.map((item, key) => {
      return (
        <Detail_item
          key={item.name_level_1}
          onClickFunction={this.update_Layout}
          item={item}
          key_lv1={key}
          length={this.state.AccordionData.length}
        />
      );
    });
  }

  render() {
    // tạo style theo state, cho chức năng thay đổi màu giao diện
    this.style = style(this.props.color);
    return (
      <View style={this.style.MainContainer}>
        <ScrollView contentContainerStyle={{}}>
          {this._render_content()}
        </ScrollView>
      </View>
    );
  }
}
