import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ItemCount = ({stock,initial = 1,onAdd}) => {
  const [count, setCount] = useState(initial)

  useEffect(() =>{
    setCount(initial)
  },[initial]);

  const sumar = () =>{
    if (count < stock) {
        setCount(count + 1);
    } else {
        alert("No puede seguir comprando este producto");
    }
  }

  const restar = () =>{
    if (count > initial) {
        setCount(count - 1)
    } else {
        alert("No hay mas stock");
    }
  }



  return (
    <div className='count'>
        <button className='botonAdd' onClick={sumar}>+</button>
        <button className='botonRes' onClick={restar}>-</button>
        <h4 className='contador'>Count: {count}</h4>
        <button className='onAdd' onClick={()=>onAdd(count)}>Comprar Producto</button>
    </div>
  )
}

export default ItemCount