import React from 'react';
import './css/ProductsListing.css';
import img1 from './images/pro_3_1_3_1.jpeg';
import ProductItem from "./ProductItem";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export default function ProductsListing() {

    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const items = [];
    for (let i = 0; i < 12; ++i) items.push({});

    return (
        <div className="ProductsListing">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__columns-3">
                        <nav className="category">
                            <h3 className="category__heading">CATEGORIES</h3>
                            <ul className="category-list">
                                <li className="category-item">
                                    <a href="/#" className="category-item__link">
                                        <span className="ProductsListing_collections">Collections</span>
                                    </a>
                                </li>
                                <li className="category-item">
                                    <a href="/#" className="category-item__link">For Him</a>
                                </li>
                                <li className="category-item">
                                    <a href="/#" className="category-item__link">For Her</a>
                                </li>
                                <li className="category-item">
                                    <a href="/#" className="category-item__link">Accessories</a>
                                </li>
                                <li className="category-item">
                                    <a href="/#" className="category-item__link">Sale</a>
                                </li>
                                <li className="category-item">
                                    <a href="/#" className="category-item__link">Blog</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="category">
                            <div className="category__heading category__heading-compare">NEW PRODUCTS</div>
                            <div className="block-content">
                                <ul className="product-items">
                                    <li className="product-item">
                                        <div className="product-item-info">
                                            <a href="/" className="product-item-photo">
                                                <img
                                                    src="https://templatetrend.in/magento/MAG600/pub/media/catalog/product/cache/29/thumbnail/80x96/beff4985b56e3afdbeabfc89641a4582/p/r/pro_8_4.jpg"
                                                    alt="img1" className="photo-img" width="80" height="90"/>
                                            </a>
                                            <div className="product-item-details">
                                                <div className="product-item-detail">
                                                    <strong className="product-item-name">
                                                        <a href="/#" className="product-item-link">Tiger Ipsum Text</a>
                                                    </strong>
                                                </div>
                                                <span className="price-box">$84.00</span>
                                                <div className="product-item-inner">
                                                    <a href="/#" className="product-item-primary">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-item">
                                        <div className="product-item-info">
                                            <a href="/" className="product-item-photo">
                                                <img
                                                    src="https://templatetrend.in/magento/MAG600/pub/media/catalog/product/cache/29/thumbnail/80x96/beff4985b56e3afdbeabfc89641a4582/p/r/pro_9_1_1_3.jpg"
                                                    alt="img1" className="photo-img" width="80" height="90"/>
                                            </a>
                                            <div className="product-item-details">
                                                <div className="product-item-detail">
                                                    <strong className="product-item-name">
                                                        <a href="" className="product-item-link">Tizzy Watch Ipsum</a>
                                                    </strong>
                                                </div>
                                                <span className="price-box">$129.00</span>
                                                <div className="product-item-inner">
                                                    <a href="" className="product-item-primary">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-item">
                                        <div className="product-item-info">
                                            <a href="/" className="product-item-photo">
                                                <img
                                                    src={img1}
                                                    alt="img1" className="photo-img" width="80" height="90"/>
                                            </a>
                                            <div className="product-item-details">
                                                <div className="product-item-detail">
                                                    <strong className="product-item-name">
                                                        <a href="" className="product-item-link">Tizzy Watch Ipsum</a>
                                                    </strong>
                                                </div>
                                                <span className="price-box">$239.00</span>
                                                <div className="product-item-inner">
                                                    <a href="" className="product-item-primary">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="grid__columns-9">
                        <div className="toolbar-sorter sorter">
                            <label className="sorter-label" htmlFor="sorter">Sort By</label>
                            <select id="sorter" data-role="sorter" className="sorter-options">
                                <option value="position" selected="selected">Position</option>
                                <option value="name">Product Name</option>
                                <option value="price">Price</option>
                            </select>
                        </div>
                        <div className="home-product">
                            <div className="grid__row">
                                {
                                    items.map((x, i) => {
                                        return (
                                            <div className={"gird__columns-3-4 " + (i + 1 <= (page - 1) * 9 || i + 1 > page * 9 ? "page-hidden"  : "")}>
                                                <ProductItem />
                                            </div>
                                        )
                                    })
                                }
                            </div>
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
