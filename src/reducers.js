import {
    LOAD_MENUS

} from './constants'

// import { menus } from'./menus'

const initialMenu = {
    menus:[]
}

export const setMenus =(state=initialMenu, action={}) => {
    switch(action.type){
        case LOAD_MENUS:
        return Object.assign({}, state, {menus:action.payload})
        default:
            return state;
    }

}