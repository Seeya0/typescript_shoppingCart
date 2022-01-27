import React from 'react';
import { cartItemType } from '../../App';

type CartItem = {
    item: cartItemType;
    handleAddToCart: (clickedItem: cartItemType) => void
}

const Item: React.VFC<CartItem> = ({ item, handleAddToCart }) => {
    return (
        <div>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description.substring(0, 50)}</p>
                <h3>${item.price}</h3>
            </div>
            <button onClick={() => handleAddToCart(item)}>Add to cart!</button>
        </div>
    );
};

export default Item;

