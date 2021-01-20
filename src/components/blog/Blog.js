import React, {useEffect, useState} from 'react';
import './css/Blog.css';
import img1 from './images/wr_proofvsres_proofvsres.jpeg';
import img2 from './images/2_3.jpg';
import PageTitleBanner from "../partials/PageTitleBanner";
import { Route, Link} from 'react-router-dom';
import BlogPost from "./BlogPost";
export default function Blog() {

    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ items, setItems ] = useState([]);

    const posts = [
        {
            title: "Watch Education - Water Resistance",
            date: "January 01, 2021",
            author: "Benjamin Cucumbersome",
            thumbnail: img1,
            prgrphs: [
                "While “water resistance” is a fairly common feature of most watches, there is a lot more to it than most people are aware of. Whether you’re a diving enthusiast, headed for a beach vacation, or just curious about water resistance, the experts at Aura Watch offer their advice and recommended precautions to help you keep your watch safe and protected for years to come.\n",
            ]
        },
        {
            title: "The Essential Guide To Buying Watches Online",
            date: "December 08, 2020",
            author: "Burgerking Camouflage",
            thumbnail: img2,
            prgrphs: [
                "Buying a watch online is normally a very straightforward and simple process – provided you know exactly what you want to buy and precisely where you want to buy it. This guide is designed to help the many people who are understandably confused or even intimidated by the process of determining both how to choose a watch to buy online and some good options of where to buy it. This guide isn’t going to tell you the wristwatch decision that is right for you, nor is it going to recommend one retailer or sales channel where you’ll get the best service, price, or selection. Rather, the aBlogtoWatch guide to buying watches online is designed as a primer for helping you to understand the differences between various ways to shop online as well as pitfalls which are often easy to avoid if you know what to look out for.",
            ]
        },
    ]

    useEffect(() => {
        setItems([]);
        fetch("https://aurawatch-server.herokuapp.com/watches")
            .then(rs => rs.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.slice(0, 3));
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const NewProducts = () => {
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <ul className="product-items">
                    {
                        items.map((item, i) => {
                            return (
                                <li key={i} className="product-item">
                                    <div className="product-item-info">
                                        <Link to={`/watches/${item.coll}-${item.name}`} className="product-item__photo">
                                            <img src={`/images/${item.name.toLowerCase()}_1.jpeg`} width={80}
                                                 height={90} alt="" className="photo-img"/>
                                        </Link>
                                        <div className="product-item-details">
                                            <div className="product-item-detail">
                                                <strong className="product-item-name">
                                                    <Link to={`/watches/${item.coll}-${item.name}`}
                                                          className="product-item-link">{item.coll + " " + item.name}</Link>
                                                </strong>
                                            </div>
                                            <span className="price-box">${item.price}.00</span>
                                            <div className="product-item-inner">
                                                <Link to="/blog" className="product-item-primary">Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            )


        }
    }
    return (
        <div className="Blog">
            <PageTitleBanner title={"Blog"}/>
            <div className="grid">
                <div className="grid__row">
                    <Route exact path="/blog">
                        <div className="grid__columns-9">
                            <div className="post-wrapper">
                                <ol className="post-list">
                                    {
                                        posts.map((post, i) => {
                                            return (

                                                <li key={i} className="post-holder">
                                                    <Link to="/blog/1" className="post-img__links">
                                                        <img src={post.thumbnail} alt="" className="post-img"/>
                                                    </Link>
                                                    <div className="blog-data">
                                                        <div className="post-title-holder">
                                                            <h2 className="post-title">
                                                                <Link to="/blog/1" className="post-title__link">{post.title}</Link>
                                                            </h2>
                                                        </div>
                                                        <div className="post-info">
                                                            <div className="post-posed">
                                                                <span className="post-label">Posted:</span>
                                                                <span className="post-value">{post.date}</span>
                                                            </div>
                                                            <div className="post-author">
                                                                <span className="post-label">Author:</span>
                                                                <span className="post-value">
                                                                    <Link to="/blog" className="post-value__link">{post.author}</Link>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-text">
                                                        <p className="post-text-detail">{post.prgrphs[0]}</p>
                                                    </div>
                                                    <Link to="/blog/1" className="post-read-more">Read More >></Link>
                                                    <hr/>
                                                </li>
                                            )
                                        })
                                    }
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
                                    <NewProducts />
                                </div>
                            </nav>
                            <nav className="category">
                                <h3 className="category__heading">RECENT POSTS</h3>
                                <ul className="category-list">
                                    <li className="category-item">
                                        <Link to="/blog/1" className="category-item__link">Watch Education - Water Resistance</Link>
                                    </li>
                                    <li className="category-item">
                                        <Link to="/blog/1" className="category-item__link">Seven Awesome Field Watches For Every Budget</Link>
                                    </li>
                                    <li className="category-item">
                                        <Link to="/blog/1" className="category-item__link">Is There An Ideal Size For Your Collection</Link>
                                    </li>
                                    <li className="category-item">
                                        <Link to="/blog/1" className="category-item__link">The Essential Guide to Buying Watches Online</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="category">
                                <h3 className="category__heading">ARCHIVE</h3>
                                <div className="filter">
                                    <Link to="/blog" className="category__heading-option">Jan 2021</Link>
                                    <Link to="/blog" className="category__heading-option">Dec 2020</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}