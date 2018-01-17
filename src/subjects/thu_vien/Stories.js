import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
const context = require.context('./../../contents/Stories', true, /\.(pdf)?$/);
var pdfObj = {};



class Stories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Stories",
            width: "0",
            height: "0",
            selectValue: ""
        }
        this.onClick = this.getReceipt.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillMount() {
        context.keys().forEach(function (key) {
            pdfObj[key] = context(key);
        });
        this.setState({selectValue: pdfObj["./Sự Tích Trầu Cau.pdf"]});
    }

    componentDidMount() {
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
                this.setState({selectValue: pdfObj[title]});
            } else {
                var win = window.open(pdfObj[title], '_blank');
                win.focus();
            }
        }
    }

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page menu_pdf">
                    <table className="stack" width="100%">
                        <tbody>
                            <tr>
                                <td className="event_menu">
                                    <div className="Main_Panel">
                                        <ul>
                                            <li>
                                                <span title='./An Nam Chí Lược.pdf' onClick={this.onClick}>An Nam Chí Lược</span>
                                            </li>
                                            <li>
                                                <span title='./Khâm Định Việt Sử Thông Giám Cương Mục.pdf' onClick={this.onClick}>Khâm Định Việt Sử Thông Giám Cương Mục</span>
                                            </li>
                                            <li>
                                                <span title='./Lam Sơn Thực Lục.pdf' onClick={this.onClick}>Lam Sơn Thực Lục</span>
                                            </li>
                                            <li>
                                                <span title='./Lịch Sử Việt Nam 01.pdf' onClick={this.onClick}>Lịch Sử Việt Nam 01</span>
                                            </li>
                                            <li>
                                                <span title='./Quốc Triều Chánh Biên Toát Yếu.pdf' onClick={this.onClick}>Quốc Triều Chánh Biên Toát Yếu</span>
                                            </li>
                                            <li>
                                                <span title='./Sự Tích Quả Dưa Hấu.pdf' onClick={this.onClick}>Sự Tích Quả Dưa Hấu</span>
                                            </li>
                                            <li>
                                                <span title='./Sự Tích Trầu Cau.pdf' onClick={this.onClick}>Sự Tích Trầu Cau</span>
                                            </li>
                                            <li>
                                                <span title='./Thạch Sanh Lý Thông.pdf' onClick={this.onClick}>An Nam Chí Lược</span>
                                            </li>
                                            <li>
                                                <span title='./Truyện Kiều.pdf' onClick={this.onClick}>Truyện Kiều</span>
                                            </li>
                                            <li>
                                                <span title='./Trăm Trứng Trăm Con.pdf' onClick={this.onClick}>Trăm Trứng Trăm Con</span>
                                            </li>
                                            <li>
                                                <span title='./Việt Nam Sử Lược.pdf' onClick={this.onClick}>Việt Nam Sử Lược</span>
                                            </li>
                                            <li>
                                                <span title='./Việt Sử Tiêu Án.pdf' onClick={this.onClick}>Việt Sử Tiêu Án</span>
                                            </li>
                                            <li>
                                                <span title='./Việt Sử Toàn Thư.pdf' onClick={this.onClick}>Việt Sử Toàn Thư</span>
                                            </li>
                                            <li>
                                                <span title='./Đại Việt Sử Ký Toàn Thư.pdf' onClick={this.onClick}>Đại Việt Sử Ký Toàn Thư</span>
                                            </li>
                                            <li>
                                                <span title='./Đại Việt Sử Lược.pdf' onClick={this.onClick}>Đại Việt Sử Lược</span>
                                            </li>
                                            <li>
                                                <span title='./Đại Việt Thông Sử.pdf' onClick={this.onClick}>Đại Việt Thông Sử</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="event_frame show-for-large">
                                    <div className="responsive-embed">
                                        <object frameBorder="0" title="PDF Viewer" type="application/pdf" className="Truyen" ref={(object) => { this.mediaFrame = object;}} data={this.state.selectValue} ><embed src={this.state.selectValue} type="application/pdf" /></object>
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

export default Stories;