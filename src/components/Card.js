import React from 'react';

function Card({item: {title, subTitle, imgSrc, link}}) {
    return(
        <div className='card-section g-card'>
            <div className="g-card-image card-list" style={{backgroundImage: `url(${imgSrc})`}}>
                <div className="content-list">
                    <h2 className="title-list g-card-title">{title}</h2>
                    <p className="copy-list g-card-info">{subTitle}</p>
                    <button className="btn-list"> <a href={link}>Visit Site</a></button>
                </div>
            </div>
        </div>
    );

}

export default Card;