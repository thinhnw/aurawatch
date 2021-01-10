import React from 'react';
import './css/ProductsListing.css';
import {Link} from "react-router-dom";

export default function CategoryNav() {

    return (

        <nav className="category">
            <h3 className="category__heading">CATEGORIES</h3>
            <ul className="category-list">
                <li className="category-item">
                    <Link to="/category?page=1" className="category-item__link">
                        Collections
                    </Link>
                    <ul className="collection__list">
                        <li>
                            <Link to="/category/kashmir" className="collection__item_link">Kashmir</Link>
                        </li>
                        <li>
                            <Link to="/category/weimar" className="collection__item_link">Weimar</Link>
                        </li>
                        <li>
                            <Link to="/category/colosseum" className="collection__item_link">Colosseum</Link>
                        </li>
                        <li>
                            <Link to="/category/jackson" className="collection__item_link">Jackson</Link>
                        </li>
                        <li>
                            <Link to="/category/melissani" className="collection__item_link">Melissani</Link>
                        </li>
                        <li>
                            <Link to="/category/hamilton" className="collection__item_link">Hamilton</Link>
                        </li>
                        <li>
                            <Link to="/category/santorini" className="collection__item_link">Santorini</Link>
                        </li>
                        <li>
                            <Link to="/category/florence" className="collection__item_link">Florence</Link>
                        </li>
                    </ul>
                </li>
                <li className="category-item">
                    <Link to="/category/men" className="category-item__link">For Him</Link>
                </li>
                <li className="category-item">
                    <Link to="/category/women" className="category-item__link">For Her</Link>
                </li>
                <li className="category-item">
                    <Link to="/category/accessories" className="category-item__link">Accessories</Link>
                </li>
                <li className="category-item">
                    <Link to="/category" className="category-item__link">Sale</Link>
                </li>
                <li className="category-item">
                    <Link to="/blog" className="category-item__link">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}