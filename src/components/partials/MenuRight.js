import React from 'react';
import './css/MenuRight.css';
import ShoppingCartButton from "./ShoppingCartButton";
import UserButton from "./UserButton";
import SearchButton from "./SearchButton";

export default function MenuRight() {
    return (
        <div className="MenuRight">
            <ul className="MenuRight_outer">
                <li className="MenuRight_item">
                    <ShoppingCartButton />
                </li>
                <li className="MenuRight_item">
                    <UserButton />
                </li>
                <li className="MenuRight_item">
                    <SearchButton />
                </li>
            </ul>
        </div>
    )
}
