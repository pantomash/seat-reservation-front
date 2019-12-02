import React from 'react';
import Button from '@material-ui/core/Button';

const CheckoutItem = (item) => {
    const {id, name, address, avaliableHours} = item;

    const handleHourButton = (hour) => {
        console.log(hour);
    }

    const handleCheckoutButton = () => {
        console.log('wybieram te restauracje');
    }



    return(
        <div className='checkout-item'>
            <div className='image-container'></div>
            <span className='name'>{name}</span>
            <span className='address'>{address}}</span>
            {avaliableHours.map(hour => (
                <Button variant="outlined" onClick="handleHourButton"></Button>
            ))}
            <Button variant="contained" color="primary" onClick="handleCheckoutButton"></Button>
        </div>
    );
}

export default CheckoutItem;