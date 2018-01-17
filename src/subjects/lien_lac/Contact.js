import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';
import Information from './../../components/information';

class Contact extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page" id="contact">
                    <Information/>
                    <form id="myForm" method="post" data-abide>  
                            <h5>Contact Us</h5>
                            <label>Name</label>
                            <small className="error">Your full name is required.</small>
                            <input type="text" placeholder="" required/>
                            
                            <label>Email</label>
                            <small className="error">An email address is required.</small>

                            <input type="email" placeholder="" required/>
                            
                            <label>Phone Number</label>          
                            <input type="url" placeholder=""/>
                            
                            <label>Your Message</label>
                            <small className="error">Your message is required.</small>
                            <textarea rows="5"></textarea>
                            
                            <button><input type="submit" className="button" value="Send Message"/></button>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Contact;