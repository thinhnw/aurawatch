import React, {useState} from 'react';
import './css/CartItem.css';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
export default function CartItem(props) {

    const [ qty, setQty ] = useState(props.qty);

    function handleChange(event, value) {
        setQty(value)
    }
    return (
        <div className="CartItem">
            <div className="CartItem_img-wrapper">
                <img src={"/images/" + props.name.toLowerCase() + "_1.jpeg"} alt=""/>
            </div>
            <div className="CartItem_info">
                <p><strong>{props.coll}</strong></p>
                <p>{props.name}</p>
                <div className="CartItem_price">
                    <input type="number" name="qty" min="0" max="99" value={qty} onChange={handleChange}/>
                    <p> x ${props.price}.00</p>
                </div>
            </div>
            <div className="CartItem_delete">
                <DeleteSweepOutlinedIcon fontSize="large" className="CartItem_deleteIcon"/>
            </div>
        </div>
    )
}