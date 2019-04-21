import {
    LOAD_MENUS,
    GET_SUB_ITEMS
} from './constants'

// import { menus } from'./menus'

export const setMenus = (menus) => ({
    type:LOAD_MENUS,
    payload:menus
})

export const setSubItems = (subItems)=>({
    type:GET_SUB_ITEMS,
    payload:subItems
})