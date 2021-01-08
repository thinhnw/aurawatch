import React, {useState} from 'react';
import './css/ProductPhotoContainer.css';
import img1 from './images/pro_1_1.jpeg';

export default function ProductPhotoContainer(props) {

    const imgs = [];
    const name = props.name;
    for (let i = 1; i <= 4; ++i) {
        let path = `/images/${name.toLowerCase()}_${i}.jpeg`;
        imgs.push(path) ;
        console.log(path);
    }

    const [ index, setIndex ] = useState(0);

    return (
        <div className="ProductPhotoContainer">
            <div className="ProductPhotoContainer_main">
                <div className="ProductPhotoContainer_main-inner">
                    <img src={imgs[index]} alt=""/>
                </div>
            </div>
            <div className="ProductPhotoContainer_sub">
                {
                    imgs.map((img, i) => {
                        return (
                            <div key={i} className="ProductPhotoContainer_sub-item">
                                <img src={img} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}