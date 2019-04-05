import React, { Component } from 'react'
import MenuItem from './menuItem'
import SubItem  from './subItem'

export class menu extends Component {
  state = {
    menus:[
      { 
        id: 1,
        title:'Pizza',
        subItems:[
                            {
                              itemName:'Pizza 1',
                            },

                            {
                              itemName:'Pizza 2',
                            },
                            {
                              itemName:'Pizza 3',
                            },


        ],
      },

      { 
        id:2,
        title:'Chicken',
        subItems:[
                              {
                                itemName:'Pizza 1',
                              },

                              {
                                itemName:'Pizza 2',
                              },
                              {
                                itemName:'Pizza 3',
                              },
        ],
      },
      { 
        id:3,
        title:'Foods',
        subItems:[
                                {
                                  itemName:'Pizza 1',
                                },

                                {
                                  itemName:'Pizza 2',
                                },
                                {
                                  itemName:'Pizza 3',
                                },
        ],
      }

    ]

  }


  render() {
   
    // console.log(this.state.menus)
    return (
    <div>
        <h1>OUR MENU </h1>
        
        <ul className='menus'>
        {this.state.menus.map(menu => {
          return <MenuItem key={menu.id} index={menu.id} title={menu.title}/>
        })}   
        </ul>

        <ul>
        {this.state.menus.subItems.map(subItem =>{
          return <SubItem title ={subItem.title}/>
        })}
        </ul>
      


    </div>
    )
  }
}

export default menu
