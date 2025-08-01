import usersStore from "./store/users-store.js";
import {RenderTable} from "./presentation/render-table/render-table.js";


export const usersApp = async ( element )=> {
    element.innerHTML = 'Loading';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    RenderTable( element );


}

