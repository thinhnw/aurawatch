import React, {useEffect, useState} from 'react';
import './css/ProductsListing.css';
import ProductItem from "./ProductItem";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {
    Route,
    useHistory,
    useParams,
    useLocation
} from 'react-router-dom';
import CategoryNav from "./CategoryNav";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function ProductsListing() {

    const classes = useStyles();
    const history = useHistory();
    const [ page, setPage] = useState(1);
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ order, setOrder ] = useState(0);

    const handleChange = (event, value) => {
        setPage(value);
        console.log('page', value);

        let path = window.location.pathname.indexOf("page");
        if (path === -1) history.push(window.location.pathname + "?page=" + value);
        else {
            path = window.location.pathname;
            path.slice(0, path.length - 1);
            history.push(path + value);
        }
    };

    useEffect(() => {

        setItems([]);
        fetch("https://aurawatch-server.herokuapp.com/watches")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(items => [ ...items, ...result ]);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        return function cleanup() {
            setPage(1);
        }
    }, []);

    function MainComp() {

        let { coll = "" } = useParams();
        const search = useLocation().search;
        const num = parseInt(new URLSearchParams(search).get('page')) || 1;
        setPage(num);
        let displayItems = items;

        if (coll === "" || coll === "sale") {}
        else if (coll === "men") { displayItems = items.filter(x => x.gender === "men") }
        else if (coll === "women") { displayItems = items.filter(x => x.gender === "women") }
        else if (coll === "accessories") {}
        else {
            displayItems = items.filter(x => x.coll.toLowerCase() === coll);
        }

        let first = (page - 1) * 9;
        let last = (page * 9) > displayItems.length ? displayItems.length : page * 9;
        if (order === 1) {
            displayItems.sort((a, b) => {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;
            })
        } else if (order === 2) {
            displayItems.sort((a, b) => {
                if (a.price < b.price) return 1;
                if (a.price > b.price) return -1;
                return 0;
            })
        }
        return (
            <div className={"grid__row"}>
                {
                    displayItems.slice(first, last).map((x, i) => {
                        return <div key={i} className={"gird__columns-3-4 "}>
                            <ProductItem prodid={x.id}/>
                        </div>
                    })
                }
            </div>
        )
    }

    function handleSelect(event) {

        setOrder(event.target.value)
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
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Sort by</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={order}
                                    onChange={handleSelect}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Price: Low to High</MenuItem>
                                    <MenuItem value={2}>Price: High to Low</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <div className="home-product">

                            <Route exact path={["/category",
                                "/category?page=num",
                                "/category/:coll",
                                "/category/:coll?page=num"]} component={MainComp} />
                            <div className="grid__row">
                                <div className={classes.root}>
                                    <Pagination count={3} page={page} onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
