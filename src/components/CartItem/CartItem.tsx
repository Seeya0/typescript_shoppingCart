import React from 'react';
import { cartItemType } from '../../App';

type CartItemsInCart = {
    item: cartItemType;
    handleAddToCart: (clickedItem: cartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const CartItem: React.VFC<CartItemsInCart> = ({ item, handleAddToCart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>

            <div>
                <button
                    onClick={() => handleRemoveFromCart(item.id)}
                >
                    -
                </button>
                <p>{item.amount}</p>
                <button
                    onClick={() => handleAddToCart(item)}
                >
                    +
                </button>
            </div>
            <img src={item.image} alt={item.title} />
        </div>
    );
};

export default CartItem;
