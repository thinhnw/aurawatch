import React, {useEffect, useState} from 'react';
import './css/ProductItem.css';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory, Link } from 'react-router-dom';


export default function ProductItem(props) {

    const history = useHistory();
    const [ item, setItem ] = useState({
        name: "",
        price: 0,
        quantity: 0,
        coll: "",
        gender:""
    });

    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    function handleClick() {
        history.push("/watches/" + item.coll + "-" + item.name);
    }

    useEffect(() => {
        fetch("https://aurawatch-server.herokuapp.com/watches/" + props.prodid)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else
    return (
        <div className="ProductItem" onClick={handleClick}>
            <img src={ process.env.PUBLIC_URL + "/images/" + item.name.toLowerCase() + "_1.jpeg"} alt="image1" className="ProductItem__img"/>
            <div className="ProductItem__star">
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
                <StarOutlineOutlinedIcon/>
            </div>
            <h4 className="ProductItem__name">
                {item.coll + " " + item.name}
            </h4>
            <div className="ProductItem__price">${item.price.toFixed(2)}</div>
            <div className="ProductItem__hover">
                <div className="ProductItem__icon">
                    <a href="/#" className="ProductItem__icon-link">
                        <ShoppingCartIcon />
                    </a>
                </div>
                <div className="ProductItem__icon">
                    <a href="/#" className="ProductItem__icon-link">
                        <FavoriteIcon />
                    </a>
                </div>
            </div>
            <Link className="ProductItem_view" to={"/watches/" + item.coll + "-" + item.name}>View</Link>
        </div>
    )
}