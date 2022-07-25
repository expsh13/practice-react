import React from 'react';
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
  return <span>good btnがここにできる</span>;
}

export default App;
