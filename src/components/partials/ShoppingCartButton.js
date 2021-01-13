import React from 'react';
import './css/ShoppingCartButton.css';
import {Link} from "react-router-dom";
export default function ShoppingCartButton() {
    return (
        <Link to="/checkout" className="ShoppingCartButton">
            <div className="ShoppingCartButton">
            </div>
        </Link>

    )
}