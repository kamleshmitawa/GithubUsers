import { USERS_LIST, USER_INFO } from "./ActionTypes";

let initialState = {
    users: [],
    user: ''
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case USERS_LIST:
            return action.users

        case USER_INFO:
            return action.user;

        default:
            return state
    }
}