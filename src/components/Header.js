import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">HungerBox</h1>
                    <span>.</span>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active">Home</a></li>
                        <li><a href="#vendor">Vendor</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="">Order</a></li>
                        <li><a href="">Wallet</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
               
                <Link to="/login" className="btn-getstarted">
                    <i className="fas fa-user"></i>
                </Link>
            </div>
        </header>
    );
};

export default Header;
