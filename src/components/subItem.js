import React, { Component } from 'react'

export class SubItem extends Component {
  render() {
    return (
       <div className='menu-item'>
      <div className='subItem' > 
       <h3>{this.props.itemName}</h3>
        <img src='https://thumbs.dreamstime.com/z/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg' alt='' /> 
        <button className='orderBtn'>Order Now</button>
        </div>
      </div>
    )
  }
}

export default SubItem

