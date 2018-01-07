import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
// import $ from 'jquery';
// require('foundation-sites');




class ChildrensMusic extends React.Component {

    componentDidMount() {
        // $(document).foundation();
    }

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <Footer></Footer>
            </div>
        );
    }
}

export default ChildrensMusic;