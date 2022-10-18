import { React, useState, useEffect } from 'react';
import './list.css'
import ImgService from '../../service/img.js';
const baseURL = process.env.REACT_APP_BASE_URL;
const imgService = new ImgService(baseURL);

const List = ({list, active, onClick, index}) => {
    const lastIdx = list.listMsg.length - 1;
    const time = list.listMsg[lastIdx].sendTime.split(' ')[1].split(':')
    const [image, setImage] = useState('')

    useEffect(() => {
        imgService.getImage(list.listName).then(setImage)
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