import React from 'react';
import './css/Users.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import PageTitleBanner from "../partials/PageTitleBanner";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function SignUp() {

    const classes = useStyles();

    return (
        <div className="Users">
            <PageTitleBanner title={"Create New Account"}/>
            <div className="Users_inner">
                <form action="/" className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <div className="Users_left-container">
                                <h2 className="Users_title">Personal Information</h2>
                                <div className="Users_form-control">
                                    <label htmlFor="fname">
                                        <span>First Name</span>
                                    </label>
                                    <input type="text" name="fname"/>
                                </div>
                                <div className="Users_form-control">
                                    <label htmlFor="lname">
                                        <span>Last Name</span>
                                    </label>
                                    <input type="text" name="lname"/>
                                </div>
                                <div className="Users_form-control">
                                    <button className="Users_primary-button">Create An Account</button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="Users_right-container">
                                <h2 className="Users_title">Account Information</h2>
                                <div className="Users_form-control">
                                    <label htmlFor="email" className="Users_email-label">
                                        <span>Email</span>
                                    </label>
                                    <br/>
                                    <input type="mail" name="email" className="Users_email" required/>
                                </div>
                                <div className="Users_form-control">
                                    <label htmlFor="password" className="Users_password-label">
                                        <span>Password</span>
                                    </label>
                                    <br/>
                                    <input type="password" name="password" className="Users_password" required minLength={6}/>
                                </div>
                                <div className="Users_form-control">
                                    <label htmlFor="confirm-password" className="Users_confirm-password-label">
                                        <span>Confirm Password</span>
                                    </label>
                                    <br/>
                                    <input type="password" name="confirm-password" className="Users_password" required minLength={6}/>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}