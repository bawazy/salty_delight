import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './containers/App';
// import Menu from './containers/App';

import { getMenus } from './reducers'

const store = createStore(getMenus)
ReactDOM.render(    
                <Provider store ={store}>
                     <App />         
              </Provider>  , document.getElementById('root'));
