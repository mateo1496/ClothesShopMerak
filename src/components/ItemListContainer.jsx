import React, { useEffect, useState } from 'react'
// import { products } from "../components/mock/products";
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const ItemListContainer = (props) => {
    const [ items, setItems ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { categoryName } = useParams();

    useEffect(() =>{
        //COLLECTION LLEVA DOS VALORES, LA BASE DE DATOS Y EL NOMBRE DE LA COLECCION.
        const itemCollection = collection(db, "productos")
        //TRES PARAMETROS DEL WHERE, PRIMERO LO QUE QUIERO COMPARAR, EL SEGUNDO QUE OPERACION, EL TERCERO EL NOMBRE DE LA CATEGORIA
        //GETDOCS DEVUELVE UNA PROMESA, LE PASAMOS DE REFERENCIA NUESTRA COLECCION
        getDocs(!categoryName ? itemCollection : query(itemCollection, where("category", "==", categoryName)))
        .then((respuesta) =>{
            const products = respuesta.docs.map((producto) =>{
                return {
                    //PARA ACCEDER A LOS CAMPOS DE MI COLLECION
                    //CON EL .DATE CREO MI PROPIO ARRAY DE PRODUCTO
                    //CON EL SPREED METEMOS EL ID DENTRO DEL PRODUCTO
                    id: producto.id,
                    ...producto.data()
                }
            })
            // console.log(respuesta.docs);
            //SETEO MI ESTADO
            setItems(products);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
        })

        return()=>{
            setLoading(true);
        }
    },[categoryName])


    // console.log(items);
  return (
    <div>
        {
            loading
            ?  <PropagateLoader />
            : <>
                 <h1 className='titulo'>{props.titulo}</h1>
                 <ItemList items={items} />
              </>
        }
    </div>
  )
}

export default ItemListContainer

// const obtProductos = new Promise((resolve, reject) => {
//     const prodFilter = products.filter((producto) => producto.category === categoryName)
//     setTimeout(() =>{
//           resolve(categoryName ? prodFilter : products)
//     },0)
// })

// obtProductos
// .then((datos) =>{
//     setItems(datos);
//     setLoading(false);
// })
// .catch((error) => console.log(error));

// return () =>{
//     setLoading(true);
// }