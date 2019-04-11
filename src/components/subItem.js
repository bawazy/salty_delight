import React, { Component } from 'react'

export class SubItem extends Component {
  render() {
    return (
      <div className='subItem' >
        <div className='menu-item'>  
        <img src='' alt='' />
        {this.props.itemName}
        <button className='orderBtn'>Order Now</button>
        </div>
      </div>
    )
  }
}

export default SubItem

