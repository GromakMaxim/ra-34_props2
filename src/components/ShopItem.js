import React from "react";

export default function ShopItem(props) {

    if (props.data.state === 'active') {
        // название
        let title = (props.data.title.length > 50) ? props.data.title.substring(0, 50) + ' ...' : props.data.title;

        // валюта
        let price = (props.data.currency_code === 'USD') ? '$' + props.data.price : props.data.price + ' ' + props.data.currency_code;

        // остатки
        let remains;
        if (props.data.quantity <= 10) remains = 'level-low';
        else if (props.data.quantity <= 20) remains = 'level-medium';
        else remains = 'level-high';

        return (
            <div className="item">
                <div className="item-image">
                    <a href={props.data.url}>
                        <img src={props.data.MainImage.url_570xN} alt='shop item'/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{title}</p>
                    <p className="item-price">{price}</p>
                    <p className={'item-quantity ' + remains}>{props.data.quantity} left</p>
                </div>
            </div>
        );
    }
    return null;

}
