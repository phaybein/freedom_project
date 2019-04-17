import React, { Component } from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';

export class Header extends Component {
  render() {
    return (
      <header className='header bg-dark'>
        <Navbar />
      </header>
    );
  }
}

export default Header;
