import React from 'react';
import './chatboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import List from '../chatlist/list';
const Chatboard = (props) => {
    const openEmoji = () => {
        const OS = window.navigator.platform;
        if(OS === 'Win32') {
            document.dispatchEvent(new KeyboardEvent('keypress', {keyCode : 91}))
        }
    }


    return(
        <>
    <div className="b_wrap">
        <div className="b_left">
            <div className="b_list">
                    <ul className="chatRows">
                        <List/>
                        <List/>
                        <List/>
                    </ul>
            </div>
        </div>

        <div className="b_right">
            <div className="b_board">
                <ul className='messages'>
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
                    <li className="message me">Hi nice to meet you too, i`m Jake!</li>
                    <li className="message other">Hi there, How are you?</li>
                    <li className="message other">Nice to meet you I`m David</li>
                    <li className="message me">Hi nice to meet you too, i`m Jake!</li>
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