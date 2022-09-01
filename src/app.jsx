import React from 'react';
import './app.css';
import Chatboard from './components/chatboard/chatboard';
import Navbar from './components/navbar/navbar';
import chatData from './data/chatListRepository/chatdata.json'
function App() {
  return (
    <>
    <Navbar />
    <Chatboard chatData={chatData}/>
    </>
  );
}

export default App;