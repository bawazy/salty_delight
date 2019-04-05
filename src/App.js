import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './layouts/header';
import Body from './layouts/body';
import Menu from './components/menu';
import Contact from './components/contact';
import SubItem from './components/subItem';
import Footer from './layouts/footer';
import './App.css';

class App extends Component {
   
    
  
  
  
  
  render() {
    return ( 
      <Router>
        <div className='app'>
         <Header />
            <div className='container'>
                <Route exact path='/' render={props =>(
                   <React.Fragment>
                        <Body />
                   </React.Fragment>
                  ) }/> 

            <Route path='/contact' component={Contact}  />
            <Route path='/menu'  component={Menu}/>
            <Route path='/subItem'  component={SubItem}/>
            </div>
     
            <Footer />

        </div>
     </Router>
      
    )
  }
}

export default App;
