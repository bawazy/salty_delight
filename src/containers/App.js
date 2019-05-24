import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from '../layouts/header';
import Body from '../layouts/body';
import Menu from '../containers/menu';
import Contact from '../components/contact';
import SubItem from '../components/subItem';
import Footer from '../layouts/footer';
import './App.css';


import { setMenus, backToMenu  } from '../actions'
// import { backToMenu } from '../reducers';

const mapStateToProps = state => {
  return {
      menus: state.selectSubItem.menus,
      isSubItems: state.selectSubItem.isSubItems,
      activeSubItems: state.selectSubItem.activeSubItems
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{
    handleSetMenus: (data) => dispatch(setMenus(data)),
    handleActiveSubItems:(menu) => dispatch(backToMenu(menu))
  }
}







class App extends Component {
  constructor(){
    super();

   this.state = {
    // menus:[
    //     { 
    //       id: 1,
    //       title:'Pizza',
    //       img:'',
    //       subItems:[
    //                           {
    //                             img:'https://thumbs.dreamstime.com/z/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg',
    //                             itemName:'Pizza 1',
    //                             price:3000,
    //                           },
  
    //                           {
    //                             img:'https://www.bars.digital/data/users/2/dishes/319/images/0_31746800_1526641380.jpg',
    //                             itemName:'Pizza 2',
    //                             price:3500,
    //                           },
    //                           {
    //                             img:'https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2.jpg',
    //                             itemName:'Pizza 3',
    //                             price:2000,
    //                           },
  
  
    //       ],
    //     },
  
    //     { 
    //       id:2,
    //       title:'Chicken',
    //       img:'',
    //       subItems:[
    //                             {
    //                               img:'https://www.thespruceeats.com/thmb/gSU7cxrCTiqNHpGHVKdF-Eavo2o=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-oven-fried-chicken-3058647-5_preview-5b0ec6ecba61770036491ed7.jpeg',
    //                               itemName:'Chicken 1',
    //                               price:1500,
    //                             },
  
    //                             {
    //                               img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRd-wYiyNuYo_TJbviLrMsjZzV7Irvd8lF-PeZ0uqDamgJX_z',
    //                               itemName:'Chicken 2',
    //                               price:2000,
    //                             },
    //                             {
    //                               img:'https://www.maangchi.com/wp-content/uploads/2016/10/honeybutterchicken-insta.jpg',
    //                               itemName:'Chicken 3',
    //                               price:500,
    //                             },
    //       ],
    //     },
    //     { 
    //       id:3,
    //       title:'Foods',
    //       img:'',
    //       subItems:[
    //                               {
    //                                 img:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg',
    //                                 itemName:'Food 1',
    //                                 price:500,
    //                               },
  
    //                               {
    //                                 img:'https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/full/public/gettyimages-469640958.jpg?itok=96jW1o_l&mtime=1475625718',
    //                                 itemName:'Food 2',
    //                                 price:600,
    //                               },
    //                               {
    //                                 img:'https://data.whicdn.com/images/8411081/original.jpg',
    //                                 itemName:'Food 3',
    //                                 price:700,
    //                               },
    //       ],
    //     }
  
    //   ],
    //  isSubItems: false,
     // activeSubItems: [],
      food: '',
      total:'',
      cart:[]
  
    }
  }
  

  // handleActiveSubItems = () =>{
  //   console.log('hello');
  //   this.setState({
  //     isSubItems:false
  //   })
  // }

  handleSubItems = menu => {
    console.log('hello')
    const data = {
      subItems: menu.subItems, 
      food: menu.title
    }
    const { handleSetMenus  } = this.props
    
    handleSetMenus(data)
  }

  
  handleAddToCart=(sub)=>{
    let { cart } = this.state
    cart.push(sub)
    console.log(cart);
      this.setState({
        cart
      })   
}
  
  handlePrice = (event,price) => {
        let amount = event.target.value
        let tprice = price * amount;
     console.log(tprice)
        this.setState({
          total:tprice
        })
           
      }

  render() {
    const { food, cart,total } = this.state
    const { menus, isSubItems, activeSubItems,handleActiveSubItems } =this.props
    return ( 
      <Router>
        <div className='app'>
         <Header />
            <div className='container'>
                <Route exact path='/' render={props =>(
                   <React.Fragment>
                        <Body  />
                   </React.Fragment>
                  ) }/> 

            <Route path='/contact' component={Contact}  />
            <Route path='/menu'  render={(props)=> 
            <Menu 
              {...props}  
              isSubItems={isSubItems}
              menus={menus}
              activeSubItems={activeSubItems}
              food={food}
              cart={cart}
              total={total}
              handleSubItems={this.handleSubItems} 
              handleAddToCart={this.handleAddToCart}
              handleActiveSubItems={handleActiveSubItems}
              totalPrice={this.handlePrice}
              />}/>
            <Route path='/subItem'  component={SubItem}/>
            </div>
     
            <Footer />

        </div>
     </Router>
      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
