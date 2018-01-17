import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
import ReactPlayer from 'react-player'
const context = require.context('./../../contents/Sheet_Music', true, /\.(pdf)?$/);
const context2 = require.context('./../../contents/Projector_Songs', true, /\.(pdf)?$/);
const context3 = require.context('./../../contents/Music', true);
var pdfObj = {};

class ChildrensMusic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Sheet_Music",
            width: "0",
            height: "0",
            selectValue: "",
            url: ""
        }
        this.onClick = this.getReceipt.bind(this);
        this.onChange = this.getVideo.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillMount() {
        context.keys().forEach(function (key) {
            pdfObj[key] = context(key);
        });
        context2.keys().forEach(function (key) {
            pdfObj[key] = context2(key);
        });
        context3.keys().forEach(function (key) {
            pdfObj[key] = context3(key);
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

    getVideo(event) {
        this.setState({selectValue: pdfObj[event.target.value], url: pdfObj[event.target.value]});
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
                                        <div className="videoOptions">
                                            <h5>Nhac Thieu Nhi</h5>
                                            <select id="PhimVideoList" onChange={this.onChange}>
                                                <option defaultValue></option>
                                                <option value="./EmLaHoaHongnho-TrinhConSon.mp3">Projector Songs ver42</option>
                                                <option value="./Emlahoahongnho-XuanMai.mp3">Tet Lyrics 2013</option>
                                                <option value="./QueToi-CamLy_ucw6.mp3">Projector Songs ver42</option>
                                                <option value="./VietNamMinhChauTroiDong_HopCa_mp3.mp3">Tet Lyrics 2013</option>
                                                <option value="./mua   xuan   oi_mp3.mp3">Tet Lyrics 2013</option>
                                            </select>
                                        </div>
                                        <div className="videoOptions">
                                            <h5>Projector Songs</h5>
                                            <select id="PhimVideoList" onChange={this.onChange}>
                                                <option defaultValue></option>
                                                <option value="./ProjectorSongs_ver42.pdf">Projector Songs ver42</option>
                                                <option value="./Tet_Lyrics_2013_doc.pdf">Tet Lyrics 2013</option>
                                            </select>
                                        </div>
                                        <ul>
                                            <li>
                                                <span title='./Co Va Me_VN.pdf' onClick={this.onClick}>Co Va Me</span>
                                            </li>
                                            <li>
                                                <span title='./Con Chim Non_VN.pdf' onClick={this.onClick}>Con Chim Non</span>
                                            </li>
                                            <li>
                                                <span title='./Cuoc Doi Do O Minh_VN.pdf' onClick={this.onClick}>Cuoc Doi Do O Mình</span>
                                            </li>
                                            <li>
                                                <span title='./Di hoc ve_vn_12_16_2012.pdf' onClick={this.onClick}>Di Hoc Ve</span>
                                            </li>
                                            <li>
                                                <span title='./Em La Hoa Hong Nho_vn_Dec16_2012.pdf' onClick={this.onClick}>Em La Hoa Hong Nho</span>
                                            </li>
                                            <li>
                                                <span title='./Em Yeu Ai_VN.pdf' onClick={this.onClick}>Em Yeu Ai</span>
                                            </li>
                                            <li>
                                                <span title='./Ket Doan_Apri3_2013.pdf' onClick={this.onClick}>Ket Doan</span>
                                            </li>
                                            <li>
                                                <span title='./LongMe_Page1.pdf' onClick={this.onClick}>LongMe Page 1</span>
                                            </li>
                                            <li>
                                                <span title='./LongMe_Page2.pdf' onClick={this.onClick}>LongMe Page 2</span>
                                            </li>
                                            <li>
                                                <span title='./Me Yeu Khong Nao_FMajor_Feb04_2013.pdf' onClick={this.onClick}>Me Yeu Khong Nao FMajor</span>
                                            </li>
                                            <li>
                                                <span title='./Me Yeu Khong Nao_GMajor_Feb04_2013.pdf' onClick={this.onClick}>Me Yeu Khong Nao GMajor</span>
                                            </li>
                                            <li>
                                                <span title='./Nam Ngon Tay Ngoan_vn.pdf' onClick={this.onClick}>Nam Ngon Tay Ngoan</span>
                                            </li>
                                            <li>
                                                <span title='./Ngay Tet Que Em_Ver6_Aminor.pdf' onClick={this.onClick}>Ngày Tet Quê Em Ver6 Aminor</span>
                                            </li>
                                            <li>
                                                <span title='./Ngay Tet Que Em_Ver6_Bminor.pdf' onClick={this.onClick}>Ngày Tet Quê Em Ver6 Bminor</span>
                                            </li>
                                            <li>
                                                <span title='./Nguyen Am Viet Nam_vn_12_16_2012.pdf' onClick={this.onClick}>Nguyen Am Viet Nam</span>
                                            </li>
                                            <li>
                                                <span title='./ProjectorSongs_ver33.pdf' onClick={this.onClick}>Projector Songs</span>
                                            </li>
                                            <li>
                                                <span title='./Que Em_PianoSolo_CMajor_Ver7.pdf' onClick={this.onClick}>Quê Em Piano Solo CMajor</span>
                                            </li>
                                            <li>
                                                <span title='./Que Huongs_Gm_Ver3_vn_12_16_2012.pdf' onClick={this.onClick}>Que Huongs Gm Ver3</span>
                                            </li>
                                            <li>
                                                <span title='./Que Tôi lead sheet_Ver2.pdf' onClick={this.onClick}>Quê Tôi lead sheet Ver2</span>
                                            </li>
                                            <li>
                                                <span title='./Que Tôi PianoSolo_Ver8.pdf' onClick={this.onClick}>Quê Tôi Piano Solo Ver8</span>
                                            </li>
                                            <li>
                                                <span title='./Sap Den Tet Roi_vn_Feb_3_2013.pdf' onClick={this.onClick}>Sap Den Tet Roi</span>
                                            </li>
                                            <li>
                                                <span title='./Thang cuoi_CMajor_VN.pdf' onClick={this.onClick}>Thang cuoi CMajor</span>
                                            </li>
                                            <li>
                                                <span title='./Thien Dang Bup Be_VN.pdf' onClick={this.onClick}>Thien Dang Bup Be</span>
                                            </li>
                                            <li>
                                                <span title='./truong mam non_vn_12_16_2012.pdf' onClick={this.onClick}>truong mam non</span>
                                            </li>
                                            <li>
                                                <span title='./Viet Nam Minh Chau Troi Dong_Piano_Ver4_GMajor.pdf' onClick={this.onClick}>Viet Nam Minh Chau Troi Dong Piano Ver4 GMajor</span>
                                            </li>
                                            <li>
                                                <span title='./viet nam2_vn_12_16_2012.pdf' onClick={this.onClick}>viet nam2</span>
                                            </li>
                                            <li>
                                                <span title='./XuanDaVe_and_QueMe.pdf' onClick={this.onClick}>Xuan Da Ve and Que Me</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="event_frame show-for-large">
                                    <ReactPlayer className="audioPlayer" url={this.state.url} controls height={"0px"} width={"100%"} />       
                                    <div className="responsive-embed">                         
                                        <object frameBorder="0" title="PDF Viewer" type="application/pdf" className="Truyen" ref={(object) => { this.mediaFrame = object;}} data={this.state.selectValue} ><embed src={this.state.selectValue} type="application/pdf"/></object>
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

export default ChildrensMusic;