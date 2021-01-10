import React, {useState} from 'react';
import './css/ProductInfo.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function ProductInfo(props) {

    const [ activeTab, setActiveTab ] = useState(0);

    function showDesc() {
        setActiveTab(0);
    }
    function showTech() {
        setActiveTab(1);
    }
    function showPlc(){
        setActiveTab(2);
    }

    return (
        <div className="ProductInfo">
            <p className="ProductInfo_collection">{props.coll}</p>
            <p className="ProductInfo_name">{props.name}</p>
            <p className="ProductInfo_price">$ <span>{props.price.toFixed(2)}</span></p>
            <p className="ProductInfo_status">
                Status:
                <span style={ props.qty ? { color: "blue" } : { color: "red" } }> {props.qty ? "In Stock" : "Out of Stock"}</span>
            </p>
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
                    <p className={"ProductInfo_label ProductInfo_label-shipping " + (activeTab === 0? "ProductInfo_label-active" : "")}
                       onClick={showDesc}>Description</p>
                    <p className={"ProductInfo_label ProductInfo_label-tech " + (activeTab === 1? "ProductInfo_label-active" : "")}
                       onClick={showTech}>Technical</p>
                    <p className={"ProductInfo_label ProductInfo_label-return " + (activeTab === 2? "ProductInfo_label-active" : "")}
                       onClick={showPlc}>Return Policy</p>
                </div>
                <div className={"ProductInfo_tab ProductInfo_tab-shipping " + (activeTab === 0 ? "ProductInfo_tab-active" : "" )}>
                    <p>
                        Weimar Paul men's fashion watch
                    </p>
                    <p>
                        A Watch for guys who love elegance and classics. With a combination of domed glass, black and glamorous rosegold, the Weimar Paul watch will help you elevate any outfit.
                    </p>
                    <p>
                        - <strong>Sapphire glass</strong> is outstandingly scratch resistant and protects the watch face at all times
                    </p>
                    <p>
                        - <strong>Case material:</strong> 316L stainless steel - is the standard for a high-end watch, making your watch durable over time.
                    </p>
                    <p>
                        - <strong>3ATM Waterproof </strong>- The feature makes yo(activeTab === 0 ? "ProductInfo_tab-active" : "" )u feel confident and comfortable in all your daily activities.
                    </p>
                    <p>
                        - <strong>Easy Wire Change </strong>- Transform your style in 30 seconds without any special tools
                    </p>
                </div>
                <div className={"ProductInfo_tab ProductInfo_tab-tech " + (activeTab === 1 ? "ProductInfo_tab-active" : "" )}>
                    <p>Size: <span>40MM</span></p>
                    <p>Thickness: <span>7MM</span></p>
                    <p>Color: <span>BLACK</span></p>
                    <p>Mechanic: <span>MIYOTA QUARTZ</span></p>
                    <p>Strap: <span>20MM</span></p>
                    <p>Water resistance: <span>3ATM</span></p>
                    <p>Glass: <span>SAPPHIRE</span></p>
                </div>
                <div className={"ProductInfo_tab ProductInfo_tab-return " + (activeTab === 2 ? "ProductInfo_tab-active" : "" )}>
                    <p>
                        1 CHANGE 1 WITHIN 3 DAYS
                    </p>
                    <p>
                        Since receiving goods for Watches
                    </p>
                    <p>
                        CONDITIONS:
                    </p>
                    <p>
                        - The watch face and bottom are fully sealed, no signs of use, no scratches or physical impacts.
                    </p>
                    <p>
                        - Watch strap accessories have no signs of physical impact.
                    </p>
                    <p>
                        - The product box is full of postcards, vouchers, and invoices (applied to products purchased at the store).
                    </p>
                    <p>
                        - APPLIED CHANGE ONE TIME ONLY for watch products, equal to price or higher.
                    </p>
                    <p>
                        -DO NOT APPLY products with full price to discounted products or products with other promotions.
                    </p>
                    <p>
                        -NOT APPLICABLE to exchange and return products offered by Curnon.
                    </p>
                </div>
            </div>
        </div>
    )
}