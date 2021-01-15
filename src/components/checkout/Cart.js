import React, {useState} from 'react';
import './css/Cart.css';
import CartItem from "./CartItem";

export default function Cart() {

    const [ items, setItems ] = useState([
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
    ])

    const handleDelete = (name) => {
        setItems(items.filter(item => {
            return item.name !== name;
        }))
    }

    const handleChange = (name, value) => {
        setItems(items.map(item => {
            if (item.name === name) item.qty = value
            return item
        }))
    }

    return (
        <div className="Cart">
            <h1 className="Cart_title">Your Items</h1>
            {
                items.map((x, i) => {
                    return <CartItem key={i} name={x.name} coll={x.coll} price={x.price} qty={x.qty}
                                     onDelete={handleDelete}
                                     onChange={handleChange}/>
                })
            }
            <div className="Cart_coupon">
                <form action="">
                    <input type="text" placeholder="GIFT CARD OR COUPON, eg: NEW20"/>
                    <button>APPLY</button>
                </form>
            </div>
            <div className="Cart_total">
                <p>Total: <span>${items.reduce((sum, x) => sum + x.qty * x.price, 0)}.00</span></p>
            </div>
        </div>
    )
}