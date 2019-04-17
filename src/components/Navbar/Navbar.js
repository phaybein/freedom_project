import React, { Component } from 'react';
import './Navbar.scss';
import Logo from '../../assets/logo.png';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a className='navbar-brand' href='#!'>
            <img src={Logo} alt='' className='navbar-brand-logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <a className='nav-item nav-link active' href='#!'>
                Home
              </a>
              <a className='nav-item nav-link' href='#!'>
                Party Platters
              </a>
              <a className='nav-item nav-link' href='#!'>
                Locations
              </a>
              <a className='nav-item nav-link' href='#!'>
                Rewards
              </a>
              <a className='nav-item nav-link' href='#!'>
                Reservation
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
