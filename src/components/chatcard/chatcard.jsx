import React from 'react';
import './chatcard.css'
import img from '../../imgs/jordan.JPG'
const Chatcard = ({message}) => {
    return(
        <div className='c_container'>
            <ul className="cards">
                {
                    message.map((msg) => {
                    return <li className="card">
                        <img src={img} alt="" />
                        <div className="c_contents">
                        <p className="roomName">{msg.listName}</p>
                        <p className="msg">{msg.text}</p>
                        <div className="c_info">
                            <span className="c_time">09:00</span>
                            <span className="c_writer">{msg.sender}</span>
                        </div>
                        </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
    };

export default Chatcard;