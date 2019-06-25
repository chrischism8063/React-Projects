import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../marioplan/src/NavBar'

class App extends Component{
  render(){
    return(
        <BrowserRouter>
          <div className="App">
            <NavBar />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
