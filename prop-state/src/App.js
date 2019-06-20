import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton'
import MyList from './MyList'

function App() {

  const appState = {
    text: 'My Button',
    disabled: true,
    items: [
      'First', 
      'Second', 
      'Third', 
      'Fourth'
    ]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton disabled={ appState.disabled } text={ appState.text } />
        <MyList 
          items={ appState.items } />
      </header>
    </div>
        
  );
}

export default App;
