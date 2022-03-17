import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../assets/images/logo.svg'

export const NavBar = () => {
  const [movil, setMovil] = React.useState(false);
  const handleClick = ()=>{
    setMovil(!movil)
  }
  return (
    <nav className='navbar container'>
      <div className='navbar__movil '>
        <img src={logo} alt="Logo de" />
        <button className='btn' onClick={handleClick}><FontAwesomeIcon icon={movil? faTimes : faBars} /></button>
      </div>
      {
        movil? (
          <div  className='navbar__menuMovil-content'>
          <li className='btn'>Features</li>
          <li className='btn'>Pricing</li>
          <li className='btn'>Resources</li>
          <button className='btn'>Login</button>
          <button className='btn sing-up '>Sign Up</button>
      </div>
        ): null
      }
      <ul className='navbar__nav'>
        <img src={logo} alt="Logo de" />
        <li className='btn'>Features</li>
        <li className='btn'>Pricing</li>
        <li className='btn'>Resources</li>
      </ul>
      <ul className='navbar__account'>
        <button className='btn'>Login</button>
        <button className='btn sing-up '>Sign Up</button>
      </ul>
    </nav>
  )
}
