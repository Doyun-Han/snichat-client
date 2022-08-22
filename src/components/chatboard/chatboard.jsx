import React from 'react';
import './chatboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';
const Chatboard = (props) => (
        <div className="b_container">
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
                        <button>
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
    );

export default Chatboard;