import React, {useEffect, useState} from 'react';
import './css/ProductRelate.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductItem from "../category/ProductItem";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export default function ProductRelate(props) {

    const classes = useStyles();
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const gender = props.gender;

    useEffect(() => {
        setItems([]);
        fetch("https://aurawatch-server.herokuapp.com/watches")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    let cnt = 0;
                    result.forEach(x => {
                        if (x.gender === gender && cnt < 4) {
                            setItems(items => [ ...items, x ]);
                            cnt++;
                        }
                    })
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [gender])

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else
    return (
        <div className="ProductRelate">
            <div className="ProductRelate_container">
                <div className={classes.root}>
                    <div className="ProductRelate_title">
                        <h2>Related Products</h2>
                    </div>
                    <Grid container spacing={3}>
                        {
                            items.map((x, i) => {
                                return <Grid onClick={scrollTop} key={i} item xs={3}>
                                    <ProductItem prodid={x.id}/>
                                </Grid>
                            })
                        }
                    </Grid>
                </div>
            </div>
        </div>
    )
}