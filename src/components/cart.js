import React from 'react'

  const cart = (props) => {
    const {itemName,price,totalPrice,total} = props
  return (
    <div className='cartItem'>
        <h1>CART</h1>
        <div>
            <h3>{itemName}</h3>
            <h5>{price}</h5>
            <input type='number' onChange={totalPrice} placeholder='Amount'/>
            <h6>Total:{total}</h6>
        </div>
    </div>
  )
}
export default cart;