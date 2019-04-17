import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './sass/main.scss';
import Header from './components/Header/Header';
import OurStory from './components/pages/Locations/OurStory';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Header} />
          <Route path='/ourstory' component={OurStory} />
        </div>
      </Router>
    );
  }
}

export default App;
