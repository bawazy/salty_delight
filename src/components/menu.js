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
        
        <ul >
        {this.state.menus.map(menu => {
          return <MenuItem key={menu.id} index={menu.id} title={menu.title}/>
        })}
          
        </ul>
    </div>
    )
  }
}

export default menu
