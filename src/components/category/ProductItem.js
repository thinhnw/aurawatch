import React from 'react';
import './css/ProductItem.css';
import img1 from "./images/pro_3_1_3_1.jpeg";
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';
export default function ProductItem() {

    return (
        <div className="home-product-item">
            <img src={img1} alt="image1" className="home-product-item__img"/>
            <div className="home-product-item__star">
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
            </div>
            <h4 className="home-product-item__name">
                <a href="" className="home-product-item__link">tizzy watch ipsum</a>
            </h4>
            <div className="home-product-item__price">$107.00</div>
            <div className="home-product-item__hover">
                <div className="home-product-item__favourite">
                    <a href="/" className="home-product-item__favourite-link">
                        <FavoriteIcon classname={"home-product-item__icon"}/>
                    </a>
                </div>
            </div>
            <Link className="ProductItem_view" to="/detail">View</Link>
        </div>
    )
}