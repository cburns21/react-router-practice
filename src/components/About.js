import React from 'react'
import Nested from './Nested.js'
import {NavLink, Route} from 'react-router-dom'

const About = ({match, username}) => {
  const nestedPath = `${match.path}/more-info`
  console.log(match)
  
  return (
    <div>
      <h1>About</h1>
      <h2>Welcome, {username}</h2>
      <p>Readymade kombucha viral, freegan pop-up cardigan dreamcatcher la croix fanny pack sustainable. Franzen truffaut poutine, before they sold out irony shoreditch raw denim whatever waistcoat pabst cliche palo santo DIY freegan. Marfa street art woke portland vexillologist. Sustainable pork belly pug chicharrones farm-to-table la croix, direct trade unicorn cray.</p>
      <NavLink to={nestedPath} activeClassName='active-link'>More Info</NavLink>
      <Route
        path={nestedPath}
        component={Nested}
      />

     
    </div>
  )
}

export default About
