import React, { Component } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import RESTAURANT_DATA from './restaurant.data.js'

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: RESTAURANT_DATA
        };
    }

    componentDidMount() {
        console.log('co dostalem', this.props.location.state);
    }

    render() {
        const { collection } = this.state;

        return(
            <div className='content'>
                {collection.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))}
            </div>
        );
    }
}

export default Checkout;