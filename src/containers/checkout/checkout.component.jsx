import React, { Component } from 'react';

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
                {collection.map(({ id, ...otherCollectionProps }) => (
                    <RestaurantItem key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default Checkout;