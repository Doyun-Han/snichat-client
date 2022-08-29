import React from 'react';
import './chatcard.css'
import img from '../../imgs/jordan.JPG'
const Chatcard = (props) => (
        <div className='c_container'>
            <ul className="cards">
                <li className="card">
                    <img src={img} alt="" />
                    <div className="c_contents">
                        <p className="roomName">Jordan</p>
                        <p className="msg">I want to buy It!</p>
                        <div className="c_info">
                            <span className="c_time">09:00</span>
                            <span className="c_writer">David</span>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <img src={img} alt="" />
                    <div className="c_contents">
                        <p className="roomName">Jordan</p>
                        <p className="msg">I want to buy It!</p>
                        <div className="c_info">
                            <span className="c_time">09:00</span>
                            <span className="c_writer">David</span>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <img src={img} alt="" />
                    <div className="c_contents">
                        <p className="roomName">Jordan</p>
                        <p className="msg">I want to buy It!</p>
                        <div className="c_info">
                            <span className="c_time">09:00</span>
                            <span className="c_writer">David</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );

export default Chatcard;