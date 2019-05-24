import React, { Component, Fragment } from 'react'
import MenuItem from '../components/menuItem'
import SubItem  from '../components/subItem'
import Cart from '../components/cart';

 class Menu extends Component {
 
  render() {

const { isSubItems, menus, activeSubItems, food, cart,total,handleSubItems,handleAddToCart,handleActiveSubItems,totalPrice } = this.props
 
    // console.log(this.state.menus)
    return (
    <div className='wrapper'>
        <div className='menus'>    
        {!isSubItems ? (
          <Fragment>
          <h1>OUR MENU </h1>
          {menus.map(menu => {
            return <MenuItem 
              handleSubItems={handleSubItems} 
              key={menu.id}
              index={menu.id}
              menu={menu}
              />
           }   
          )}
          </Fragment>
        ) : (
          <Fragment>
          <h1>{food}</h1>
          {activeSubItems.map((sub, index) => {
            return <SubItem 
              key={index}
              index={index} 
              itemName={sub.itemName}
              img={sub.img}
              price={sub.price}
              handleAddToCart={handleAddToCart}
              sub = {sub}
              
              />

              
           }   
          )}
          
          <button className='backbtn' onClick={handleActiveSubItems}>BACK</button>
          </Fragment>
        )}

        </div>
        <div className='cart'> 
        <h1 style={{textAlign:"center"}}>CART</h1>
          {cart.map((cartItem, index) => {
            
           return <Cart
          key={index}
          itemName={cartItem.itemName}
          price={cartItem.price}
          totalPrice={totalPrice}
          total={total}
          cartItem={cartItem}

               />
            }   
            )}
        </div>
      
    </div>
    )
  }
}

export default Menu
