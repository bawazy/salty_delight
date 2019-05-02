import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './containers/App';
import {selectSubItem,getMenus} from './reducers'
// import Menu from './containers/App';

const rootReducer= combineReducers({selectSubItem,getMenus})
const store = createStore(rootReducer)
ReactDOM.render(    
                <Provider store ={store}>
                     <App />         
              </Provider>  , document.getElementById('root'));
