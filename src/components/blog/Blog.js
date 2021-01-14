import React from 'react';
import './css/Blog.css';
import img1 from './images/1_1.jpg';
import img2 from './images/2_3.jpg';
import img3 from './images/4_5.jpg';
import img4 from './images/5_2.jpg';
import img5 from './images/pro_5_1_3_1_1.jpeg';
import img6 from './images/pro_8_4.jpg';
import img7 from './images/pro_9_1_1_3.jpg';
import PageTitleBanner from "../partials/PageTitleBanner";
import { Route, Link} from 'react-router-dom';
import BlogPost from "./BlogPost";
export default function Blog() {

    return (
        <div className="Blog">
            <PageTitleBanner title={"Blog"}/>
            <div className="grid">
                <div className="grid__row">
                    <Route exact path="/blog">
                        <div className="grid__columns-9">
                            <div className="post-wrapper">
                                <ol className="post-list">
                                    <li className="post-holder">
                                        <a href="/#" className="post-img__links">
                                            <img src={img1} alt="" className="post-img"/>
                                        </a>
                                        <div className="blog-data">
                                            <div className="post-title-holder">
                                                <h2 className="post-title">
                                                    <a href="/#" className="post-title__link">Tizzy Watch Store</a>
                                                </h2>
                                            </div>
                                            <div className="post-info">
                                                <div className="post-posed">
                                                    <span className="post-label">Posted:</span>
                                                    <span className="post-value">January 08, 2017</span>
                                                </div>
                                                <div className="post-author">
                                                    <span className="post-label">Author:</span>
                                                    <span className="post-value">
                                                    <a href="/#" className="post-value__link">Dixit Shah</a>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-text">
                                            <p className="post-text-detail">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum
                                            </p>
                                        </div>
                                        <Link to="/blog/1" className="post-read-more">Read More >></Link>
                                        <hr/>
                                    </li>
                                    <li className="post-holder">
                                        <a href="/#" className="post-img__links">
                                            <img src={img2} alt="" className="post-img"/>
                                        </a>
                                        <div className="blog-data">
                                            <div className="post-title-holder">
                                                <h2 className="post-title">
                                                    <a href="/#" className="post-title__link">Tizzy Watch Store</a>
                                                </h2>
                                            </div>
                                            <div className="post-info">
                                                <div className="post-posed">
                                                    <span className="post-label">Posted:</span>
                                                    <span className="post-value">January 08, 2017</span>
                                                </div>
                                                <div className="post-author">
                                                    <span className="post-label">Author:</span>
                                                    <span className="post-value">
                                                    <a href="/#" className="post-value__link">Dixit Shah</a>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-text">
                                            <p className="post-text-detail">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum
                                            </p>
                                        </div>
                                        <a href="/#" className="post-read-more">Read More >></a>
                                        <hr/>
                                    </li>
                                    <li className="post-holder">
                                        <a href="/#" className="post-img__links">
                                            <img src={img3} alt="" className="post-img"/>
                                        </a>
                                        <div className="blog-data">
                                            <div className="post-title-holder">
                                                <h2 className="post-title">
                                                    <a href="/#" className="post-title__link">Tizzy Watch Store</a>
                                                </h2>
                                            </div>
                                            <div className="post-info">
                                                <div className="post-posed">
                                                    <span className="post-label">Posted:</span>
                                                    <span className="post-value">January 08, 2017</span>
                                                </div>
                                                <div className="post-author">
                                                    <span className="post-label">Author:</span>
                                                    <span className="post-value">
                                                    <a href="/#" className="post-value__link">Dixit Shah</a>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-text">
                                            <p className="post-text-detail">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum
                                            </p>
                                        </div>
                                        <a href="/#" className="post-read-more">Read More >></a>
                                        <hr/>
                                    </li>
                                    <li className="post-holder">
                                        <a href="/#" className="post-img__links">
                                            <img src={img4} alt="" className="post-img"/>
                                        </a>
                                        <div className="blog-data">
                                            <div className="post-title-holder">
                                                <h2 className="post-title">
                                                    <a href="/#" className="post-title__link">Tizzy Watch Store</a>
                                                </h2>
                                            </div>
                                            <div className="post-info">
                                                <div className="post-posed">
                                                    <span className="post-label">Posted:</span>
                                                    <span className="post-value">January 08, 2017</span>
                                                </div>
                                                <div className="post-author">
                                                    <span className="post-label">Author:</span>
                                                    <span className="post-value">
                                                    <a href="/#" className="post-value__link">Dixit Shah</a>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-text">
                                            <p className="post-text-detail">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum
                                            </p>
                                        </div>
                                        <a href="/#" className="post-read-more">Read More >></a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </Route>
                    <Route exact path="/blog/:number">
                        <div className="grid__columns-9">
                            <BlogPost/>
                        </div>
                    </Route>
                    <div className="grid__columns-3">
                        <div className="columns-main">
                            <nav className="category">
                                <div className="category__heading">NEW PRODUCT</div>
                                <div className="block-content">
                                    <ul className="product-items">
                                        <li className="product-item">
                                            <div className="product-item-info">
                                                <a href="/#" className="product-item__photo">
                                                    <img src={img5} width={80} height={90} alt="" className="photo-img"/>
                                                </a>
                                                <div className="product-item-details">
                                                    <div className="product-item-detail">
                                                        <strong className="product-item-name">
                                                            <a href="" className="product-item-link">Tizzy Watch Ipsum</a>
                                                        </strong>
                                                    </div>
                                                    <span className="price-box">$129.00</span>
                                                    <div className="product-item-inner">
                                                        <a href="" className="product-item-primary">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="product-item">
                                            <div className="product-item-info">
                                                <a href="/#" className="product-item__photo">
                                                    <img src={img6} width={80} height={90} alt="" className="photo-img"/>
                                                </a>
                                                <div className="product-item-details">
                                                    <div className="product-item-detail">
                                                        <strong className="product-item-name">
                                                            <a href="" className="product-item-link">Tizzy Watch Ipsum</a>
                                                        </strong>
                                                    </div>
                                                    <span className="price-box">$129.00</span>
                                                    <div className="product-item-inner">
                                                        <a href="" className="product-item-primary">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="product-item">
                                            <div className="product-item-info">
                                                <a href="/#" className="product-item__photo">
                                                    <img src={img7} width={80} height={90} alt="" className="photo-img"/>
                                                </a>
                                                <div className="product-item-details">
                                                    <div className="product-item-detail">
                                                        <strong className="product-item-name">
                                                            <a href="" className="product-item-link">Tizzy Watch Ipsum</a>
                                                        </strong>
                                                    </div>
                                                    <span className="price-box">$129.00</span>
                                                    <div className="product-item-inner">
                                                        <a href="" className="product-item-primary">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <nav className="category">


                            </nav>
                            <nav className="category">
                                <h3 className="category__heading">RECENT POSTS</h3>
                                <ul className="category-list">
                                    <li className="category-item">
                                        <a href="/" className="category-item__link">Tizzy Watch Store</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="/" className="category-item__link">Tizzy Watch Handle</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="/" className="category-item__link">Tizzy Ring Watch</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="/" className="category-item__link">Lorem Ipsum Tizzy</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="category">
                                <h3 className="category__heading">ARCHIVE</h3>
                                <div className="filter">
                                    <a href="/#" className="category__heading-option">January 2017</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}