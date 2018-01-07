import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Lop5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Classrooms/Lop5",
            width: "0",
            height: "0",
            selectValue: "/contents/Classrooms/Lop5/Lop5.html"
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
                this.setState({selectValue: "/contents/" + this.state.page + "/" + title})
            } else {
                var win = window.open("/contents/" + this.state.page + "/" + title, '_blank');
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
                                    <div className="Main_Panel1" style={{overflow: "auto"}}>
                                        <ul>
                                            <li>
                                                <span title='Bà Tôi.pdf' onClick={this.onClick}>Bà Tôi</span>
                                            </li>
                                            <li>
                                                <span title='Chị Em Tôi.htm' onClick={this.onClick}>Chị Em Tôi</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="event_frame show-for-large">
                                    <div className="responsive-embed">
                                        <iframe frameBorder="0" className="Truyen" title="PDF Viewer" ref={(iframe) => { this.mediaFrame = iframe;}} src={this.state.selectValue}></iframe>
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