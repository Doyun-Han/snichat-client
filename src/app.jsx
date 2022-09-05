import React from 'react';
import './app.css';
import Chatboard from './components/chatboard/chatboard';
import Navbar from './components/navbar/navbar';
function App({chatData}) {
  return (
    <>
    <Navbar />
    <Chatboard chatData={chatData}/>
    </>
  );
}

export default App;