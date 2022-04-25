import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUsers, getUsers } from '../redux/action';
import EditedUser from './EditedUser';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{user.fullName}</h1>
        <h2>{user.email}</h2>
        <h3>{user.phone}</h3>
        <Link to={`/details/${user._id}`} > <button > Details </button>  </Link>
        <button onClick={()=>{dispatch(deleteUsers(user._id));dispatch(getUsers())}}>Delete</button>
        <EditedUser user={user}/>
        <hr />
    </div>
  )
}

export default UserCard