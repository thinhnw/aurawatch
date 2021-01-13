import React from 'react';
import './css/CheckOut.css';
import PageTitleBanner from "../partials/PageTitleBanner";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckOutForm from "./CheckOutForm";
import Cart from "./Cart";

const useStyles = makeStyles(() => ({

    root: {
        flexGrow: 1,
        width: "1200px",
        margin: "80px auto"
    },
}));
export default function CheckOut() {

    const classes = useStyles();
    return (
        <div className="CheckOut">
            <PageTitleBanner title="Check out"/>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CheckOutForm />
                    </Grid>
                    <Grid item xs={6}>
                        <Cart />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}