
import {useState} from 'react';

function ItemCount  ()  {  
    
    const [counter, setcounter] = useState(0);
    const [stock, setstock] = useState(10);
    const [initial, setinitial] = useState(1);

    const onAdd = () =>{
        setinitial(initial + 1);
        setstock(stock - 1);
        console.log(stock)
        if (initial <= 10){
            setcounter(counter + 1);
        } else { 
            alert("Lo sentimos no hay stock disponible");
        }
    }

    
    const substract = () => {
        setinitial(initial - 1);
        setstock(stock + 1);
        setcounter(counter -1);
        if (counter === 0){
            alert("El valor no puede ser negativo")
            setcounter(counter === 0);
            setinitial(initial ===0)
        };
    }

    
    return (
        
        <div >
            <div>
            <button onClick={substract} >-</button>
            <imput type= "number">{counter}</imput>
            <button onClick={onAdd} >+</button>
            </div>
            
        </div>
    );
}



export default ItemCount 