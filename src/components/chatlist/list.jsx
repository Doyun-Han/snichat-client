import React from 'react';
import './list.css'
import img from '../../imgs/jordan.JPG'
const List = ({list, active, onClick, index}) => {
    const lastIdx = list.listMsg.length - 1;
    
    return(
        <li onClick={()=> onClick(index)} className={active ? "chatList active" : "chatList"}>
    <div className="li_img">
        <img src={img} alt="" />
    </div>
    <div className="li_description">
        <div className="li_left">
            <p>{list.listName}</p>
            <p>{list.listMsg[lastIdx].text}</p>
        </div>
        <div className="li_right">
            <p>09:00</p>
            <div className="msgCount">
            <p>3</p>
            </div>
        </div>
    </div>
</li>
    )
    };

export default List;