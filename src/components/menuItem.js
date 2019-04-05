import React from 'react'
import { Link } from 'react-router-dom'

 const menuItem = props =>{
  return (  
<Link className='menuLinks' to='/subItem'><li className='menu-item'>{props.title}</li></Link>
  ) 
}
export default menuItem