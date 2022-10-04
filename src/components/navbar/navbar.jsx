import React from 'react';
import './navbar.css'
import { faShoePrints}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink }from'react-router-dom';
import { useState, useContext, useCallback } from 'react';
import AuthContext from '../../context/AuthContext';
import Popup from '../popup/popup';
import PopupContent from '../popup/popupContent/popupContent';
const Navbar = (props) => {
    const activeStyle = {
        background : 'skyblue',
        color : 'white',
        borderRadius : '4px'
    }
    const context = useContext(AuthContext);
    const onSignUp = context.signUp;
    const onLogin = context.logIn;
    const onLogout = context.logout;
    const auth = context.user;
    const [isOpenPopUp, setOpenPopUp] = useState(false)
    console.log(isOpenPopUp);
    const openPopUp = useCallback(() => {
        console.log(isOpenPopUp);
        return setOpenPopUp(true)
    })

    const closePopUp = useCallback(() => {
        console.log(isOpenPopUp)
        return setOpenPopUp(false)
    })

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
                {
                    !auth && <li className="n_item" id='loginBtn'>
                    <span onClick={openPopUp}>login</span>
                   {isOpenPopUp && <Popup><PopupContent onClose={closePopUp} onSignUp={onSignUp} onLogin={onLogin}/></Popup>}
                </li>
                }
                {
                    auth && <li className="n_item" id='loginBtn'>
                    <span onClick={onLogout}>logout</span>
                </li>
                }
                <div className="popupArea"></div>
            </ul>
        </div>
    </div>
    )
};

export default Navbar;