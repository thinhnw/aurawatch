import React from 'react';
import './css/CartItem.css';

export default function CartItem(props) {

    return (
        <div className="CartItem">
            <div className="CartItem_img-wrapper">
                <img src={"/images/" + props.name.toLowerCase() + "_1.jpeg"} alt=""/>
            </div>
            <div className="CartItem_info">
                <p><strong>{props.coll}</strong></p>
                <p>{props.name}</p>
            </div>
            <div className="CartItem_price">
                <p>{props.qty} x ${props.price}.00</p>
            </div>
        </div>
    )
}