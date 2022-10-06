import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css';
import Logo from '../../assets/img/logo.png'
export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar-container'>
        <div className="navbar-left">
          <img src={Logo} alt="" srcset="" className="navbar-logo" width={50} height={50} />
          <ul className='navbar-menu'>
            <li>
              <select name="" id="" className='select-option'>
                <option value="">Lorem, ipsum.</option>
                <option value="">Lorem, ipsum.</option>
                <option value="">Lorem, ipsum.</option>
              </select>
            </li>
            <li>Partner With Us</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className='button btn-create-account'>Create Account</button>
          <button className='button btn-sign-in'>Sign In</button>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)