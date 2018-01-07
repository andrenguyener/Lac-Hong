import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Lopk extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <table className="stack unstriped">
                        <tbody>
                            <tr>
                                <td align="center" style={{color: "#FF0000", fontSize: "16px", fontWeight: "bold"}}>
                                Chương Trình Lớp Mẫu Giáo
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                Sau khi học xong Lớp Mẫu Giáo, các em sẽ biết:
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <ol>
                                        <li style={{padding: "10px"}}>Đọc và viết thông thạo: dấu, nguyên âm đơn và phụ âm đơn của tiếng Việt Nam (a,
                                            ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, ph, q, qu, r, s, t, u,
                                            ư, v, x, y) </li>
                                        <li style={{padding: "10px"}}>Đọc và viết thông thạo: phụ âm kép của tiếng Việt Nam (ch, gh, gi, kh, ng, ngh,
                                            nh, ph, qu, th, tr) </li>
                                        <li style={{padding: "10px"}}>Ráp vần và đặt câu bằng miệng: bé, có, đi, mẹ, ba, dê, dế, ngũ, khi, nhà, ...
                                        </li>
                                        <li style={{padding: "10px"}}>Học thuộc lòng những bài ngắn như: Em Yêu Mến, Hò Leo Núi, Gà Gáy, ... </li>
                                        <li style={{padding: "10px"}}>Ráp từ đúng với hình vẽ </li>
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

export default Lopk;