import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Lop2 extends React.Component {

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
                                    Chương Trình Lớp Hai
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    Sau khi học xong Lớp Hai, các em sẽ biết:
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <ol>
                                        <li style={{padding: "10px"}}>
                                        Đọc và viết thông thạo và ghép vần tiếng Việt Nam (eo, êu, iu, ec, oc, ôc,
                                        ia, oa, oe, oi, ôi, ơi, om, ôm, ơm, on, ôn, ơn, op, ôp, ơp, ot, ôt, ơt, ua, ưa,
                                        uc, ưc, ui, ưi, uy, um, un, uê, up, ut, ưt)
                                        </li>
                                    
                                        <li style={{padding: "10px"}}>
                                        Ráp vần và đặt câu bằng miệng:
                                        eo - leo trèo, êu - áo thêu, iu - nhỏ xíu,
                                        ec - con kéc, oc - bé khóc, ôc - gốc cây,
                                        ia - đỏ tía, oa - hoa huệ, oe - tròn xoe,
                                        oi - con voi, ôi - ông nội, ơi - lá rơi,
                                        om - om sòm, ôm - bé ốm, ơm - nồi cơm,
                                        on - trẻ con, ôn - bận rộn, ơn - to lớn,
                                        op - tập họp, ôp - hộp thư, ơp - lớp học,
                                        ot - bánh ngọt, ôt - bạn tốt, ớt - ớt cay,
                                        ưa - ngủ trưa, uc - cây trúc, ưc - nóng bức,
                                        ui - gặp xui, ưi - mũi ngửi, uy - bị quỳ,
                                        um - lùm cây, un - ăn bún, uê - về quê,
                                        up - túp lều, ut - lũ lụt, ưt - đứt tay
                                        
                                        </li>
                                        <li style={{padding: "10px"}}>Học thuộc lòng những bài ngắn như: Con Mèo, Mèo Kêu, Còn Bé, Mưa lớn, ... </li>
                                        <li style={{padding: "10px"}}>Chính tả, tập đọc đoạn văn ngắn 4-5 dòng: Về Quê Chơi, Bé Khỏe, ...</li>
                                    <li style={{padding: "10px"}}>Tập viết nguyên câu ngắn</li>
                                    <li style={{padding: "10px"}}>Điền vào chỗ trống cho hợp nghĩa</li>
                                    <li style={{padding: "10px"}}>Học đếm số từ 20 đến 30, 40 … 100</li>
                                    <li style={{padding: "10px"}}>Học Huyền sử (Sự Tích Trầu Cau, Bánh Chưng Bánh Dầy)</li>
                                    <li style={{padding: "10px"}}>Học Địa lý (bờ biển, khí hậu Việt Nam)</li>
                                    <li style={{padding: "10px"}}>Làm bài và nộp bài đầy đủ và đúng kì hạn do thầy cô yêu cầu</li>
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

export default Lop2;