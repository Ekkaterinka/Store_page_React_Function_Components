import React from 'react'

export default function ShopItemFunc({ item }) {

    return (
        <div className="main-content">


            <h2> {item.brand} </h2>
            <h1> {item.title} </h1>
            <h3> {item.description} </h3>


            <div className="description">{item.descriptionFull}</div>
            <div className="divider"></div>

            <div>
                <div className="options">
                    <div className="price">{item.currency}{item.price.toFixed(2)} </div><button className="button"><a href="#"></a> Добавить в корзину</button></div>

            </div>

        </div>
    )
}
