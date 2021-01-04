import React from 'react';
import './css/UserMenu.css';
import './css/UserButton.css';
import {Link} from "react-router-dom";
export default function UserMenu() {
    return (
        <div className="UserMenu">

            <Link to="/login">Log In</Link>
            <Link to="/signup">Create an Account</Link>
        </div>
    )
}