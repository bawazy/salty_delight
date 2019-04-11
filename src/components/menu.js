import React, { Component, Fragment } from 'react'
import MenuItem from './menuItem'
import SubItem  from './subItem'

export class Menu extends Component {
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
                                itemName:'Chicken 1',
                              },

                              {
                                itemName:'Chicken 2',
                              },
                              {
                                itemName:'Chicken 3',
                              },
        ],
      },
      { 
        id:3,
        title:'Foods',
        subItems:[
                                {
                                  itemName:'Food 1',
                                },

                                {
                                  itemName:'Food 2',
                                },
                                {
                                  itemName:'Food 3',
                                },
        ],
      }

    ],

    isSubItems: false,
    activeSubItems: [],
    food: ''

  }

  handleActiveSubItems = event =>{
    this.setState({
      isSubItems:false
    })
  }

  handleSubItems = menu => {
    this.setState({
      activeSubItems: menu.subItems, 
      isSubItems: true,
      food: menu.title
    })
  }


  render() {

    const { isSubItems, menus, activeSubItems, food } = this.state
   
    // console.log(this.state.menus)
    return (
      
    <div>
        <ul className='menus'>    
        {!isSubItems ? (
          <Fragment>
          <h1>OUR MENU </h1>
          {menus.map(menu => {
            return <MenuItem handleSubItems={this.handleSubItems} key={menu.id} index={menu.id} menu={menu}/>
           }   
          )}
          </Fragment>
        ) : (
          <Fragment>
          <h1>{food}</h1>
          {activeSubItems.map((sub, index) => {
            return <SubItem key={index} index={index} itemName={sub.itemName}/>
           }   
          )}
          
          <button className='backbtn' onClick={this.handleActiveSubItems}>BACK</button>
          </Fragment>
        )}
        </ul>
        
{/* 
        <ul>
        {this.state.menus.subItems.map(subItem =>{
          return <SubItem title ={subItem.title}/>
        })}
        </ul>
       */}


    </div>
    )
  }
}

export default Menu
