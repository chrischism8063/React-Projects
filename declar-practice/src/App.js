import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const name = "Fred"
const dontPressMe = "Don't Press Me!!"


class App extends Component{
  render(){
    return(
      <div className="App">
        <p>
          {name}
        </p>
        <input type="button" value={dontPressMe}></input>
      </div>
    );
  }
}

export default App;
