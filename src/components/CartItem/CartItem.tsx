import React from 'react';
import { cartItemType } from '../../App';

type CartItemsInCart = {
    item: cartItemType;
    handleAddToCart: (clickedItem: cartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const CartItem: React.VFC<CartItemsInCart> = ({ item, handleAddToCart, handleRemoveFromCart }) => {
    return (
        <div className="flex flex-col text-gray-800">
            <h3 className="text-2xl my-3">{item.title}</h3>
            <img className="w-4/12" src={item.image} alt={item.title} />

            <div className="flex items-end justify-end gap-5 text-2xl">
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
            <div className="flex flex-col items-end justify-end">
                <p className="text-xl">Price: ${item.price}</p>
                <p className="text-xl">Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CartItem;
