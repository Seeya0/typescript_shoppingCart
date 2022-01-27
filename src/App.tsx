import { useState } from "react";
import { useQuery } from "react-query";
import Spinner from './components/Spinner/Spinner';



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
  const [cartOpen, setCartOpen] = useState(false);
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
      <h1>It will be written something great in a day or two.</h1>
    </div>
  );
}

export default App;
