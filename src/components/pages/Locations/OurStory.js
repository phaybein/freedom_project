import React, { Component } from 'react';
import './OurStory.scss';
import Navbar from '../../Navbar/Navbar';

export class OurStory extends Component {
  render() {
    return (
      <div className='bg-dark'>
        <Navbar />
        <h1>OurStory</h1>
      </div>
    );
  }
}

export default OurStory;
