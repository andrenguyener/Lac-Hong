
import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { slide as Menu } from 'react-burger-menu'
import Collapsible from 'react-collapsible';
require('foundation-sites');

class Navbar extends React.Component {

    componentDidMount() {
        $(document).foundation();
    }

    render() {
        return (
            <div> 
                <div className="nav-header">
                    <Menu right width={ 200 }>
                        <Collapsible trigger="Giới Thiệu">
                            <Link to="/history">Sơ Lược</Link><br/>
                            <Link to="/leaders">Tổ Chức</Link><br/>
                            <Link to="/policy">Nội Quy</Link>
                        </Collapsible>
                        <Link to="/events">Thông Báo</Link>
                        <Collapsible trigger="Sinh Hoạt">
                            <Link to="/general">Chương Trình</Link><br/>
                            <Link to="/lopk">Lớp Mẫu Giáo</Link><br/>
                            <Link to="/lop1">Lớp Một</Link><br/>
                            <Link to="/lop2">Lớp Hai</Link><br/>
                            <Link to="/lop3">Lớp Ba</Link><br/>
                            <Link to="/lop4">Lớp Bốn</Link><br/>
                            <Link to="/lop5">Lớp Năm</Link><br/>
                            <Link to="/lop6">Lớp Sáu</Link>
                        </Collapsible>
                        <Collapsible trigger="Thư Viện">
                            <Link to="/resources">Tài Liệu Tham Khảo</Link><br/>
                            <Link to="/pictures">Hình Ảnh</Link><br/>
                            <Link to="/childrensMusic">Nhạc Thiếu Nhi</Link><br/>
                            <Link to="/videos">Phim</Link><br/>
                            <Link to="/stories">Truyện Cổ Tích</Link>
                        </Collapsible>
                        <Link to="/contact">Liên Lạc</Link>
                        <Link to="/links">Liên Kết</Link>
                    </Menu>

                    <div className="logo-wrapper hide-for-med-large">
                        <div className="logo">
                            <Link to="/"><img alt="logo" src="./img/logo.png"/></Link>
                        </div>
                    </div> 
        
                    <nav className="top-bar show-for-med-large" data-hide-for="med-large" id="nav-menu">
					
                        <div className="top-bar-left">
                            <ul className="vertical medium-horizontal dropdown menu" data-dropdown-menu="">
                                <li className="has-submenu opens-right overline">
                                    <Link to="/history">Giới Thiệu</Link>
                                    <ul className="submenu menu vertical" data-submenu="">
                                        <li>
                                            <Link to="/history">Sơ Lược</Link>
                                        </li>
                                        <li>
                                            <Link to="/leaders">Tổ Chức</Link>
                                        </li>
                                        <li>
                                            <Link to="/policy">Nội Quy</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-submenu opens-right overline">
                                <Link to="/events">Thông Báo</Link>
                                    <ul className="submenu menu vertical" data-submenu=""></ul>
                                </li>
                                <li className="has-submenu opens-right overline">
                                <Link to="/general">Sinh Hoạt</Link>
                                    <ul className="submenu menu vertical" data-submenu="">
                                        <li>
                                            <Link to="/general">Chương Trình</Link>
                                        </li>
                                        <li>
                                            <Link to="/lopk">Lớp Mẫu Giáo</Link>
                                        </li>
                                        <li>
                                            <Link to="/lop1">Lớp Một</Link>
                                        </li>
                                        <li>
                                            <Link to="/lop2">Lớp Hai</Link>
                                        </li>
                                        <li>
                                            <Link to="/lop3">Lớp Ba</Link>
                                        </li>
                                        <li>
                                            <Link to="/lop4">Lớp Bốn</Link>
                                        </li>
                                        <li>
                                            <Link to="/lop5">Lớp Năm</Link>
                                        </li>
                                        <li>
                                            <Link to="/lop6">Lớp Sáu</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="logo-wrapper hide-for-small-only">
                            <div className="logo">
                                <Link to="/"><img alt="logo" src="./img/logo.png"/></Link>
                            </div>
                        </div>
                        
                        <div className="top-bar-right">
                            <ul className="vertical medium-horizontal dropdown menu" data-dropdown-menu="">
                                <li className="has-submenu opens-right overline">
                                <Link to="/resources">Thư Viện</Link>
                                    <ul className="submenu menu vertical" data-submenu="">
                                        <li>
                                            <Link to="/resources">Tài Liệu Tham Khảo</Link>
                                        </li>
                                        <li>
                                            <Link to="/pictures">Hình Ảnh</Link>
                                        </li>
                                        <li>
                                            <Link to="/childrensMusic">Nhạc Thiếu Nhi</Link>
                                        </li>
                                        <li>
                                            <Link to="/videos">Phim</Link>
                                        </li>
                                        <li>
                                            <Link to="/stories">Truyện Cổ Tích</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-submenu opens-right overline">
                                    <Link to="/contact">Liên Lạc</Link>
                                    <ul className="submenu menu vertical" data-submenu=""></ul>
                                </li>
                                <li className="has-submenu opens-right overline">
                                    <Link to="/links">Liên Kết</Link>
                                    <ul className="submenu menu vertical" data-submenu=""></ul>
                                </li>
                            </ul>
                        </div>
				    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;