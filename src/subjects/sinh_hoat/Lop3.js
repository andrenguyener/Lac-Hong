import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';

class Lop3 extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <table className="stack unstriped">
                        <tbody>
                            <tr>
                                <td className="page-text-header">
                                    Chương Trình Lớp Ba
                                </td>
                            </tr>
                            <tr>
                                <td className="page-text-subheader">
                                    Sau khi học xong Lớp Ba, các em sẽ biết:
                                </td>
                            </tr>
                            <tr>
                                <td className="page-text-subheader">
                                    <ol>
                                        <li>
                                        Đọc và viết thông thạo: nguyên âm và phụ âm kép của tiếng Việt Nam
                                        (anh, ach, ênh, êch, inh, ích, ang, eng, ăng, âng, ong, ông, ung, ưng, iêc,
                                        iêp, iên, iêm, yêm, iêu, yêu, iêt, yêt, iêng, yêng)
                                        </li>
                                    
                                        <li>
                                            Ráp vần và đặt câu bằng miệng:
                                            anh - bánh mì, ach - sách vở,
                                            ênh - bệnh cúm, êch - con ếch,
                                            inh - bình minh, ich - xích đu,
                                            ang  ngày tháng, eng - cái xẻng,
                                            ăng - mặt trăng, âng - vâng lời,
                                            ong - bong bóng, ông - ông bà,
                                            ung - Tết Trung Thu, ưng = bánh chưng,
                                            iêc - tiệc cưới, iêp - thiệp mời,
                                            iên - hiền lành, iêm - điểm danh,
                                            yêm - cái yếm, iêu - cái diều,
                                            yêu - yêu mến, iêt - Việt Nam,
                                            yêt - yết hầu (cuống họng), yêng - chim yểng (con sáo),
                                            iêng - cái miệng
                                        </li>
                                        <li>
                                            Đọc và viết thông thạo: nguyên âm và phụ âm kép của tiếng Việt Nam (oai, oan, oac, oat, oăn, oăt,
                                            oanh, oach, oang, oăng, uân, uât, uây, uâng, uôi, uôm, uôc, uôt, uôn, uông,
                                            ươi, ươn, ươc, ươt)
                                        </li>
                                        <li>
                                            Ráp vần và đặt câu bằng miệng:
                                            oai - điện thoại, oan - làm toán,
                                            oac - khoác áo, oat - kiểm soát,
                                            oăn - băn khoăn, oăt - nhọn hoắt,
                                            oanh - khoanh tay, oach - kế hoạch,
                                            oang - hoang phí, oăng - liến thoắng,
                                            uân - mùa xuân, uât - luật sư,
                                            uây - quây quần, uâng - bâng khuâng,
                                            uôi - dòng suối, uôm - ghe buồm,
                                            uôc - thuộc bài, uôt - con chuột,
                                            uôn - buồn ngủ, uông - chuồng gà,
                                            ươi - tưới hoa, ươu - con hươu,
                                            ươc - dược sĩ, ươt - trượt nước,
                                        </li>
                                        <li>Học thuộc lòng những bài ngắn </li>
                                        <li>Chính tả và tập đọc bài d ài từ 8 đến 10 dòng, giải nghĩa, tìm đại ý bài</li>
                                        <li>Điền vào chỗ trống cho hợp nghĩa</li>
                                        <li>Đặt câu, tìm từ đồng nghĩa và phản nghĩa</li>
                                        <li>Định nghĩa chữ khó</li>
                                        <li>Học các tháng, năm</li>
                                        <li>Học đối thoại (công dân giáo dục)</li>
                                        <li>
                                            Việt sử (Phù Đổng Thiên Vương, Sự Tích Quả Dưa Hấu, Sơn Tinh Thủy
                                            Tinh, Lý Ông Trọng, Nguyễn Bỉnh Khiêm, Bố Cái Đại Vương, Ngô Quyền và Trận Bạch Đằng, Đinh Bộ
                                            Lĩnh, Lê Đại Hành)
                                        </li>
                                        <li>Địa lý (núi non, đồng bằng, sông ngòi Việt Nam, Kinh tế, nông nghiệp, chăn nuôi, bản đồ Việt Nam)</li>
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

export default Lop3;