import React from 'react';
import Navbar from './../../components/navbar';
import Footer from './../../components/footer';

class Links extends React.Component {

    render() {
        return (
            <div> 
                <Navbar></Navbar>
                <div className="page">
                    <table className="stack" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="http://www.vanlangseattle.org" target="_blank" rel="noopener noreferrer">Trung Tâm Việt Ngữ Văn Lang (Seattle, WA)</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="http://www.vanlangsj.org" target="_blank" rel="noopener noreferrer">Trường Việt Ngữ Văn Lang (San Jose, CA)</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="http://www.vanlangsd.org" target="_blank" rel="noopener noreferrer">Trường Việt Ngữ Văn Lang (San Diego, CA)</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="http://www.vanlangoregon.org" target="_blank" rel="noopener noreferrer">Trường Việt Ngữ Văn Lang (Oregon)</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="http://hongbangschool.com" target="_blank" rel="noopener noreferrer">Trường Việt Ngữ Hồng Bàng (Seattle, WA)</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="http://www.vietngudaclo.org" target="_blank" rel="noopener noreferrer">Trường Việt Ngữ Đắc Lộ (Seattle, WA)</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Links;