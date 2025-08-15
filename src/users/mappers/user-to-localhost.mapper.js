

export const usersModelToLocalhost = ( user )=> {
    const {
        avatar,
        balance,
        firstName,
        lastName,
        isActive,
        id,
        gender
    } = user;

    return {
        avatar : 'testing',
        balance,
        first_name : firstName,
        last_name : lastName,
        isActive,
        id,
        gender : '?'
    }
}

