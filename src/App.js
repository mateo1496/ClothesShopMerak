import './App.css';
import "./estilos.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './components/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
           <BrowserRouter>
              <NavBar />
                 <Routes>
                     <Route path="/" element={<ItemListContainer titulo="Los mejores estilos para ellos" parrafo="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, deserunt quisquam. Ut tempore vero, cupiditate dolorum enim repudiandae, illo voluptatibus nihil ab, obcaecati ipsa amet? Commodi tenetur aperiam modi dolorum." />} />
                     <Route path="/category/:categoryName" element={<ItemListContainer titulo="Los mejores estilos para ellos" parrafo="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, deserunt quisquam. Ut tempore vero, cupiditate dolorum enim repudiandae, illo voluptatibus nihil ab, obcaecati ipsa amet? Commodi tenetur aperiam modi dolorum."e />} />
                     <Route path='/item/:idProd' element={<ItemDetailContainer />} />
                     <Route path="/cart" element={<Cart />} />
                     <Route path="/Checkout" element={<Checkout />} />
                </Routes >
              <Footer />
            </BrowserRouter>
    </CartProvider>
    
   
  );
}

export default App;

    
     