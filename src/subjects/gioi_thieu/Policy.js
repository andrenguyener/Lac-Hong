import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
import PdfFile from './../../contents/Trường Việt Ngữ Lạc Hồng-Nội Quy 2015-2016.pdf';

class Policy extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <a className="hide-for-med-large" href={PdfFile} target="_blank">Trường Việt Ngữ Lạc Hồng-Nội Quy 2015-2016</a>
                    <embed src={PdfFile} type='application/pdf' className="page_pdf show-for-med-large"/>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Policy;