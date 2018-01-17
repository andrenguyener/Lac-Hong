import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
const context = require.context('./../../contents/Classrooms/Lop5', true, /\.(pdf)?$/);
var pdfObj = {};

class Lop5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Classrooms/Lop5",
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
        this.setState({selectValue: pdfObj["./Lop5.pdf"]});
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
                                                <span title='./Lop5.pdf' onClick={this.onClick}>Lop 5</span>
                                            </li>
                                            <li>
                                                <span title='./Bà Tôi.pdf' onClick={this.onClick}>Bà Tôi</span>
                                            </li>
                                            <li>
                                                <span title='./Chị Em Tôi.pdf' onClick={this.onClick}>Chị Em Tôi</span>
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

export default Lop5;