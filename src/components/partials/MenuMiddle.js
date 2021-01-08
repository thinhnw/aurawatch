import React from 'react';
import './css/MenuMiddle.css';
import MenuMiddleItem  from './MenuMiddleItem';

export default function MenuMiddle() {
    return (
        <div className="MenuMiddle">
            <ul className="MenuMiddle_outer">
               <li><MenuMiddleItem route="/category" name="COLLECTIONS"/></li>
                <li><MenuMiddleItem route="/category/men" name="FOR HIM"/></li>
                <li><MenuMiddleItem route="/category/women" name="FOR HER"/></li>
                <li><MenuMiddleItem route="/category/accessories" name="ACCESSORIES"/></li>
                <li><MenuMiddleItem route="/category:q/sale" name="SALE"/></li>
                <li><MenuMiddleItem route="/blog" name="BLOG"/></li>
            </ul>
        </div>
    )
}