import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const AddUser = () => {
    const nameRef =useRef();
    const emailRef =useRef();
    const handleAddusers = e =>{
        const name =nameRef.current.value
        const email =emailRef.current.value
        const newuser={name, email};
        fetch('http://localhost:5000/users',{
       method:'POST',
       headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newuser)
        })
        .then(res => res.json())
         .then(data=> {
             console.log(data)
             if(data.insertedId){
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You have added user Sucessfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            e.target.reset();
             }
         })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Please Add User</h1>
            <form onSubmit={handleAddusers}>
                <input  type="text" ref={nameRef} /><br />
                <input type="email" name="" id="" ref={emailRef} /><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;