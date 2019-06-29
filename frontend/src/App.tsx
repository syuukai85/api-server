import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';

const App: React.FC = () => {
  const handleClick = async () => {
    const response = await axios.get(`http://localhost:18888/`);
    console.log(response);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
