import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../../marioplan/src/components/layouts/NavBar'
import Dashboard from './components/dashboard/Dashboard';

class App extends Component{
  render(){
    return(
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path='/' component={ Dashboard } />
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
