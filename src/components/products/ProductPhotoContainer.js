import React, {useState} from 'react';
import './css/ProductPhotoContainer.css';

export default function ProductPhotoContainer(props) {

    const imgs = [];
    const name = props.name;

    for (let i = 1; i <= 4; ++i) {
        let path = `/images/${name.toLowerCase()}_${i}.jpeg`;
        imgs.push(path) ;
    }

    const [ index, setIndex ] = useState(0);

    function handleClick(event) {

        let allClasses = event.target.className;
        console.log(allClasses);
        if (allClasses.indexOf("0") > 0) setIndex(0);
        else if (allClasses.indexOf("1") > 0) setIndex(1);
        else if (allClasses.indexOf("2") > 0) setIndex(2);
        else if (allClasses.indexOf("3") > 0) setIndex(3);
    }

    function handlePrev() {

        setIndex( index === 0 ? 3 : index - 1);
    }
    function handleNext() {

        setIndex( (index + 1) >= 4 ? 0 : index + 1);
    }

    return (
        <div className="ProductPhotoContainer">
            <div className="ProductPhotoContainer_main">
                <div className="ProductPhotoContainer_main-inner">
                    <img src={imgs[index]} alt=""/>
                </div>
                <button className="ProductPhoto-prev" onClick={handlePrev}>

                </button>
                <button className="ProductPhoto-next" onClick={handleNext}>

                </button>
            </div>
            <div className="ProductPhotoContainer_sub">
                {
                    imgs.map((img, i) => {
                        return (
                            <div key={i} className={"ProductPhotoContainer_sub-item"}>
                                <img src={img} alt="" className={"ProductPhoto-" + i} onClick={handleClick}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}