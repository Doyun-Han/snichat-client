import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mychat from './path/mychat/mychat';
import FAQ from './path/FAQ/FAQ';
import Term from './path/Term/Term';
import chatData from './data/chatListRepository/chatdata.json'


<script src="https://kit.fontawesome.com/3b0cac614e.js" crossorigin="anonymous"></script>
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App chatData={chatData}/>}/>
        <Route path='myChat' element={<Mychat chatData={chatData}/>}/>
        <Route path='faq' element={<FAQ />}/>
        <Route path='term' element={<Term />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


