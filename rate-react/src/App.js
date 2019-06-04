import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      features: [
        {
          id: 0,
          title: 'JSX',
          rating: 2
        },
        {
          id: 1,
          title: 'React Dom',
          rating: 4
        },
        {
          id: 2,
          title: 'Stateless Functional Components',
          rating: 2
        },
        {
          id: 3,
          title: 'Class Components',
          rating: 5
        },
        {
          id: 4,
          title: 'Props',
          rating: 3
        }
      ]
    }

    this.rateFeature = this.rateFeature.bind(this)
  }

  rateFeature(id, rating){
    const { features } = this.state

    this.setState({
      features: features.map(f => 
          (f.id !== id) ? f : ({ ...f, rating }))
    })
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Jungle!!</h2>
        </div>
          <p className="App-intro">Edit <code>src/App.js</code> and save to reload.</p>
        <div className="features">
        { this.state.features.map(f =>
            <div key={f.id}>
              <h3>{ f.title }</h3>
              <StarRating starsSelected={ f.rating }
                          onChange= { rating => this.rateFeature(f.id, rating)} />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
