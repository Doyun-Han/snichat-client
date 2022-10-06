import { React, useState, useEffect } from 'react';
import './list.css'
const baseURL = process.env.REACT_APP_BASE_URL;

const List = ({list, active, onClick, index}) => {
    const lastIdx = list.listMsg.length - 1;
    const time = list.listMsg[lastIdx].sendTime.split(' ')[1].split(':')
    const [image, setImage] = useState('')

    useEffect(() => {
        fetch(`${baseURL}/img/${list.listName}`, {
            method : 'GET',
            headers :{ "Context-Type" : "image/jpg"}
        }).then((res) => {setImage(res.url)})
    },[])
    
    return(
        <li onClick={()=> onClick(index)} className={active ? "chatList active" : "chatList"}>
    <div className="li_img">
        <img crossOrigin="anonymous" src={image} alt="" />
    </div>
    <div className="li_description">
        <div className="li_left">
            <p>{list.listName}</p>
            <p>{list.listMsg[lastIdx].text}</p>
        </div>
        <div className="li_right">
            <p>{`${time[0]}:${time[1]}`}</p>
        </div>
    </div>
</li>
    )
    };

export default List;