import './App.css';
import { Profiler, useState } from 'react'
import MenuContainer from './components/MenuContainer'
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [inputProduct, setInputProduct] = useState('')

  const [currentSale, setCurrentSale] = useState([])  

  const [cartTotal, setCartTotal] = useState(0)


  const showProducts = () => {
    setFilteredProducts((products.filter((item) => item.name.toLowerCase().includes(inputProduct))))
    setInputProduct('')
  }

  const handleClick = (productId) => {
    const checkDuplicateItems = currentSale.includes(productId.id)

    // {checkDuplicateItems}

    setCurrentSale([...currentSale, products.find((item) => item.id === (productId))])
    setCartTotal(currentSale.length + 1)
  }

  return (
    <div className="App">

      <h1>Hamburgueria Kenzie</h1>

      <input placeholder='Produto buscado' value={inputProduct} onChange={e => setInputProduct(e.target.value)} />

      <button onClick={showProducts}>Pesquisar</button>

      <MenuContainer handleClick={handleClick} products={products} currentSale={currentSale} filteredProducts={filteredProducts} />

      <h3 className='subtotal'>Subtotal: R${currentSale.reduce((anterior, atual) => (anterior + atual.price), 0).toFixed(2)} - Quantidade {cartTotal}</h3>

      <Cart currentSale={currentSale} />
    </div>
  );
}

export default App;