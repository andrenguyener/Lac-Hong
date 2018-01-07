import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
import $ from 'jquery';
require('foundation-sites');




class Lop1 extends React.Component {

    componentDidMount() {
        $(document).foundation();
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
                                Chương Trình Lớp Một
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                Sau khi học xong Lớp Một, các em sẽ biết:
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <ol>
                                        <li style={{padding: "10px"}}>
                                        Đọc và viết thông thạo: nguyên âm và phụ âm kép của tiếng Việt Nam (ai,
                                        ay, ây, am, ăm, âm, an, ăn, ân, ao, au, âu, ac, ăc, âc, ap, ăp, âp, at, ăt, ât,
                                        em, êm, im, en, ên, in, ep, êp, ip, et, êt, it)
                                        </li>
                                        
                                        <li style={{padding: "10px"}}>
                                        Ráp vần và đặt câu bằng miệng:
                                        ai - vai phải, ay - hôm nay, ây - thầy cô,
                                        am - trái cam, ăm - nắm xôi, âm - ngậm tăm,
                                        an - đàn hát, ăn - chăn trâu, ân - tay chân,
                                        ao - chào hỏi, au - lên tàu, âu - ở đâu,
                                        ac - nghe nhạc, ăc - mặc áo, âc - xôi gấc,
                                        ap - xe đạp, ăp - hạt bắp, âp - béo mập,
                                        at - hạt sen, ăt - bắt cá, ât - giật câu,
                                        em - thèm ăn, êm - nằm nệm, im - tổ chim,
                                        en - hoa sen, ên - Tên em, in - xin tiền,
                                        ep - ngõ hẹp, êp - đèn xếp, ip - rộn rịp,
                                        et - nghẹt mũi, êt - Sơn phết, it - trái mít
                                        </li>
                                        <li style={{padding: "10px"}}>Học thuộc lòng những bài ngắn như: Tiếng Việt Mến Yêu, Má và Mai, Nhà Em, ... </li>
                                        <li style={{padding: "10px"}}>Chính tả, tập đọc đoạn văn ngắn 4-5 dòng</li>
                                        <li style={{padding: "10px"}}>Điền vào chỗ trống cho hợp nghĩa</li>
                                    <li style={{padding: "10px"}}>Học đếm số từ 1 đến 20</li>
                                    <li style={{padding: "10px"}}>Học Huyền sử (Con Rồng Cháu Tiên, Chử Đồng Tử)</li>
                                    <li style={{padding: "10px"}}>Học Địa lý (hình dạng và vị trí nước Việt Nam)</li>
                                    <li style={{padding: "10px"}}>Làm bài và nộp bài đầy đủ và đúng kì hạn do thầy cô yêu cầu</li>
                                    <li style={{padding: "10px"}}>Hoàn tất 2 kì thi : học kì 1 và học kì 2</li>
                                    </ol>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <embed src="/contents/Classrooms/Lop1/lop12015-2016.pdf" type='application/pdf' className="page_pdf"/>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Lop1;