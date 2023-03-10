import React, { useEffect, useRef, useState, useContext } from 'react';
import './chatboard.css'
import List from '../chatlist/list';
import Message from '../message/message';
import AuthContext from '../../context/AuthContext';
import { createPicker } from 'picmo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane, faFaceSmile} from '@fortawesome/free-solid-svg-icons';

const Chatboard = ({chatservice}) => {
    const [chatData, setChatData] = useState([]);
    const [active, setActive] = useState([]);
    const [messages, setMessage] = useState([]);
    const [emoji, setemoji] = useState(false);
    const msgInputRef = useRef();
    const msgList = useRef();
    const context = useContext(AuthContext);


    useEffect(() => {
        chatservice
          .getChatData()
          .then(setChatData)
          .catch(console.log);
      }, [chatservice]);

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
    
    const pickerContainer = document.querySelector('.pickerContainer')
    const Emoji = () => {
        setemoji(!emoji);
        const msgInput = document.querySelector('.msginput');

        const picker = createPicker({
        rootElement: pickerContainer,
          className : 'custompicker',
          emojiSize : '1rem',
          showRecents : false,
          showPreview : false,
          showSearch : false,
          onPositionLost : 'close'
        })

        picker.addEventListener('emoji:select', event => {
            msgInput.value = `${msgInput.value}${event.emoji}`
          });
    }


    const changeActive = (index) => {
        const newArray = Array(chatData.length).fill(false);
        newArray[index] = true;
        setMessage(chatData[index].listMsg);
        setActive(newArray);
    }

    const sendMessage = () => {
        if(msgInputRef.current.value === null || msgInputRef.current.value === "" ) return
        if(byteCounter(msgInputRef.current.value) < 3) {
            alert('2??? ?????? ???????????? ?????????.')
            return
        }
        const activeIdx = active.indexOf(true);
        const activeListname = chatData[activeIdx].listName;
        const sendMsg = { id : new Date(), sender : context.user.username, sendTime : timeformat(new Date()), text : msgInputRef.current.value, listName : activeListname, userid : context.user.userid}
        // const msg = [...messages, sendMsg];
        chatservice
        .postMessage(sendMsg, activeListname)
        .then((chats) => {setChatData(chats)})
        .catch(console.log);
        msgInputRef.current.value = ''
        msgInputRef.current.focus();
        
        const stopSync = chatservice.onSync((data) => {setChatData(data); setMessage(data[activeIdx].listMsg)});
        return () => stopSync
    }

    const byteCounter = (text) => {
        let byte = 0;
        for(let i=0; i<text.length;i++) {
            if (/[???-??????-??????-??????-??????-??????-???????????????]/.test(text[i])) {
                byte = byte+2
            } else {
                byte++
              }
        }
        return byte
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter') {
            sendMessage()
        }
    }

    const timeformat = (time) => {
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
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
                        {chatData.map((li, index) => {
                            return <List list={li} key={li.listName} active={active[index]} onClick={changeActive} index={index}/>
                        })}
                    </ul>
            </div>
        </div>

        <div className="b_right">
            <div className="b_board">
                <ul className='messages' ref={msgList}>
                    {
                    messages.map((msg) => {
                        return <Message sender={msg.sender} text={msg.text} key={msg.id} />
                    })
                    }
                </ul>
            </div>
            <div className="b_footer">
                <div className="b_input">
                    <div className="emoji" >
                        <button onClick={Emoji} className={emoji ? 'emojiBtn active' : 'emojiBtn'}>
                            <div className={emoji ? 'pickerContainer' : 'pickerContainer hide'}></div>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </button>
                    </div>
                    <input className='msginput' onKeyPress={onKeyPress} ref={msgInputRef} type="text" placeholder='Type a message' />
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