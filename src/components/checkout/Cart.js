import React from 'react';
import './css/Cart.css';
import CartItem from "./CartItem";

export default function Cart() {

    const items = [
        {
            name: "Paul",
            coll: "Weimar",
            price: 120,
            qty: 1
        },
        {
            name: "Sterling",
            coll: "Colosseum",
            price: 156,
            qty: 1
        },
        {
            name: "Thunder",
            coll: "Jackson",
            price: 107,
            qty: 1
        },
    ]
    return (
        <div className="Cart">
            <h1 className="Cart_title">Your Items({ items.reduce((sum, x) => sum + x.qty, 0) })</h1>
            {
                items.map((x, i) => {
                    return <CartItem name={x.name} coll={x.coll} price={x.price} qty={x.qty}/>
                })
            }
            <div className="Cart_coupon">
                <form action="">
                    <input type="text" placeholder="GIFT CARD OR COUPON, eg: NEW20"/>
                    <button>APPLY</button>
                </form>
            </div>
            <div className="Cart_total">
                <p>Total: <span>${items.reduce((sum, x) => sum + x.price, 0)}.00</span></p>
            </div>
        </div>
    )
}