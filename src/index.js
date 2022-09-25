import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mychat from './path/mychat/mychat';
import FAQ from './path/FAQ/FAQ';
import Term from './path/Term/Term';
import ChatService from './data/chatListRepository/chat';
import HttpClient from './network/http';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const chatservice = new ChatService(httpClient);

<script src="https://kit.fontawesome.com/3b0cac614e.js" crossorigin="anonymous"></script>
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App chatservice={chatservice}/>}/>
        //수정필요
        <Route path='myChat' element={<Mychat ChatService={chatservice}/>}/>
        <Route path='faq' element={<FAQ />}/>
        <Route path='term' element={<Term />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


