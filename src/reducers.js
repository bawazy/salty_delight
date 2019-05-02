import {
    LOAD_MENUS

} from './constants' 

import { menus } from'./menus'

const initialMenu = {
    menus, 
    isSubItems:false,
    activeSubItems:[],
    food:'',
    total:'',
    cart:[]
}

export const getMenus = (state=initialMenu) => {
  return state
}

export const selectSubItem = (state=initialMenu, action={}) =>{
  console.log(action)
  switch (action.type){
    case LOAD_MENUS: 
      return {...state, isSubItems: true, activeSubItems: action.payload.subItems, food: action.payload.food}
    default:
      return state
  }

}

// export const setSubItems = (state=initialMenu,action={})=>{
//     switch (action.type){
//         case GET_SUB_ITEMS:
//         return {...state, state.menus.subItems}
//     }
    
// }