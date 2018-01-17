import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';

class Lopk extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <table className="stack unstriped">
                        <tbody>
                            <tr>
                                <td className="page-text-header">
                                Chương Trình Lớp Mẫu Giáo
                                </td>
                            </tr>
                            <tr>
                                <td className="page-text-subheader">
                                Sau khi học xong Lớp Mẫu Giáo, các em sẽ biết:
                                </td>
                            </tr>
                            <tr>
                                <td className="page-text-subheader">
                                    <ol>
                                        <li>Đọc và viết thông thạo: dấu, nguyên âm đơn và phụ âm đơn của tiếng Việt Nam (a,
                                            ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, ph, q, qu, r, s, t, u,
                                            ư, v, x, y) </li>
                                        <li>Đọc và viết thông thạo: phụ âm kép của tiếng Việt Nam (ch, gh, gi, kh, ng, ngh,
                                            nh, ph, qu, th, tr) </li>
                                        <li>Ráp vần và đặt câu bằng miệng: bé, có, đi, mẹ, ba, dê, dế, ngũ, khi, nhà, ...
                                        </li>
                                        <li>Học thuộc lòng những bài ngắn như: Em Yêu Mến, Hò Leo Núi, Gà Gáy, ... </li>
                                        <li>Ráp từ đúng với hình vẽ </li>
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

export default Lopk;