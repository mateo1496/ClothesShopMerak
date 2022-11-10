import { createContext, useState } from "react";

//CREO EL CONTEXTO
export const CartContext = createContext();

const CartProvider = (props) =>{
    const [cart, setCart] = useState([]);

    //FUNCION PARA AGREGARLE CANTIDAD AL PRODUCTO
    const addToCart = (item, cant) =>{
        // console.log({...item, cantidad});
        if (isInCart(item.id)) {
            //SI EL PRODUCTO YA ESTA EN EL ESTADO, LE SUMO LA CANTIDAD
            sumarCantidad(item, cant)
        } else {
             //SETEO EL ESTADO Y LE AGREGO LA CANTIDAD AL PRODUCTO, ACA CANTIDAD PASA A SER UNA PROPIEDAD DEL PRODUCTO
            setCart([...cart, {...item, cant}]);
        }
    }

    //FUNCION PARA VERIFICAR SI EL PRODUCTO ESTA EN EL CARRITO
    //DEVUELVE TRUE O FALSE, SI EL PRODUCTO ESTA O NO EN EL CARRITO
    const isInCart = (id) =>{
        return cart.some((producto) => producto.id === id);
    }

    //FUNCION PARA SUMARLE UNA CANTIDAD AL PRODUCTO QUE YA ESTA EN EL CARRITO
    const sumarCantidad = (item, cant) =>{
        const carritoActualizado = cart.map((producto) =>{
            //SI EL PRODUCTO SELECCIONADO YA ESTA HAGO ESTO
            if (producto.id === item.id) {
                const productoActualizado = {
                    ...producto,
                    cant: cant,
                };
                return productoActualizado;
            } else {
                return producto;
            }
        })
        setCart(carritoActualizado);
    }

    console.log(cart);

    //FUNCION PARA ELMINAR TODOS LOS PRODUCTOS
    const deleteAll = () =>{
        setCart([]);
    }

    //FUNCION PARA BORRAR UN PRODUCTO DEL CARRITO
    //LLEGA COMO ARGUMENTO EL ID QUE VIENE DEL BUTTON DE ELIMINAR PRODUCTO DEL CART
    const deleteProduct = (id) =>{
        const carritoFiltrado = cart.filter((producto) => producto.id !== id);
        setCart(carritoFiltrado);
    }

    //CALCULAR LA CANTIDAD DE UN PRODUCTO
    const totalCantidadProducto = (id) =>{
        const product = cart.find((producto) => producto.id === id);
        return product?.cant;
    }

    //CALCULAR PRECIO TOTAL
    const precioTotal = () =>{
        let total = 0;
        cart.forEach((producto)=>{
            total += producto.price * producto.cant;
        })
        return total;
    }

    //CALCULAR TOTAL DE UNIDADES
    const unidadesTotal = () =>{
        let total = 0;
        cart.forEach((producto)=>{
            total += producto.cant;
        })
        return total;
    }


    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteProduct, totalCantidadProducto, precioTotal, unidadesTotal}}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;