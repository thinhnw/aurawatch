import React from 'react';
import './css/Menu.css';
import MenuMiddle from './MenuMiddle';
import MenuRight from './MenuRight';
import MenuLeft from './MenuLeft';

export default function Menu() {

    const [ isScroll, setScroll ] = React.useState(false);

    function handleScroll() {
        window.onscroll = function() {
            if (window.pageYOffset > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
    }
    handleScroll();


    return (
        <div className={"Menu " + (isScroll ? "scrollbg" : "")}>
            <div className="Menu_container">
                <MenuLeft />
                <MenuMiddle />
                <MenuRight />
            </div>

        </div>
    );
}
