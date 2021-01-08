import React from 'react';
import './css/MenuMiddleItem.css';
import {
    Link
} from "react-router-dom";
export default function MenuMiddleItem(props) {

    return (
        <div className="MenuMiddleItem">
            <div className="MenuMiddleItem_inner">
                { props.name !== "COLLECTIONS" ? <span>/</span> : "" }
                <span className="MenuMiddleItem_name">
                    <Link to={props.route} className="MenuMiddleItem_link">{props.name}</Link>
                </span>
            </div>
        </div>
    )
}