import React from 'react';
import './css/Blog.css';
import Route, {Link} from "react-router-dom";
import img1 from "./images/1_1.jpg";
import img8 from './images/trend-avatar-11.jpg';
export default function BlogPost() {

    return (
        <div className="post-wrapper">
            <div className="post-holder">
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
            </div>
            <div className="comment">
                <div className="comments-blog">0 Comments </div>
                <hr/>
                <div className="add-comment">
                    <img src={img8} alt="" className="comment-avatar" height={50}/>
                    <input type="text" className="add-comments" placeholder={"Add a comment"}/>
                </div>
                <button className="comments-post"> POST </button>
            </div>
        </div>
    )
}