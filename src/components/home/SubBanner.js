import React from 'react';
import SubBannerItem from './SubBannerItem';
import './css/SubBanner.css';
import img1 from './images/sub-banner1.jpeg';
import img2 from './images/sub-banner2.jpeg';
import img3 from './images/sub-banner3.jpeg';
import img4 from './images/sub-banner4.jpeg';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function SubBanner(props) {

    const classes = useStyles();

    return (
        <div className="SubBanner">
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <SubBannerItem img={img1}
                                       tag={"Best sellers"}
                                       title={"Most favourite watches"}
                                        desc={"Shop for the hottest items"}/>
                    </Grid>
                    <Grid item xs={3}>
                        <SubBannerItem img={img2}
                                       tag={"Most popular"}
                                       title={"Up to 60% off"}
                                       desc={"Stay update for the discount"}/>
                    </Grid>
                    <Grid item xs={3}>
                        <SubBannerItem img={img3}
                                       tag={"Premium"}
                                       title={"Luxury Zone"}
                                       desc={"Take your watch game to another level"}/>
                    </Grid>
                    <Grid item xs={3}>
                        <SubBannerItem img={img4}
                                       tag={"Hot Style"}
                                       title={"Great Outfits"}
                                       desc={"Matching your watches with the best outfits"}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}