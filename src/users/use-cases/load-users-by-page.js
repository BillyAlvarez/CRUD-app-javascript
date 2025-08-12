import {localhostUserToModel} from "../mappers/localhost-user.mapper.js";


export const loadUsersByPage = async ( page = 1 ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);

    const response = await res.json();

    const data = response.data;

    if (Array.isArray(data)) {
        // Aquí procesamos el arreglo de usuarios con localhostUserToModel
        const users = data.map(localhostUserToModel);
        return users;
    }



}

