import React from 'react';

const Message = ({message}) => (
    <li className={message.username === 'me' ? "message me " : "message other"}>{message.text}</li>
    );

export default Message;