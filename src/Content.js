import React, {useState} from 'react';
import Card from "./Card";

function Content(props) {
    return (
        <div className="content">
            {
                props.database.map((product, index) => {
                    return (
                        <Card
                            product={product}
                            bought={product.bought}
                            click={props.click}
                            rating={product.rating}
                        />
                    )
                })
            }
        </div>
    );
}

export default Content;