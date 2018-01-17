import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
const context = require.context('./../../contents/Events', true, /\.(pdf|docx|doc)?$/);
var pdfObj = {};



class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Events",
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
                    <table width="100%" className="stack">
                        <tbody>
                            <tr>
                                <td className="event_menu">
                                    <div className="Main_Panel">
                                        <ul>
                                            <li>
                                                <span title='./2014_Thư Mời Lễ Tốt Nghiệp.pdf' onClick={this.onClick}>2014_Thư Mời Lễ Tốt Nghiệp</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Picnic.pdf' onClick={this.onClick}>2015_Picnic</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Thư Mời Lễ Tốt Nghiệp.pdf' onClick={this.onClick}>2015_Thư Mời Lễ Tốt Nghiệp</span>
                                            </li>
                                            <li>
                                                <span title='./Fundraiser2015.pdf' onClick={this.onClick}>Fundraiser2015</span>
                                            </li>
                                            <li>
                                                <span title='./Fundraiser_2017_Poster_Tea Palace.pdf' onClick={this.onClick}>Fundraiser_2017_Poster_Tea Palace</span>
                                            </li>
                                            <li>
                                                <span title='./Giấy Đồng Ý.pdf' onClick={this.onClick}>Giấy Đồng Ý</span>
                                            </li>
                                            <li>
                                                <span title='./Gây Quỹ Poster 2014.pdf' onClick={this.onClick}>Gây Quỹ Poster 2014</span>
                                            </li>
                                            <li>
                                                <span title='./Gây Quỹ Poster 2015.pdf' onClick={this.onClick}>Gây Quỹ Poster 2015</span>
                                            </li>
                                            <li>
                                                <span title='./picnic 2017 TVNLH.docx' onClick={this.onClick}>picnic 2017 TVNLH</span>
                                            </li>
                                            <li>
                                                <span title='./Schedule.pdf' onClick={this.onClick}>Schedule</span>
                                            </li>
                                            <li>
                                                <span title='./Thư cảm tạ 2015.pdf' onClick={this.onClick}>Thư cảm tạ 2015</span>
                                            </li>
                                            {/* <li>
                                                <span title='./Thư cảm tạ 2014.pdf' onClick={this.onClick}>Thư cảm tạ 2014</span>
                                            </li> */}
                                            <li>
                                                <span title='./Thư Cảm Tạ 2012.pdf' onClick={this.onClick}>Thư Cảm Tạ 2012</span>
                                            </li>
                                            <li>
                                                <span title='./Thư Mời Tết 2016.pdf' onClick={this.onClick}>Thư Mời Tết 2016</span>
                                            </li>
                                            <li>
                                                <span title='./Thư Mời Tết Nguyên Đán-2017.pdf' onClick={this.onClick}>Thư Mời Tết Nguyên Đán-2017</span>
                                            </li>
                                            <li>
                                                <span title='./Thư Mời Văn Nghệ 2016 tháng 4.pdf' onClick={this.onClick}>Thư Mời Văn Nghệ 2016 tháng 4</span>
                                            </li>
                                            <li>
                                                <span title='./Đơn Ghi Danh 2015-2016.pdf' onClick={this.onClick}>Đơn Ghi Danh 2015-2016</span>
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

export default Events;