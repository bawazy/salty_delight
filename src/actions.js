import {
    LOAD_MENUS,
    GET_SUB_ITEMS,
    BACK_TO_MENU
} from './constants'

// import { menus } from'./menus'

export const setMenus = (data) => ({
    type: LOAD_MENUS,
    payload: data
})
export const backToMenu = (menu) =>({
    type:BACK_TO_MENU,
    payload:menu
})

export const setSubItems = (subItems)=>({
    type:GET_SUB_ITEMS,
    payload:subItems
})