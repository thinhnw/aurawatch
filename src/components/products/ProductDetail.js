import React from 'react';
import './css/ProductDetail.css';
import ProductInfo from './ProductInfo';
import ProductPhotoContainer from "./ProductPhotoContainer";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductReview from "./ProductReview";
import Parallax from "../home/Parallax";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));
export default function ProductDetail() {

    const classes = useStyles();

    return (
        <div className="ProductDetail">
            <div className="ProductDetail_container">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <ProductPhotoContainer />
                        </Grid>
                        <Grid item xs={6}>
                            <ProductInfo />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="ProductDetail_review"> </div>
            <div className="ProductDetail_container">
                <ProductReview />
            </div>
            <Parallax />
        </div>
    )
}