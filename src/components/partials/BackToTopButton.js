import React, {useState} from 'react';
import './css/BackToTopButton.css';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function BackToTopButton() {

    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop)
    return (
        <KeyboardArrowUpIcon className="scrollTop" onClick={scrollTop}
                             style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    )
}