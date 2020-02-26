import {moderateScale} from 'react-native-size-matters';
import {Blues, Dark_blue, Light_blue, Medium_blue, Task_Colors} from './index';

export const utilities = {
  uti_scholl: [
    // {
    //     icon:'book-multiple',
    //     icon_type:'material-community',
    //     title:'Chương trình đào tạo',
    //     nav_address:"Education_program_component",
    //     props_send:{
    //
    //     }
    // },
    {
      icon: 'library-books',
      icon_type: 'material-community',
      title: 'Học liệu điện tử',
      nav_address: 'Web_Utilities_component',
      props_send: {
        uri:
          'https://cas.hou.edu.vn/cas/login?service=https%3A%2F%2Fhoclieu.hou.edu.vn%2Flogin%2Findex.php',
      },
    },
    {
      icon: 'users',
      icon_type: 'font-awesome',
      title: 'K/s hoạt\nđộng\ngiảng dạy',
      nav_address: 'Web_Utilities_component',
      props_send: {
        uri: 'http://dbcl.hou.edu.vn/cntt/login',
      },
    },
    {
      icon: 'users',
      icon_type: 'entypo',
      title: 'K/s dịch\nvụ giáo\ndục công',
      nav_address: 'Web_Utilities_component',
      props_send: {
        uri: 'http://survey.hou.edu.vn',
      },
    },
    {
      icon: 'google-maps',
      icon_type: 'material-community',
      title: 'Bản đồ',
      nav_address: 'Map',
      props_send: {},
    },
  ],
  uti_more: [
    {
      image:
          'https://i.imgur.com/ydvhsN6.png',
      title: 'Kho\nhọc liệu điện tử',
      type_press: 'linking',
      detail:
          'Phiên bản dành cho di động của Hệ thống học liệu được tùy biến dựa trên bản Moodle Mobile'+
          'Moodle là phần mềm chuyên sâu về đào tạo trực tuyến và được hầu hết các trường danh tiếng trên ' +
          'thế giới sử dụng. Khi được tùy biến, Moodle sẽ đặc biệt mạnh và uyển chuyển trong đào tạo trực tuyến. ' +
          'Moodle được sáng lập năm 1999 bởi Martin Dougiamas, người tiếp tục điều hành và phát triển chính của dự án. ' +
          'Moodle hiện là phần mềm được sử dụng rộng rãi với hàng chục nghìn trang web đã đăng ký và hàng triệu người dùng và khóa học. ' +
          'Moodle được thiết kế với mục đích tạo ra những khóa học trực tuyến với sự tương tác cao. Tính mã mở cùng độ linh hoạt cao của nó ' +
          'giúp người phát triển có khả năng thêm vào các mô đun cần thiết một cách dễ dàng. Moodle được đăng ký theo bản quyền GNU GPL.',
      data_detail: {
        internet: true,
        title_header: 'Kho HLĐT',
        color_title_header: '#0079c9',
        image_header:
            'https://i.imgur.com/mJ5NBxP.png',
        type_notifi: 'detail',
        title_button: 'Thử ngay Kho HLĐT!',
        color_button: '#0079c9',
        color_arrow_back: '#0079c9',
        title_notifi: 'Kho học liệu điện tử',
        link_navigation: {
          type_nav: 'linking',
          name: '',
          data_nav: '',
          linking_1: 'houmm://https://hoclieu.hou.edu.vn',
          linking_2: 'market://details?id=vn.edu.hou.moodlemobile',
        },
        content: [
          {
            text:
                ' Moodle LMS là hệ thống quản lý học tập phổ biến nhất và được sử dụng nhiều nhất trên thế giới. Tại sao? Bởi vì Hệ thống quản lý học tập Moodle là một mã  nguồn mở, linh hoạt và miễn phí để tải xuống làm giải pháp quản lý học tập. Với 68 triệu người dùng và 55.000 trang web Moodle được triển khai trên toàn thế giới, Moodle là một nền tảng eLearning thân thiện với người dùng phục vụ nhu cầu học tập và đào tạo của mọi người từ tất cả các loại tổ chức.',
            image:
                'https://elearningindustry.com/wp-content/uploads/2017/10/7-must-have-plugins-for-moodle.png',
          },
          {
            text:
                'Moodle được sử dụng bởi các tổ chức thuộc mọi đối tượng trong các lĩnh vực ngoài giáo dục. Phổ biến nhất, Moodle được sử dụng bởi các doanh nghiệp, tập đoàn, bệnh viện và cả tổ chức phi lợi nhuận để học tập trực tuyến, đào tạo, thậm chí trong một số trường hợp mở rộng quy trình kinh doanh. Nhưng Moodle không phải là LMS tốt nhất thế giới chỉ vì nó được sử dụng rộng rãi — Moodle là LMS tốt nhất thế giới vì nó là cung cấp giao diện người dùng thân thiện, có thể cấu hình tuỳ biến linh hoạt và giàu tính năng hỗ trợ, trên hết đó là Moodle cung cấp miễn phí.',
            image:
                'https://i.imgur.com/ydvhsN6.png',
          },
          {
            text:
                'Phiên bản dành cho di động của Hệ thống học liệu được tùy biến dựa trên bản Moodle Mobile.\n' +
                'Ứng dụng này giúp sinh viên có thể:\n' +
                '- Truy cập vào nội dung của các khóa học đã được gán trên website Học liệu điện tử - Trường Đại học Mở Hà Nội ngay cả khi không có kết nối mạng\n' +
                '- Nhận được các thông báo về tin nhắn hoặc các sự kiện\n' +
                '- Dễ dàng tìm kiếm và liên hệ với sinh viên khác trong các khoá học đã được gán\n' +
                '- Tải lên hình ảnh, videos, file audio… từ thiết bị di độc\n' +
                '- Xem thông tin về quá trình học của bản thân như các khóa học, điểm số…',
            image: null,
          },
        ],
      },
    },
    {
      image: 'https://i.imgur.com/I1lexfB.png',
      title: 'Văn bản đào tạo\nĐại học Mở Hà Nội',
      type_press: 'screen',
      detail:
        'Văn bản về công tác đào tạo, quy định đào tạo đại học hệ chính quy theo hệ thốn tín chỉ tại Đại học Mở Hà Nội, nhằm thông tin, hỗ trợ ' +
        'những thắc mắc của sinh viên trong quá trình học tập. Kèm theo đó là mẫu một số văn bản cần dùng trong một số trường hợp cần thiết.',
      data_detail: {
        internet: true,
        link_navigation: {
          type_nav: 'screen',
          name: 'Web_Utilities_component',
          data_nav: {
            uri: 'https://hou.edu.vn/dao-tao_31.html',
          },
          linking_1: '',
          linking_2: '',
        },
        content: null,
      },
    },
    {
      image: 'https://i.imgur.com/I1lexfB.png',
      title: 'Cẩm nang nhập học\nĐại học Mở Hà Nội',
      type_press: 'screen',
      detail:
        'Cẩm nang nhập học mang đến những thông tin hữu ích cho các bạn tân sinh viên của Trường Đại học Mở Hà Nôi. ' +
        'Cẩm nang bao gồm lời chúc từ Viện trưởng, giấy tờ cần nộp, quy trình nhập học, địa điểm học tập và những điều cần biết, bên cạnh đó cũng có các thông tin như các phương tiện đi lại công cộng và kí túc xá hỗ trợ sinh viên.',
      data_detail: {
        internet: true,
        link_navigation: {
          type_nav: 'screen',
          name: 'Web_Utilities_component',
          data_nav: {
            uri: 'http://camnangnhaphoc.hou.edu.vn/',
          },
          linking_1: '',
          linking_2: '',
        },
        content: null,
      },
    },
    {
      image:
        'https://store-images.s-microsoft.com/image/apps.64241.13510798884381219.0caf7424-50b5-4a55-86fc-1a366c5ad008.010cc2bb-5713-43a5-befa-49e3b8a08cb4?mode=scale&q=90&h=300&w=300',
      title: 'Ứng dụng Tìm Buýt\nxe buýt cho sinh viên',
      type_press: 'linking',
      detail:
        'Ứng dụng Tìm Buýt do công ty vận tải Hà Nội - Transerco phát hành với mục đích giúp các khách hàng có thể sử dụng để tìm kiếm xe buýt trên địa bàn Hà Nội dễ dàng hơn nhờ có chương trình này mà tất cả mọi người dù chưa thông thạo đường Hà Nội hay các tuyến xe bus đều có thể sử dụng để tra cứu tuyến đường xe bus, tra cứu địa điểm mình cần đến nên đi theo tuyến xe bus nào để có con đường ngắn nhất.',
      data_detail: {
        internet: true,
        title_header: 'Tìm Buýt',
        color_title_header: '#00A3E6',
        image_header:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/01/08/63/010863c2-7e98-d0d9-13fa-053b6ce3cda5/AppIcon-1x_U007emarketing-85-220-9.png/1200x630wa.png',
        type_notifi: 'detail',
        title_button: 'Thử ngay Tìm Buýt!',
        color_button: '#00A3E6',
        color_arrow_back: '#00A3E6',
        title_notifi: 'Ứng dụng Tìm Buýt - phương tiện công cộng cho sinh viên',
        link_navigation: {
          type_nav: 'linking',
          name: '',
          data_nav: '',
          linking_1: 'market://details?id=com.binhanh.bushanoi',
          linking_2:
            'https://play.google.com/store/apps/details?id=com.binhanh.bushanoi&hl=vi',
        },
        content: [
          {
            text:
              'Với sự rộng lớn của thành phố Hà Nội có rất nhiều tuyến xe bus hoạt động, do đó để phục vụ tốt hơn cho người đi xe bus công ty vận tải Hà Nội - Transerco đã phát triển ứng dụng có tên Tìm buýt được cài đặt trên các loại điện thoại thông minh giúp người dùng có thể tìm kiếm và tra cứu các tuyến đường đi của xe bus, giờ chạy và giờ nghỉ của từng tuyến để thuận tiện nhất trong việc di chuyển.',
            image: 'https://fptshop.com.vn/Uploads/images/image001(494).png',
          },
          {
            text:
              'Ứng dụng Timbuyt có nhiều tiện ích và tính tương tác cao với hành khách tương tự ứng dụng của Uber, Grab. Ứng dụng đã được đưa lên các cửa hàng ứng dụng của cả hệ điều hành Androi lẫn iOS, sử dụng ngôn ngữ Tiếng Việt và Tiếng Anh.',
            image: null,
          },
          {
            text:
              'Ứng dụng Timbuyt đã được đưa lên các cửa hàng ứng dụng của cả hệ điều hành Androi lẫn iOS, sử dụng ngôn ngữ Tiếng Việt và Tiếng Anh.. Đây là ứng dụng miễn phí với nhiều tiện ích bất ngờ dành cho khách hàng.',
            image: null,
          },
          {
            text:
              'Phần mềm có thiết kế thông minh, thân thiện, dễ tiếp cận, sử dụng với các 4 tính năng. Thứ nhất là tính năng Tìm đường thông minh, giúp hành khách tìm phương án lộ trình tối ưu nhất mà không cần phải thông thạo lộ trình của toàn bộ các tuyến xe buýt tại Hà Nội.',
            image: 'https://i.imgur.com/WD9m4GM.png',
          },
          {
            text:
              'Hành khách chỉ cần nhập nơi đi - nơi đến, phần mềm sẽ đưa ra các phương án đường đi được mô tả chi tiết và trực quan trên bản đồ, giúp hành khách lựa chọn đi tuyến xe buýt nào, đón xe ở đâu với các thông tin liên quan như cự ly, thời gian chuyến đi, số lần chuyển tuyến… để lựa chọn.',
            image: null,
          },
          {
            text:
              'Thứ hai là tính năng Theo dõi xe trực tuyến, giúp cho khách hàng theo dõi được trực tuyến vị trí và hành trình di chuyển của xe buýt trên bản đồ, chủ động thời gian chờ xe.',
            image: null,
          },
          {
            text:
              'Khách hàng còn có thể nắm được thông tin về các tuyến buýt đi qua điểm dừng, biển kiểm soát xe, vị trí, thời gian dự kiến xe đến điểm dừng. Thậm chí ứng dụng còn chủ động gửi tin nhắn báo cho hành khách khi xe sắp đến điểm dừng.',
            image: 'https://i.imgur.com/UIF0jrH.jpg',
          },
          {
            text:
              'Thứ ba là tính năng Tra cứu thông tin xe buýt. Khách hàng có thể tra cứu trên phần mềm thông tin về hoạt động của các tuyến xe buýt trên toàn mạng như lộ trình, thời gian hoạt động, biểu đồ chạy xe chi tiết, giá vé…. cũng như vị trí các điểm bán vé tháng và hướng dẫn thủ tục đăng ký vé tháng.',
            image: null,
          },
          {
            text:
              'Cuối cùng là tính năng Hỗ trợ khách hàng. Phần mềm có tính năng tự động nhắc khi xe buýt sắp tới điểm dừng, nhắc báo điểm chuyển tuyến hoặc điểm xuống xe giúp hành khách không bị bị bỏ lỡ, xuống nhầm điểm dừng.',
            image: null,
          },
          {
            text:
              'Ngoài ra ứng dụng cũng cung cấp tiện ích đăng ký làm vé tháng qua mạng, giao vé tận nhà rất tiện lợi và nhiều tiện ích khác như thông tin về thay đổi lộ trình, thay đổi dịch vụ, mở mới các tuyến xe buýt …',
            image:
              'https://img.infonet.vn/w490/Uploaded/2019/pjauldz/2018_07_19/xe-buyt.jpg',
          },
          {
            text:
              'Tuy nhiên, hiện tại ứng dụng Timbuyt mới chỉ được áp dụng cho các tuyến buýt của Transerco.\n' +
              '\n' +
              'Một số tuyến buýt của các đơn vị: Bảo Yến, Bắc Hà, Đông Anh, Hải Vân, CPVT Hà Tây vẫn chưa cung cấp thông tin và dữ liệu GPS để đưa lên hệ thống chung',
            image: null,
          },
        ],
      },
    },
    {
      image: 'https://i.imgur.com/pfJCvsa.jpg',
      title: 'KTX Pháp Vân\ngiới thiệu và hỗ trợ',
      type_press: 'linking',
      detail:
        'Từ năm 2015, Ký túc xá Pháp Vân đã trở thành lựa chọn của các bạn sinh viên khi sống xa nhà và học tập tại Hà Nội. Do được Nhà nước xây dựng rất hiện đại, KTX Pháp Vân đã xóa tan ký ức xưa về KTX và thực sự là một trải nghiệm đáng nhớ của đời sinh viên. Khu nhà ở cho học sinh, sinh viên được xây dựng từ nguồn vốn ngân sách, trên khu đất có diện tích hơn 40.000m2 trong Khu đô thị mới Pháp Vân - Tứ Hiệp (phường Hoàng Liệt, quận Hoàng Mai). Khu nhà ở có 6 tòa nhà, với sức chứa lên tới 22.000 sinh viên. Tháng 1-2015, 3 tòa nhà đi vào sử dụng, có sức chứa 10.800 sinh viên. Mỗi phòng rộng gần 57m2, được trang bị đầy đủ thiết bị như bình nóng lạnh, vòi tắm hoa sen, bàn học, giường tầng, có lắp đầu chờ điều hòa...',
      data_detail: {
        internet: true,
        title_header: 'KTX Pháp Vân',
        color_title_header: '#2e8b57',
        image_header: 'https://i.imgur.com/8Ac0JNg.jpg',
        type_notifi: 'detail',
        title_button: 'Tìm hiểu ngay!',
        color_button: '#2e8b57',
        color_arrow_back: '#2e8b57',
        title_notifi: 'KTX Pháp Vân - giới thiệu và hỗ trợ',
        link_navigation: {
          type_nav: 'linking',
          name: '',
          data_nav: '',
          linking_1: 'fb://page/832941573392554',
          linking_2: 'market://details?id=com.facebook.katana',
        },
        content: [
          {
            text:
              '🌟 Bên cạnh những lợi ích chung như: đông vui, dễ kết bạn, rèn luyện tính tự lập KTX',
            image: 'https://i.imgur.com/WVvNXEt.jpg',
          },
          {
            text:
              '🌟 Bên cạnh những lợi ích chung như: đông vui, dễ kết bạn, rèn luyện tính tự lập KTX Pháp Vân còn mang lại những lợi ích vượt trội có thể nhìn thấy ngay như:\n' +
              '🏩 Được đảm bảo an ninh, Thang máy hoạt động 24/24h, vệ sinh, chăm sóc cảnh quan.\n' +
              '🏩 Chi phí tiết kiệm - Dĩ nhiên bạn sẽ tiết kiệm được rất nhiều chi phí so với việc ra ngoài thuê trọ. Đây rõ ràng là một điểm cộng không hề nhỏ rồi.\n' +
              '🏩 Chỉ từ 205.000 đồng/sinh viên/tháng hoặc 1.640.000 đồng/phòng/tháng:\n' +
              '💞 Phòng ở khép kín diện tích 56,7m2, bao gồm: Giường tầng, bàn ghế học cá nhân, tủ để đồ, bồn rửa mặt, bồn vệ sinh, bộ vòi tắm hoa sen, bình nóng lạnh,....Ngoài ra, sinh viên còn có thể lựa chọn thuê các phòng VIP theo nhu cầu được trang bị thêm: tủ lạnh, điều hoà, tivi và dịch vụ vệ sinh phòng ở với chi phí vô cùng hợp lý.\n' +
              '💞 Tiền điện, nước theo giá Nhà nước đuy định\n' +
              '💞 Mạng internet: rất rẻ với gói 25MB – 40MB giá chỉ từ 200.000 đồng/tháng. Bạn được lựa chọn Wifi đi khắp muôn nơi hay dây Lan vào tận phòng.\n' +
              '💞 Gửi xe: tại tầng hầm rộng rãi, giá từ 45.000 – 75.000 đồng/tháng\n',
            image: 'https://i.imgur.com/UP7Cuiu.jpg',
          },
          {
            text:
              'Bạn sẽ được trải nghiệm toàn bộ không gian sinh viên đáng sống kèm theo đầy đủ các dịch vụ tiện ích: Canteen, siêu thị sinh viên, cafe nhạc, quầy bưu điện sách báo, GYM, thể thao ngoài trời, cắt tóc, giặt là, photocopy, phòng y tế,... phục vụ hàng ngày đáp ứng tốt cả về chất lượng, chi phí hợp lý.\n' +
              '🍞 🍔 🍟 🍗 🥗 🍜 🍲 🍇 🍓 🍏 🏋️‍🧘‍🤾‍💇‍',
            image: null,
          },
          {
            text:
              '🌟 Bạn có đang băn khoăn về vấn đề đi lại? Nằm ở Khu đô thị, không gian thoáng mát, trong lành, đi lại thuận tiện không lo tắc đường, gồm các tuyến bus đưa đón tại cổng KTX:\n' +
              '🚎 21B (Khu đô thị Pháp Vân – BX Mỹ Đình) đến các trường: Kinh tế quốc dân, Xây dựng, Bách Khoa, Viện ĐH Mở, CĐ nghề Bách khoa, Học viện Quản lý giáo dục, CĐ Y tế Bạch Mai, HV Ngân hàng, Thuỷ Lợi, Công đoàn, Nhân Văn, Khoa học tự nhiên, ĐH Hà Nội, Bưu chính Viễn thông, Kiến trúc, Y học cổ truyền...\n' +
              '🚎 60A (Khu đô thị Pháp Vân – BX Nam Thăng Long) đến các trường: Thăng Long, Viện ĐH Mở, Nhân Văn, Khoa học tự nhiên, Lao động xã hội, Đông Đô...\n' +
              'Ngoài ra còn một số tuyến tiện cận như 04, 06, 08, 12, 39, 99... (điểm đón cách KTX Pháp Vân 3 phút đi bộ). Tất cả với tần suất: 7 – 10 phút/chuyến.\n' +
              '🚎 🚖 🚕 🏍️ 🚴‍',
            image: 'https://i.imgur.com/6Ehu0Es.jpg',
          },
          {
            text:
              '🌟 Tại KTX các bạn còn được tham gia nhiều hoạt động văn hoá, văn nghệ rất ấn tượng, được sinh viên nội trú và ngoại trú nhiệt tình hưởng ứng và tham gia như: chương trình chào tân sinh viên nhập trường; Các giải đấu bóng đá thường niên; Đón Trung thu, Kỷ niệm 8/3, 20/10, Countdown Party, ngày hội Hiến máu, Giới thiệu việc làm; Tổ chức tổng kết thi đua và trao học bổng cho sinh viên nghèo vượt khó,... Ngoài ra còn nhiều CLB sở thích sinh hoạt hàng tuần như: bóng đá, bóng chuyền, đá cầu, Dance, Ghi ta, âm nhạc...',
            image: 'https://i.imgur.com/XaqtDqd.jpg',
          },
          {
            text:
              '🌟 Để biết thủ tục đăng kí và thông tin liên hệ - tìm hiểu ngay nào!',
            image: null,
          },
        ],
      },
    },
  ],
};

export const list_button_fa_home = [
  [
    {
      name: 'Khoa CNTT',
      uri: 'http://www.fithou.edu.vn/',
    },
    {
      name: 'Khoa\nDu lịch',
      uri: 'http://fot.hou.edu.vn/',
    },
  ],
  [
    {
      name: 'Khoa TDCN',
      uri: 'http://tdcn.hou.edu.vn/',
    },
    {
      name: 'Khoa Luật',
      uri: 'http://khoaluat.hou.edu.vn/',
    },
  ],
  [
    {
      name: 'Khoa\nCNĐT-TT',
      uri: 'http://feit.hou.edu.vn/',
    },
    {
      name: 'Khoa\nKiến trúc',
      uri: 'http://foa.hou.edu.vn/',
    },
  ],
  [
    {
      name: 'Khoa\nTiếng anh',
      uri: 'http://tienganhdhm.com/',
    },
    {
      name: 'Khoa\nKinh tế',
      uri: 'http://kinhte.hou.edu.vn/',
    },
  ],
  [
    {
      name: 'Khoa Tiếng\nTrung Quốc',
      uri: 'http://khoatiengtrungquoc.hou.edu.vn/',
    },
    {
      name: 'Khoa CNSH',
      uri: 'http://biotech.hou.edu.vn/',
    },
  ],
  [
    {
      name: 'Khoa\nTCNH',
      uri: 'http://fbf.hou.edu.vn/',
    },
    {
      name: 'Khoa Đào\ntạo từ xa',
      uri: 'http://khoatuxa.hou.edu.vn/',
    },
  ],
  [
    {
      name: 'Trung tâm\nE-Learning',
      uri: 'http://elc.ehou.edu.vn/',
    },
    {
      name: 'Khoa sau\nĐại học',
      uri: 'http://fgs.hou.edu.vn/',
    },
  ],
  [
    {
      name: 'TT tin học\nNN-BDNH',
      uri: 'http://ctc.hou.edu.vn/',
    },
    {
      name: 'TT HOU\nĐà Nẵng',
      uri: 'http://danang.hou.edu.vn/',
    },
  ],
];

export const test_home = {
  data_fa: [
    {
      title:
        'Đoàn Thanh niên Viện Đại học Mở Hà Nội kiện toàn Ban Chấp hành và Ban Thường vụ Khóa VIII',
      img: 'http://fot.hou.edu.vn/uploads/news/2019_05/1_14.jpg',
      uri:
        'https://hou.edu.vn/tin-tuc/334/doan-thanh-nien-vien-dai-hoc-mo-ha-noi-kien-toan-ban-chap-hanh-va-ban-thuong-vu-khoa-viii.html',
      time: '02/12/2018',
    },
    {
      title:
        '107 học viên tham gia Khóa Tập huấn về công tác đảm bảo chất lượng tại Trường Đại học Mở Hà Nội',
      img: 'http://fot.hou.edu.vn/uploads/news/2019_05/1_13.jpg',
      uri:
        'https://hou.edu.vn/tin-tuc/339/107-hoc-vien-tham-gia-khoa-tap-huan-ve-cong-tac-dam-bao-chat-luong-tai-truong-dai-hoc-mo-ha-noi.html',
      time: '17/12/2018',
    },
    {
      title:
        'Hội nghị Á - Âu về Học tập suốt đời và mục tiêu phát triển bền vững đến năm 2030 được tổ chức thành công tại Trường Đại học Mở Hà Nội',
      img: 'http://fot.hou.edu.vn/uploads/news/2019_05/1_12.jpg',
      uri:
        'https://hou.edu.vn/tin-tuc/338/hoi-nghi-a-au-ve-hoc-tap-suot-doi-va-muc-tieu-phat-trien-ben-vung-den-nam-2030-duoc-to-chuc-thanh-cong-tai-truong-dai-hoc-mo-ha-noi.html',
      time: '13/12/2018',
    },
    {
      title:
        'Hội thảo khoa học: Công nghệ sinh học và Công nghệ thực phẩm theo định hướng công nghiệp 4.0',
      img: 'http://kinhte.hou.edu.vn/files/anhbaiviet/Images/nckh2019_1.jpg',
      uri:
        'https://hou.edu.vn/tin-tuc/337/hoi-thao-khoa-hoc-cong-nghe-sinh-hoc-va-cong-nghe-thuc-pham-theo-dinh-huong-cong-nghiep-4-0.html',
      time: '10/12/2018',
    },
    {
      title:
        'Sinh viên Đại học Mở Hà Nội giành 02 Giải Ba khối chuyên tin tại Kỳ Olympic Tin học sinh viên Việt Nam lần thứ 27',
      img: 'http://www.fithou.edu.vn/userfiles/image/Logo/hinh1.JPG',
      uri:
        'https://hou.edu.vn/tin-tuc/335/sinh-vien-dai-hoc-mo-ha-noi-gianh-02-giai-ba-khoi-chuyen-tin-tai-ky-olympic-tin-hoc-sinh-vien-viet-nam-lan-thu-27.html',
      time: '05/12/2018',
    },
    {
      title:
        'Triển lãm Nghiêng 2 - Dấu ấn nghệ thuật trong lòng Viện Đại học Mở Hà Nội',
      img: 'http://www.fithou.edu.vn/userfiles/image/Logo/hinh1.JPG',
      uri:
        'https://hou.edu.vn/tin-tuc/332/trien-lam-nghieng-2-dau-an-nghe-thuat-trong-long-vien-dai-hoc-mo-ha-noi.html',
      time: '22/11/2018',
    },
    {
      title:
        'Viện Đại học Mở Hà Nội tập huấn, nâng cao chất lượng cán bộ công đoàn',
      img: 'http://www.fithou.edu.vn/userfiles/image/Logo/hinh1.JPG',
      uri:
        'https://hou.edu.vn/tin-tuc/304/vien-dai-hoc-mo-ha-noi-tap-huan-nang-cao-chat-luong-can-bo-cong-doan.html',
      time: '07/08/2018',
    },
    {
      title:
        'Viện Đại học Mở Hà Nội đón nhận Huân chương Lao động Hạng Nhì và Tổng kết 25 năm xây dựng và phát triển',
      img: 'http://www.fithou.edu.vn/userfiles/image/Logo/hinh1.JPG',
      uri:
        'https://hou.edu.vn/tin-tuc/327/vien-dai-hoc-mo-ha-noi-don-nhan-huan-chuong-lao-dong-hang-nhi-va-tong-ket-25-nam-xay-dung-va-phat-trien.html',
      time: '06/11/2018',
    },
  ],
  data_fb: [
    {
      info:
        'Thực hiện kế hoạch công tác năm 2019 của Trường Đại học Mở Hà Nội, ngày 06/4/2019, Nhà trường tổ chức Hội thảo về Công bố Quốc tế trong nghiên cứu khoa học. Hội thảo có sự tham dự của hơn 100 đại biểu là các nhà quản lý, nhà khoa học, giảng viên, học viên sau đại học trong và ngoài Trường.\n' +
        '\n' +
        'Phát biểu khai mạc, PGS.TS Nguyễn Thị Nhung – Phó Hiệu trưởng Nhà trường cho biết, tại trường Đại học Mở Hà Nội, song song với nhiều hoạt động đảm bảo chất lượng đào tạo, hoạt động công bố bài báo quốc tế đã được quan tâm, đầu tư. Nhà trường đưa ra các chính sách khen thưởng và hỗ trợ trực tiếp tác giả có bài viết công bố quốc tế; tổ chức tọa đàm, hội thảo chia sẻ kinh nghiệm công bố quốc tế; hỗ trợ giảng viên tham gia các khóa đào tạo về phương pháp nghiên cứu tiên tiến và trang bị kỹ năng cho công bố nghiên cứu khoa học trên tạp chí, hội thảo quốc tế.',
      img: null,
      avatar: require('../../assets/img/LogoHOU.png'),
      time: '02/12/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
    {
      info:
        'Phát biểu khai mạc, PGS.TS Nguyễn Thị Nhung - Phó Hiệu trưởng, Trưởng Ban Tổ chức cuộc thi cho biết: Nhà trường cam kết luôn tạo điều kiện để sinh viên có được môi trường phát triển toàn diện. Qua đó, nâng cao kiến thức, kỹ năng, giúp sinh viên khẳng định năng lực, có được công việc phù hợp khi ra trường, đặc biệt có thể khởi nghiệp ngay khi còn ngồi trên ghế giảng đường',
      img:
        'https://hou.edu.vn/files/anhbaiviet/Images/2018/Thang_11/25%20nam/Ky%20niem%2025%20nam%20VT%20Truong%20Tien%20Tung%201.jpg',
      avatar: require('../../assets/img/LogoHOU.png'),
      uri:
        'https://hou.edu.vn/tin-tuc/339/107-hoc-vien-tham-gia-khoa-tap-huan-ve-cong-tac-dam-bao-chat-luong-tai-truong-dai-hoc-mo-ha-noi.html',
      time: '17/12/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
    {
      info:
        'Phát biểu khai mạc, PGS.TS Nguyễn Thị Nhung – Phó Hiệu trưởng Nhà trường cho biết: Tại trường Đại học Mở Hà Nội, song song với nhiều hoạt động đảm bảo chất lượng đào tạo, Nhà trường luôn quan tâm và khuyến khích đội ngũ cán bộ, giảng viên trong lĩnh vực nghiên cứu khoa học, đặc biệt là những công trình nghiên cứu có tính ứng dụng thực tiễn. Ý thức được tầm quan trọng của sở hữu trí tuệ (SHTT) trong sự phát triển, Nhà trường mời những chuyên gia cùng trao đổi về sở hữu trí tuệ và quyền tác giả, nhằm thúc đẩy hơn nữa sự quan tâm, ý thức trách nhiệm của mỗi cán bộ, giảng viên nói riêng và của Nhà trường nói chung trong việc xác lập quyền sở hữu trí tuệ trong lĩnh vực Khoa học tự nhiên, Kỹ thuật, Công nghệ...(KHTN-KT-CN)',
      img: null,
      avatar: require('../../assets/img/LogoHOU.png'),
      uri:
        'https://hou.edu.vn/tin-tuc/338/hoi-nghi-a-au-ve-hoc-tap-suot-doi-va-muc-tieu-phat-trien-ben-vung-den-nam-2030-duoc-to-chuc-thanh-cong-tai-truong-dai-hoc-mo-ha-noi.html',
      time: '13/12/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
    {
      info:
        'Để ghi nhận những thành tích đó, Bộ trưởng Bộ Công an đã quyết định trao Kỷ niệm chương Bảo vệ an ninh Tổ quốc cho TS. Trương Tiến Tùng – Hiệu trưởng Trường Đại học Mở Hà Nội',
      img:
        'https://hou.edu.vn/files/anhbaiviet/Images/2018/Thang_11/25%20nam/Ky%20niem%2025%20nam%20VT%20Truong%20Tien%20Tung%201.jpg',
      avatar: require('../../assets/img/LogoHOU.png'),
      uri:
        'https://hou.edu.vn/tin-tuc/337/hoi-thao-khoa-hoc-cong-nghe-sinh-hoc-va-cong-nghe-thuc-pham-theo-dinh-huong-cong-nghiep-4-0.html',
      time: '10/12/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
    {
      info:
        'Hội nghị nhận được sự quan tâm tham gia của hơn 40 đại biểu quốc tế và 20 đại biểu trong nước là các nhà quản lý, nhà khoa học, trong đó có Trường Đại học Mở Philippines (University of  Philippines Open University - UPOU); Trường Đại học Mở Terbuka Indonesia (Universitas Terbuka – UT); Trường Đại học Mở Malaysia (Open University of Malaysia – OUM); Trường Đại học Mở Sukhothai Thammathirat, Thái Lan (Sukhothai Thammathirat Open University – STOU) và  Trường Đại học Mở Hà Nội (Hanoi Open University – HOU).',
      img:
        'https://hou.edu.vn/files/anhbaiviet/Images/2018/Thang_11/25%20nam/Ky%20niem%2025%20nam%20VT%20Truong%20Tien%20Tung%201.jpg',
      avatar: require('../../assets/img/LogoHOU.png'),
      uri:
        'https://hou.edu.vn/tin-tuc/335/sinh-vien-dai-hoc-mo-ha-noi-gianh-02-giai-ba-khoi-chuyen-tin-tai-ky-olympic-tin-hoc-sinh-vien-viet-nam-lan-thu-27.html',
      time: '05/12/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
    {
      info:
        'Trong cuộc họp, thành viên BTC cuộc thi đã thẳng thắn nêu những tồn tại cần khắc phục qua các kỳ thi trước, cũng như những đề xuất để cải thiện và nâng cao chất lượng cuộc thi như: Việc chuẩn bị cơ sở vật chất (hệ thống máy tính, đường truyền internet, phòng thi,…), cơ cấu của đề thi đảm bảo tương xứng với mục đích và ý nghĩa của cuộc thi, công tác tổ chức thi, quy định thể lệ cuộc thi…\n' +
        '\n' +
        'Trao đổi với đại diện các đơn vị, PGS.TS Nguyễn Thị Nhung - Phó Hiệu trưởng, Trưởng Ban Tổ chức Cuộc thi cho biết, Lãnh đạo Nhà trường cam kết luôn tạo điều kiện để sinh viên có được môi trường phát triển toàn diện. Qua đó, nâng cao kiến thức, kỹ năng, giúp sinh viên khẳng định năng lực, có được công việc phù hợp khi ra trường, đặc biệt có thể khởi nghiệp ngay khi còn ngồi trên ghế giảng đường. Những con số biết nói như: 95% sinh viên tốt nghiệp có việc làm ngay trong 1 năm đầu tiên, gần 10% sinh viên ra trường có khả năng tự tạo việc làm bằng các dự án khởi nghiệp...đã phần nào khẳng định chất lượng đào tạo của Trường Đại học Mở Hà Nội. Cuộc thi Olympic Tin học, Tiếng Anh không chuyên là một trong những hoạt động để khuyến khích sinh viên trau dồi kiến thức, kỹ năng, phát triển bản thân.',
      img: null,
      avatar: require('../../assets/img/LogoHOU.png'),
      uri:
        'https://hou.edu.vn/tin-tuc/332/trien-lam-nghieng-2-dau-an-nghe-thuat-trong-long-vien-dai-hoc-mo-ha-noi.html',
      time: '22/11/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
    {
      info:
        'Tham dự buổi lễ có TS. Trương Tiến Tùng - Phó bí thư Đảng ủy - Hiệu trưởng, PGS.TS Nguyễn Thị Nhung - Đảng ủy viên - Phó Hiệu trưởng, các thầy/cô đại diện cho Đảng ủy, Ban Giám hiệu, BCH Công đoàn, Đoàn TN, Lãnh đạo các Khoa, Phòng, Ban, Trung tâm, các cán bộ viên chức, giảng viên, đại diện các gia đình của sinh viên và trên 200 tân Cử nhân, tân Kỹ sư - Kiến trúc sư tốt nghiệp năm 2019 của Trường Đại học Mở Hà Nội.',
      img:
        'https://hou.edu.vn/files/anhbaiviet/Images/2018/Thang_11/25%20nam/Ky%20niem%2025%20nam%20VT%20Truong%20Tien%20Tung%201.jpg',
      avatar: require('../../assets/img/LogoHOU.png'),
      uri:
        'https://hou.edu.vn/tin-tuc/304/vien-dai-hoc-mo-ha-noi-tap-huan-nang-cao-chat-luong-can-bo-cong-doan.html',
      time: '07/08/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
    {
      info:
        'Thực hiện công văn số 858CV/ĐUK ngày 06 tháng 3 năm 2019 và hướng dẫn số 25-HD/ĐUK ngày 08 tháng 8 năm 2017 của Đảng ủy Khối các trường đại học, cao đẳng Hà Nội, sáng 20/3, Đảng bộ Trường Đại học Mở Hà Nội tổ chức Hội nghị rà soát, bổ sung quy hoạch cấp ủy và các chức danh cấp ủy nhiệm kỳ 2020-2025',
      img: null,
      avatar: require('../../assets/img/LogoHOU.png'),
      uri:
        'https://hou.edu.vn/tin-tuc/327/vien-dai-hoc-mo-ha-noi-don-nhan-huan-chuong-lao-dong-hang-nhi-va-tong-ket-25-nam-xay-dung-va-phat-trien.html',
      time: '06/11/2018',
      like: 25,
      share: 32,
      cmt: 74,
    },
  ],
};

export const button_task = [
  [
    {
      title: 'Phản hồi',
      icon: 'paper-plane',
      type_icon: 'font-awesome',
      size_icon: moderateScale(23),
      link_nav: 'Feedback_component',
    },
    // {
    //     title:"Hỗ trợ",
    //     icon:"help-box",
    //     type_icon:'material-community',
    //     size_icon:moderateScale(30),
    //     link_nav:"No_fun"
    // },
    {
      title: 'Thông tin ứng dụng',
      icon: 'info-with-circle',
      size_icon: moderateScale(23),
      type_icon: 'entypo',
      link_nav: 'About_app_component',
    },
  ],
  [
    {
      title: 'Cài đặt',
      icon: 'settings',
      type_icon: 'material-community',
      size_icon: moderateScale(30),
      link_nav: 'Setting_component',
    },
    {
      title: 'Đổi mật khẩu',
      icon: 'lock-reset',
      type_icon: 'material-community',
      size_icon: moderateScale(30),
      link_nav: 'Change_password_component',
    },
    {
      title: 'Đăng xuất',
      icon: 'sign-out',
      type_icon: 'font-awesome',
      size_icon: moderateScale(30),
      link_nav: 'No_fun',
    },
  ],
];

export const icon_feedback = [
  {
    index: 0,
    icon: 'frown',
    title:
      'Rất tệ!\nChúng tôi rất lấy làm tiếc\nHãy phản hồi lại cho chúng tôi!',
  },
  {
    index: 1,
    icon: 'frown-open',
    title:
      'Khá tệ!\nChúng tôi xin lỗi vì sự không hài lòng\nHãy giúp chúng tôi cải thiện!',
  },
  {
    index: 2,
    icon: 'meh',
    title:
      'Bình thường!\nCảm ơn đánh giá\nChúng tôi có thể làm tốt hơn như thế nào?',
  },
  {
    index: 3,
    icon: 'smile',
    title:
      'Khá tốt!\nĐó là một lời động viên quý giá\nMột gợi ý để chúng tôi tốt hơn!',
  },
  {
    index: 4,
    icon: 'laugh',
    title:
      'Rất tốt!\nThật tuyệt khi biết điều đó\nTiếp tục ủng hộ chúng tôi nhé!',
  },
];

export const type_feedback = [
  {
    index: 0,
    title: 'Hài lòng!',
    place_holder: 'Chút phản hồi để nâng cao sự hài lòng của bạn...',
  },
  {
    index: 1,
    title: 'Báo lỗi!',
    place_holder: 'Thật tệ, bạn gặp lỗi gì với MyHOU...',
  },
  {
    index: 2,
    title: 'Yêu cầu giao diện!',
    place_holder: 'Bạn có yêu cầu như nào về giao diện...',
  },
  {
    index: 3,
    title: 'Yêu cầu tính năng!',
    place_holder: 'Ý kiến của bạn như nào về tính năng...',
  },
  {
    index: 4,
    title: 'Phản hồi khác!',
    place_holder: 'Bạn muốn phản hồi điều gì với chúng tôi...',
  },
];

export const error_change_pass = {
  tooltip_false:
    'Mật khẩu trong khoảng 6 đến 20 ký tự với tối thiểu một kí tự viết hoa,một kí tự viết thường và một chữ số!',
  tooltip_empty: 'Mật khẩu không được trống!',
  tooltip_same_old: 'Mật khẩu mới không được giống mật khẩu hiện tại!',
  tooltip_same_new: 'Mật khẩu xác nhận phải giống với mật khẩu mới!',
};

export const array_setting = [
  '@Setting_Start_Screen',
  '@Setting_Tooltip_Color',
  '@Setting_Notification_Choice',
  '@Setting_Save_User',
  '@Setting_Color',
];

export const objects_setting = {
  Fisrt_open: '@Fisrt_open',
  Setting_Start_Screen: '@Setting_Start_Screen',
  Setting_Tooltip_Color: '@Setting_Tooltip_Color',
  Setting_Notification_Choice: '@Setting_Notification_Choice',
  Setting_Save_User: '@Setting_Save_User',
  Restore_Settings: 'Restore_Settings',
  Setting_Color: '@Setting_Color',
};

export const button_setting = [
  // Cài đặt giao diện
  {
    name_subject: 'Giao diện',
    detail_subject: [
      {
        name_setting: objects_setting.Setting_Start_Screen,
        type_setting: 'Radio',
        title: 'Màn hình chính',
        icon: 'cellphone-screenshot',
        type_icon: 'material-community',
        size_icon: moderateScale(25),
        detail_setting: {
          list_value: [
            {
              title: 'Tin tức',
              value: 'HomePages',
            },
            {
              title: 'Cá nhân',
              value: 'User_Pages',
            },
            // {
            //     title:'Chat',
            //     value:'chat'
            // },
            {
              title: 'Tiện ích',
              value: 'Utilities_Pages',
            },
            {
              title: 'Tác vụ',
              value: 'Tasks_Pages',
            },
          ],
        },
      },
      {
        name_setting: objects_setting.Setting_Color,
        type_setting: 'ColorPicker',
        title: 'Bộ màu ứng dụng',
        icon: 'color-lens',
        type_icon: 'material',
        size_icon: moderateScale(25),
        detail_setting: {
          list_value: [
            {
              value: 'Light_blue',
              color: Light_blue.blue_main,
            },
            {
              value: 'Medium_blue',
              color: Medium_blue.blue_main,
            },
            {
              value: 'Dark_blue',
              color: Dark_blue.blue_main,
            },
          ],
          list_img: {
            Light_blue: require('../../assets/img/Light_blue_user.png'),
            Medium_blue: require('../../assets/img/Medium_blue_user.png'),
            Dark_blue: require('../../assets/img/Dark_blue_user.png'),
          },
        },
      },
      {
        name_setting: objects_setting.Setting_Tooltip_Color,
        type_setting: 'RadioPickerImage',
        title: 'Bộ màu nhắc nhở',
        icon: 'tooltip-text',
        type_icon: 'material-community',
        size_icon: moderateScale(24),
        detail_setting: {
          list_value: [
            {
              value: 'Multi',
              title:'Đa sắc',
            },
            {
              value: 'Single',
              title:'Đơn sắc (theo bộ màu)',
            },
          ],
          list_img: {
            Multi: require('../../assets/img/color_tooltip_multi.png'),
            Single: require('../../assets/img/color_tooltip_single.png'),
          },
        },
      },
    ],
  },

  // Cài đặt hệ thống
  {
    name_subject: 'Hệ thống',
    detail_subject: [
      {
        name_setting: objects_setting.Setting_Notification_Choice,
        type_setting: 'CheckBox',
        title: 'Thông báo',
        icon: 'settings',
        type_icon: 'material-community',
        size_icon: moderateScale(25),
        detail_setting: {
          list_value: [
            {
              title: 'Tin tức mới',
              value: '1',
            },
            {
              title: 'Lịch học',
              value: '2',
            },
            {
              title: 'Kết quả học tập',
              value: '3',
            },
            {
              title: 'Nhắc nhở',
              value: '4',
            },
          ],
        },
      },
      {
        name_setting: objects_setting.Restore_Settings,
        type_setting: 'YesNo',
        title: 'Khôi phục cài đặt gốc',
        icon: 'backup-restore',
        type_icon: 'material-community',
        size_icon: moderateScale(25),
        detail_setting: {
          content:
            'Việc khôi phục cài đặt gốc sẽ xoá toàn bộ các cài đặt trước của bạn và đưa ứng dụng về trạng thái ban đâu. Bạn có chắc chắn muốn khôi phục?',
          icon: 'warning',
          button_title: 'Khôi phục',
          color:"blue_7",
        },
      },
    ],
  },

  // Cài đặt người dùng
  {
    name_subject: 'Tài khoản',
    detail_subject: [
      {
        name_setting: objects_setting.Setting_Save_User,
        type_setting: 'Switch',
        title: 'Lưu tài khoản',
        icon: 'folder-account',
        type_icon: 'material-community',
        size_icon: moderateScale(25),
        link_nav: 'Setting',
      },
    ],
  },
];

export const default_setting = {
  [objects_setting.Setting_Start_Screen]: 'HomePages',
  [objects_setting.Setting_Tooltip_Color]: 'Multi',
  [objects_setting.Setting_Notification_Choice]: '1234',
  [objects_setting.Setting_Save_User]: 'true',
  [objects_setting.Setting_Color]: 'Medium_blue',
};

export const default_array_setting = [
  [objects_setting.Fisrt_open, 'done'],
  [objects_setting.Setting_Start_Screen, 'HomePages'],
  [objects_setting.Setting_Tooltip_Color, 'Multi'],
  [objects_setting.Setting_Notification_Choice, '1234'],
  [objects_setting.Setting_Save_User, 'true'],
  [objects_setting.Setting_Color, 'Medium_blue'],
];

export const convert_value_setting = {

  // Các màn hình
  HomePages: 'Tin tức',
  User_Pages: 'Cá nhân',
  // "":"",
  Utilities_Pages: 'Tiện ích',
  Tasks_Pages: 'Tác vụ',

  // Bộ màu
  Dark_blue: Dark_blue.blue_main,
  Medium_blue: Medium_blue.blue_main,
  Light_blue: Light_blue.blue_main,

  // Màu của tooltip/toast
  Multi:'Đa sắc',
  Single:'Đơn sắc'
};
