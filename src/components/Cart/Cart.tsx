import React from 'react';
import { cartItemType } from '../../App';
import CartItem from '../CartItem/CartItem';



type CartItemsInCart = {
    cartItems: cartItemType[];
    handleAddToCart: (clickedItem: cartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Cart: React.VFC<CartItemsInCart> = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
    const calculation = (items: cartItemType[]) => {
        return items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    }

    return (
        <div className="top-0 right-0 w-[35vw] bg-green-100  p-10 pl-20 fixed h-full z-40 scroll-smooth overflow-y-scroll overflow-y-hidden">
            <h1 className='text-3xl my-6'>Shopping Cart</h1>
            {cartItems.length === 0 ? <p>No items in your cart, mate.</p> : null}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            ))}
            <h2 className="text-3xl font-bold text-right mt-3">Total: {calculation(cartItems).toFixed(2)}</h2>
        </div>
    );
};

export default Cart;

