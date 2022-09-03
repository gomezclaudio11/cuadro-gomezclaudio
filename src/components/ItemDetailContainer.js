import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
  const { id }  = useParams()  
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const db = getFirestore()

    const itemRef = doc(db, "items", id) 
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
  }, [id])

    return (
      <div>
      <div className="d-flex justify-content-center align-self-center flex-wrap p-5">
        {loading && <Spinner   animation="grow" />}
      </div>
      <div>
        {item && <ItemDetail item={item} />}
      </div>
      </div>
  )
} 

export default ItemDetailContainer