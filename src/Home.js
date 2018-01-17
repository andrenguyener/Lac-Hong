import React from 'react';
import  Navbar  from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Information from './components/information';
import Mission from './components/mission';

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                    <h2>Lạc Hồng Vietnamese Language School</h2>
                </header>
                <About/>
                <main>
                    <Information/>
                    <Mission/>
                </main>
                <Footer/>
            </div>
        );
    }
}

    
    
export default Home;
    