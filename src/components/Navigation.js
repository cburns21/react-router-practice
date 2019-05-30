import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink to='/' activeClassName='active-link'>Home</NavLink>
      <NavLink to='/about' activeClassName='active-link'>About</NavLink>
      <NavLink to='/contact'activeClassName='active-link'>Contact</NavLink>
    </div>
  )
}

export default Navigation
