import React, { Component } from 'react'
import MenuItem from './menuItem'

export class menu extends Component {
  state = {
    menus:[
      { 
        id: 1,
        title:'ITEM 1',
      },

      { 
        id:2,
        title:'ITEM 2'
      },
      { 
        id:3,
        title:'ITEM 3'
      }

    ]

  }


  render() {
   
    // console.log(this.state.menus)
    return (
    <div>
        <h1>OUR MENU </h1>
        
        <div>
          <MenuItem  menu={this.state.menus}/>
        </div>
    </div>
    )
  }
}

export default menu
