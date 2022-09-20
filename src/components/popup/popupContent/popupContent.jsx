import React from 'react';
import { useState } from 'react';
import './popupContent.css'
import Signin from './signIn/signin';
import SignUp from './signUp/signUp';


const PopupContent = ({onClose}) => {

    const [signPopUp, setsignPopUp]= useState(true)

    const openSignUp = () => {
        return setsignPopUp(false);
    }

    return(
            <div className="dimmed_layer_wrapper">
                <div className="full_layer">
                    <div className="common_alert"> 
                        {signPopUp&&<Signin onClose={onClose} openSignUp={openSignUp}/>}
                        {!signPopUp&&<SignUp onClose={onClose} openSignUp={openSignUp}/>}
                    </div>
                </div>
            </div>
        );
}

export default PopupContent;