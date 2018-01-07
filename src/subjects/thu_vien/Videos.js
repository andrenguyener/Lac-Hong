import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';



class Videos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectValue: ""}
        this.onChange = this.getVideo.bind(this);
    }
        
    componentDidMount() {
        
    }

    getVideo(event) {
        // const {value} = event.selectedIndex.value;
        // if(this.mediaFrame) {
        //     this.mediaFrame.src = value;
        // }
        this.setState({selectValue: event.target.value});
    }

    render() {
        return (
            <div id="videoSection"> 
                <Navbar></Navbar>
                <div className="page menu_pdf">
                    <div className="grid-x grid-margin-x footer">
                        <div className="cell small-12 med-large-4">
                            <div className="" style={{overflow: "auto"}}>
                                <div className="videoOptions">
                                    <h5>Sinh Hoạt: </h5>
                                    <select id="SinhHoatList" value={this.state.selectValue} onChange={this.onChange}>
                                        <option value="" defaultValue>Xin chọn video</option>
                                        <option value="https://www.youtube.com/embed/Pt9Y8woy_ys">Chúc Tết 2016 (Seattle Center)</option>
                                        <option value="https://www.youtube.com/embed/EQQPFGjI7lM">Duyên Quê - (Tết 2016 Seattle Center)</option>
                                        <option value="https://www.youtube.com/embed/nbxmMR6ur1Y">Lễ Mãn Khóa 2014</option>
                                        <option value="https://www.youtube.com/embed/403kNk4O_Oo">Tiệc Gây Quỹ 1/2 - 22/3/2014</option>
                                        <option value="https://www.youtube.com/embed/o0APwyJVeos">Tiệc Gây Quỹ 2/2 - 22/3/2014</option>
                                        <option value="https://www.youtube.com/embed/M2Z85ix5YHY">Tết Giáp Ngọ - 25/1/2014</option>
                                        <option value="https://www.youtube.com/embed/o5-Kdd-Mc2E">Tết Giáp Ngọ tại Seattle Center - 26/1/2014</option>
                                        <option value="https://www.youtube.com/embed/dahd0RQAgq0">Lễ Mãn Khóa 2013 (1/2) - 15/6/2013</option>
                                        <option value="https://www.youtube.com/embed/oOH7KXgUGZo">Lễ Mãn Khóa 2013 (2/2) - 15/6/2013</option>
                                        <option value="https://www.youtube.com/embed/CCU68Wu-17I">Các em trình diễn Tết tại Seattle Center - 17/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/UQjElm10hdE">Các em trình diễn Tết tại Seattle Center - 16/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/GlnGRg_ddPA">Múa Quạt - Tết Seattle Center (17/2/2013)</option>
                                        <option value="https://www.youtube.com/embed/Ai24HVwJXOY">Múa Dù - Tết Seattle Center (17/2/2013)</option>
                                        <option value="https://www.youtube.com/embed/MATSzbFkmu4">Múa Chiếc Áo Bà Ba - Tết Seattle Center (17/2/2013)</option>
                                        <option value="https://www.youtube.com/embed/MSNr6bIMm80">Chúc tết - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/mgz59EQXgrU">Chúc Tết - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/Z9RLq6Vtxng">Sớ Táo Quân - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/2OcUqzleg9c">Quê Tôi - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/yKpON_FQynQ">Quê Em - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/xBhFjllmbcI">Múa Áo Tứ Thân - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/LV_AzRsMv9w">Múa Dù - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/ZRBJe_gK3Bs">Lì xì - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/NDhrkHKBwi8">Con Cò Bé Bé chúc tết - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/DXMlSG7nrb0">Các em chúc tết - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/yrpn5TX4NVA">Bác Ngọc Đọc Thơ - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/GtaXV6TPu3s">Việt Nam, Việt Nam - 9/2/2013 </option>
                                        <option value="https://www.youtube.com/embed/unK1XU2ad4c">Việt Nam Minh Châu Trời Đông - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/wb2km_beSdQ">Múa chiếc áo bà ba - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/n1aBmLd80Gg">Sắp Đến Tết Rồi - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/tt2s_jucHnw">Đi Học Về - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/OnQ1NffD2d8">Nguyên Âm Việt Nam - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/jvck3PWs1Nc">Em Là Hoa Hồng Nhỏ - 9/2/2013</option>
                                        <option value="https://www.youtube.com/embed/oDDOoRYeKbg">Quê Hương - Tết Trung Thu 2012</option>
                                        <option value="https://www.youtube.com/embed/bxAZfbdIrfM">Phần thưởng cho lớp 1 (16/6/2012)</option>
                                        <option value="https://www.youtube.com/embed/37_33r2UhOM">Phần thưởng cho lớp Mẫu Giáo (16/6/2012)</option>
                                        <option value="https://www.youtube.com/embed/CyeJF-fZBz0">Múa Quạt (16/6/2012)</option>
                                        <option value="https://www.youtube.com/embed/sswA6WniGT0">Bụi Phấn (16/6/2012)</option>
                                        <option value="https://www.youtube.com/embed/WNNDNTqlNe4">Mùa Hè và Hoa Phượng (16/6/2012)</option>
                                        <option value="https://www.youtube.com/embed/xbt77NKb-EI">Quê Hương</option>
                                        <option value="https://www.youtube.com/embed/pnFhKfFFE_c">Múa Quạt</option>
                                        <option value="https://www.youtube.com/embed/nV0QLUtFekA">Múa Những Điều Ước Mơ</option>
                                        <option value="https://www.youtube.com/embed/RYvPbBW3R9Y">Năm Ngón Tay Ngoan</option>
                                        <option value="https://www.youtube.com/embed/PPhP4_WrRfQ">My Heart Will Go On 16/6/2012</option>
                                        <option value="https://www.youtube.com/embed/22nzkrCl3sU">Con B&#432;&#7899;m Vàng - 16/6/2012</option>
                                        <option value="https://www.youtube.com/embed/qQ6TxPnLmC4">Nguyên Âm và &#272;i H&#7885;c
                                            V&#7873; - 16/6/2012</option>
                                        <option value="https://www.youtube.com/embed/xm8wT0Xigqw">Nguyên Âm và &#272;i H&#7885;c
                                            V&#7873; - 16/6/2012</option>
                                        <option value="https://www.youtube.com/embed/23Cz982EbGQ">Mùa Hè - 16/6/2012</option>
                                        <option value="https://www.youtube.com/embed/l-Hcve27NX0">Tr&#432;&#7901;ng Làng Tôi - 16/6/2012</option>
                                        <option value="https://www.youtube.com/embed/bZYhlVvZ02Y">Vi&#7879;t Nam Minh Châu Tr&#7901;i
                                            &#272;ông - </option>
                                        <option value="https://www.youtube.com/embed/DYn_TT5m_9Y">Xuân &#272;ã V&#7873; - Tr&#432;&#7901;ng
                                            Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng (3/3/2012, Everett, WA)</option>
                                        <option value="https://www.youtube.com/embed/HwAJGzVXhE4">C&#7843;m &#417;n - Tr&#432;&#7901;ng
                                            Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng (3/3/2012, Everett, WA) </option>
                                        <option value="https://www.youtube.com/embed/nANXOJVW4n4">Lòng M&#7865; - T&#7871;t 2012
                                            (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/UeDoxo9Wr50">Em S&#7869; Là Mùa Xuân C&#7911;a
                                            M&#7865; -T&#7871;t 2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919;
                                            L&#7841;c H&#7891;ng </option>
                                        <option value="https://www.youtube.com/embed/kDD01-xBnks">Chúc T&#7871;t &amp; &#272;&#7885;c
                                            Th&#417; - T&#7871;t 2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919;
                                            L&#7841;c H&#7891;ng </option>
                                        <option value="https://www.youtube.com/embed/W4dvOKJMKUA">Xuân &#272;ã V&#7873; - T&#7871;t
                                            2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/BCcS6owVYqc">Vi&#7879;t Nam Minh Châu Tr&#7901;i
                                            &#272;ông - T&#7871;t 2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919;
                                            L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/qagKPc4Rq1I">Vi&#7879;t Nam - T&#7871;t 2012
                                            (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/tyTZac74To4">Em Yêu Ai &amp; Cu&#7897;c &#272;&#7901;i
                                            - T&#7871;t 2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c
                                            H&#7891;ng </option>
                                        <option value="https://www.youtube.com/embed/ThFKmJhcZFo">Em có ba, em có má - T&#7871;t
                                            2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/fV55-dzHWCw">N&#259;m Ngón Tay Ngoan - - T&#7871;t
                                            2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng
                                        </option>
                                        <option value="https://www.youtube.com/embed/7yN1wqtogiw">S&#7855;p &#272;&#7871;n T&#7871;t
                                            R&#7891;i - T&#7871;t 2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919;
                                            L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/705DCCXwRG8">Liên Khúc Nh&#7841;c Thi&#7871;u
                                            Nhi - T&#7871;t 2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c
                                            H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/nV0QLUtFekA">Múa Nh&#7919;ng &#272;i&#7873;u
                                            &#431;&#7899;c M&#417; - T&#7871;t 2012 (Everett, WA) - Tr&#432;&#7901;ng Vi&#7879;t
                                            Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/_E2RcVROazk">Xuân &#272;ã V&#7873; - T&#7871;t
                                            2012 (Seattle Center) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng
                                        </option>
                                        <option value="https://www.youtube.com/embed/EHHz2tFwffc">T&#7871;t 2012 (Seattle Center)
                                            - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/McDEPKPYGWE">Chúc T&#7871;t - T&#7871;t 2012
                                            (Seattle Center) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/VLrrPGKe_TA">Múa Qu&#7841;t - T&#7871;t 2012
                                            (Seattle Center) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng</option>
                                        <option value="https://www.youtube.com/embed/MRkhN1mUago">Lòng M&#7865; - T&#7871;t 2012
                                            (Seattle Center) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng
                                        </option>
                                        <option value="https://www.youtube.com/embed/CkzaWsRabkY">Em Yêu Ai - T&#7871;t 2012 (Seattle
                                            Center) - Tr&#432;&#7901;ng Vi&#7879;t Ng&#7919; L&#7841;c H&#7891;ng </option>
                                        <option value="https://www.youtube.com/embed/wZahFFbv-WY">Long Me - TVNLH 2011 </option>
                                        <option value="https://www.youtube.com/embed/rI2sztIUZVo">Mua He - TVNLH 2011</option>
                                        <option value="https://www.youtube.com/embed/0R5EI_94h8U">L&#7877; Ph&#7853;t &#272;&#7843;n
                                            - Chùa D&#432;&#7907;c S&#432; - Seattle, WA 5/14/2011</option>
                                        <option value="https://www.youtube.com/embed/li-mk6A61JY">Mùa Hè - L&#7877; Ph&#7853;t &#272;&#7843;n
                                            - Chùa D&#432;&#7907;c S&#432;, Seattle, WA - 5/14/2011</option>
                                        <option value="https://www.youtube.com/embed/RfErk5xhRFY">Lòng M&#7865; - L&#7877; Ph&#7853;t
                                            &#272;&#7843;n - Chùa D&#432;&#7907;c S&#432;, Seattle, WA - 5/14/2011 </option>
                                        <option value="https://www.youtube.com/embed/F1rK21spP3o">Quê M&#7865; - L&#7877; Ph&#7853;t
                                            &#272;&#7843;n - Chùa D&#432;&#7907;c S&#432;, Seattle, WA - 5/14/2011</option>
                                        <option value="https://www.youtube.com/embed/yfGogMERQsU">Tam nhí &#273;&#7885;c th&#417;
                                            - L&#7841;c H&#7891;ng Everett, WA T&#7871;t 2011</option>
                                        <option value="https://www.youtube.com/embed/gbiEbm812I0">T&#7913; nhí chúc t&#7871;t - L&#7841;c
                                            H&#7891;ng Everett, WA T&#7871;t 2011 </option>
                                        <option value="https://www.youtube.com/embed/tpA_goHw0M4">Quê M&#7865; - L&#7841;c H&#7891;ng
                                            Everett, WA T&#7871;t 2011</option>
                                        <option value="https://www.youtube.com/embed/zwb5ZgbED7Q">Seattle Center Tet 2011</option>
                                        <option value="https://www.youtube.com/embed/9v-HlYL8jnA">L&#7841;c H&#7891;ng - Chúc T&#7871;t,
                                            &#272;&#7885;c Th&#417; - Seattle Center Tet 2011</option>
                                        <option value="https://www.youtube.com/embed/DpYDOsQ_PUs">L&#7841;c H&#7891;ng - Thiên &#272;àng
                                            Búp Bê &amp; Em Yêu Ai - Seattle Center Tet 2011</option>
                                        <option value="https://www.youtube.com/embed/4IBR5SmJbh4">Tr&#432;&#7901;ng Chúng Cháu Là
                                            Tr&#432;&#7901;ng M&#7847;m Non và Quê M&#7865; </option>
                                        <option value="https://www.youtube.com/embed/Iy-otHDseKE">Vietnamese New Year Festival 2011
                                            @ Seattle Center. Que Me. Sonny Photo(206) 3 </option>
                                    </select>
                                </div>
                                <div className="videoOptions">
                                    <h5>Truyện Cổ Tích Việt Nam: </h5>
                                    <select id="PhimVideoList" value={this.state.selectValue} onChange={this.onChange}>
                                        <option value="" defaultValue>Xin chọn phim</option>
                                        <option value="https://www.youtube.com/embed/lTt5CCJEPRs">Chú cuội cung trăng </option>
                                        <option value="https://www.youtube.com/embed/qok6HLdA9IE">Sự Tích Hạt Gạo </option>
                                        <option value="https://www.youtube.com/embed/GstTC5LmE1Q">Tấm Cám</option>
                                        <option value="https://www.youtube.com/embed/TAHViNnsWzc">Chiếc áo tàng hình</option>
                                        <option value="https://www.youtube.com/embed/QIECt8vL0DM">Bụng làm dạ chịu</option>
                                        <option value="https://www.youtube.com/embed/qFthvDTudiv0">Hà rầm hà rạc</option>
                                        <option value="https://www.youtube.com/embed/QHciXQ3nXAA">Ăn khế trả vàng</option>
                                        <option value="https://www.youtube.com/embed/FMqyU8b3Ty0">Ai mua hành tôi</option>
                                        <option value="https://www.youtube.com/embed/FIDlsRJRYlY">Miếng trầu kỳ diệu</option>
                                        <option value="https://www.youtube.com/embed/zmxk7l__69A">Bụng làm dạ chịu</option>
                                        <option value="https://www.youtube.com/embed/3PlW0uaS2C0">Hoàng tử cứu mẹ</option>
                                        <option value="https://www.youtube.com/embed/qiZM57divDa4">Gái ngoan dạy chồng </option>
                                        <option value="https://www.youtube.com/embed/u6gqjvkiKiM">Sự tích cái chổi</option>
                                        <option value="https://www.youtube.com/embed/6kW4zz74DCA">Nàng Xuân Hương </option>
                                        <option value="https://www.youtube.com/embed/G9jPWjSaeII">Xét xử tài tình</option>
                                        <option value="https://www.youtube.com/embed/gtYlNEcR9h0">Sự tích quả roi </option>
                                        <option value="https://www.youtube.com/embed/Rm3sPywZa_s">Của thiên trả địa</option>
                                        <option value="https://www.youtube.com/embed/jB-mrDbKQu0">Người học trò và 3 con quỷ</option>
                                    </select>
                                </div>
                                <div className="videoOptions">
                                    <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!507&authkey=!AEYwGLzvzoWZO-M&ithint=video%2cMP4" target="_new">Tết 2016 1/2</a><br/>
                                    <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!508&authkey=!APWrcMPqDoyGLiA&ithint=video%2cMP4" target="_new">Tết 2016 2/2</a><br/>
                                    <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!194&authkey=!AAM2pUTXzNT7rd0&ithint=video%2cmp4" target="_new">Tết 2015 1/2</a><br/>
                                    <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!195&authkey=!AD9XcugvTENW4iA&ithint=video%2cmp4" target="_new">Tết 2015 2/2</a>
                                </div>
                            </div>
                        </div>
                        <div className="cell small-12 med-large-8">
                            <div className="responsive-embed widescreen">
                                <iframe title="video Viewer" src={this.state.selectValue} frameBorder="0" allowFullScreen ref={(iframe) => { this.mediaFrame = iframe;}}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Videos;