import usersStore from "./store/users-store.js";

export const usersApp = ( element )=> {
    element.innerHTML = 'Loading';
    usersStore.loadNextPage();
}

