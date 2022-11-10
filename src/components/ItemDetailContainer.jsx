import React, { useEffect, useState } from 'react'
// import { products } from './mock/products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../FirebaseConfig";
import { getDoc, doc, collection } from 'firebase/firestore';
import { PropagateLoader } from 'react-spinners';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();
    // const idProdNumber = Number(idProd);

    useEffect(() =>{
        const itemCollection = collection(db, "productos")
        const ref = doc(itemCollection, idProd)
        getDoc(ref)
        .then((respuesta)=>{
          setItem({
            id: respuesta.id,
            ...respuesta.data()
          })
          setLoading(false)
        })
        // .catch((error)=>{
        //     console.log(error);
        // })

        return () =>{
            setLoading(false)
        }
    },[idProd])


  return (
    loading
    ? <PropagateLoader />
    : <ItemDetail item={item} />
  )
}

export default ItemDetailContainer

// const obtProduct = new Promise((resolve, reject) => {
//     const unicProduct = products.find((producto) => producto.id === idProdNumber);
//     setTimeout(()=>{
//         resolve(unicProduct)
//     },1000)
// })
// obtProduct
// .then((dato) =>{
//     setItem(dato)
// })
// .catch((error) =>{
//     console.log(error);
// })