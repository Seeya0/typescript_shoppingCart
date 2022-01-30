import React from 'react';
import { cartItemType } from '../../App';

type CartItem = {
    item: cartItemType;
    handleAddToCart: (clickedItem: cartItemType) => void
}

const Item: React.VFC<CartItem> = ({ item, handleAddToCart }) => {
    return (
        <div className="flex flex-col items-center justify-around p-6 max-w-sm bg-white rounded-lg border min-h-full border-gray-200 shadow-lg">
            <img src={item.image} alt={item.title} className="w-11/12" />
            <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mb-3 font-normal text-gray-700">{item.description.substring(0, 100)}...</p>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">${item.price}</h3>
            </div>
            <button
                onClick={() => handleAddToCart(item)}
                className="inline-flex items-center py-2 px-3 font-medium bg-green-500 hover:bg-green-600 focus:ring-4 rounded-xl"
            >Add to cart!</button>
        </div>
    );
};

export default Item;

