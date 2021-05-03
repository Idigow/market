import React from 'react';
import Logo from "./logo/Logo";
import Menu from "./Menu";
import Checkout from "./checkout/Checkout";

function Header(props) {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout
                // counter={props.counter}
                database={props.database}
            />
            <span><a href="#">Выход</a></span>
        </div>
    );
}

export default Header;