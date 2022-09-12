import React from 'react';
import { useState } from 'react';
import './popupContent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

const PopupContent = ({onClose}) => {

    const [loginData, setLoginData]= useState(0)

    return(
            <div className="dimmed_layer_wrapper">
                <div className="full_layer">
                    <div className="common_alert"> 
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
                                <input type="text" className="email" placeholder='email'/>
                            </div>
                            <div className="inputWrapper">
                                <input type="text" className="pw" placeholder='password'/>
                            </div>
                        </div>

                        <div className="popUpFooter">
                            <span>회원가입</span>
                            <button type="button" onClick={onClose} className="popUpBtn login">로그인</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default PopupContent;