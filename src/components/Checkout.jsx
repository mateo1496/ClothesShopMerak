import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import Form from './Form';
import { CartContext } from "./CartContext";


const Checkout = () => {
    const {cart, deleteAll, precioTotal} = useContext(CartContext);
    const [compra, setCompra] = useState("");

    const handleId = (id) =>{
        setCompra(id);
    }

    if (compra) {
        return <h2>Felicitaciones por su compra, su numero de pedido es N° <h4>{compra}</h4></h2>
    }


  return (
    <div>
        <Form cart={cart} deleteAll={deleteAll} precioTotal={precioTotal} handleId={handleId} />
    </div>
  )
}

export default Checkout