import React from 'react';
import './list.css'
import img from '../../imgs/jordan.JPG'
const List = (props) => (
    <li className="chatList">
    <div className="li_img">
        <img src={img} alt="" />
    </div>
    <div className="li_description">
        <div className="li_left">
            <p>Jordan1</p>
            <p>I like it!</p>
        </div>
        <div className="li_right">
            <p>09:00</p>
            <div className="msgCount">
            <p>3</p>
            </div>
        </div>
    </div>
</li>
    );

export default List;