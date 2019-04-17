import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='' className='navbar-brand-logo' />
          </Link>
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
              <Link className='nav-item nav-link active' to='/'>
                Home
              </Link>
              {/* <Link className='nav-item nav-link' to='#!'>
                Party Platters
              </Link> */}
              <Link className='nav-item nav-link' to='/ourstory'>
                Our story
              </Link>
              {/* <Link className='nav-item nav-link' to='#!'>
                Rewards
              </Link> */}
              <Link className='nav-item nav-link' to='#!'>
                Reservation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
