import React from 'react';
import './css/UserButton.css';
import {Link} from "react-router-dom";

export default function UserButton() {

    const [ onButton, setOnButton ] = React.useState(false);
    const [ onMenu, setOnMenu ] = React.useState(false);

    function handleOnButton() {
        setOnButton(true);
    }
    function handleOutButton() {
        setOnButton(false);
    }
    function handleOnMenu() {
        setOnMenu(true);
    }
    function handleOutMenu() {
        setOnMenu(false);
    }
    return (
        <div className="UserButton" onMouseOver={handleOnButton} onMouseOut={handleOutButton}>
            <div className={"UserMenu " + ((onMenu || onButton) ? "UserMenu_active" : "")} onMouseOver={handleOnMenu} onMouseOut={handleOutMenu}>
                <Link to="/login" className="UserMenu_link">Log In</Link>
                <Link to="/signup" className="UserMenu_link">Create an Account</Link>
            </div>

        </div>
    )
}