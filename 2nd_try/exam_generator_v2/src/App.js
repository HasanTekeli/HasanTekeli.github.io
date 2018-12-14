import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Dropdown from './components/Dropdown/Dropdown';
// import Question from './components/Question/Question';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Dropdown />
        {/*<Question />
                 <Answer />
                 <ButtonsBackNext />*/} 

      </div>

    );
  }
}

export default App;
