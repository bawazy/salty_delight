import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
// import App from './containers/App';
import Menu from './containers/App';

import { setMenus } from './reducers'

const store = createStore(setMenus)
ReactDOM.render(    
                <Provider store ={store} >
                     {/* <App /> */}
                    <Menu />
              </Provider>  
                , document.getElementById('root'));
