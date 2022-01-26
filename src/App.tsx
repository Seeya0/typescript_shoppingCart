import { useQuery } from "react-query";


function App() {
  const getProducts = async () =>
    await (await fetch('https://fakestoreapi.com/products')).json();
  const { data, isLoading, error } = useQuery('products', getProducts);
  console.log(data);

  return (
    <div className="App">
      <h1>たまご太郎</h1>
    </div>
  );
}

export default App;
