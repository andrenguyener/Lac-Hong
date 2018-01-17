import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
import Schedule from './../../contents/Schedule_Niên học 2016-2017.pdf';

class General extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <a className="hide-for-med-large" href={Schedule} target="_blank">Schedule Niên học 2016-2017</a>
                    <embed src={Schedule} type='application/pdf' className="page_pdf show-for-med-large"/>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default General;