import reactDom from 'react-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderActive: true,
    };
  }

  changeState = () => {
    if (window.scrollY >= 100) {
      this.setState({
        renderActive: false,
      });
    } else {
      this.setState({
        renderActive: true,
      });
    }
  };

  render() {
    window.addEventListener('scroll', this.changeState);
    const a = this.state.renderActive
      ? 'navbar navbar-expand-lg navbar-light bg-transparent'
      : 'navbar navbar-expand-lg navbar-light bg-transparent active';
    return (
      <nav className={a}>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Mukhammad<span style={{ color: '#03aad7' }}>Ali</span>{' '}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#Project'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#Contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
