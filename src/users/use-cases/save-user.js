import {User} from "../models/user.js";
import {usersModelToLocalhost} from "../mappers/user-to-localhost.mapper.js";


export const saveUser = async (userLike) => {
    const user = new User(userLike);
    if( !user.firstName || !user.lastName ) {
        throw "Please enter firstName and lastName";
    }

    const userToSave = usersModelToLocalhost(user)
    if (user.id) {
        throw 'No Implementada la actualization'
        return;
    }

    const updatedUser = await createUser(userToSave)
    return updatedUser;
}

const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const newUser = await res.json();
    console.log(newUser);
    return newUser;

}
