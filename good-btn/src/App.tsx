import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeBtn />
      </header>
    </div>
  );
}

function LikeBtn() {
  const [count, setCount] = useState(1);
  
  const handleClick = () => {
    setCount(count + 1);
  }
  
  return <span className='LikeBtn' onClick={handleClick}>🖤 {count}</span>;
}

export default App;
