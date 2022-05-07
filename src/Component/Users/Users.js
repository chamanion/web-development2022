import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data =>setUsers(data))
  }, [] )

//   DELETE 
const handleDelete = id =>{
  Swal.fire({
    icon: "warning",
    title: "Are you sure to delete this order?",
    showCancelButton: true,
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`//localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const modifiedOrders = users.filter((order) => order._id !== id);
            setUsers(modifiedOrders);
            Swal.fire("Deleted!", "", "success");
          }
        });
    }
  });
  
}


    return (
        <div>
            <h1>User available:{users.length}</h1>
            {
                users.map(user=><h2>{user.name}::{user.email}
                  <button>Update</button>          
                <button onClick={()=>handleDelete(user._id)}>X</button>  
                
                </h2>)  
             }
            
          
        </div>
    );
};

export default Users;