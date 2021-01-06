import React from 'react';
import './css/ProductInfo.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function ProductInfo() {

    return (
        <div className="ProductInfo">
            <p className="ProductInfo_collection">WEIMAR</p>
            <p className="ProductInfo_name">PAUL</p>
            <p className="ProductInfo_price">$100.00</p>
            <p className="ProductInfo_status">Status: <span>In stock</span></p>
            <form action="">
                <div className="ProductInfo_form-control">
                    <label htmlFor="qty">QTY</label>
                    <input type="number" name="qty" id="qty" min={0}/>
                </div>
                <button className="ProductInfo_primary-button">
                    <ShoppingCartIcon />
                    <span>
                    ADD TO CART
                </span>
                </button>
            </form>
            <div className="ProductInfo_tabs">
                <div className="ProductInfo_labels">
                    <p className="ProductInfo_label ProductInfo_label-tech">Technical</p>
                    <p className="ProductInfo_label ProductInfo_label-shipping">Shipping</p>
                    <p className="ProductInfo_label ProductInfo_label-return">Return Policy</p>
                </div>
                <div className="ProductInfo_tab ProductInfo_tab-tech">
                    <p>Size: <span>40MM</span></p>
                    <p>Thickness: <span>7MM</span></p>
                    <p>Color: <span>BLACK</span></p>
                    <p>Mechanic: <span>MIYOTA QUARTZ</span></p>
                    <p>Strap: <span>20MM</span></p>
                    <p>Water resistance: <span>3ATM</span></p>
                    <p>Glass: <span>SAPPHIRE</span></p>
                </div>
                <div className="ProductInfo_tab ProductInfo_tab-shipping">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae delectus, iure iusto labore mollitia quo suscipit unde? Beatae consectetur deleniti eligendi non possimus reiciendis rem repellendus, vel. Porro, sit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae delectus, iure iusto labore mollitia quo suscipit unde? Beatae consectetur deleniti eligendi non possimus reiciendis rem repellendus, vel. Porro, sit.
                    </p>
                </div>
                <div className="ProductInfo_tab ProductInfo_tab-return">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae delectus, iure iusto labore mollitia quo suscipit unde? Beatae consectetur deleniti eligendi non possimus reiciendis rem repellendus, vel. Porro, sit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae delectus, iure iusto labore mollitia quo suscipit unde? Beatae consectetur deleniti eligendi non possimus reiciendis rem repellendus, vel. Porro, sit.
                    </p>
                </div>
            </div>
        </div>
    )
}