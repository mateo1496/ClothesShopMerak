import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'

const Cart = () => {
  const {cart, deleteAll, deleteProduct, precioTotal} = useContext(CartContext);

  // if (cart.length === 0) {
  //     return <h2 className='nothing'> <Link to="/"> No tenes productos en el carrito, click para ir a la pagina principal</Link></h2>
  // }
  if(cart.length === 0){
    return <h2 className='titleCart cobertor'>Usted no compro ningun producto, <Link className='linkCart' to="/"><b>Click Aquí</b></Link> para ir a la pagina principal y seleccionar uno</h2>;
  } 


  return (
    <div>
      {
        cart.map((producto) =>(
          <div key={producto.id} className='cartaCart'>
              <h2 className='cartName text-center'>{producto.name}</h2>
              <h3 className='cartPrice text-center'>$ {producto.price}</h3>
              <h3 className='cartStock text-center'>Stock: {producto.stock}</h3>
              <img className='cartImg' src={producto.img} style={{width: "250px", height: "250px"}} />  
              <h3 className='cartq'>Cantidad: <span className='badge bg-dark'>{producto.cant}</span></h3>
              <h3 className='cartSub'>SubTotal: <span className='badge bg-dark'>${producto.price * producto.cant}</span></h3>
              <button className='deleteProduct' onClick={()=>deleteProduct(producto.id)}>Borrar Producto</button>
          </div>
      ))
      }
      <>
        <div className='fondo'>
             <h4 className='total'>Total: <span className='badge bg-dark'>{precioTotal()}</span></h4>
             <button className='deleteAll' onClick={deleteAll}>BORRAR TODO</button>
             <Link to="/Checkout"><button className='deleteAll'>Confirmar Compra</button></Link>
        </div>
      </>
      
    </div>
  )
}

export default Cart