//import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where} from "firebase/firestore"
import Carrousel from "./Carrousel";

const ItemListContainer = (props) => {
    const {greetings} = props

    const { id } = useParams()
  
  const [items, setItems] = useState([])
  


  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "items")
      getDocs(itemsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        console.log(data)
        setItems(data)
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (id) {
      const db = getFirestore()
  
      const itemsCollectionQuery = query(
        collection(db, "items"),
        where("category", "==", id)
      )

      getDocs(itemsCollectionQuery)
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          setItems(data)
        })
        .catch((error) => console.error(error))
    }
  }, [id])

    return (
      <>
      <Carrousel/>
      <div>
            <h3>{greetings}</h3>
            <ItemList items={items} />
          </div>
          </>
    );
}

export default ItemListContainer;
