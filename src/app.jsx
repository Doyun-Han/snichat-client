import {React, useEffect, useState} from 'react';
import './app.css';
import Chatboard from './components/chatboard/chatboard';
import Navbar from './components/navbar/navbar';
function App({chatservice}) {

  return (
    <>
    <Navbar />
    <Chatboard chatservice={chatservice}/>
    </>
  );
}

export default App;