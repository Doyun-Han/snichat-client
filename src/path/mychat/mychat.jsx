import React, { useEffect, useState } from 'react';
import Chatcard from '../../components/chatcard/chatcard';
import Navbar from '../../components/navbar/navbar';

const Mychat = ({chatData}) => {
    const [message, setMessage] = useState([])

    useEffect(() => {
        filterMsg()
    },[])

    const filterMsg = () => {
        let allMsg = []
        chatData.lists.map((list) => {
            list.listMsg.map((msg) => {
                allMsg.push(msg)
            })
        })
        const filteredMsg = allMsg.filter(msg => msg.sender === 'han');
        setMessage(filteredMsg)
    }

    return(
        <>
        <Navbar />
        <Chatcard message={message} />
    </>
    )
    };

export default Mychat;