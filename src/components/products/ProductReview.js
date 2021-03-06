import React from 'react';
import './css/ProductReview.css';
import author1 from './images/testimonial_img1.jpeg';
import author2 from './images/testimonial_img2.jpeg';
import author3 from './images/testimonial_img3.jpeg';

import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export default function ProductReview() {
    const classes = useStyles();
    return (
        <div className="ProductReview">
            <h1 className="ProductReview_title">CUSTOMERS' REVIEWS</h1>
            <div className="ProductReview_star">
                <StarIcon style={{ color: "#f7d72f"}}/>
                <StarIcon style={{ color: "#f7d72f"}}/>
                <StarIcon style={{ color: "#f7d72f"}}/>
                <StarIcon style={{ color: "#f7d72f"}}/>
                <StarIcon style={{ color: "#f7d72f"}}/>
            </div>
            <div className={classes.root}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <div className="ProductReview_item">
                                <div className="ProductReview_star">
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                </div>
                                <div className="ProductReview_review-title">
                                    <h3>Nice</h3>
                                </div>
                                <div className="ProductReview_review">
                                    <p>Very nice. Good strap</p>
                                </div>
                                <div className="ProductReview_author">
                                    <div className="ProductReview_avatar">
                                        <img src={author1} alt=""/>
                                    </div>
                                    <div className="ProductReview_author-name">
                                        <p><strong>Josh Dun</strong></p>
                                        <p>Verified Buyer</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <div className="ProductReview_item">
                                <div className="ProductReview_star">
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                </div>
                                <div className="ProductReview_review-title">
                                    <h3>A Great Watch</h3>
                                </div>
                                <div className="ProductReview_review">
                                    <p>Bought this for my friend on her birthday and she said she love it so much.</p>
                                </div>
                                <div className="ProductReview_author">
                                    <div className="ProductReview_avatar">
                                        <img src={author2} alt=""/>
                                    </div>
                                    <div className="ProductReview_author-name">
                                        <p><strong>Taylor Swift</strong></p>
                                        <p>Verified Buyer</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <div className="ProductReview_item">
                                <div className="ProductReview_star">
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                    <StarIcon style={{ color: "#f7d72f"}}/>
                                </div>
                                <div className="ProductReview_review-title">
                                    <h3>Best Watch</h3>
                                </div>
                                <div className="ProductReview_review">
                                    <p>Comfortable to wear. Looks very elegant</p>
                                </div>
                                <div className="ProductReview_author">
                                    <div className="ProductReview_avatar">
                                        <img src={author3} alt=""/>
                                    </div>
                                    <div className="ProductReview_author-name">
                                        <p><strong>Chuck Norris</strong></p>
                                        <p>Verified Buyer</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}