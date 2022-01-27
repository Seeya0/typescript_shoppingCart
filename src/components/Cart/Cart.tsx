import React from 'react';
import { cartItemType } from '../../App';
import CartItem from '../CartItem/CartItem';



type CartItemsInCart = {
    cartItems: cartItemType[];
    handleAddToCart: (clickedItem: cartItemType[]) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Cart: React.VFC<CartItemsInCart> = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
    const calculation = (items: cartItemType[]) => {
        return items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <p>No items in your cart, mate.</p> : null}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            ))}
            <h2>Total: {calculation(cartItems).toFixed(2)}</h2>
        </div>
    );
};

export default Cart;

