import React from 'react';
import './navbar.css'
const Navbar = (props) => (
    <div className="n_wrap">
        <div className="logo">
            <p>This is logo</p>
        </div>
        <div className="n_items">
            <ul className="n_itemRow">
                <li className="n_item">Home</li>
                <li className="n_item">My chat</li>
                <li className="n_item">FAQ</li>
                <li className="n_item">Term of use</li>
                <li className="n_item">Logout</li>
            </ul>
        </div>
    </div>
);

export default Navbar;