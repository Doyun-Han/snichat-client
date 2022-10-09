import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './signin.css'
const Signin = ({ openSignUp, onChange}) => {
    return (
        <>
        <div className="popUpHeader">
            <div className="h_avator">
                <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <div className="h_wrap">
                <span>Snichat</span>
                <span>e-mail과 PW를 입력하세요.</span>
            </div>
        </div>

        <div className="popUpInput">
            <div className="inputWrapper">
                <input onChange={onChange} name='email' type="text" className="email" placeholder='email'/>
            </div>
            <div className="inputWrapper">
                <input onChange={onChange} name='password' type="password" className="pw" placeholder='password'/>
            </div>
        </div>

        <div className="popUpFooter">
            <p onClick={openSignUp}>회원가입</p>
            <button type='submit' className="popUpBtn login">로그인</button>
        </div>
        </>
    )
}

export default Signin;