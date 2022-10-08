import {React, useEffect, useState} from 'react';
import './chatcard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons';
import ImgService from '../../service/img.js';
const baseURL = process.env.REACT_APP_BASE_URL;
const imgService = new ImgService(baseURL);

const Chatcard = ({msg, deleteMsg}) => {
    const [image, setImage] = useState('')
    useEffect(() => {
        imgService.getImage(msg.listName).then((res) => setImage(res.url))
    },[])
    
    return(
        <li className="card" key={msg.id}>
            <img crossOrigin="anonymous" src={image} alt="" />
            <div className="c_contents">
            <p className="roomName">{msg.listName}</p>
            <p className="msg">{msg.text}</p>
            <div className="c_info">
                <span className="c_time">{msg.sendTime}</span>
                <span className="c_writer">{msg.sender}</span>
            </div>
            </div>
            <button data-id={msg.id} data-list-name={msg.listName} className="deleteBtn" onClick={deleteMsg}>
                <FontAwesomeIcon icon={faDeleteLeft}/>
            </button>
        </li>
        )
    };

export default Chatcard;