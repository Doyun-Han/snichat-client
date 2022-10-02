import React from 'react';
import { useState } from 'react';
import './popupContent.css'
import Signin from './signIn/signin';
import SignUp from './signUp/signUp';
import Banner from '../../banner/banner';

const PopupContent = ({onClose, onSignUp, onLogin}) => {
    const [signPopUp, setsignPopUp]= useState(true);
    const [isAlert, setIsAlert] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const openSignUp = () => {
        return setsignPopUp(false);
    }

    async function onSubmit(event) {
        console.log(signPopUp);
        event.preventDefault();
        if (!signPopUp) {
            await onSignUp(username, email, password).catch(setError);
        } else {
            await onLogin(email, password).catch(setError);
        }
        {!isAlert && onClose()};
    }

    const setError= (error) => {
        setText(error.toString());
        setIsAlert(true);
    }

    const onChange = (event) => {
        console.log('do')
        const {
            target : { name , value}
        } = event;
        switch(name) {
            case 'username':
              return setUsername(value);
            case 'password':
              return setPassword(value);
            case 'email':
              return setEmail(value);
            default:
        }
    } 
    return(
            <div className="dimmed_layer_wrapper">
                <form className='auth-form' onSubmit={onSubmit}>
                    <div className="full_layer">
                        <div className="common_alert">
                            <Banner text={text} isAlert={isAlert}/>
                            {signPopUp&&<Signin  openSignUp={openSignUp} onChange={onChange}/>}
                            {!signPopUp&&<SignUp  openSignUp={openSignUp} onChange={onChange}/>}
                        </div>
                    </div>
                </form> 
            </div>
        );
}

export default PopupContent;