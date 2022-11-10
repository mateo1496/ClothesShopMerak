import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0);
  const {cart, addToCart, totalCantidadProducto} = useContext(CartContext);

  const onAdd = (cant) =>{
    setCantidad(cant);
    //PARA SETEAR MI ESTADO, TENGO QUE PASARLE AL CONTEXTO, EL PRODUCTO + SU CANTIDAD
    addToCart(item, cant)
  }
  console.log(cart);

  const totalCantidad = totalCantidadProducto(item.id)

  return (
    <div>
        <div className='cartaDetail'>
            <h2 className='nameDetail text-center'>{item.name}</h2>
            <h3 className='priceDetail  text-center'>$ {item.price}</h3>
            <h3 className='stockDetail text-center'>Stock: {item.stock}</h3>
            <h4 className='description text-center'>{item.description}</h4>
            <img className='imgDetail' src={item.img} style={{width: "200px", height: "200px"}} />  
            {
              cantidad === 0
              ? <ItemCount stock={item.stock} initial={totalCantidad} onAdd={onAdd} />
              : <Link to="/cart" className='linkCarrito'>Ir al carrito</Link>
            } 
        </div>
    </div>
  )
}

export default ItemDetail