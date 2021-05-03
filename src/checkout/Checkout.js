import React, {useState} from 'react';
import basket from "./shopping-cart-solid.svg";


function Checkout(props) {
    const counter = props.database.filter((item) => {
        return item.bought === true
    })
    return (
        <div className="checkout">
            <img src={basket} alt="image"/>
            <span className="counter">{counter.length}</span>
        </div>
    );
}

export default Checkout;