import React from 'react'

  const cart = (props) => {
    const {itemName,price} = props
  return (
    <div>
        <h1>CART</h1>
        <div>
            <h3>{itemName}</h3>
            <h5>{price}</h5>
        </div>
    </div>
  )
}
export default cart;