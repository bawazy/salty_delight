import React, { Component } from 'react'

export class subItem extends Component {
  render() {
    return (

        <li className='menu-item'>{this.props.title}</li>
    
    )
  }
}

export default subItem

