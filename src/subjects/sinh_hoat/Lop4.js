import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
const context = require.context('./../../contents/Classrooms/Lop4', true, /\.(pdf)?$/);
var pdfObj = {};

class Lop4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Classrooms/Lop4",
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
        this.setState({selectValue: pdfObj["./Lop4.pdf"]});
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
                                                <span title='./Lop4.pdf' onClick={this.onClick}>Lop 4</span>
                                            </li>
                                            <li>
                                                <span title='./2014_Bà Tôi.pdf' onClick={this.onClick}>2014_Bà Tôi</span>
                                            </li>
                                            <li>
                                                <span title='./2014_Con Chó.pdf' onClick={this.onClick}>2014_Con Chó</span>
                                            </li>
                                            <li>
                                                <span title='./2014_Em Tôi.pdf' onClick={this.onClick}>2014_Em Tôi</span>
                                            </li>
                                            <li>
                                                <span title='./2014_Mẹ Tôi.pdf' onClick={this.onClick}>2014_Mẹ Tôi</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Anh Chi Em.pdf' onClick={this.onClick}>2015_Anh Chi Em</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Ba Em.pdf' onClick={this.onClick}>2015_Ba Em</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Ban Em 1.pdf' onClick={this.onClick}>2015_Ban Em 1</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Ban Em 2.pdf' onClick={this.onClick}>2015_Ban Em 2</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Ban Em.pdf' onClick={this.onClick}>2015_Ban Em</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Ky Nghi He.pdf' onClick={this.onClick}>2015_Ky Nghi He</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Ma Em.pdf' onClick={this.onClick}>2015_Ma Em</span>
                                            </li>
                                            <li>
                                                <span title='./2015_Noi Ve Em.pdf' onClick={this.onClick}>2015_Noi Ve Em</span>
                                            </li>
                                            <li>
                                                <span title='./Ba Em.pdf' onClick={this.onClick}>Ba Em</span>
                                            </li>
                                            <li>
                                                <span title='./Bạn Tôi.pdf' onClick={this.onClick}>Bạn Tôi</span>
                                            </li>
                                            <li>
                                                <span title='./Con Chó 13-1-2013.pdf' onClick={this.onClick}>Con Chó 13-1-2013</span>
                                            </li>
                                            <li>
                                                <span title='./Con Chó.pdf' onClick={this.onClick}>Con Chó</span>
                                            </li>
                                            <li>
                                                <span title='./Mẹ Em.pdf' onClick={this.onClick}>Mẹ Em</span>
                                            </li>
                                            <li>
                                                <span title='./Nhà Em 24-2-2013.pdf' onClick={this.onClick}>Nhà Em 24-2-2013</span>
                                            </li>
                                            <li>
                                                <span title='./Nhà Em.pdf' onClick={this.onClick}>Nhà Em</span>
                                            </li>
                                            <li>
                                                <span title='./Thơ - Tả Về Em.pdf' onClick={this.onClick}>Thơ - Tả Về Em</span>
                                            </li>
                                            <li>
                                                <span title='./Văn - Nói Về Em.pdf' onClick={this.onClick}>Văn - Nói Về Em</span>
                                            </li>
                                            <li>
                                                <span title='./Văn - viết tự do.pdf' onClick={this.onClick}>Văn - viết tự do</span>
                                            </li>
                                            <li>
                                                <span title='./Đi Nghĩ Hè 27-1-2013.pdf' onClick={this.onClick}>Đi Nghĩ Hè 27-1-2013</span>
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

export default Lop4;