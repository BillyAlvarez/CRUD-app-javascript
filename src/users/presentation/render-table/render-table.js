import './render-table.css'
import usersStore from "../../store/users-store.js";
import {showModal} from "../render-modal/render-modal.js";
import {deleteUserById} from "../../use-cases/delete-user-by-id.js";

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
    <tr>
        <th> # ID </th>
        <th> Balance </th>
        <th> First Name </th>
        <th> Last Name </th>
        <th> Active </th>
        <th> Avatar </th>
        <th> Actions </th>
    </tr>
    `
    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
}

const tableSelectListener = ( event ) => {
    const element = event.target.closest('.select-user');
    if (!element) return;
    const id = element.getAttribute('data-id');
    console.log(id)
    showModal(id)
}

const tableDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user');
    if (!element) return;
    const id = element.getAttribute('data-id');
    try{
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();
    }catch(error){
        alert(error.message);
    }
}

    export const renderTable = (element) => {

        const users = usersStore.getUsers();
        if (!table) {
            table = createTable();
            element.append(table);

            table.addEventListener('click', tableSelectListener)
            table.addEventListener('click', tableDeleteListener)
        }

        let tableHTML = ''
        users.forEach(user => {
            tableHTML += `<tr>
        <td>${user.id}</td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.isActive}</td>
        <td>${user.avatar}</td>
        <td>
        <a href="#/" class="select-user" data-id="${user.id}"> Select </a>
        |
        <a href="#/" class="delete-user" data-id="${user.id}"> Delete </a>
        </td>
    </tr>`
        });
        table.querySelector('tbody').innerHTML = tableHTML;

    }
