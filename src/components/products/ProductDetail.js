import React from 'react';
import './css/ProductDetail.css';
import img1 from './images/pro_5_1_3_1_1.jpeg';
export default function ProductDetail() {

    return (
        <div className="page-main">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid-columns-6">
                        <div className="page-main__item">
                            <a href="/" className="page-main__link">
                                <img src={img1} alt="Image1" className="page-main__img" />
                            </a>
                        </div>
                        <nav className="fotorama">
                            <div className="fotorama-thumb">
                                <img src={img1} alt="" className="fotorama-thumb-img" />
                            </div>
                            <div className="fotorama-thumb">
                                <img src={img1} alt="" className="fotorama-thumb-img" />
                            </div>
                            <div className="fotorama-thumb">
                                <img src={img1} alt="" className="fotorama-thumb-img" />
                            </div>
                            <div className="fotorama-thumb">
                                <img src={img1} alt="" className="fotorama-thumb-img" />
                            </div>
                        </nav>
                    </div>
                    <div className="grid-columns-6">
                        <div className="product-info">
                            <div className="product-detail">
                                <div className="product-reviews">
                                    <a href="/" className="product-reviews__link">
                                        Be the first to reviews this product
                                    </a>
                                </div>
                                <div className="product-name">
                                    <h1 className="page-title">Tizzy Watch Ipsum</h1>
                                </div>
                                <h2 className="product-price">$107.00</h2>
                            </div>
                            <div className="product-info-stock">
                                <san className="product-stock">In Stock</san>
                                <div className="product-attribute">
                                    <div className="product-attribute__information">
                                        SKU: Tizzy watch Ipsum
                                    </div>
                                </div>
                            </div>
                            <div className="product-value">
                                <p className="product-value__description">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                            <div className="product-field">
                                <label htmlFor="" className="field-required">
                                    <span className="field-required__size">SIZE</span>
                                </label>
                                <div className="control">
                                    <select name="" id="" className="control-select">
                                        <option value="">-- Please Select --</option>
                                        <option value="">L</option>
                                        <option value="">XL</option>
                                        <option value="">XXL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product-fieldset">
                                <div className="product-fieldset__QTY">
                                    <label htmlFor="" className="product-fieldset__label">QTY</label>
                                    <div className="control-input">
                                        <input name="QTY" maxLength="12" type="number" className="product-fieldset__input"/>
                                    </div>
                                    <button type="submit" className="product-primary__button">
                                        <span className="product-primary__cart">ADD TO CART</span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-social">
                                <div className="product-social__links">
                                    <a href="" className="product-social__item">
                                    </a>
                                    <a href="" className="product-social__item">
                                    </a>
                                    <a href="" className="product-social__item">
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="product-detailed">
                        <div className="product-date-items">
                            <ul className="product-data__navbar">
                                <li className="product-data__list">
                                    <a href="" className="product-data__link">DETAILS</a>
                                </li>
                                <li className="product-data__list">
                                    <a href="" className="product-data__link">REVIEWS</a>
                                </li>
                                <li className="product-data__list">
                                    <a href="" className="product-data__link">CUSTOM TAB</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}