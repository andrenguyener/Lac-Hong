
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class About extends React.Component {

    render() {
        return (    
            <div className="about row">
                <Carousel className="pictureCarousel" showThumbs={false} dynamicHeight infiniteLoop autoPlay showStatus={false}>
                    <div>
                        <img  src="img/orbit/image1.jpg" alt="Carousel"/>
                    </div>
                    <div>
                        <img  src="img/orbit/image2.jpg" alt="Carousel"/>
                    </div>
                    <div>
                        <img  src="img/orbit/image4.jpg" alt="Carousel"/>
                    </div>
                    <div>
                        <img  src="img/orbit/image6.jpg" alt="Carousel"/>
                    </div>
                </Carousel>
                <div className="small-12 columns" id="about-paragraph">
                    <p>Kính chào quý vị ghé thăm trang nhà của Trường Việt Ngữ Lạc Hồng. Trường Việt Ngữ Lạc Hồng là một tổ chức bất vụ lợi ( Non-Profit Organization). Trường là một cơ sở đào tạo cho các con em thế hệ thứ hai tại Hoa Kỳ có cơ hội được học tiếng Việt và hiểu biết thêm về lịch sử và văn hóa Việt Nam. Nhất là nhằm mục đích phát huy nòi giống con rồng cháu tiên tại xứ người, Trường thường tạo điều kiện và khuyến khích các em tham gia vào những chương trình có tính cách lành mạnh của cộng đồng Việt Nam tại thành phố Everett và các vùng lân cận chẳng hạn như: đố vui để học, đánh vần, và văn nghệ trong các dịp lễ.</p>
                </div>
            </div>
        );
    }
}

export default About;