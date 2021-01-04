import React from 'react';
import './css/BestSellers.css';
import ProductItem from '../category/ProductItem';
import img1 from './images/news_1.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function BestSellers() {

    const classes = useStyles();
    const menBestSellers = [ img1, img1, img1, img1 ];
    const womenBestSellers = [ img1, img1, img1, img1 ];

    return (
        <div className="BestSellers">
            <div className="BestSellers_container">
                <div className={classes.root}>
                    <div className="BestSellers_title">
                        <h2>MEN'S BEST SELLERS</h2>
                    </div>
                    <Grid container spacing={3}>
                        {
                            menBestSellers.map(img=> {
                                return (
                                    <Grid item xs={3}>
                                        <ProductItem />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <div className="BestSellers_title">
                        <h2>WOMEN'S BEST SELLERS</h2>
                    </div>
                    <Grid container spacing={3}>
                        {
                            womenBestSellers.map(img=> {
                                return (
                                    <Grid item xs={3}>
                                        <ProductItem />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>

            </div>
        </div>
    )
}