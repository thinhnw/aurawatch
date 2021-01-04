import React from 'react';
import './css/LatestNews.css';
import img1 from './images/news_1.jpeg';
import img2 from './images/news_2.jpeg';
import img3 from './images/news_3.jpeg';
import img4 from './images/news_4.jpeg';

export default function LatestNews(props) {

    const news = [
        {
            img: img1,
            title: "Title 1",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too ..."
        },
        {
            img: img2,
            title: "Title 2",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too ..."
        },
        {
            img: img3,
            title: "Title 3",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too ..."
        },
        {
            img: img4,
            title: "Title 4",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too ..."
        },
    ];

    const [ index, setIndex ] = React.useState(0);
    const [ active, setActive ] = React.useState(0);

    function indexAfter(i) {
        if ( i === news.length - 1) return 0;
        return i+1;
    }
    function indexBefore(i) {
        if ( i === 0 ) return news.length - 1;
        return i-1;
    }

    function handleNext() {
        setIndex(indexAfter(index));
    }

    function handlePrev() {
        setIndex(indexBefore(index));
    }

    function handleMouseOverLeft() {
        setActive(1);
    }

    function handleMouseOutLeft() {
        setActive(0);
    }

    function handleMouseOverRight() {
        setActive(2);
    }

    function handleMouseOutRight() {
        setActive(0);
    }
    return (
        <div className="LatestNews">
            <div className="LatestNews_container">
                <div className="LatestNews_title">
                    <h2>LATEST NEWS</h2>
                    <button className="LatestNews-prev" onClick={handlePrev}></button>
                    <button className="LatestNews-next" onClick={handleNext}></button>
                </div>
                <div className="LatestNews_news LatestNews_news-left" onMouseOver={handleMouseOverLeft} onMouseOut={handleMouseOutLeft}>
                    <a href="/#">
                        <img src={news[index].img} alt=""/>
                    </a>
                    <div className="text-outer">
                        <div className={"text " + ((active === 1) && "active") }>
                            <h3 className="title">{ news[index].title }</h3>
                            <p className="brief">{ news[index].text }</p>
                        </div>
                    </div>
                </div>

                <div className="LatestNews_news LatestNews_news-right" onMouseOver={handleMouseOverRight} onMouseOut={handleMouseOutRight}>
                    <a href="/#">
                        <img src={news[indexAfter(index)].img} alt=""/>
                    </a>
                    <div className="text-outer">
                        <div className={"text " + (active === 2 && "active")}>
                            <h3 className="title">{ news[indexAfter(index)].title }</h3>
                            <p className="brief">{ news[indexAfter(index)].text }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}