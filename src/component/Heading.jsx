import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Heading() {
  return (
    <div className='heading'>
      <Link to={"/"}><h1>Kalvium ❤️</h1></Link>

      <ul>
        <li>
            <Link to={"/contact"}><h2>Contacts</h2></Link>
        </li>
        {""}
           <li>
           <Link to={"/about"}><h2>About</h2></Link>
           </li>
        
      </ul>
    </div>
    
  )
}

export default Heading