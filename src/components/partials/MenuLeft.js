import React from 'react';
import './css/MenuLeft.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function MenuLeft() {
    return (
        <div className="MenuLeft">
            <Link to="/" className="MenuLeft_brand">
                <h1>AURA WATCH</h1>
            </Link>
        </div>
    )
}
