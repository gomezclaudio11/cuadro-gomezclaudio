import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from "./Context/CartContext";
import Cart from "./components/Cart";
import Checkout from './views/Checkout';



const App = () => {
  return (
    
    <div className="App">
      <BrowserRouter >
      <CartProvider>      
      < NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer greettings="Gracias por visitar enMarcados"/>} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/category/:id" element={<ItemListContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>}/>
      </Routes>     
      </CartProvider>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
