//import React from 'react'

import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>Product: {this.props.product.product}</h3>

                <h3>Price: {this.props.product.price}kr</h3>
            </div>
        )
    }
}


/*let Product = (props) => {

    return (
        <div>
            <h3>Product: {props.product.product}</h3>

            <h3>Price: {props.product.price}kr</h3>
        </div>
    )
}

export default Product*/