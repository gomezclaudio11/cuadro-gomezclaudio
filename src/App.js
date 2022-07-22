import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      < NavBar />
      < ItemListContainer greettings = "Gracias por visitar enMarcados"/>   
      
    </div>
  );
}

export default App;
