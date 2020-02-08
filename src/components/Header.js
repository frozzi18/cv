import React, { Component } from 'react';
import { ReactComponent as IconMenu } from '../assets/menu.svg';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <a className='logo' href='/'>
          Rozzi
        </a>
        <div className='nav-links'>
          <a className='nav-link' href='#projects'>
            Projects
          </a>
          <a className='nav-link' href='#contacts'>
            Contacts
          </a>
        </div>
        <IconMenu className='icon-menu' />
      </nav>
    );
  }
}
