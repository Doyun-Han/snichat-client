import {React, useContext} from 'react';
import './message.css'
import AuthContext from '../../context/AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Message = ({sender, text}) => {
    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    useEffect(() => {
        if(context.user) {
            setUsername(context.user.username);
        }
    })
    return (
        <li className={sender === username ? "message me " : "message other"}>
            <div className="m_container">
                <div className="m_sender">
                    <span>{sender}</span>
                </div>
                <p>{text}</p>
            </div>
        </li>
    )
}

export default Message;