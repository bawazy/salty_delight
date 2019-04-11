import React from 'react'
// import { Link } from 'react-router-dom'

 const menuItem = props =>{
   const { handleSubItems, menu} = props
  return (  
   <div onClick={ () => handleSubItems(menu)} className='menu-item'>{menu.title}</div>
  ) 
}
export default menuItem