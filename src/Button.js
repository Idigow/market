import React from 'react';

function Button(props) {

    return (
        <div className="card-button">
            <button className="btn" onClick={ ()=> props.click(props.id)} disabled={props.bought ? 'disabled': ''}>
                {props.bought ? 'Добавлено в корзину' : 'Добавить в корзину'}
            </button>
        </div>
    );
}

export default Button;