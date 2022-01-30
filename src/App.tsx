import { useState } from "react";
import { useQuery } from "react-query";
import Spinner from './components/Spinner/Spinner';
import Cart from './components/Cart/Cart';
import { Drawer, Badge } from "@material-ui/core";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Item from "./components/Item/Item";

export type cartItemType = {
  id: number;
  description: string;
  category: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

function App() {
  const [cartOpen, setCartOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState([] as cartItemType[]);


  const getProducts = async () =>
    await (await fetch('https://fakestoreapi.com/products')).json();

  const { data, isLoading, error } = useQuery<cartItemType[]>('products', getProducts);
  console.log(data);

  const getTotalItems = (items: cartItemType[]) =>
    items.reduce((ack, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: cartItemType) => {
    setCartItems((items) => {
      const isItemInCart = items.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return items.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item);
      }
      return [...items, { ...clickedItem, amount: 1 }]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((items) =>
      items.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item]
        }
      }, [] as cartItemType[])
    )
  }

  if (isLoading) return <Spinner />
  if (error) return <div>Something went wrong... Text me about it!</div>

  return (
    <div className="App">
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <button
        onClick={() => setCartOpen(true)}
        className="fixed z-30 flex items-center cursor-pointer right-16 top-6"
      >
        <Badge badgeContent={getTotalItems(cartItems)} color="primary" className="p-2 text-white bg-green-300 rounded-full">
          <AiOutlineShoppingCart className="text-3xl" />
        </Badge>
      </button>

      <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 m-4">
        {data?.map((item) => (
          <div key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;