import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../FirebaseConfig";


const Form = ({cart, precioTotal, deleteAll, handleId}) => {
    const  [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [talle, setTalle] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(nombre, apellido, telefono, email, talle);
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setTalle("");

        const order = {
          buyer: {nombre: nombre, apellido: apellido, telefono: telefono, email: email, talle: talle},
          items: cart,
          total: precioTotal(),
          //FECHA DE EMISION DE LA COMPRA
          date: serverTimestamp(),
        };

        const orderCollection = collection(db, "ordenes")
        addDoc(orderCollection, order)
        .then((respuesta) => {
          handleId(respuesta.id);
          deleteAll();
          console.log(respuesta.id);
        })
    }

    const handleNombre = (e) =>{
        setNombre(e.target.value);
    }
    const handleApellido = (e) =>{
        setApellido(e.target.value);
    }
    const handleTelefono = (e) =>{
        setTelefono(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleTalle = (e) =>{
        setTalle(e.target.value);
    }
  return (
    <div>
      <form action="" className='form' onSubmit={handleSubmit}>
        <input className='formInput' type="text" placeholder='Ingrese Nombre' name="nombre" value={nombre} onChange={handleNombre}></input>
        <input className='formInput' type="text" placeholder='Ingrese Apellido' name="apellido" value={apellido} onChange={handleApellido}></input>
        <input className='formInput' type="number" placeholder='Ingrese Telefono' name="telefono" value={telefono} onChange={handleTelefono}></input>
        <input className='formInput' type="email" placeholder='Ingrese Email' name="email" value={email} onChange={handleEmail}></input>
        <select className='formInput' value={talle} onChange={handleTalle}>
            <option value="Small">S</option>
            <option value="Medium">M</option>
            <option value="Large">L</option>
            <option value="ExtraLarge">XL</option>
        </select>
        <button className='formInput'>Enviar</button>
      </form>  
    </div>
  )
}

export default Form