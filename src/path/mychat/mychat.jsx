import React, { memo, useEffect, useState } from 'react';
import Chatcard from '../../components/chatcard/chatcard';
import Navbar from '../../components/navbar/navbar';

const Mychat = memo(({ChatService}) => {
    const [message, setMessage] = useState([])
    const [change, setchange] = useState(false);
    useEffect(() => {
        ChatService
          .getChatData()
          .then((chats) => {filterMsg(chats)})
          .catch(console.log);
      }, [ChatService]);

    const filterMsg = (chatData) => {
        let allMsg = []
        chatData.lists.map((list) => {
            list.listMsg.map((msg) => {
                allMsg.push(msg)
            })
        })
        const filteredMsg = allMsg.filter(msg => msg.sender === 'han');
        setMessage(filteredMsg);
    }
    //delete Loading
    const deleteMsg = (e) => {
        const id = e.currentTarget.dataset.id;
        const listname = e.currentTarget.dataset.listName;
        const info = {id, listname};
        ChatService
        .deleteMessgae(info)
        .then(setMessage(message.filter((msg) => msg.id != id || msg.listName !== listname)))
        .catch(console.log);
        setchange(true)
    }
    return(
        <>
        <Navbar />
        <Chatcard message={message} deleteMsg={deleteMsg}/>
    </>
    )
    });

export default Mychat;

// => setMessage(message.filter((msg) => msg.id !== id || msg.listName !== listname))