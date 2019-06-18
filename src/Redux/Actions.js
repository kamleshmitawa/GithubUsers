import { USERS_LIST, USER_INFO } from "./ActionTypes";



export const storeUsers = (users) => {
    return{
        type: USERS_LIST,
        users
    }
}

export const storeUserInfo = (user) => {
    return {
        type: USER_INFO,
        user
    }
}