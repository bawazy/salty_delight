import React from 'react'
// import { Link } from 'react-router-dom'

 const menuItem = props =>{
   const { handleSubItems, menu} = props
  return (  
   <li onClick={ () => handleSubItems(menu)} className='menu-item'>{menu.title}</li>
  ) 
}
export default menuItem