import React, { useState } from 'react';
import './chatboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import List from '../chatlist/list';
import Message from '../message/message';

const Chatboard = ({chatData}) => {
    const openEmoji = () => {
        const OS = window.navigator.platform;
        if(OS === 'Win32') {
            document.dispatchEvent(new KeyboardEvent('keypress', {keyCode : 91}))
        }
    }
    const [active, setActive] = useState([]);
    const [messages, setMessage] = useState([{sender : "yo", text : "hello"}])

    const changeActive = (index) => {
        const newArray = Array(chatData.lists.length).fill(false);
        newArray[index] = true;
        setMessage(chatData.lists[index].listMsg);
        setActive(newArray);
        console.log(chatData.lists[index].listMsg)
    }

    return(
        <>
    <div className="b_wrap">
        <div className="b_left">
            <div className="b_list">
                    <ul className="chatRows" >
                        {chatData.lists.map((li, index) => {
                            return <List list={li} key={li.listName} active={active[index]} onClick={changeActive} index={index}/>
                        })}
                    </ul>
            </div>
        </div>

        <div className="b_right">
            <div className="b_board">
                <ul className='messages'>
                    {/* <li className="message other">Hi there, How are you?</li>
                    <li className="message other">Nice to meet you I`m David</li>
                    <li className="message me">Hi nice to meet you too, i`m Jake!</li>
                    <li className="message other">Hi there, How are you?</li>
                    <li className="message other">Nice to meet you I`m David</li>
                    <li className="message me">Hi nice to meet you too, i`m Jake!</li>
                    <li className="message other">Hi there, How are you?</li>
                    <li className="message other">Nice to meet you I`m David</li>
                    <li className="message me">Hi nice to meet you too, i`m Jake!</li>
                    <li className="message other">Hi there, How are you?</li>
                    <li className="message other">Nice to meet you I`m David</li>
                    <li className="message me">Hi nice to meet you too, i`m Jake!</li>
                    <li className="message other">Hi there, How are you?</li>
                    <li className="message other">Nice to meet you I`m David</li>
                    <li className="message me">Hi nice to meet you too, i`m Jake!</li> */}
                    {messages.map((msg) => {
                        return <Message sender={msg.sender} text={msg.text} key={msg.id}/>
                    })}
                </ul>
            </div>
            <div className="b_footer">
                <div className="b_input">
                    <div className="emoji">
                        <button onClick={openEmoji}>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </button>
                    </div>
                    <input type="text" placeholder='Type a message' />
                </div>
                <div className="b_sendBtn">
                    <div className="btn_inner">
                        <button>
                        <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
    };

export default Chatboard;