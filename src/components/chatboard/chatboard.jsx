import React, { useEffect, useRef, useState } from 'react';
import './chatboard.css'
import List from '../chatlist/list';
import Message from '../message/message';
import { createPopup } from '@picmo/popup-picker';
import { createPicker } from 'picmo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';

const Chatboard = ({chatData}) => {    
    const [active, setActive] = useState([]);
    const [messages, setMessage] = useState([{sender : "yo", text : "Select ChatList"}])
    const msgInputRef = useRef();
    const msgList = useRef();

    useEffect(() => {
        if (msgList.current) {
            msgList.current.scrollIntoView(
              {
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
              })
          }
        })
    
    const trigger = document.querySelector('.trigger');
    const pickerContainer = document.querySelector('.pickerContainer')
    const Emoji = () => {
        console.log('hi')
        const picker = createPicker({
        rootElement: pickerContainer,
          className : 'custompicker',
          emojiSize : '1rem',
          showRecents : false,
          showPreview : false,
        })

        picker.addEventListener('emoji:select', event => {
            console.log('Emoji selected:', event.emoji);
          });
    }

    const changeActive = (index) => {
        const newArray = Array(chatData.lists.length).fill(false);
        newArray[index] = true;
        setMessage(chatData.lists[index].listMsg);
        setActive(newArray);
    }

    const sendMessage = () => {
        if(msgInputRef.current.value === null || msgInputRef.current.value === "") return

        const idx = messages.length
        const msg = [...messages];
        const sendMsg = { id : idx, sender : "han", sendTime : timeformat(new Date()), text : msgInputRef.current.value }
        msg.push(sendMsg);

        setMessage(msg);

        msgInputRef.current.value = ''
        msgInputRef.current.focus();
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter') {
            sendMessage()
        }
    }

    const timeformat = (time) => {
        const year = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const sec = time.getSeconds(); 

        return `${year}-${month}-${date} ${hour}:${minutes}:${sec}`
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
                <ul className='messages' ref={msgList}>
                    {messages.map((msg) => {
                        return <Message sender={msg.sender} text={msg.text} key={msg.id}/>
                    })}
                </ul>
            </div>
            <div className="b_footer">
                <div className="b_input">
                    <div className="emoji" >
                        <button className='trigger' onClick={Emoji}>
                            <div className="pickerContainer"></div>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </button>
                    </div>
                    <input onKeyPress={onKeyPress} ref={msgInputRef} type="text" placeholder='Type a message' />
                </div>
                <div className="b_sendBtn">
                    <div className="btn_inner">
                        <button onClick={sendMessage}>
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