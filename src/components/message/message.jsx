import React from 'react';

const Message = ({sender, text}) => {
    return (
        <li className={sender === 'han' ? "message me " : "message other"}>{text}</li>
    )
}

export default Message;