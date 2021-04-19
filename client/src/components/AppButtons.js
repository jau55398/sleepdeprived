import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

/*Contains all the buttons that are below the logo*/

function AppButtons() {
    return (
        <div className="rightside">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <span className="buttondivider">HOME</span>
            </Link>
            <Link to='/Shop' style={{ textDecoration: 'none' }}>
                <span className="buttondivider">SHOP</span>
            </Link>
            <Link to='/About' style={{ textDecoration: 'none' }}>
                <span className="buttondivider">ABOUT US</span>
            </Link>
            <Link to='/Contact' style={{ textDecoration: 'none' }}>
                <span className="buttondivider">CONTACT</span>
            </Link>
            <Link to='/Terms' style={{ textDecoration: 'none' }}>
                <span className="buttondivider">TERMS</span>
            </Link>
            <Link to='/Tracking' style={{ textDecoration: 'none' }}>
                <span className="buttondivider">TRACKING</span>
            </Link>
        </div>
    )
} export default AppButtons;
