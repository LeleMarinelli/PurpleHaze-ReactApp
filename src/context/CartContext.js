import  { createContext, useState } from "react";

export const CartContext = createContext()

// custom

export const CartProvider = ({children}) => {

      const [carrito, setCarrito] = useState([]) 

      const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item])
      }

      const sacarDelCarrito = (id) => {
        setCarrito( carrito.filter(productos => productos.id !== id ) )
      }

      const vaciarCarrito = () => {
        setCarrito([])
      }
      
      const totalCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
      }

      const totalCompra = () => {
        return carrito.reduce((acc,prod) => acc + prod.precio * prod.counter, 0)
      }

      const isInCart = (id) => {
      return carrito.some(prod => prod.id === id)
      }


    return(
        
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            sacarDelCarrito,
            vaciarCarrito,
            isInCart,
            totalCantidad,
            totalCompra
        }}>
            
            {children}

        </CartContext.Provider>

    )
}