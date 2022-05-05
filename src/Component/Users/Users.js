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
    const url=`http://localhost:5000/users/${id}`
    fetch(url,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
    if(data.deletedCount > 0){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        const remainingUser=users.filter(user =>user._id !== id)
        setUsers(remainingUser);
    }
    })

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