import React from 'react';
import './navbar.css'
import {faShoePrints}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = (props) => (
    <div className="n_wrap">
        <div className="n_logo">
            <div className="logo_wrap">
            <FontAwesomeIcon icon={faShoePrints}/>
            </div>
            <span>SniChat</span>
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