import React from 'react';
import * as Api from 'typescript-fetch-api';
import './App.css';

const App: React.FC = () => {
  const handleClick = async () => {
    const EventApi = new Api.EventApi();
    const event = await EventApi.getEventById({ eventId: 0 });
    console.log(event);
  };
  return (
    <div className="App">
      <header className="App-header">
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
