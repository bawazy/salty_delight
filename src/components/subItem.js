import React from 'react'

 const subItem= props => {
  const { handleAddToCart, sub,price,itemName,img} = props
    return (
      <div className='menu-item'>
     <div className='subItem' > 
      <h3>{itemName}</h3>
       <img src={img} alt='' />   
       <button onClick={ () => handleAddToCart(sub) } className='orderBtn'> Order Now </button>
       <h3> price:{price}</h3>
       </div>



     </div>
   )
  
}
export default subItem;