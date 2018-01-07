import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home';
import Historys from './subjects/gioi_thieu/History';
import Leaders from './subjects/gioi_thieu/Leaders';
import Policy from './subjects/gioi_thieu/Policy';
import Events from './subjects/thong_bao/Events';
import General from './subjects/sinh_hoat/General';
import Lop1 from './subjects/sinh_hoat/Lop1';
import Lop2 from './subjects/sinh_hoat/Lop2';
import Lop3 from './subjects/sinh_hoat/Lop3';
import Lop4 from './subjects/sinh_hoat/Lop4';
import Lop5 from './subjects/sinh_hoat/Lop5';
import Lop6 from './subjects/sinh_hoat/Lop6';
import Lopk from './subjects/sinh_hoat/Lopk';
import ChildrensMusic from './subjects/thu_vien/ChildrensMusic';
import Pictures from './subjects/thu_vien/Pictures';
import Resources from './subjects/thu_vien/Resources';
import Stories from './subjects/thu_vien/Stories';
import Videos from './subjects/thu_vien/Videos';
import Contact from './subjects/lien_lac/Contact';
import Links from './subjects/lien_ket/Links';
import './styles/app.css';
// import './js/app.js';
//import jQuery from './js/jquery.js';
// import jQuery from 'jquery';
// require('foundation-sites');

class App extends Component {

  // componentDidMount() {
  //   jQuery(document).foundation();
  // }


  render() {
    return (

      <div className="App">
        <Router>
            <div className="off-canvas-wrapper">
              <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper="">
                <Route exact path="/" component={Home} />
                <Route path="/history" component={Historys} />
                <Route path="/leaders" component={Leaders} />
                <Route path="/policy" component={Policy} />
                <Route path="/events" component={Events} />
                <Route path="/general" component={General} />
                <Route path="/lop1" component={Lop1} />
                <Route path="/lop2" component={Lop2} />
                <Route path="/lop3" component={Lop3} />
                <Route path="/lop4" component={Lop4} />
                <Route path="/lop5" component={Lop5} />
                <Route path="/lop6" component={Lop6} />
                <Route path="/lopk" component={Lopk} />
                <Route path="/childrensmusic" component={ChildrensMusic} />
                <Route path="/pictures" component={Pictures} />
                <Route path="/resources" component={Resources} />
                <Route path="/stories" component={Stories} />
                <Route path="/videos" component={Videos} />
                <Route path="/contact" component={Contact} />
                <Route path="/links" component={Links} />
                {/* <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
                <Route path="/draw" component={Draw} /> */}
              </div>
            </div>
        </Router>
      </div>

    );
  }
}

export default App;
