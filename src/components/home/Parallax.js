import React from 'react';
import Img from './images/parallax.jpeg';
import './css/Parallax.css';
import ParallaxItem from './ParallaxItem';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Parallax() {

    const classes = useStyles();

    return (
        <div className="Parallax">
            <div className="Parallax_block" style={{ backgroundImage: `url(${Img})`}}>
                <div className="shipping-outer">
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <ParallaxItem pos={"shipping-inner-left"}
                                                title={"Free Shipping"}
                                                dsc={"Shipping worldwide for orders over $99"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <ParallaxItem pos={"shipping-inner-middle"}
                                              title={"Special Gift"}
                                              dsc={"Buy the perfect gift for your loved ones"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <ParallaxItem pos={"shipping-inner-right"}
                                              title={"Money Back"}
                                              dsc={"Not receiving an item applied to reward"}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}