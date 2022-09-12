import React from 'react';
import { useState } from 'react';
import './popupContent.css'
const PopupContent = ({onClose}) => {

    const [loginData, setLoginData]= useState(0)

    return(
            <div className="dimmed_layer_wrapper">
                <div className="full_layer">
                    <div className="common_alert"> 
                        <h2>Sign in</h2>
                        <div>This is Popup Body</div>
                        <div>
                            <button type="button" onClick={onClose}>close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default PopupContent;