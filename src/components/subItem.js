import React, { Component } from 'react'

export class SubItem extends Component {
  render() {
    return (
       <div className='menu-item'>
      <div className='subItem' > 
       <h3>{this.props.itemName}</h3>
        <img src={this.props.img} alt='' /> 
        <button className='orderBtn'>Order Now</button>
        </div>
      </div>
    )
  }
}

export default SubItem

