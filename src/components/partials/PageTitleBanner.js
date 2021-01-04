import React from 'react';
import './css/PageTitleBanner.css';
export default function PageTitleBanner(props) {

    return (
        <div className="PageTitleBanner">
            <div className="PageTitleBanner_title">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}