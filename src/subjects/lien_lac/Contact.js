import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Contact extends React.Component {

    componentDidMount() {
        // $(document).foundation();
    }

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page" id="contact">
                    <div className="grid-x grid-margin-x grid-margin-y" id="information">
                            <div className="cell small-12 medium-6 large-4" id="announcements-information">
                                <h4>Announcements</h4>
                                <p><span className="importantNotice">Ghi danh cho niên học:</span> Chủ Nhật ngày 27 tháng 08, 2017 tại Voyager Middle School  11711 4th Ave W. Everett, WA. từ 1:30pm - 4:00pm.  Lệ phí  : $120.00 cho mỗi em học sinh.</p><br/>
                                <p><span className="importantNotice">Khai Giảng:</span> Chủ Nhật ngày 10 tháng 09, 2017. Học tại Mariner High School  200 120th St. SW, Everett, WA từ 1:30pm - 4:00pm.</p>
                            </div>
                            <div className="cell small-12 medium-6 large-4" id="school-information">
                                <h4>School Information</h4>
                                <p><a href="?id=4">Lịch trình học 2016-2017</a></p>
                                <p>Địa điểm học (xin đừng gởi thư từ về địa chỉ này) Mở cửa từ ngày 11 tháng 9 năm 2016 đến ngày 4 tháng 6 năm 2017
                                vào mỗi Chủ Nhật từ 1:30pm-4:00pm</p>
                                <p>Voyager Middle School<br/> 1171 4th Ave W<br/> Everett, WA 98204</p>
                            </div>
                            <div className="cell small-12 medium-6 large-4" id="contact-information">
                                <h4>Contact</h4>
                                <p>Mọi thư từ liên lạc xin gửi về:</p>
                                <p>Trường Việt Ngữ Lạc Hồng<br/> PO BOX 12044<br/> Everett, WA 98206</p>
                                <p>Thầy Huyên: <a href="tel:4253678790">(425) 367-8790</a><br/> 
                                Email: <a href="mailto:huyenquangtran@gmail.com">huyenquangtran@gmail.com</a><br/> 
                                Cô Vũ Quỳnh: <a href="tel:2068980167">206-898-0167</a><br/> 
                                Cô Phạm Mơ: <a href="tel:4253672112">425-367-2112</a>
                                <br/> Email: <a href="mailto:phammot@gmail.com"> phammot@gmail.com</a></p>
                            </div>
                        </div>




                    <form id="myForm" method="post" data-abide>  
                            
                            <h5>Contact Us</h5>
                            <label>Name</label>
                            <small className="error">Your full name is required.</small>
                            <input type="text" placeholder="" required/>
                            
                            <label>Email</label>
                            <small className="error">An email address is required.</small>

                            <input type="email" placeholder="" required/>
                            
                            <label>Phone Number</label>          
                            <input type="url" placeholder=""/>
                            
                            <label>Your Message</label>
                            <small className="error">Your message is required.</small>
                            <textarea rows="5"></textarea>
                            
                            <button><input type="submit" className="button" value="Send Message"/></button>
                    </form>
                </div>
                <Footer></Footer>
            </div>
                
        );
    }
}

export default Contact;