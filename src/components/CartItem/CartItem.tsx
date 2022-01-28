import React from 'react';
import { cartItemType } from '../../App';

type CartItemsInCart = {
    item: cartItemType;
    handleAddToCart: (clickedItem: cartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const CartItem: React.VFC<CartItemsInCart> = ({ item, handleAddToCart, handleRemoveFromCart }) => {
    return <div>aaaa</div>;
};

export default CartItem;
