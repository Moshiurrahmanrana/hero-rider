import React, { useContext } from 'react';
import UserContext from '../../userContext';
import Logo from '../../images/Urban Riders.png';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const[user ,setUser] = useContext(UserContext);
    
    return (
        <header className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo_img--box">
                        <img src={Logo} alt="" className="logo_img"></img>
                    </div>
                    <nav className="navbar_nav">
                        <Link className="nav_link" to="/">Home</Link>
                        <Link className="nav_link" to="/">Destination</Link>
                        <Link className="nav_link" to="/">Blog</Link>
                        <Link className="nav_link" to="/">Contact</Link>
                        <Link className="btn_primary" to="/">Login</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;