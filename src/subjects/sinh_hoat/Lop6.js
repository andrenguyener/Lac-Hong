import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';

class Lop6 extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <table className="stack unstriped">
                        <tbody>
                            <tr>
                                <td className="page-text-header">
                                Chương Trình Lớp Sáu
                                </td>
                            </tr>
                            <tr>
                                <td className="page-text-subheader">
                                Sau khi học xong Lớp Sáu, các em sẽ biết:
                                </td>
                            </tr>
                            <tr>
                                <td className="page-text-subheader">
                                <ol>
                                    <li>Tập đọc, Chính Tả, tìm đại ý. Giải nghĩa và đặt câu</li>
                                    <li>Điền vào chỗ trống</li>
                                    <li>
                                    Học đối thoại: phong tục, tập quán, trang phục, quê hương, lễ lộc, gia tộc,
                                    gia đình, thức ăn Việt Nam
                                    </li>
                                    <li>Học thuộc lòng</li>
                                    <li>Đồng nghĩa, phản nghĩa</li>
                                    <li>
                                    Học văn phạm (tiếng “vì”, “mà”, “bị”, bởi”, “được”, “thì” loại từ chung và
                                    loại từ riêng, chủ từ, thành phần của một câu, dấu phảy, dấu chấm câu, dấu chấm hỏi, dấu than, dấu hai
                                    chấm, dấu ngoặc kép)
                                    </li>
                                    <li>Tập làm văn (cấu kết một bài văn, tả đồ vật, động vật)</li>
                                    <li>
                                    Việt sử (Trịnh Nguyễn phân tranh, nhà Tây Sơn, vua Quang Trung và chiến
                                    thắng Đống Đa, nhà Nguyễn, các vua nhà Nguyễn trước thời Pháp thuộc, Việt Nam 80 năm
                                    lệ thuộc thực dân Pháp, vận mệnh đất nước buổi giao thời, Một nước hai
                                    chính thể)
                                    </li>
                                    <li>
                                    Địa lý Việt Nam (công viên Quốc Gia, , vẽ bản đồ Việt Nam, hải đảo Việt
                                    Nam, bãi biển Việt Nam, vị trí nước Việt Nam, núi biển va suối thiên nhiên Việt
                                    Nam, sông ngòi Việt Nam)
                                    </li>
                                    <li>Chuyện cổ tích, sự tích Việt Nam, chuyện vui,</li>
                                    <li>Thơ Lục Bát, Lục Bát biến thể</li>
                                    <li>
                                    Học ca dao, thành Ngữ, tục ngữ, danh ngôn, sự phong phú tuyệt vời của ngôn
                                    ngữ Việt Nam.
                                    </li>
                                    <li>Làm bài và nộp bài đầy đủ và đúng kì hạn do thầy cô yêu cầu</li>
                                    <li>Hoàn tất 2 kì thi : học kì 1 và học kì 2</li>
                                </ol>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Lop6;