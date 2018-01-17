
import React from 'react';
import Schedule from './../contents/Schedule_Niên học 2016-2017.pdf';

class Information extends React.Component {

    render() {
        return (
            <main>
                <div className="grid-x grid-margin-x grid-margin-y" id="information">
                    <div className="cell small-12 medium-6 large-4" id="announcements-information">
                        <h4>Announcements</h4>
                        <p><span className="importantNotice">Ghi danh cho niên học:</span> Chủ Nhật ngày 27 tháng 08, 2017 tại Voyager Middle School 11711 4th Ave W. Everett, WA. từ 1:30pm - 4:00pm. Lệ phí : $120.00 cho mỗi em học sinh.</p><br />
                        <p><span className="importantNotice">Khai Giảng:</span> Chủ Nhật ngày 10 tháng 09, 2017. Học tại Mariner High School 200 120th St. SW, Everett, WA từ 1:30pm - 4:00pm.</p>
                    </div>
                    <div className="cell small-12 medium-6 large-4" id="school-information">
                        <h4>School Information</h4>
                        <p><a href={Schedule} target="_blank">Lịch trình học 2016-2017</a></p>
                        <p>Địa điểm học (xin đừng gởi thư từ về địa chỉ này) Mở cửa từ ngày 11 tháng 9 năm 2016 đến ngày 4 tháng 6 năm 2017 vào mỗi Chủ Nhật từ 1:30pm-4:00pm</p>
                        <p>Voyager Middle School<br />
                        1171 4th Ave W<br />
                        Everett, WA 98204</p>
                    </div>
                    <div className="cell small-12 medium-6 large-4" id="contact-information">
                        <h4>Contact</h4>
                        <p>Mọi thư từ liên lạc xin gửi về:</p>
                        <p>Trường Việt Ngữ Lạc Hồng<br />
                        PO BOX 12044<br />
                        Everett, WA 98206</p>
                        <p>Thầy Huyên: <a href="tel:4253678790">(425) 367-8790</a><br />
                        Email: <a href="mailto:huyenquangtran@gmail.com">huyenquangtran@gmail.com</a><br />
                        Cô Vũ Quỳnh: <a href="tel:2068980167">206-898-0167</a><br />
                        Cô Phạm Mơ: <a href="tel:4253672112">425-367-2112</a><br />
                        Email: <a href="mailto:phammot@gmail.com">phammot@gmail.com
                        </a></p>
                    </div>
                </div>
                <div id="mission">
                    <div id="mission-text">
                        <h4>Mission</h4>
                        <p>The mission of the Lac Hong Vietnamese Language School is to preserve the Vietnamese heritage by educating students in Vietnamese language, culture, values, and history. The primary objectives of Lac Hong Vietnamese Language School are to ensure that each student will:<br />
                        <br />
                        Develop the ability to fluently speak, listen, read, and write Vietnamese.<br />
                        Develop the knowledge of Vietnamese history and culture.<br />
                        Become responsible citizen through sharing and volunteering work.<br />
                        <br />
                        It is our intent to provide a harmonic environment for students to build friendships and community responsibilities; thereby, keeping them “off-the-street.”</p>
                        <h6>Lac Hong Vietnamese Language School does not and shall not discriminate on the basis of race, color, religion, gender, gender expression, age, national origin, disability, marital status, sexual orientation, or military status, in any of its activities or operations.</h6>
                    </div>
                </div>
            </main>
        );
    }
}

export default Information;