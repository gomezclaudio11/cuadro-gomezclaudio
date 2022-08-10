import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import CartProvider from "./Context/CartContext"

function App() {
  return (
    <>
    <div className="App">
      <CartProvider>
      < NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer greettings="Gracias por visitar enMarcados"/>} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/category/:category" element={<ItemListContainer/>} />
      <Route path="/cart" element={<h1>Carrito</h1>} />
      </Routes>
      </CartProvider>
    </div>
    </>
  );
}

export default App;
