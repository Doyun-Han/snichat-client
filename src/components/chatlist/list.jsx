import React from 'react';
import './list.css'
import img from '../../imgs/jordan.JPG'
const List = ({list, active, onClick, index}) => {
    const lastIdx = list.listMsg.length - 1;
    const time = list.listMsg[lastIdx].sendTime.split(' ')[1].split(':')
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
            <p>{`${time[0]}:${time[1]}`}</p>
        </div>
    </div>
</li>
    )
    };

export default List;