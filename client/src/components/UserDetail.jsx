import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {
    const [details, setDetails] = useState("")
    const {_id} = useParams();
    // Display the data of one item when didupdate (lifecycle) the label
    useEffect(() => {
        try {
            const getOneUserDetails = async () => {
                const res1 = await axios.get(`/get/${_id}`) ;
                return setDetails(res1.data);
              };
              getOneUserDetails();
        } catch (error) {
            alert("get data error")
        }
    }, [_id])
  return (
    <div>
<h1>{details && details.fullName}</h1>
        <h2>{details && details.email}</h2>
        <h3>{details && details.phone}</h3>
      
<Link to="/" ><button >Back</button></Link>
    </div>
  )
}

export default UserDetail