import {
    LOAD_MENUS,
    BACK_TO_MENU

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
    case BACK_TO_MENU:
    return{...state,isSubItems:false}
    default:
      return state
  }

}

