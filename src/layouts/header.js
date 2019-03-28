import React from 'react' 
import { Link } from 'react-router-dom'

 function header() {
  return (
    <div className='header'>
      <h2>SALTY DELIGHT</h2>
      
      <div className='links'>
            <Link className='linkStyle' to='/'>Home</Link>
            <Link className='linkStyle' to='/menu'>Menu</Link>
            <Link className='linkStyle' to='/order'><button className='ordbtn'>Order</button></Link>
      </div>

    </div>
  )
}
export default header;