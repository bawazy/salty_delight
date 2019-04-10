import React, { Component } from 'react'

export class SubItem extends Component {
  render() {
    return (
        <li className='menu-item'>{this.props.itemName}</li>
    )
  }
}

export default SubItem

