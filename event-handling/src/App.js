import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import MyInput from './MyInput';
import MyList from './MyList';

function App() {
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
      </header>
      {/* <MyButton children={ "Button" } />
      <MyInput placeholder={ "Enter Name"} /> */}
      <MyList />
    </div>
  );
}

export default App;
