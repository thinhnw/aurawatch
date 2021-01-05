import React from 'react';
import './css/UserButton.css';
import {Link} from "react-router-dom";

export default function UserButton() {

    const [ active, setActive ] = React.useState(false);

    function handleOver() {

        setActive(true);
    }
    function handleOut() {
        setActive(false);
    }
    return (
        <div className="UserButton" onMouseOver={handleOver}>
            <div className={"UserMenu " + (active ? "UserMenu_active" : "")} onMouseOver={handleOver} onMouseOut={handleOut}>
                <Link to="/login" className="UserMenu_link">Log In</Link>
                <hr/>
                <Link to="/signup" className="UserMenu_link">Create an Account</Link>
            </div>

        </div>
    )
}