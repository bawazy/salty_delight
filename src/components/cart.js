import React from 'react'

  const cart = (props) => {
    const {itemName,price,totalPrice,total} = props
  return (
    <div className='cartItem'>
        <div>
            <h3>{itemName}</h3>
            <h5>{price}</h5>
            <input type='number' onChange={e=>totalPrice(e,price)} placeholder='Amount'/>
            <h6>Total:{total}</h6>
        </div>
    </div>
  )
}
export default cart;