import React from 'react';
import ReactDOM from 'react-dom'
const Popup = ({ children }) => {

    const el = document.querySelector('.popupArea')
    
    return ReactDOM.createPortal(children, el)
}
export default Popup;