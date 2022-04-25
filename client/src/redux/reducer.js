import {ADD, DELETE, EDIT, GET } from "./actionTypes";


export const init = {
    users : null,
    loading:true
};

export const userReducer = ( state = init, {type, payload}) => {
    switch (type) {
        case GET: 
        return {
            ...state, 
            loading:false,
            users:payload,
        };

        case DELETE: 
        return {
            ...state, users:state.users.filter(el=>el._id!==payload._id)
        };

        case ADD: 
        return {
            ...state, loading:false,users:[...state.users,payload],
        };
        case EDIT: 
        return {
            ...state, loading:false,users:state.users.map(el=>el._id===payload._id?payload:el)
        };

        default:
            return state;
    }
}