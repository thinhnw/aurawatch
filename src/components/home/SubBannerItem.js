import React, { useState } from 'react';
import './css/SubBannerItem.css';
import {
    Link,
    useHistory
} from 'react-router-dom';

export default function SubBannerItem(props) {

    const [ hover, setHover ] = useState(false);
    const history = useHistory();

    function handleMouseOver() {
        setHover(true);
    }

    function handleMouseOut() {
        setHover(false);
    }
    function handleClick() {
        history.push("/category")
    }

    return (
        <div className="SubBannerItem">
            <Link to={"/category"} className="image-wrapper" href="/#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={props.img} alt="" />
                <div className={"dsc " + (hover && "onMouseOver")}>
                    <button onClick={handleClick} className="dsc-tag">{props.tag}</button>
                    <h2>{props.title}</h2>
                    <div className="linebreak"> </div>
                    <p>{props.desc}</p>
                </div>
            </Link>

        </div>

)
}