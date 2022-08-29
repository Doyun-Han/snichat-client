import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mychat from './path/mychat/mychat';
import FAQ from './path/FAQ/FAQ';
import Term from './path/Term/Term';


<script src="https://kit.fontawesome.com/3b0cac614e.js" crossorigin="anonymous"></script>
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='myChat' element={<Mychat />}/>
        <Route path='faq' element={<FAQ />}/>
        <Route path='term' element={<Term />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


