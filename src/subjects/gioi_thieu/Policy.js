import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class Policy extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <a className="hide-for-med-large" href="/contents/Trường Việt Ngữ Lạc Hồng-Nội Quy 2015-2016.pdf" target="_blank">Trường Việt Ngữ Lạc Hồng-Nội Quy 2015-2016</a>
                    <embed src="/contents/Trường Việt Ngữ Lạc Hồng-Nội Quy 2015-2016.pdf" type='application/pdf' className="page_pdf show-for-med-large"/>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Policy;