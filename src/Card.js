import React from 'react';
import Button from "./Button";

function Card(props) {
        let raiting = "";
        for (let i =1; i < props.rating; i++){
            raiting += "*"
        }
         return (
             <div className="card">
                 <div className="card-image">
                     <img src={props.product.image} alt=""/>
                 </div>
                 <div className="card-info">
                     <div className="card-name">{props.product.name}</div>
                     <div className="card-rating">{raiting}</div>
                     <div className="card-price">{props.product.price} ₽</div>
                     <Button
                         bought={props.product.bought}
                         id={props.product.id}
                         bougth={props.product.bought}
                         click={props.click}
                     />
                 </div>
             </div>
         );
}

export default Card;