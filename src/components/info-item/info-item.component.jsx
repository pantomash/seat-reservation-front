import React from 'react';

import './info-item.styles.scss';

const InfoItem = ({ item: { imageUrl, header, text } }) => (
    <div className='container'>
        <div className='image-container'>
            <img src={imageUrl} alt="" className='image-url' />
        </div>
        <div className='item-container'>
            <span>{header}</span>
            <span>{text}</span>
        </div>
        <div></div>
    </div>
);

export default InfoItem;