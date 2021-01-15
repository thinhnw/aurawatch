import React, {useEffect, useState} from 'react';
import './css/ProductDetail.css';
import ProductInfo from './ProductInfo';
import ProductPhotoContainer from "./ProductPhotoContainer";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductReview from "./ProductReview";
import Parallax from "../home/Parallax";
import ProductRelate from "./ProductRelate";
import PageTitleBanner from "../partials/PageTitleBanner";
import {
    Route,
    useParams,
    useLocation
} from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export default function ProductDetail() {

    return (
        <div className="ProductDetail">
            <Route exact path={`/watches/:fullName`} component={Child}/>
        </div>
    )
}

function Child ()  {
    const classes = useStyles();
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ item, setItem ] = useState({
        name: "Weimar",
        coll: "Paul",
        gender: "men",
        quantity: "1",
        price: 100
    })
    const { fullName } = useParams();
    if (fullName) {
        [ item.coll, item.name ] = fullName.split('-');
    }
    console.log(fullName);

    const location = useLocation();
    console.log(location.pathname);

    useEffect(() => {
        fetch("https://aurawatch-server.herokuapp.com/watches")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    result.forEach((x) => {
                        if (x.coll === item.coll && x.name === item.name) {
                            setItem(x);
                            console.log(x);
                        }
                    })
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [item.coll, item.name]);

    if (error) { return <div>Error: {error.message}</div>}
    else if (!isLoaded) {return <div>Loading...</div>}
    else
    return (
        <div>
            <PageTitleBanner title={item.coll + " " + item.name}/>
            <div className="ProductDetail_container">
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6}>
                            <ProductPhotoContainer name={item.name}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ProductInfo
                                name={item.name}
                                coll={item.coll}
                                price={item.price}
                                qty={item.quantity}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="ProductDetail_review"> </div>
            <div className="ProductDetail_container">
                <ProductReview />
            </div>
            <Parallax/>
            <ProductRelate gender={item.gender}/>
        </div>
    )
}


