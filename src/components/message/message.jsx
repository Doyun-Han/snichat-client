import React from 'react';
import './message.css'
const Message = ({sender, text}) => {
    return (
        <li className={sender === 'han' ? "message me " : "message other"}>
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