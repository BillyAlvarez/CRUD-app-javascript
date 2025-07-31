
const state = {
    currentPage: 0 ,
    users: [],
}


const loadNextPage = async() => {
    throw new Error( 'Not Implemented' )
}

const loadPrevPage = async() => {
    throw new Error( 'Not Implemented' )
}

const onUserChanged = () => {
    throw new Error( 'Not Implemented' )
}

const reloadPage = async() => {
    throw new Error( 'Not Implemented' )
}

export default {
    loadNextPage,
    loadPrevPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,

}
