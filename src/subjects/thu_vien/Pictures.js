import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import Orbit from './../../components/orbit';
// import $ from 'jquery';
// import Foundation from 'foundation-sites';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Motion from 'motion-ui';
// import 'foundation-sites/dist/js/foundation.js';
//import './../../contents/Photos/2016Tet/';
const _2016Tet = require.context('./../../contents/Photos/2016Tet', true)
const _2015TetSeattleCenter = require.context('./../../contents/Photos/2015TetSeattleCenter', true)
const _2015Tet = require.context('./../../contents/Photos/2015Tet', true)
const _2014Christmas = require.context('./../../contents/Photos/2014Christmas', true)
const _2010Tet = require.context('./../../contents/Photos/2010Tet', true)

// require('foundation-sites');




class Pictures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Photos",
            data: null,
        }
        this.onClick = this.replaceAlbum.bind(this);
        this.replaceAlbum = this.replaceAlbum.bind(this);
    }

    componentWillMount() {
        let defaultKeys = _2016Tet.keys();
        let defaultImageArray = defaultKeys.map(key => _2016Tet(key));
        this.setState({data: defaultImageArray});
    }

    componentDidMount() {
        // $(document).foundation();
        // $(document).ready();
    }


    replaceAlbum(event) {
        
        const {title} = event.target;
        
        let imageKeys;
        let imageArray;
        switch(title) {
            case "2016Tet":
                imageKeys = _2016Tet.keys();
                imageArray = imageKeys.map(key => _2016Tet(key));
                this.setState({ data: imageArray});
                break;
            case "2015TetSeattleCenter":
                imageKeys = _2015TetSeattleCenter.keys();
                imageArray = imageKeys.map(key => _2015TetSeattleCenter(key));
                this.setState({ data: imageArray});
                break;
            case "2015Tet":
                imageKeys = _2015Tet.keys();
                imageArray = imageKeys.map(key => _2015Tet(key));
                this.setState({ data: imageArray});
                break;
            case "2014Christmas":
                imageKeys = _2014Christmas.keys();
                imageArray = imageKeys.map(key => _2014Christmas(key));
                this.setState({ data: imageArray});
                break;
            case "2014Tet":
                break;
            case "2010Tet":
                imageKeys = _2010Tet.keys();
                imageArray = imageKeys.map(key => _2010Tet(key));
                this.setState({ data: imageArray});
                break;
            default:
                break;
        }
        console.log(this.state.data);
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
                                        <ol>
                                            <li>
                                                <span title='2016Tet' onClick={this.onClick}>Tết Bính Thân 2016</span>
                                            </li>
                                            <li>
                                                <span title='2015TetSeattleCenter' onClick={this.onClick}>Tết Ất Mùi 2015 (Seattle Center)</span>
                                            </li>
                                            <li>
                                                <span title='2015Tet' onClick={this.onClick}>Tết Ất Mùi 2015</span>
                                            </li>
                                            <li>
                                                <span title='2014Christmas' onClick={this.onClick}>Christmas 2014</span>
                                            </li>
                                            <li>
                                                <span title='2014Tet' onClick={this.onClick}>Tết Giáp Ngọ 2014</span>
                                            </li>
                                            <li>
                                                <span title='2010Tet' onClick={this.onClick}>Tết Canh Dần 2010</span>
                                            </li>
                                            <li>
                                                <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!505&authkey=!AFD5eHJpl8yEHhE&ithint=folder%2c" target="pix">video Lễ Mãn Khóa 2015</a>
                                            </li>
                                            <li>
                                                <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!196&authkey=!AIuQnnoX9zhTmog&ithint=folder%2cJPG" target="pix">Picnic 8/2015</a>
                                            </li>
                                            <li>
                                                <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!288&authkey=!APttEZ1WK2RLxYE&ithint=folder%2cjpg" target="pix">Niên Khóa 2014-2015 (Thầy Phước)</a>
                                            </li>
                                            <li>
                                                <a href="https://onedrive.live.com/redir?resid=F09910D77A857AC3!426&authkey=!AKUNLT7RPolmIUg&ithint=folder%2cJPG&quot;" target="pix">Niên Khóa 2014-2015 (Cô Kim)</a>
                                            </li>
                                            <li>
                                                <a href="https://onedrive.live.com/?cid=f09910d77a857ac3&id=F09910D77A857AC3%21112&Bsrc=Share&Bpub=SDX.SkyDrive&sc=Photos&authkey=!AtfcD2QVh3xDeY0" target="pix">Lễ Mãn Khóa 2015</a>
                                            </li>
                                            <li>
                                                <a href="https://picasaweb.google.com/109701516628544083665/VNLH20130209?noredirect=1#" target="pix">Tết Quý Tỵ 2013</a>
                                            </li>
                                            <li>
                                                <a href="https://picasaweb.google.com/109701516628544083665/VNLH_TET_2012?noredirect=1#" target="_blank" rel="noopener noreferrer">Tết Nhâm Thìn 2012</a>
                                            </li>
                                            <li>
                                                <a href="https://picasaweb.google.com/109701516628544083665/VNLH_Seattle_Center_2012?noredirect=1#" target="_blank" rel="noopener noreferrer">Tết Nhâm Thìn 2012 (Seattle Center)</a>
                                            </li>
                                            <li>
                                                <a href="https://picasaweb.google.com/109701516628544083665/VNLH_Picnic_20110820?noredirect=1#" target="_blank" rel="noopener noreferrer">Picnic (August 20, 2011)</a>
                                            </li>
                                            <li>
                                                <a href="https://picasaweb.google.com/109701516628544083665/TVNLH_2011?feat=email#slideshow/5573242861793106450" target="pix">Tết Tân Mão 2011 (Seattle Center)</a>
                                            </li>
                                            <li>
                                                <a href="https://picasaweb.google.com/109701516628544083665/VNLH_2011_06?noredirect=1#" target="pix">Lễ Mãn Khóa (11/6/2011)</a>
                                            </li>
                                            <li>
                                                <a href="https://picasaweb.google.com/109701516628544083665/RecentlyUpdated?noredirect=1#slideshow/5553307759479526594" target="pix">Noel 2010</a>
                                            </li>
                                        </ol>
                                    </div>
                                </td>
                                <td className="event_frame" id="carouselFrame">
                                    <Carousel className="pictureCarousel" showThumbs={false} dynamicHeight infiniteLoop autoPlay>
                                        {
                                            this.state.data.map(function(item, i){
                                            return <div key={i}>
                                                        <img  src={item} alt="Carousel"/>
                                                    </div>
                                            })
                                        }
                                    </Carousel>
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

export default Pictures;