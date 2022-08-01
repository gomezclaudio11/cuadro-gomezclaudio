//import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../mock/FakeApi";
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const {greetings} = props

    const [listaProductos, setListaProductos] = useState ([])
    const [mensaje, setMensaje] = useState(false)
    const [loading, setLoading] = useState(true)
    const { category } = useParams();
    const onAdd = (cantidad) =>{
        setMensaje(`agregaste ${cantidad} items al carrito`)
    }


    useEffect(() => {
     data
     .then((res)=> {
        if (category) {
        setListaProductos(
            res.filter((product) => product.categoria === category)
        );
        } else{
            setListaProductos(res);
        }
    })
    .catch(()=>setMensaje("hubo un error"))
    .finally (()=>setLoading(false))
}, [category])//array de dependencia vacio para que se eyecute ua sola vez
    console.log(listaProductos)

    return (
        
        <>
        <div>
        <h2> {greetings}</h2>
          { mensaje &&  <p>{mensaje}</p>}
        {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
           
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
        </>
    );
}

export default ItemListContainer;
