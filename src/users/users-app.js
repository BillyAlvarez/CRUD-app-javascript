import usersStore from "./store/users-store.js";
import {RenderTable} from "./presentation/render-table/render-table.js";
import {renderButtons} from "./presentation/render-buttons/render-buttons.js";
import {renderAddButton} from "./presentation/render-add-button/render-add-button.js";
import {renderModal} from "./presentation/render-modal/render-modal.js";


export const usersApp = async ( element )=> {
    element.innerHTML = 'Loading';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    RenderTable( element );
    renderButtons( element );
    renderAddButton( element );
    renderModal( element );
}

