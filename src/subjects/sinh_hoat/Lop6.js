import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Lop6 extends React.Component {

    componentDidMount() {
        // $(document).foundation();
    }

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <table className="stack unstriped">
                        <tbody>
                            <tr>
                                <td align="center" style={{color: "#FF0000", fontSize: "16px", fontWeight: "bold"}}>
                                Chương Trình Lớp Sáu
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                Sau khi học xong Lớp Sáu, các em sẽ biết:
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                <ol>
                                    <li style={{padding: "10px"}}>Tập đọc, Chính Tả, tìm đại ý. Giải nghĩa và đặt câu</li>
                                    <li style={{padding: "10px"}}>Điền vào chỗ trống</li>
                                    <li style={{padding: "10px"}}>
                                    Học đối thoại: phong tục, tập quán, trang phục, quê hương, lễ lộc, gia tộc,
                                    gia đình, thức ăn Việt Nam
                                    </li>
                                    <li style={{padding: "10px"}}>Học thuộc lòng</li>
                                    <li style={{padding: "10px"}}>Đồng nghĩa, phản nghĩa</li>
                                    <li style={{padding: "10px"}}>
                                    Học văn phạm (tiếng “vì”, “mà”, “bị”, bởi”, “được”, “thì” loại từ chung và
                                    loại từ riêng, chủ từ, thành phần của một câu, dấu phảy, dấu chấm câu, dấu chấm hỏi, dấu than, dấu hai
                                    chấm, dấu ngoặc kép)
                                    </li>
                                    <li style={{padding: "10px"}}>Tập làm văn (cấu kết một bài văn, tả đồ vật, động vật)</li>
                                    <li style={{padding: "10px"}}>
                                    Việt sử (Trịnh Nguyễn phân tranh, nhà Tây Sơn, vua Quang Trung và chiến
                                    thắng Đống Đa, nhà Nguyễn, các vua nhà Nguyễn trước thời Pháp thuộc, Việt Nam 80 năm
                                    lệ thuộc thực dân Pháp, vận mệnh đất nước buổi giao thời, Một nước hai
                                    chính thể)
                                    </li>
                                    <li style={{padding: "10px"}}>
                                    Địa lý Việt Nam (công viên Quốc Gia, , vẽ bản đồ Việt Nam, hải đảo Việt
                                    Nam, bãi biển Việt Nam, vị trí nước Việt Nam, núi biển va suối thiên nhiên Việt
                                    Nam, sông ngòi Việt Nam)
                                    </li>
                                    <li style={{padding: "10px"}}>Chuyện cổ tích, sự tích Việt Nam, chuyện vui,</li>
                                    <li style={{padding: "10px"}}>Thơ Lục Bát, Lục Bát biến thể</li>
                                    <li style={{padding: "10px"}}>
                                    Học ca dao, thành Ngữ, tục ngữ, danh ngôn, sự phong phú tuyệt vời của ngôn
                                    ngữ Việt Nam.
                                    </li>
                                    <li style={{padding: "10px"}}>Làm bài và nộp bài đầy đủ và đúng kì hạn do thầy cô yêu cầu</li>
                                    <li style={{padding: "10px"}}>Hoàn tất 2 kì thi : học kì 1 và học kì 2</li>
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