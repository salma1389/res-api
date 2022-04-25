import { ADD, DELETE, GET, EDIT } from "./actionTypes";
import axios from "axios";


export const getUsers = () => async(dispatch) => {
    try {
        const res = await axios.get("/get");
        dispatch(
            {
                type : GET,
                payload : res.data
            }
        );
    } catch (error) {
        alert("get error");
    }
};

export const deleteUsers = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`/delete/${id}`);
        dispatch(
            {
                type : DELETE,
                payload : res.data
            }
        );
    } catch (error) {
        alert("delete error");
    }
};

export const addNewUser = (newUser) => async(dispatch) => {
    try {
        const res = await axios.post("/post",newUser);
        dispatch(
            {
                type : ADD,
                payload : res.data
            }
        );
    } catch (error) {
        alert("add error");
    }
};

export const editUser = (editedUser) => async(dispatch) => {
    try {
        const res = await axios.put(`/update/${editedUser._id}`,editedUser);
        dispatch(
            {
                type : EDIT,
                payload : res.data
            }
        );
    } catch (error) {
        alert("edit error");
    }
};