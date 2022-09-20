import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './signUp.css'
const SignUp = ({onClose}) => {
    return(
    <>
    <div className="popUpHeader">
            <div className="h_avator">
                <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <div className="h_wrap">
                <span>Snichat</span>
                <span>회원가입</span>
            </div>
        </div>

        <div className="popUpInput">
            <div className="inputWrapper">
                <input type="text" className="username" placeholder='username'/>
            </div>
            <div className="inputWrapper">
                <input type="text" className="email" placeholder='email'/>
            </div>
            <div className="inputWrapper">
                <input type="text" className="pw" placeholder='password'/>
            </div>
        </div>

        <div className="popUpFooter">
            <button type="button" onClick={onClose} className="popUpBtn signUp">가입하기</button>
        </div>
        </>
    )
}

export default SignUp;