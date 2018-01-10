import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Resources extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Resources",
            width: "0",
            height: "0",
            selectValue: ""
        }
        this.onClick = this.getReceipt.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        // $(document).foundation();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    getReceipt(event) {
        const {title} = event.target;
        if(this.mediaFrame) {
            if(this.state.width >= 1024) {
                this.setState({selectValue: "./../contents/" + this.state.page + "/" + title})
            } else {
                var win = window.open("./../contents/" + this.state.page + "/" + title, '_blank');
                win.focus();
            }
            
        }
    }

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page menu_pdf" id="resources">
                    <table width="100%" className="stack">
                        <tbody>
                            <tr>
                                <td className="event_menu">
                                    <div className="Main_Panel1" style={{overflow: "auto"}}>
                                        <ul>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 01.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 01</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 02.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 02</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 03.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 03</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 04.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 04</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 05.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 05</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 06.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 06</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 07.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 07</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 08.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 08</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 09.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 09</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 10.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 10</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 11.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 11</span>
                                            </li>
                                            <li>
                                                <span title='A_Sách giáo khoa cấp 12.pdf' onClick={this.onClick}>A_Sách giáo khoa cấp 12</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 01.pdf' onClick={this.onClick}>Em học vần tiếng Việt 01</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 02.pdf' onClick={this.onClick}>Em học vần tiếng Việt 02</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 03.pdf' onClick={this.onClick}>Em học vần tiếng Việt 03</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 04.pdf' onClick={this.onClick}>Em học vần tiếng Việt 04</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 05.pdf' onClick={this.onClick}>Em học vần tiếng Việt 05</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 06.pdf' onClick={this.onClick}>Em học vần tiếng Việt 06</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 07.pdf' onClick={this.onClick}>Em học vần tiếng Việt 07</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 08.pdf' onClick={this.onClick}>Em học vần tiếng Việt 08</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 09.pdf' onClick={this.onClick}>Em học vần tiếng Việt 09</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 10.pdf' onClick={this.onClick}>Em học vần tiếng Việt 10</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 11.pdf' onClick={this.onClick}>Em học vần tiếng Việt 11</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 12.pdf' onClick={this.onClick}>Em học vần tiếng Việt 12</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 13.pdf' onClick={this.onClick}>Em học vần tiếng Việt 13</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 14.pdf' onClick={this.onClick}>Em học vần tiếng Việt 14</span>
                                            </li>
                                            <li>
                                                <span title='Em học vần tiếng Việt 15.pdf' onClick={this.onClick}>Em học vần tiếng Việt 15</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 01.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 01</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 02.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 02</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 03.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 03</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 04.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 04</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 05.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 05</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 06.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 06</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 07.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 07</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 08.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 08</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 09.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 09</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 10.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 10</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 11.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 11</span>
                                            </li>
                                            <li>
                                                <span title='Quốc Văn Giáo Khoa Thư lớp Dự Bị 12.pdf' onClick={this.onClick}>Quốc Văn Giáo Khoa Thư lớp Dự Bị 12</span>
                                            </li>
                                            <li>
                                                <span title='Sách giáo khoa 00 (mẫu giáo) - Trần Văn Minh và Đinh Ngọc Thu.pdf' onClick={this.onClick}>Sách giáo khoa 00 (mẫu giáo) - Trần Văn Minh và Đinh Ngọc Thu</span>
                                            </li>
                                            <li>
                                                <span title='Sách giáo khoa 01 (lớp 1) - Trần Văn Minh và Đinh Ngọc Thu.pdf' onClick={this.onClick}>Sách giáo khoa 01 (lớp 1) - Trần Văn Minh và Đinh Ngọc Thu</span>
                                            </li>
                                            <li>
                                                <span title='Sách giáo khoa 02 (lớp 2) - Trần Văn Minh và Đinh Ngọc Thu.pdf' onClick={this.onClick}>Sách giáo khoa 02 (lớp 2) - Trần Văn Minh và Đinh Ngọc Thu</span>
                                            </li>
                                            <li>
                                                <span title='Sách giáo khoa 03 (lớp 3) - Trần Văn Minh và Đinh Ngọc Thu.pdf' onClick={this.onClick}>Sách giáo khoa 03 (lớp 3) - Trần Văn Minh và Đinh Ngọc Thu</span>
                                            </li>
                                            <li>
                                                <span title='Sách giáo khoa 04 (lớp 4) - Trần Văn Minh và Đinh Ngọc Thu.pdf' onClick={this.onClick}>Sách giáo khoa 04 (lớp 4) - Trần Văn Minh và Đinh Ngọc Thu</span>
                                            </li>
                                            <li>
                                                <span title='Sách giáo khoa 05 (lớp 5) - Trần Văn Minh và Đinh Ngọc Thu.pdf' onClick={this.onClick}>Sách giáo khoa 05 (lớp 5) - Trần Văn Minh và Đinh Ngọc Thu</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="event_frame show-for-large">
                                    <div className="responsive-embed">
                                        <iframe frameBorder="0" title="PDF Viewer" className="Truyen" ref={(iframe) => { this.mediaFrame = iframe;}} src={this.state.selectValue} ></iframe>
                                    </div>
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

export default Resources;