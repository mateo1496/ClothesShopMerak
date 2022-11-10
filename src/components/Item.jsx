import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
    <div key={item.id}>
        <div className='carta'>
            <h2 className='text-center name'>{item.name}</h2>
            <h3 className='text-center price'>$ {item.price}</h3>
            <img className='text-center image' src={item.img} />
            <Link to={`/item/${item.id}`}>
                <button className='boton text-center mb-2'>Ver Producto</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Item