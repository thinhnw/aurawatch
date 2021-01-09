import React, {useEffect, useState} from 'react';
import './css/ProductsListing.css';
import ProductItem from "./ProductItem";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {
    Route,
    Link,
    useHistory,
    useParams
} from 'react-router-dom';
import CategoryNav from "./CategoryNav";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export default function ProductsListing() {

    const classes = useStyles();
    const history = useHistory();
    const [ page, setPage] = useState(1);
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const handleChange = (event, value) => {
        setPage(value);
        let path = window.location.pathname.split('/');
        let sub = path[1] === "category" ? "" : path[1];
        history.push("/category" + sub + "/pages/" + value);
    };

    useEffect(() => {

        fetchAPI();
    }, []);

    const fetchAPI = () => {
        fetch("https://aurawatch-server.herokuapp.com/watches")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    result.forEach(x => {
                        setItems( items => [ ...items, x ]);
                    })
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    function MainComp() {

        let { num = 1 } = useParams();
        return (
            <div className={"grid__row"}>
                {
                    items.slice((num - 1) * 9, (num * 9) > items.length ? items.length : num * 9).map((x, i) => {
                        return <div key={i} className={"gird__columns-3-4 "}>
                            <ProductItem prodid={x.id}/>
                        </div>
                    })
                }
            </div>
        )
    }
    if (error) { return <div>Error: {error.message}</div>}
    else if (!isLoaded) { return <div>Loading...</div>}
    else
        return (
            <div className="ProductsListing">
                <div className="grid">
                    <div className="grid__row">
                    <div className="grid__columns-3">
                        <CategoryNav />
                        <nav className="category">
                            <div className="category__heading category__heading-compare">NEW PRODUCTS</div>
                            <div className="block-content">
                                <ul className="product-items">
                                    {
                                        items.slice(0, 3).map((x, i) => {
                                            return <li className="product-item" key={i}>
                                                <div className="product-item-info">
                                                    <a href="/#" className="product-item-photo">
                                                        <img
                                                            src={`/images/${x.name.toLowerCase()}_1.jpeg`}
                                                            alt="img1" className="photo-img" width="80" height="90"/>
                                                    </a>
                                                    <div className="product-item-details">
                                                        <div className="product-item-detail">
                                                            <strong className="product-item-name">
                                                                <a href="/#" className="product-item-link">{x.coll + " " +x.name}</a>
                                                            </strong>
                                                        </div>
                                                        <span className="price-box">${x.price.toFixed(2)}</span>
                                                        <div className="product-item-inner">
                                                            <a href="/#" className="product-item-primary">Add To Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="grid__columns-9">
                        <div className="toolbar-sorter sorter">
                            <label className="sorter-label" htmlFor="sorter">Sort By</label>
                            <select id="sorter" data-role="sorter" className="sorter-options">
                                <option value="position" defaultValue="selected">A-Z</option>
                                <option value="name">Increasing by Price</option>
                                <option value="price">Decreasing by Price</option>
                            </select>
                        </div>
                        <div className="home-product">
                            <Route exact path={["/category", "/category/pages/:num"]} component={MainComp}/>
                            <div className="grid__row">
                                <div className={classes.root}>
                                    <Pagination count={2} page={page} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
