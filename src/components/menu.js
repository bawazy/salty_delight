import React, { Component, Fragment } from 'react'
import MenuItem from './menuItem'
import SubItem  from './subItem'
import Cart from './cart';

export class Menu extends Component {
  constructor(){
    super();

   this.state = {
      menus:[
        { 
          id: 1,
          title:'Pizza',
          img:'',
          subItems:[
                              {
                                img:'https://thumbs.dreamstime.com/z/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg',
                                itemName:'Pizza 1',
                                price:3000,
                              },
  
                              {
                                img:'https://www.bars.digital/data/users/2/dishes/319/images/0_31746800_1526641380.jpg',
                                itemName:'Pizza 2',
                                price:3500,
                              },
                              {
                                img:'https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2.jpg',
                                itemName:'Pizza 3',
                                price:2000,
                              },
  
  
          ],
        },
  
        { 
          id:2,
          title:'Chicken',
          img:'',
          subItems:[
                                {
                                  img:'https://www.thespruceeats.com/thmb/gSU7cxrCTiqNHpGHVKdF-Eavo2o=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-oven-fried-chicken-3058647-5_preview-5b0ec6ecba61770036491ed7.jpeg',
                                  itemName:'Chicken 1',
                                  price:1500,
                                },
  
                                {
                                  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRd-wYiyNuYo_TJbviLrMsjZzV7Irvd8lF-PeZ0uqDamgJX_z',
                                  itemName:'Chicken 2',
                                  price:2000,
                                },
                                {
                                  img:'https://www.maangchi.com/wp-content/uploads/2016/10/honeybutterchicken-insta.jpg',
                                  itemName:'Chicken 3',
                                  price:500,
                                },
          ],
        },
        { 
          id:3,
          title:'Foods',
          img:'',
          subItems:[
                                  {
                                    img:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg',
                                    itemName:'Food 1',
                                    price:500,
                                  },
  
                                  {
                                    img:'https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/full/public/gettyimages-469640958.jpg?itok=96jW1o_l&mtime=1475625718',
                                    itemName:'Food 2',
                                    price:600,
                                  },
                                  {
                                    img:'https://data.whicdn.com/images/8411081/original.jpg',
                                    itemName:'Food 3',
                                    price:700,
                                  },
          ],
        }
  
      ],
  
      isSubItems: false,
      activeSubItems: [],
      food: '',
      total:'',
      cart:[]
  
    }
  }
  

  handleActiveSubItems = () =>{
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

  
  handleAddToCart=(sub)=>{
    let { cart } = this.state
    cart.push(sub)
    console.log(cart);
      this.setState({
        cart
      })   
}
  
      handlePrice = (event,price)=>{
        let amount = event.target.value
        let tprice=price*amount
        this.setState({
          total:tprice
        })
      }

  render() {

    const { isSubItems, menus, activeSubItems, food, cart } = this.state
   
    // console.log(this.state.menus)
    return (
    <div className='wrapper'>
        <div className='menus'>    
        {!isSubItems ? (
          <Fragment>
          <h1>OUR MENU </h1>
          {menus.map(menu => {
            return <MenuItem 
              handleSubItems={this.handleSubItems} 
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
              handleAddToCart={this.handleAddToCart}
              sub = {sub}
              
              />

              
           }   
          )}
          
          <button className='backbtn' onClick={this.handleActiveSubItems}>BACK</button>
          </Fragment>
        )}

        </div>
        <div className='cart'>
          {cart.map((cartItem, index) => {
           return <Cart
          key={index}
          itemName={cartItem.itemName}
          price={cartItem.price}
          totalPrice={this.handlePrice}
          total={this.state.total}
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
