// import {
//     LOAD_MENUS

// } from './constants' 

import { menus } from'./menus'

const initialMenu = {
    menus:menus, 
    isSubItems:false,
    activeSubItems:[],
    food:'',
    total:'',
    cart:[]
}

export const getMenus = (state=initialMenu) => {
  return state
}

// export const setSubItems = (state=initialMenu,action={})=>{
//     switch (action.type){
//         case GET_SUB_ITEMS:
//         return Object.assign({}, state.menus.subItems)
//     }
    
// }