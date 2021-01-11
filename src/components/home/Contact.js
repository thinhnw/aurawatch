import React from 'react';
import './css/Contact.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageTitleBanner from "../partials/PageTitleBanner";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function Contact() {

    const classes = useStyles();
    return (
        <div className="Contact">
            <PageTitleBanner title="Contact Us"/>
            <div className="Contact_container">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div>
                                <h1>CONTACT US</h1>
                                <p>Mail: aurawatch@aurawatch.org</p>
                                <p>Address: 33 Ham Long, Hoan Kiem, Hanoi</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}