import React from 'react';
import './css/ShopBySize.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    topleft: {
        borderRight: "1px #737373 solid",
        borderBottom: "1px #737373 solid",
    },
    topright: {
        borderBottom: "1px #737373 solid",
    },
    botleft: {
        borderRight: "1px #737373 solid",
    }
}));

export default function ShopBySize() {

    const classes = useStyles();
    const sizes = [
        {
            img: "smallImage",
            name: "Small",
            dsc: "Small-size watches are suitable for wrists that are from 6 to 7 inches"
        },
        {
            img: "mediumImage",
            name: "Medium",
            dsc: "Medium-size watches are suitable for wrists that are from 6 to 7 inches"
        },
        {
            img: "largeImage",
            name: "Large",
            dsc: "Large-size watches are suitable for wrists that are from 7 to 8 inches"
        },
        {
            img: "xlargeImage",
            name: "X-Large",
            dsc: "Xtra large-size watches are suitable for wrists that are more than 8 inches"
        },
    ];

    function getBorder(i) {
        if (i === 0) return classes.topleft;
        if (i === 1) return classes.topright;
        if (i === 2) return classes.botleft;
        return "";
    }

    return (
        <div className="ShopBySize">
            <div className={ "ShopBySize_container " + classes.root }>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="ShopBySize_title">
                            <h3 className={"title"}>WATCH BY SIZE</h3>
                            <p className={"dsc"}>As human beings we are drawn towards natural balance. Generally speaking if you have a smaller wrist, you will want a smaller watch. If you have a larger wrist you will want a larger watch. </p>
                        </div>
                    </Grid>
                    {
                        sizes.map(( size, i ) => {
                           return (
                               <Grid item xs={12} md={6} className={ getBorder(i) } key={i}>
                                   <div className="ShopBySize_size">
                                       <div className={"watchImage " + size.img}> </div>
                                       <div className="text">
                                           <h4>{size.name}</h4>
                                           <p>{size.dsc}</p>
                                       </div>
                                   </div>
                               </Grid>
                           )
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}