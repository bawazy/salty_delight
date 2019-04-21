import {
    LOAD_MENUS

} from './constants'


export const setMenus = (menu) => ({
    type:LOAD_MENUS,
    payload:menu
})