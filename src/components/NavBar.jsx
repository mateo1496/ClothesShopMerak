import React from 'react'
import Logo from "../LogoProyecto.png"
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <header>
        <nav className='navHeader'>
            <ul  className='categoria' >
              <Link to="category/buzos" className='subCategoria'>Buzos</Link>
              <Link to="category/camisas" className='subCategoria'>Camisas</Link>
              <Link to="/"><img className='logo'  src={Logo} alt="logo" /></Link>  
              <Link to="category/camperas" className='subCategoria'>Camperas</Link>
              <Link to="category/pantalones" className='subCategoria'>Pantalones</Link>
              <Link className='cart' to="/cart"><CartWidget/></Link>
            </ul> 
    </nav> 
    </header>
    
  )
}

export default NavBar