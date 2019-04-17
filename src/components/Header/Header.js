import React, { Component } from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';
import spiceImage from '../../assets/spice.png';

export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Navbar />

        <div className='container'>
          <div className='header__welcome'>
            <p>welcome</p>
            <h2>prime steak restaurant</h2>
          </div>

          <div className='header__contact'>
            <p className='contact__book'>Book a table directly</p>

            <h3 className='contact__phone'>(714) 555-5555</h3>

            <div className='contact__hours'>
              <span className='hours__title'>Opening hours:</span>
              <span className='hours__days'> Mon - Fri:</span>
              <span className='hours__time'> 9:00 a.m. - 9:00 p.m. </span> /
              <span className='hours__days'> Weekends:</span>
              <span className='hours__time'> 9:00 a.m. - 10:00 p.m.</span>
            </div>
          </div>
          <img src={spiceImage} alt='' className='header__spice' />
        </div>
      </header>
    );
  }
}

export default Header;
