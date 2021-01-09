import React, {useEffect, useState} from 'react';
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

    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ men, setMen ]= useState([]);
    const [ women, setWomen ] = useState([]);

    useEffect(() => {
        fetch("https://aurawatch-server.herokuapp.com/watches")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    let cntMen = 0;
                    let cntWomen = 0;
                    result.forEach( x => {
                        if (x.gender === "men" && cntMen < 4) {
                            setMen(men => [ ...men, x ]);
                            cntMen++;
                        } else if (x.gender === "women" && cntWomen < 4) {
                            setWomen(women => [ ...women, x ]);
                            cntWomen++;
                        }
                    })
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else
    return (
        <div className="BestSellers">
            <div className="BestSellers_container">
                <div className={classes.root}>
                    <div className="BestSellers_title">
                        <h2>MEN'S BEST SELLERS</h2>
                    </div>
                    <Grid container spacing={3}>
                        {
                            men.map( (x, i) => {
                                return (
                                    <Grid key={i} item xs={3}>
                                        <ProductItem prodid={x.id} />
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
                            women.map((x, i)=> {
                                return (
                                    <Grid key={i} item xs={3}>
                                        <ProductItem prodid={x.id}/>
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