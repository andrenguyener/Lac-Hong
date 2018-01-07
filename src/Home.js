import React from 'react';
import  Navbar  from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Information from './components/information';
// import $ from 'jquery';
// require('foundation-sites');

class Home extends React.Component {
    
    componentDidMount() {
        // $(document).foundation();
        // $(".off-canvas-submenu").hide();
        // $(".off-canvas-submenu-call").click(function() {
        //     var icon = $(this).parent().next(".off-canvas-submenu").is(':visible') ? '+' : '-';
        //     $(this).parent().next(".off-canvas-submenu").slideToggle('fast');
        //     $(this).find("span").text(icon);
        // });

        // $("[data-menu-underline-from-center] a").addClass("underline-from-center");
    }
    
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
    