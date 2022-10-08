import { React, memo, useEffect, useState, useContext } from 'react';
import Chatcard from '../../components/chatcard/chatcard';
import Navbar from '../../components/navbar/navbar';
import AuthContext from '../../context/AuthContext';
import './mychat.css'
const Mychat = memo(({ChatService}) => {
    const [message, setMessage] = useState([])
    const [change, setchange] = useState(false);
    const context = useContext(AuthContext);
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
            const filteredMsg = allMsg.filter(msg => msg.sender === context.user.username);
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
        <div className='c_container'>
            <h2>My Chats</h2>
            <ul className="cards">
                {
                    message.map((msg) => {
                        return <Chatcard msg={msg} deleteMsg={deleteMsg} key={msg.id}/>
                    })
                }
            </ul>
        </div>
    </>
    )
    });

export default Mychat;