import React from 'react';
import './css/Blog.css';
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
                            <a href="/#" className="post-title__link">Seven Awesome Field Watches For Every Budget</a>
                        </h2>
                    </div>
                    <div className="post-info">
                        <div className="post-posed">
                            <span className="post-label">Posted:</span>
                            <span className="post-value">January 01, 2021</span>
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
                        A field watch may not enjoy the same celebrated status as dive watches in general, and I am yet to figure out why that is. Field watches or “infantry watches” are more often than not just as capable as their diver’s counterparts: they have the same impressive water resistance, the same focus on excellent legibility, and the same functionality with the frequent use of a rotating timing bezel, plus running seconds to confirm your watch is operational. However, they often do all this with less girth and at a more competitive price. It wouldn’t be much of a stretch to call field watches the ultimate tool watches for their utmost focus on function and lack of superfluous details. Last, but not least, they too can be as quirky as the quirkiest dive watches, if that’s your thing.
                    </p>
                    <p className="post-text-detail">
                        Here’s a selection of seven cool field watches that will make your dive watches put up a fight for more wrist time.
                    </p>
                    <h3>
                        Timex Weekender – $30
                    </h3>
                    <p className="post-text-detail">
                        Timex – and with it, the Indiglo dial – is making a comeback, and it’s as awesome as it’s ever been. This model is humbly called a “Weekender” and with its “silver-tone case” and 30m water resistance, it really is more of a weekend-beater to wear when busying yourself with weekend activities than a do-it-all alternative to the purpose-built field watches we’ll feature below.
                        </p>
                    <p className="post-text-detail">
                        But hey, its awesome Indiglo dial that lights up from a quick press on the crown is as legible as it is charmingly retro (at least for those of us who were genuinely impressed by it ages ago). Meanwhile, its 38mm size stays in tune with its “weekender” capabilities. Good proportions, excellent legibility, quartz (though, to be fair, cheap quartz) accuracy, and a price that makes a Swatch feel like a luxury purchase make this Timex Weekender a cute little beater that may just get more wrist time than you’d first imagine.
                    </p>
                    <p className="post-text-detail">
                        By the way, apropos of the price, this is also one of those rare noteworthy watches that manage to cost less than it is wide: the Timex Weekender can be yours for just $30.55. This variant comes on a green woven strap but note that there are 18 different color variations available via that link.
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