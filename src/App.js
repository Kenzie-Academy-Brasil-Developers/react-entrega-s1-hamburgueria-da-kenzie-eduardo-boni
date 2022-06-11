import './App.css';
import { useState, useEffect } from 'react';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import logo from './img/logo.svg';

function App() {
  
  const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [currentSale, setCurrentSale] = useState([]);
const [cartTotal, setCartTotal] = useState(0);
const [inputs, setInputs] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  function showProducts(input) {
    const result = products.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
        product.category.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setFilteredProducts(result);
  }

  function handleClick(productId) {
    const soldItem = products.find((product) => product.id === productId);

    if (!currentSale.includes(soldItem)) {
      setCurrentSale([...currentSale, soldItem]);
      setCartTotal(
        currentSale
          .reduce(
            (acumulator, currentValue) => acumulator + currentValue.price,
            soldItem.price
          )
          .toFixed(2)
      );
    }
  }

  function removeItem(productId, productPrice) {
    const newArr = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(newArr);
    setCartTotal((cartTotal - productPrice).toFixed(2));
  }

  function removeAll() {
    setCurrentSale([]);
    setCartTotal(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"/>
        <div className="pesquisa">
          <input
            placeholder="Digitar Pesquisa"
            type="text"
            value={inputs}
            onChange={(event) => setInputs(event.target.value)}
          />
          <button onClick={() => showProducts(inputs)}>Pesquisar</button>
        </div>
      </header>
      <div className="main">
        {filteredProducts.length < 1 ? (
          <ProductsList products={products} handleClick={handleClick} />
        ) : (
          <ProductsList products={filteredProducts} handleClick={handleClick} />
        )}
        <Cart
          cartTotal={cartTotal}
          currentSale={currentSale}
          removeItem={removeItem}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
}

export default App;
