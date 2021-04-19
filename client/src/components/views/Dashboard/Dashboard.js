// for signed in users
import React from 'react';
import Right from './RightSection';
import './Dashboard.css';

function Dashboard() {


    return (
        <nav className="menu" style={{ position: 'static', zIndex: 5, width: '100%' }}>
            <div className="menu__container">
                <div className="menu_right">
                    <Right mode="horizontal" />
                </div>
            </div>
        </nav>
    )
}

export default Dashboard