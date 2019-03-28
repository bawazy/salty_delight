import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './layouts/header';
import Body from './layouts/body';
import Menu from './components/menu';
import Orders from './components/order';
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
            </div>
            <Route path='/order' component={Orders}  />
            <Route path='/menu'  component={Menu}/>
            <Footer />

        </div>
     </Router>
      
    )
  }
}

export default App;
