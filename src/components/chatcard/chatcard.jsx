import React from 'react';
import './chatcard.css'
import img from '../../imgs/jordan.JPG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons';

const Chatcard = ({message, deleteMsg}) => {
    return(
        <div className='c_container'>
            <ul className="cards">
                {
                    message.map((msg) => {
                    return <li className="card" key={msg.id}>
                        <img src={img} alt="" />
                        <div className="c_contents">
                        <p className="roomName">{msg.listName}</p>
                        <p className="msg">{msg.text}</p>
                        <div className="c_info">
                            <span className="c_time">09:00</span>
                            <span className="c_writer">{msg.sender}</span>
                        </div>
                        </div>
                        <button data-id={msg.id} data-list-name={msg.listName} className="deleteBtn" onClick={deleteMsg}>
                            <FontAwesomeIcon icon={faDeleteLeft}/>
                        </button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
    };

export default Chatcard;