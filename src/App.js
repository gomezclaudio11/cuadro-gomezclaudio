import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      < NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer greettings="Gracias por visitar enMarcados"/>} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/category/:category" element={<ItemListContainer/>} />
      <Route path="/cart" element={<h1>Carrito</h1>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
