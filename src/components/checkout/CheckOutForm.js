import React from 'react';
import './css/CheckOutForm.css';

export default function CheckOutForm() {

    return (
        <div className="CheckOutForm">
            <h1>Customer Information</h1>
            <form action="">
                <div className="CheckOut_form-control">
                    <input type="text" name="name" placeholder="Your Name" required/>
                </div>
                <div className="CheckOut_form-control">
                    <input type="email" name="email" placeholder="Email"required/>
                </div>
                <div className="CheckOut_form-control">
                    <input type="text" name="phone" placeholder="Phone"required/>
                </div>
                <div className="CheckOut_form-control">
                    <textarea name="address" cols="30" rows="3" placeholder="Shipping Address"required>

                    </textarea>
                </div>
                <div className="CheckOut_form-control">
                    <button>Check Out</button>
                </div>
            </form>
        </div>
    )
}