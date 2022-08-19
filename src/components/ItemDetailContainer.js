import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
  const { productId }  = useParams()  
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const db = getFirestore()

    const itemRef = doc(db, 'items', productId) 
    setLoading(true)
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data()
          }
          setItem(data)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [productId])

    return (
      <div>
        {loading && <Spinner animation="grow" />}
      {item && <ItemDetail item={item} />}
  </div>
  )
} 

export default ItemDetailContainer