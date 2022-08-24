import React from 'react';
import './navbar.css'
import {faShoePrints}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink }from'react-router-dom';
const Navbar = (props) => {
    const activeStyle = {
        background : 'skyblue',
        color : 'white',
        borderRadius : '4px'
    }

    return(
        <div className="n_wrap">
        <div className="n_logo">
            <div className="logo_wrap">
            <FontAwesomeIcon icon={faShoePrints}/>
            </div>
            <span>SniChat</span>
        </div>
        <div className="n_items">
            <ul className="n_itemRow">
                <NavLink to= '/'  style={({ isActive }) => isActive ? activeStyle : undefined}>
                <li className="n_item">Home</li>
                </NavLink>
                <NavLink to='/myChat' style={({ isActive }) => isActive ? activeStyle : undefined}>
                <li className="n_item">My chat</li>
                </NavLink>
                <NavLink to='/faq' style={({ isActive }) => isActive ? activeStyle : undefined}>
                <li className="n_item">FAQ</li>
                </NavLink>
                <NavLink to='/term' style={({ isActive }) => isActive ? activeStyle : undefined}>
                <li className="n_item">Term of use</li>
                </NavLink>
                <li className="n_item">Logout</li>
            </ul>
        </div>
    </div>
    )
};

export default Navbar;