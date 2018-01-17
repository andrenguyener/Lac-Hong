import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';

class Leaders extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page leaders">
                    <h4>Ban Điều Hành (Board of Directors)</h4>
                        <table className="table_main stack">
                            <tbody>
                                <tr>
                                    <td>Chủ Tịch (President)</td>
                                    <td>Cô Phạm thị Mơ</td>
                                    <td>phammot@gmail.com</td>
                                    <td>425-367-2112</td>
                                </tr>                        
                                <tr>
                                    <td>Hiệu Trưởng (Principle)</td>
                                    <td>Thầy Trần Quang Huyên</td>
                                    <td>huyenquangtran@gmail.com</td>
                                    <td>425-367-8790 </td>
                                </tr>
                                <tr>
                                    <td>Thơ Ký (Secretary)</td>
                                    <td>Thầy Đặng Khôi</td>
                                    <td>kennethdang999@hotmail.com</td>
                                    <td>425-409-8874</td>
                                </tr>
                                <tr>
                                    <td>Thủ Quỷ (Treasurer)</td>
                                    <td>Cô Vũ Bích Diễm Quỳnh</td>
                                    <td>quynh_vu@yahoo.com</td>
                                    <td>206-898-0617</td>
                                </tr>
                                <tr>
                                    <td>Cố Vấn ̣̣(Consultant)</td>
                                    <td>Nguyễn Kim Di</td>
                                    <td>dikimnguyen@gmail.com</td>
                                    <td>425-301-4964 </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <p>&nbsp;</p>
                        <h4>Ban Giảng Huấn (Teachers)</h4>
                        <div className="table-scroll">
                            <table className="table_main_teachers stack">
                                <thead>
                                    <tr>
                                        <th>Lớp Học</th>
                                        <th>Thầy Cô</th>
                                        <th>Sách</th>
                                        <th>Room</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Phụ Lớp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lớp Mẫu giáo Nhỏ</td>
                                        <td>Cô Phạm Thị Mơ</td>
                                        <td>Cấp 1-2</td>
                                        <td>B141</td>
                                        <td>phammot@gmail.com</td>
                                        <td>425-367-2112 </td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Cô Hải Âu</td>
                                                        <td></td>
                                                        <td>206-354-0113</td>                            
                                                    </tr>
                                                    <tr>
                                                        <td>Cô Vân Anh</td>
                                                        <td>vananhn9@gmail.com</td>
                                                        <td>425-493-6383</td>                            
                                                    </tr>
                                                    <tr>
                                                        <td>Cô Oanh</td>
                                                        <td></td>
                                                        <td></td>                            
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp Mẫu giáo Lớn</td>
                                        <td>Thầy Nguyễn Đại Dương</td>
                                        <td>Cấp 1-2</td>
                                        <td>B177</td>
                                        <td>nguyendaiduong@hotmail.com</td>
                                        <td>425-405-0438</td>
                                        <td>                 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp Một</td>
                                        <td>Thầy Trần Quang Huyên</td>
                                        <td>Cấp 3</td>
                                        <td>B151</td>
                                        <td>huyenquangtran@gmail.com</td>
                                        <td>425-367-8790 </td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Cô Kim Chi</td>
                                                        <td>kimchiphan@gmail.com</td>                            
                                                        <td>425-289-6487 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>425-289-6487</td>
                                                        <td></td>                            
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp Một</td>
                                        <td>Cô Lê Thị Ánh-Vân</td>
                                        <td>Cấp 3</td>
                                        <td>B124</td>
                                        <td>anhvan80le@yahoo.com</td>
                                        <td>425-344-3093</td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Em Ý Nhi</td>
                                                        <td></td>                            
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Em Đại</td>
                                                        <td></td>                            
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp Hai</td>
                                        <td>
                                            <div>Thầy Nguyễn Hoàng Lân</div>
                                            <div>Cô Thuận</div>
                                        </td>
                                        <td>Cấp 4</td>
                                        <td>B130</td>
                                        <td>lankhanhbibe@hotmail.com</td>
                                        <td>206-734-0161</td>                
                                        <td>                  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp Ba</td>
                                        <td>Thầy Đặng Minh</td>
                                        <td>Cấp 5</td>
                                        <td>B155</td>
                                        <td>minhdang7@gmail.com</td>
                                        <td>206-859-8289</td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Thầy Sơn</td>
                                                        <td></td>                            
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cô Cẩm Thi</td>
                                                        <td></td>                            
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp Bốn</td>
                                        <td>Cô Hoa (Cyndee)</td>
                                        <td>Cấp 6</td>
                                        <td>B144</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Cô Linh</td>
                                                        <td></td>                            
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp 5</td>
                                        <td>Cô Vĩnh Ninh</td>
                                        <td>Cấp 7-8</td>
                                        <td>B152</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Cô Nguyệt</td>
                                                        <td></td>                            
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lớp 6</td>
                                        <td>Thầy Nguyễn Quang Tuấn</td>
                                        <td>Cấp 9-10</td>
                                        <td>A130</td>
                                        <td>quangtuan1955@gmail.com</td>
                                        <td>425-353-0784</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>&nbsp;</p>            
                        <h4>Hội Phụ Huynh Học Sinh  ( PTA )</h4>
                        <table className="table_main stack">
                            <tbody>
                                <tr>
                                    <td>Anh Nguyễn Tommy</td>
                                    <td>Tommy98208@gmail.com</td>
                                    <td>425-268-1135</td>
                                </tr>
                                <tr>
                                    <td>Anh Mike Vo</td>
                                    <td>mikevo911@gmail.com</td>
                                    <td>425-945-3139</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>&nbsp;</p>
                        <h4>Ban Văn Nghệ (Music)</h4>
                        <table className="table_main stack">
                            <tbody>
                                <tr>
                                    <td>Nguyễn Phương Khanh</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Hà Huy</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Hà Thiên Vân</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Thanh Thủy Suzanna</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Leaders;
    