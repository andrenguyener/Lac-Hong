import React from 'react';
import  Navbar  from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Information from './components/information';

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                    <h2>Lạc Hồng Vietnamese Language School</h2>
                </header>
                <About/>
                <Information/>
                <Footer/>
            </div>
        );
    }
}

    
    
export default Home;
    