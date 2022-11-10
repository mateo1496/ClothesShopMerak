import React from 'react'
import { useContext } from 'react'
import { RiShoppingBag3Fill } from "react-icons/ri"
import { CartContext } from './CartContext'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";



const CartWidget = () => {
  const { unidadesTotal } = useContext(CartContext)
  return (
        <Link to="/cart">
            <RiShoppingBag3Fill className='widget' />
            <span className='badge bg-dark m-lg-3 mb-9'>{unidadesTotal()}</span>
        </Link>
  )
}

export default CartWidget