import React from 'react';

class Footer extends React.Component {	

    render() {
        return (
            <footer>
                <div className="grid-x grid-margin-x footer">
                    <div className="cell small-12 medium-5 med-large-4 large-4 " id="address-container">
                        <div className="grid-x grid-margin-x">
                            <h5 className="cell small-3 medium-4" id="footer_address">Address</h5>
                            <p className="cell small-9 medium-8">PO BOX 12044<br />Everett, WA 98206</p>
                        </div>
                    </div>
                    <div className="cell small-12 medium-6 med-large-6 large-5" id="contact-container">
                        <div className="grid-x grid-margin-x">
                            <h5 className="cell small-3 medium-4" id="footer_contact">Contact</h5>
                            <p className="cell small-9 medium-8"><a href="mailto:huyenquangtran@gmail.com"><i className="fa fa-envelope"></i></a> dikimguyen@gmail.com<br />
                            <a href="tel:425-367-8790"><i className="fa fa-phone"></i></a>(425) 301-4964</p>
                        </div>
                    </div>
                    <div className="cell auto" id="facebook-container">
                        <a href="https://www.facebook.com/TVNLH/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" id="facebook-icon"></i></a>
                    </div>
                    <div className="cell small-12" id="copyright-container">
                        <p>Copyright © 2012-2018, Trường Việt Ngữ Lạc Hồng</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;