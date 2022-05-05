import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            
            <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/adduser">Add User</Link>
            <Link to="/updateusers">Update User</Link>
        </nav>   
    </div>
    );
};

export default Header;