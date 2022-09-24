import React from 'react';
import './FAQcontent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'
const FAQcontent = (props) => {
    const showAnswer = (e) => {
        const answer = document.querySelectorAll('.answer');
        const xBtn = document.querySelectorAll('.XBtn');
        const idx = e.currentTarget.id;
        setActive(answer, idx);
        setActive(xBtn, idx);
    };

    const setActive = (target, idx) => {
        if(target[idx].classList.value.includes('active')) {
            target[idx].classList.remove('active');
        } else {
            target[idx].classList.add('active');
        }
    }

    return(
    <div className="f_container">
    <ul className='f_items'>
        <li className='f_item'>
            <div className="question">
                <span>
                채팅 내용을 개인 PC에 저장할 수 있나요?
                </span>
                <button className='XBtn' id='0' onClick={showAnswer}>
                <FontAwesomeIcon className='icon' id='0' icon={faPlus}/>
                </button>
            </div>
            <div className="answer">
                <p>
                - 현재 채팅 내용을 개인PC에 저장하는 것은 불가합니다.
                </p>
            </div>
            <div className="line"></div>
        </li>
        <li className='f_item'>
            <div className="question">
                <span>
                개인이 채팅방을 만들 수 있나요?
                </span>
                <button className='XBtn' id='1' onClick={showAnswer}>
                <FontAwesomeIcon className='icon' id='1' icon={faPlus}/>
                </button>
            </div>
            <div className="answer">
                <p>
                - 채팅방은 운영진 측에서만 개설할 수 있으며, 발매 예정 신발이 업데이트 되면<br/> 즉시 채팅방을 생성하려 노력하고 있습니다.
                </p>
            </div>
            <div className="line"></div>
        </li>
        <li className='f_item'>
            <div className="question">
                <span>
                불편한 점이 있는데 어디에 문의해야 하나요?
                </span>
                <button className='XBtn' id='2' onClick={showAnswer}>
                <FontAwesomeIcon className='icon' id='2' icon={faPlus}/>
                </button>
            </div>
            <div className="answer">
                <p>
                - 별도의 고객 사서함이 마련되지 않은 점 양해 부탁드리며, 아래 주소로 연락 부탁드립니다. dy__z@nate.com
                </p>
            </div>
            <div className="line"></div>
        </li>
    </ul>
</div>)
        
};

export default FAQcontent;